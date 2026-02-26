import React from 'react';
import Seo from '../components/Seo';
import { useLocale } from '../i18n/locale';
import { SITE_LINKS } from '../constants';

const ApplyPage: React.FC = () => {
  const locale = useLocale();
  const seo = locale === 'es'
    ? {
        title: 'Comenzar mi aprobación | Vivian Delgado Mortgage',
        description: 'Complete la solicitud segura y reciba próximos pasos claros.'
      }
    : {
        title: 'Apply Online | Vivian Delgado Mortgage',
        description: 'Complete the secure application and get clear next steps.'
      };

  return (
    <section className="py-16">
      <Seo
        title={seo.title}
        description={seo.description}
        canonical={`/${locale}/apply`}
        locale={locale}
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-3">
            {locale === 'es' ? 'Comenzar mi aprobación' : 'Apply Online'}
          </h1>
          <p className="text-gray-300">
            {locale === 'es'
              ? 'Complete la solicitud segura. Toma unos 10 minutos.'
              : 'Complete the secure application below. It takes about 10 minutes.'}
          </p>
        </div>

        <div className="noir-panel rounded-xl p-8 shadow-lg text-center">
          <p className="text-gray-300 mb-6">
            {locale === 'es'
              ? 'Use la solicitud segura de Loan Factory para iniciar su proceso hoy.'
              : 'Use the secure Loan Factory application to get started today.'}
          </p>
          <a
            href={SITE_LINKS.applyNowUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-metal btn-metal--primary inline-block"
          >
            {locale === 'es' ? 'Aplicar ahora en Loan Factory' : 'Apply now at Loan Factory'}
          </a>
          <div className="mt-4">
            <a href={SITE_LINKS.creditRequestUrl} target="_blank" rel="noreferrer" className="text-[#F36F20] font-bold hover:text-white transition-colors">
              {locale === 'es' ? 'Solicitar revisión de crédito' : 'Request credit review'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplyPage;
