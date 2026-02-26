import React from 'react';
import Seo from '../components/Seo';
import LocaleLink from '../components/LocaleLink';
import { useLocale } from '../i18n/locale';

const OPEN_HOUSES_QUERY = '?quick=1&types%5B%5D=1&options%5B%5D=openhouses&rtype=grid&sortby=listings.visits+DESC#rslt';

const OpenHousesPage: React.FC = () => {
  const locale = useLocale();
  const isEs = locale === 'es';
  const canonicalPath = isEs ? '/casas-abiertas' : '/open-houses';
  const propertySearchPath = isEs ? '/buscar-propiedades' : '/property-search';

  return (
    <section className="py-16">
      <Seo
        title={isEs ? 'Casas Abiertas | Vivian Delgado Mortgage' : 'Open Houses | Vivian Delgado Mortgage'}
        description={
          isEs
            ? 'Ver casas abiertas activas y próximos eventos en el área.'
            : 'View active open houses and upcoming events in the area.'
        }
        canonical={`/${locale}${canonicalPath}`}
        locale={locale}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="noir-panel rounded-2xl p-8 md:p-10 text-center max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">
            {isEs ? 'Casas Abiertas' : 'Open Houses'}
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            {isEs
              ? 'Ver casas abiertas activas y próximos eventos en el área.'
              : 'View active open houses and upcoming events in the area.'}
          </p>
          <LocaleLink to={`${propertySearchPath}${OPEN_HOUSES_QUERY}`} className="btn-metal btn-metal--primary">
            {isEs ? 'Ver casas' : 'View Homes'}
          </LocaleLink>
        </div>
      </div>
    </section>
  );
};

export default OpenHousesPage;
