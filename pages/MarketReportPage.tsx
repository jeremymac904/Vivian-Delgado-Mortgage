import React from 'react';
import Seo from '../components/Seo';
import { useLocale } from '../i18n/locale';

const MARKET_REPORT_URL = 'https://viviandelgado.exprealty.com/market-report.php';

const MarketReportPage: React.FC = () => {
  const locale = useLocale();
  const isEs = locale === 'es';
  const canonicalPath = isEs ? '/informe-del-mercado' : '/market-report';

  return (
    <section className="py-16">
      <Seo
        title={isEs ? 'Informe del mercado | Vivian Delgado Mortgage' : 'Market Report | Vivian Delgado Mortgage'}
        description={
          isEs
            ? 'Obtén un informe gratuito del mercado con precio promedio, reducciones de precio, nuevas propiedades y más.'
            : 'Get a free market report that outlines average listing price, price reductions, new listings, and more.'
        }
        canonical={`/${locale}${canonicalPath}`}
        locale={locale}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="noir-panel rounded-2xl p-8 md:p-12 text-center">
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">
            {isEs ? 'Informe del mercado' : 'Market Report'}
          </h1>
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-5">
            {isEs ? 'Mantente al día con tu mercado inmobiliario local' : 'Stay on top of your local real estate market'}
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            {isEs
              ? 'Obtén un informe gratuito del mercado con precio promedio, reducciones de precio, nuevas propiedades y más.'
              : 'Get a free market report that outlines average listing price, price reductions, new listings, and more.'}
          </p>
          <a
            href={MARKET_REPORT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-metal btn-metal--primary"
          >
            {isEs ? 'Obtener informe gratis' : 'Get Free Report'}
          </a>
        </div>
      </div>
    </section>
  );
};

export default MarketReportPage;
