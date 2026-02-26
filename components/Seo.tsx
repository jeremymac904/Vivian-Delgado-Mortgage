import { useEffect } from 'react';

type SeoProps = {
  title: string;
  description: string;
  canonical?: string;
  locale?: "en" | "es";
};

const Seo = ({ title, description, canonical, locale = "en" }: SeoProps) => {
  useEffect(() => {
    const rawBase =
      (import.meta as any)?.env?.SITE_URL ||
      (import.meta as any)?.env?.VITE_SITE_URL ||
      (typeof process !== "undefined" ? (process as any).env?.SITE_URL : undefined);
    const base = typeof rawBase === "string" ? rawBase.replace(/\/+$/, "") : "";
    const toAbsolute = (path: string) => {
      if (!base) return path;
      const cleanPath = path.startsWith("/") ? path : `/${path}`;
      return `${base}${cleanPath}`;
    };

    document.title = title;

    const upsertMeta = (selector: string, attr: 'name' | 'property', key: string, value: string) => {
      let meta = document.querySelector(selector);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, key);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', value);
    };

    let tag = document.querySelector('meta[name="description"]');
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute('name', 'description');
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', description);
    upsertMeta('meta[property="og:title"]', 'property', 'og:title', title);
    upsertMeta('meta[property="og:description"]', 'property', 'og:description', description);
    upsertMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    upsertMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    if (canonical) {
      let linkTag = document.querySelector('link[rel="canonical"]');
      if (!linkTag) {
        linkTag = document.createElement('link');
        linkTag.setAttribute('rel', 'canonical');
        document.head.appendChild(linkTag);
      }
      linkTag.setAttribute('href', toAbsolute(canonical));
    }

    const ensureHreflang = (hreflang: string, href: string) => {
      let link = document.querySelector(`link[rel="alternate"][hreflang="${hreflang}"]`);
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "alternate");
      link.setAttribute("hreflang", hreflang);
      document.head.appendChild(link);
      }
      link.setAttribute("href", toAbsolute(href));
    };

    if (canonical) {
      const enHref = canonical.startsWith("/es") ? canonical.replace("/es", "/en") : canonical.startsWith("/en") ? canonical : `/en${canonical}`;
      const esHref = canonical.startsWith("/en") ? canonical.replace("/en", "/es") : canonical.startsWith("/es") ? canonical : `/es${canonical}`;
      ensureHreflang("en", enHref);
      ensureHreflang("es-419", esHref);
      ensureHreflang("x-default", enHref);
    }
  }, [title, description, canonical, locale]);

  return null;
};

export default Seo;
