import React from "react";
import { useLocale } from "../i18n/locale";
import Seo from "../components/Seo";
import LocaleLink from "../components/LocaleLink";
import { getAllPosts } from "@/lib/blog";

const formatDate = (date: string, locale: "en" | "es") =>
  new Date(`${date}T12:00:00Z`).toLocaleDateString(locale === "es" ? "es-419" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

const BlogIndexPage: React.FC = () => {
  const locale = useLocale();
  const isEs = locale === "es";
  const posts = getAllPosts(locale);
  const featuredPost = posts[0] || null;
  const mainPosts = featuredPost ? posts.filter((post) => post.slug !== featuredPost.slug) : posts;

  return (
    <section className="py-16">
      <Seo
        title="Mortgage Blog | Legends Mortgage Team"
        description="Mortgage tips, loan programs, and real world guidance."
        canonical={`/${locale}/blog`}
        locale={locale}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">
          {isEs ? "Blog hipotecario" : "Mortgage Blog"}
        </h1>
        <p className="text-lg text-gray-300 mb-10">
          {isEs
            ? "Guías claras para compradores serios, inversionistas y familias que quieren decisiones con números reales."
            : "Clear guidance for serious buyers, investors, and families making mortgage decisions with real numbers."}
        </p>

        {featuredPost && (
          <article className="noir-panel rounded-xl p-6 mb-8">
            <p className="micro-label mb-2">{isEs ? "Destacado" : "Featured"}</p>
            <p className="micro-label mb-3">{formatDate(featuredPost.date, locale)}</p>
            <h2 className="text-3xl font-serif font-bold mb-3">
              <LocaleLink to={`/blog/${featuredPost.slug}`} className="hover:text-[#F36F20] transition-colors">
                {featuredPost.title}
              </LocaleLink>
            </h2>
            <p className="text-gray-300 mb-4">{featuredPost.description}</p>
            <div className="flex flex-wrap gap-2 mb-5">
              {featuredPost.tags.map((tag) => (
                <span key={`featured-${tag}`} className="text-xs px-2.5 py-1 rounded-full border border-white/20 text-gray-300">
                  {tag}
                </span>
              ))}
            </div>
            <LocaleLink to={`/blog/${featuredPost.slug}`} className="btn-metal">
              {isEs ? "Leer artículo destacado" : "Read featured article"}
            </LocaleLink>
          </article>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mainPosts.map((post) => (
            <article key={`post-${post.slug}`} className="noir-panel rounded-xl p-6">
              <p className="micro-label mb-3">{formatDate(post.date, locale)}</p>
              <h2 className="text-2xl font-serif font-bold mb-3">
                <LocaleLink to={`/blog/${post.slug}`} className="hover:text-[#F36F20] transition-colors">
                  {post.title}
                </LocaleLink>
              </h2>
              <p className="text-gray-300 mb-4">{post.description}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {post.tags.map((tag) => (
                  <span key={`${post.slug}-${tag}`} className="text-xs px-2.5 py-1 rounded-full border border-white/20 text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>
              <LocaleLink to={`/blog/${post.slug}`} className="btn-metal">
                {isEs ? "Leer artículo" : "Read article"}
              </LocaleLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogIndexPage;
