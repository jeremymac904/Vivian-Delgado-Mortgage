import React from 'react';
import Hero from '../components/Hero';
import LoanOptions from '../components/LoanOptions';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import Seo from '../components/Seo';
import { useLocale } from '../i18n/locale';
import LocaleLink from '../components/LocaleLink';
import { getAllPosts } from '@/lib/blog';
import { COMPANY_INFO, SITE_LINKS } from '../constants';

const HomePage: React.FC = () => {
  const locale = useLocale();
  const isEs = locale === 'es';
  const openHousesPath = isEs ? '/casas-abiertas' : '/open-houses';
  const homeValuePath = isEs ? '/valor-de-casa' : '/home-value';
  const marketReportPath = isEs ? '/informe-del-mercado' : '/market-report';
  const latestPosts = getAllPosts(locale).slice(0, 3);
  const formatDate = (date: string) =>
    new Date(`${date}T12:00:00Z`).toLocaleDateString(isEs ? 'es-419' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

  const seo = locale === 'es'
    ? {
        title: 'Vivian Delgado Mortgage | Hipotecas claras y directas',
        description: 'Asesoría hipotecaria bilingüe con guía clara, comunicación constante y próximos pasos definidos.'
      }
    : {
        title: 'Vivian Delgado Mortgage | Built on Trust . Backed by Results',
        description: 'Bilingual mortgage guidance with clear options, honest communication, and efficient execution.'
      };
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: COMPANY_INFO.leader,
    legalName: COMPANY_INFO.legalName,
    jobTitle: COMPANY_INFO.role,
    telephone: COMPANY_INFO.phone,
    email: COMPANY_INFO.email,
    areaServed: "Florida",
    worksFor: {
      "@type": "Organization",
      name: "Loan Factory",
      identifier: `NMLS ${COMPANY_INFO.companyNmls}`
    },
    identifier: `NMLS ${COMPANY_INFO.nmls}`
  };

  return (
    <>
      <Seo
        title={seo.title}
        description={seo.description}
        canonical={`/${locale}`}
        locale={locale}
      />
      <Hero />
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="noir-panel rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              {isEs ? 'Mantente al día con tu mercado inmobiliario local' : 'Stay on top of your local real estate market'}
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              {isEs
                ? 'Obtén un informe gratuito del mercado con precio promedio, reducciones de precio, nuevas propiedades y más.'
                : 'Get a free market report that outlines average listing price, price reductions, new listings, and more.'}
            </p>
            <LocaleLink to={marketReportPath} className="btn-metal btn-metal--primary">
              {isEs ? 'Obtener informe gratis' : 'Get Free Report'}
            </LocaleLink>
          </div>
        </div>
      </section>
      <LoanOptions />
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="noir-panel rounded-2xl p-8 md:p-10">
              <h2 className="text-3xl font-serif font-bold mb-4">
                {isEs ? 'Casas Abiertas' : 'Open Houses'}
              </h2>
              <p className="text-gray-300 mb-8">
                {isEs
                  ? 'Ver casas abiertas activas y próximos eventos en el área.'
                  : 'View active open houses and upcoming events in the area.'}
              </p>
              <LocaleLink to={openHousesPath} className="btn-metal btn-metal--primary">
                {isEs ? 'Ver casas' : 'View Homes'}
              </LocaleLink>
            </div>

            <div className="noir-panel rounded-2xl p-8 md:p-10">
              <h2 className="text-3xl font-serif font-bold mb-4">
                {isEs ? '¿Cuánto vale tu casa?' : 'What’s Your Home Worth?'}
              </h2>
              <p className="text-gray-300 mb-8">
                {isEs
                  ? 'Obtén una estimación instantánea del valor de tu propiedad y datos del mercado local.'
                  : 'Get an instant property valuation and local market insights.'}
              </p>
              <LocaleLink to={homeValuePath} className="btn-metal btn-metal--primary">
                {isEs ? 'Obtén el valor de tu casa' : 'Get Your Home Value'}
              </LocaleLink>
            </div>
          </div>
        </div>
      </section>
      <WhyChooseUs />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            {isEs ? 'Lo último del blog' : 'Latest from the Blog'}
          </h2>
          <p className="text-gray-300 mb-10">
            {isEs
              ? 'Análisis claros sobre compra, refinanciamiento y estrategia hipotecaria.'
              : 'Clear insights on buying, refinancing, and mortgage strategy.'}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestPosts.map((post) => (
              <article key={post.slug} className="noir-panel rounded-xl p-6 flex flex-col">
                <p className="micro-label mb-3">{formatDate(post.date)}</p>
                <h3 className="text-xl font-serif font-bold mb-3">
                  <LocaleLink to={`/blog/${post.slug}`} className="hover:text-[#F36F20] transition-colors">
                    {post.title}
                  </LocaleLink>
                </h3>
                <p className="text-gray-300 mb-4">{post.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span key={`${post.slug}-${tag}`} className="text-xs px-2.5 py-1 rounded-full border border-white/20 text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <LocaleLink to={`/blog/${post.slug}`} className="btn-metal mt-auto">
                  {isEs ? 'Leer artículo' : 'Read article'}
                </LocaleLink>
              </article>
            ))}
          </div>

          <div className="mt-8">
            <LocaleLink to="/blog" className="btn-metal btn-metal--primary">
              {isEs ? 'Ver todas las publicaciones' : 'View all posts'}
            </LocaleLink>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="noir-panel rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              {isEs ? 'Únete a mi equipo' : 'Join My Team'}
            </h2>
            <p className="text-gray-300 mb-8 max-w-3xl">
              {isEs
                ? 'Si usted es un originador motivado y quiere mejores sistemas y soporte real para crecer, conversemos.'
                : 'If you are a motivated loan officer who wants better systems and stronger support, let’s talk.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={SITE_LINKS.teamSiteUrl} target="_blank" rel="noopener noreferrer" className="btn-metal btn-metal--primary text-center">
                {isEs ? 'Ir al sitio del equipo' : 'Visit Team Website'}
              </a>
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
    </>
  );
};

export default HomePage;
