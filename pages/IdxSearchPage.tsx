import React, { useMemo } from 'react';
import Seo from '../components/Seo';
import { useLocale } from '../i18n/locale';
import { useLocation } from 'react-router-dom';

const IDX_EMBED_URL = 'https://viviandelgado.exprealty.com/embed.php';

const IdxSearchPage: React.FC = () => {
  const locale = useLocale();
  const { search, hash } = useLocation();
  const isEs = locale === 'es';
  const canonicalPath = isEs ? '/buscar-propiedades' : '/property-search';
  const iframeSrc = useMemo(() => {
    const url = new URL(IDX_EMBED_URL);
    const params = new URLSearchParams(search);

    params.forEach((value, key) => {
      url.searchParams.append(key, value);
    });

    if (hash) {
      url.hash = hash.startsWith('#') ? hash.slice(1) : hash;
    }

    return url.toString();
  }, [search, hash]);

  return (
    <section className="py-16">
      <Seo
        title={isEs ? 'Buscar propiedades | Vivian Delgado Mortgage' : 'Property Search | Vivian Delgado Mortgage'}
        description={
          isEs
            ? 'Busque propiedades disponibles con el buscador IDX de Vivian y encuentre opciones por zona, precio y características.'
            : 'Search available properties with Vivian’s IDX search and explore listings by location, price, and features.'
        }
        canonical={`/${locale}${canonicalPath}`}
        locale={locale}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">
            {isEs ? 'Buscar propiedades' : 'Property Search'}
          </h1>
          <p className="text-lg text-gray-300">
            {isEs
              ? 'Use la búsqueda IDX para ver listados actuales y filtrar por precio, ubicación y tipo de propiedad.'
              : 'Use the IDX search to browse current listings and filter by price, location, and property type.'}
          </p>
        </div>

        <div className="idx-embed noir-panel rounded-xl p-2 sm:p-3 lg:p-4">
          <iframe
            className="idx-embed__frame"
            src={iframeSrc}
            title={isEs ? 'Búsqueda de propiedades IDX de Vivian' : 'Vivian IDX Property Search'}
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

export default IdxSearchPage;
