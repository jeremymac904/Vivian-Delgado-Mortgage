import React from 'react';
import Seo from '../components/Seo';
import { useLocale } from '../i18n/locale';

const HOME_VALUATION_EMBED_URL = 'https://viviandelgado.exprealty.com/sellembed.php';

const HomeValuationPage: React.FC = () => {
  const locale = useLocale();
  const isEs = locale === 'es';
  const canonicalPath = isEs ? '/valor-de-casa' : '/home-value';

  return (
    <section className="py-16">
      <Seo
        title={isEs ? 'Valor de casa | Vivian Delgado Mortgage' : 'Home Value | Vivian Delgado Mortgage'}
        description={
          isEs
            ? 'Obtén una estimación instantánea del valor de tu propiedad y datos del mercado local.'
            : 'Get an instant property valuation and local market insights.'
        }
        canonical={`/${locale}${canonicalPath}`}
        locale={locale}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">
            {isEs ? '¿Cuánto vale tu casa?' : 'What’s Your Home Worth?'}
          </h1>
          <p className="text-lg text-gray-300">
            {isEs
              ? 'Obtén una estimación instantánea del valor de tu propiedad y datos del mercado local.'
              : 'Get an instant property valuation and local market insights.'}
          </p>
        </div>

        <div className="idx-valuation-container noir-panel rounded-xl p-2 sm:p-3 lg:p-4">
          <iframe
            className="idx-valuation-frame"
            src={HOME_VALUATION_EMBED_URL}
            title="Home Valuation Tool"
            loading="lazy"
            allowtransparency="true"
            sandbox="allow-forms allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"
            allow="geolocation; clipboard-write; payment; fullscreen"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeValuationPage;
