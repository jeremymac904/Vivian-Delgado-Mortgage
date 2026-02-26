import React from "react";
import { useParams } from "react-router-dom";
import { useLocale } from "../i18n/locale";
import Seo from "../components/Seo";
import LocaleLink from "../components/LocaleLink";
import { getPostBySlug } from "@/lib/blog";

const formatDate = (date: string, locale: "en" | "es") =>
  new Date(`${date}T12:00:00Z`).toLocaleDateString(locale === "es" ? "es-419" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

const BlogPostPage: React.FC = () => {
  const locale = useLocale();
  const isEs = locale === "es";
  const { slug = "" } = useParams();
  const post = getPostBySlug(locale, slug);

  if (!post) {
    return (
      <section className="py-16">
        <Seo
          title={isEs ? "Artículo no encontrado | Legends Mortgage Team" : "Post Not Found | Legends Mortgage Team"}
          description={isEs ? "El artículo solicitado no existe." : "The requested post does not exist."}
          canonical={`/${locale}/blog/${slug}`}
          locale={locale}
        />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="noir-panel rounded-xl p-8">
            <h1 className="text-3xl font-serif font-bold mb-4">{isEs ? "Artículo no encontrado" : "Post not found"}</h1>
            <p className="text-gray-300 mb-6">
              {isEs
                ? "Revise el enlace o vuelva al blog para ver artículos disponibles."
                : "Check the link or return to the blog to view available posts."}
            </p>
            <LocaleLink to="/blog" className="btn-metal">
              {isEs ? "Volver al blog" : "Back to blog"}
            </LocaleLink>
          </div>
        </div>
      </section>
    );
  }

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: isEs ? "es-419" : "en-US",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `/${locale}/blog/${post.slug}`
    },
    author: {
      "@type": "Organization",
      name: "The Legends Mortgage Team"
    },
    publisher: {
      "@type": "Organization",
      name: "The Legends Mortgage Team"
    }
  };

  return (
    <section className="py-16">
      <Seo
        title={`${post.title} | Legends Mortgage Team`}
        description={post.description}
        canonical={`/${locale}/blog/${post.slug}`}
        locale={locale}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <LocaleLink to="/blog" className="micro-label inline-block mb-6 hover:text-[#F36F20] transition-colors">
          {isEs ? "Volver al blog" : "Back to blog"}
        </LocaleLink>

        <article className="noir-panel rounded-2xl p-6 md:p-10">
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-5">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-3 mb-6 text-sm text-gray-300">
            <span>{formatDate(post.date, locale)}</span>
            <span className="text-white/40">•</span>
            <span>{isEs ? `${post.readingTimeMinutes} min de lectura` : `${post.readingTimeMinutes} min read`}</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <span key={tag} className="text-xs px-2.5 py-1 rounded-full border border-white/20 text-gray-300">
                {tag}
              </span>
            ))}
          </div>

          {post.toc.length > 0 && (
            <aside className="noir-panel rounded-lg p-4 mb-8">
              <h2 className="text-xl font-serif font-bold mb-3">{isEs ? "Contenido" : "Table of Contents"}</h2>
              <ul className="space-y-2">
                {post.toc.map((item) => (
                  <li key={item.id} className={item.level === 3 ? "pl-4" : ""}>
                    <a href={`#${item.id}`} className="text-sm text-gray-300 hover:text-[#F36F20] transition-colors">
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </aside>
          )}

          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </article>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }} />
    </section>
  );
};

export default BlogPostPage;
