import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { useLocale } from '../i18n/locale';
import { COMPANY_INFO, TEAM_HEADSHOT_PLACEHOLDER } from '../constants';

const AboutPage: React.FC = () => {
  const locale = useLocale();
  const seo = locale === 'es'
    ? {
        title: 'Sobre Vivian Delgado | Asesora Hipotecaria',
        description: 'Conozca a Vivian Delgado, asesora hipotecaria bilingüe con enfoque de servicio, comunicación y resultados.'
      }
    : {
        title: 'About Vivian Delgado | Mortgage Loan Officer',
        description: 'Meet Vivian Delgado, bilingual Mortgage Loan Officer focused on honest guidance and efficient execution.'
      };

  return (
    <>
      <Seo
        title={seo.title}
        description={seo.description}
        canonical={`/${locale}/about`}
        locale={locale}
      />
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 noir-panel rounded-2xl p-6">
              <img
                src={COMPANY_INFO.profileImage || TEAM_HEADSHOT_PLACEHOLDER}
                onError={(event) => {
                  event.currentTarget.src = TEAM_HEADSHOT_PLACEHOLDER;
                }}
                alt="Vivian Delgado headshot"
                className="w-full aspect-square rounded-xl object-cover mb-5"
              />
              <h1 className="text-2xl font-serif font-bold">{COMPANY_INFO.leader}</h1>
              <p className="text-[#F36F20] font-semibold mb-4">{COMPANY_INFO.role}</p>
              <div className="text-sm text-gray-300 space-y-2">
                <p>NMLS: {COMPANY_INFO.nmls}</p>
                <p>{locale === 'es' ? 'Teléfono' : 'Phone'}: {COMPANY_INFO.phone}</p>
                <p>{locale === 'es' ? 'Ubicación' : 'Location'}: Florida</p>
              </div>
            </div>

            <div className="lg:col-span-2 noir-panel rounded-2xl p-8">
              <h2 className="text-3xl font-serif font-bold mb-4">
                {locale === 'es' ? 'Bio profesional' : 'Personal Bio'}
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  {locale === 'es'
                    ? 'Vivian Delgado es una asesora hipotecaria con más de 10 años de experiencia sirviendo a su comunidad. Ha ayudado a decenas de familias no solo a obtener el préstamo adecuado, sino también a guiarse con confianza en cada paso del proceso de compra de vivienda como asesora inmobiliaria de confianza.'
                    : 'Vivian Delgado is a seasoned Mortgage Loan Officer with over 10 years of experience serving homeowners. She has helped dozens of families not only secure the right loan, but also confidently navigate every step of the home buying process as a trusted Real Estate Advisor.'}
                </p>
                <p>
                  {locale === 'es'
                    ? 'Con amplio conocimiento de una gran variedad de productos hipotecarios, Vivian ofrece soluciones personalizadas para cada cliente.'
                    : 'With in depth knowledge of a wide range of loan products, Vivian tailors solutions to fit each client\'s unique needs.'}
                </p>
                <p>
                  {locale === 'es'
                    ? 'Además, es completamente bilingüe y habla español con fluidez. Su enfoque se basa en eficiencia, honestidad, conocimiento y pasión por el servicio.'
                    : 'She is proudly bilingual and fluent in Spanish. Her approach is built on efficient service, clear communication, and honest advice.'}
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link to={`/${locale}/apply`} className="btn-metal btn-metal--primary text-center">
                  {locale === 'es' ? 'Aplicar ahora' : 'Apply Now'}
                </Link>
                <Link to={`/${locale}/contact`} className="btn-metal text-center">
                  {locale === 'es' ? 'Agendar llamada' : 'Schedule a Call'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
