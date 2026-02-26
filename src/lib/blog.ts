export type BlogLocale = "en" | "es";

type BlogFrontmatter = {
  title: string;
  description: string;
  date: string;
  slug: string;
  tags: string[];
};

export type TocItem = {
  level: 2 | 3;
  text: string;
  id: string;
};

export type BlogPost = BlogFrontmatter & {
  body: string;
  locale: BlogLocale;
  readingTimeMinutes: number;
  html: string;
  toc: TocItem[];
};

const enModules = import.meta.glob("/content/blog/en/*.md", { query: "?raw", import: "default", eager: true });
const esModules = import.meta.glob("/content/blog/es/*.md", { query: "?raw", import: "default", eager: true });

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const safeUrl = (url: string) => {
  const trimmed = url.trim();
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return "#";
};

const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

const parseYamlValue = (rawValue: string) => {
  const value = rawValue.trim();
  if (value.startsWith("[") && value.endsWith("]")) {
    return value
      .slice(1, -1)
      .split(",")
      .map((item) => item.trim().replace(/^["']|["']$/g, ""))
      .filter(Boolean);
  }
  return value.replace(/^["']|["']$/g, "");
};

const parseFrontmatter = (source: string) => {
  if (!source.startsWith("---")) {
    return {
      frontmatter: {} as Partial<BlogFrontmatter>,
      body: source.trim()
    };
  }

  const endMarker = source.indexOf("\n---", 3);
  if (endMarker < 0) {
    return {
      frontmatter: {} as Partial<BlogFrontmatter>,
      body: source.trim()
    };
  }

  const rawFrontmatter = source.slice(3, endMarker).trim();
  const body = source.slice(endMarker + 4).trim();
  const frontmatter: Partial<BlogFrontmatter> = {};

  rawFrontmatter.split("\n").forEach((line) => {
    const separatorIndex = line.indexOf(":");
    if (separatorIndex < 0) return;
    const key = line.slice(0, separatorIndex).trim() as keyof BlogFrontmatter;
    const value = parseYamlValue(line.slice(separatorIndex + 1));
    (frontmatter as Record<string, unknown>)[key] = value;
  });

  return { frontmatter, body };
};

const inlineMarkdown = (input: string) => {
  let output = escapeHtml(input);

  output = output.replace(/`([^`]+)`/g, "<code>$1</code>");
  output = output.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  output = output.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  output = output.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label: string, url: string) => {
    const href = safeUrl(url);
    return `<a href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`;
  });

  return output;
};

const markdownToHtml = (markdown: string) => {
  const toc: TocItem[] = [];
  const lines = markdown.split(/\r?\n/);
  const htmlParts: string[] = [];
  let inList: "ul" | "ol" | null = null;

  const closeList = () => {
    if (inList) {
      htmlParts.push(`</${inList}>`);
      inList = null;
    }
  };

  lines.forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed) {
      closeList();
      return;
    }

    const headingMatch = trimmed.match(/^(#{1,6})\s+(.+)$/);
    if (headingMatch) {
      closeList();
      const level = headingMatch[1].length;
      const text = inlineMarkdown(headingMatch[2].trim());
      const plainText = headingMatch[2].trim();
      const id = slugify(plainText);
      if (level === 2 || level === 3) {
        toc.push({ level, text: plainText, id });
      }
      htmlParts.push(`<h${level} id="${id}">${text}</h${level}>`);
      return;
    }

    if (/^[-*]\s+/.test(trimmed)) {
      const content = inlineMarkdown(trimmed.replace(/^[-*]\s+/, ""));
      if (inList !== "ul") {
        closeList();
        inList = "ul";
        htmlParts.push("<ul>");
      }
      htmlParts.push(`<li>${content}</li>`);
      return;
    }

    if (/^\d+\.\s+/.test(trimmed)) {
      const content = inlineMarkdown(trimmed.replace(/^\d+\.\s+/, ""));
      if (inList !== "ol") {
        closeList();
        inList = "ol";
        htmlParts.push("<ol>");
      }
      htmlParts.push(`<li>${content}</li>`);
      return;
    }

    closeList();
    htmlParts.push(`<p>${inlineMarkdown(trimmed)}</p>`);
  });

  closeList();
  return { html: htmlParts.join("\n"), toc };
};

const calculateReadingTime = (markdown: string) => {
  const wordCount = markdown.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(wordCount / 200));
};

const normalizePost = (locale: BlogLocale, filePath: string, rawContent: string): BlogPost | null => {
  const { frontmatter, body } = parseFrontmatter(rawContent);
  if (!frontmatter.title || !frontmatter.description || !frontmatter.date) return null;
  const slug = frontmatter.slug || filePath.split("/").pop()?.replace(".md", "") || "";
  if (!slug) return null;
  const { html, toc } = markdownToHtml(body);

  return {
    title: frontmatter.title,
    description: frontmatter.description,
    date: frontmatter.date,
    slug,
    tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : [],
    body,
    locale,
    readingTimeMinutes: calculateReadingTime(body),
    html,
    toc
  };
};

const loadPostsForLocale = (locale: BlogLocale) => {
  const source = locale === "en" ? enModules : esModules;
  const posts = Object.entries(source)
    .map(([filePath, raw]) => normalizePost(locale, filePath, String(raw)))
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
};

const cache = {
  en: loadPostsForLocale("en"),
  es: loadPostsForLocale("es")
};

export const getAllPosts = (locale: BlogLocale) => cache[locale];

export const getPostBySlug = (locale: BlogLocale, slug: string) =>
  cache[locale].find((post) => post.slug === slug) || null;

