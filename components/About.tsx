import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO, TEAM_HEADSHOT_PLACEHOLDER } from '../constants';
import { useLocale } from '../i18n/locale';

const About: React.FC = () => {
  const locale = useLocale();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#1C2530] mb-6">
              The Legends Mortgage Team
            </h1>
            <div className="space-y-4 text-gray-600">
              {locale === 'es' ? (
                <>
                  <p>Somos un equipo hipotecario que trabaja con claridad y orden.</p>
                  <p>El servicio legendario significa educación simple, expectativas reales y seguimiento constante.</p>
                  <p>Usted recibe una guía clara, sin ruido ni presión.</p>
                  <p>Nos enfocamos en el plan, el costo total y en tomar los pasos correctos desde el inicio.</p>
                </>
              ) : (
                <>
                  <p>We are a broker team powered by Loan Factory.</p>
                  <p>Legendary service means clear education, honest expectations, and steady follow up.</p>
                  <p>You get calm guidance with no noise or pressure.</p>
                  <p>We focus on the plan, total cost, and clean next steps.</p>
                </>
              )}
            </div>

            <div className="mt-8">
              <div className="mt-6">
                <h3 className="text-xl font-bold text-[#1C2530] mb-3">About Vivian Delgado</h3>
                {locale === 'es' ? (
                  <div className="space-y-3 text-gray-600">
                    <p>Vivian Delgado es una asesora hipotecaria con más de 10 años de experiencia sirviendo a su comunidad. Ha ayudado a decenas de familias no solo a obtener el préstamo adecuado, sino también a guiarse con confianza en cada paso del proceso de compra de vivienda como asesora inmobiliaria de confianza.</p>
                    <p>Con amplio conocimiento de una gran variedad de productos hipotecarios, Vivian ofrece soluciones personalizadas para cada cliente.</p>
                    <p>Además, es completamente bilingüe y habla español con fluidez.</p>
                  </div>
                ) : (
                  <div className="space-y-3 text-gray-600">
                    <p>Vivian Delgado is a seasoned Mortgage Loan Officer with over 10 years of experience serving homeowners. She has helped dozens of families not only secure the right loan, but also confidently navigate every step of the home buying process as a trusted Real Estate Advisor.</p>
                    <p>With in depth knowledge of a wide range of loan products, Vivian tailors solutions to fit each client's unique needs.</p>
                    <p>She is proudly bilingual and fluent in Spanish.</p>
                  </div>
                )}
              </div>
            </div>

            <h2 className="text-xl font-bold text-[#1C2530] mt-10 mb-3">
              {locale === 'es' ? 'Nuestra forma de trabajar' : 'How We Work'}
            </h2>
            {locale === 'es' ? (
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Educación clara.</li>
                <li>Expectativas desde el inicio.</li>
                <li>Comunicación constante.</li>
                <li>Acompañamiento hasta el cierre.</li>
              </ul>
            ) : (
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Education in plain language.</li>
                <li>Expectations defined early.</li>
                <li>Steady communication.</li>
                <li>Guidance through closing.</li>
              </ul>
            )}

            <h2 className="text-xl font-bold text-[#1C2530] mt-10 mb-3">
              {locale === 'es' ? 'Cómo usamos la tecnología para servir mejor' : 'How We Use Technology to Serve You'}
            </h2>
            <div className="space-y-3 text-gray-600">
              {locale === 'es' ? (
                <>
                  <p>La tecnología se encarga del trabajo repetitivo y del seguimiento diario.</p>
                  <p>Las decisiones, la estrategia y la responsabilidad siguen en manos de personas.</p>
                  <p>El resultado es menos demoras, más claridad, y un mejor nivel de servicio.</p>
                </>
              ) : (
                <>
                  <p>Technology handles repetitive work and tracking.</p>
                  <p>Judgment and accountability stay with people.</p>
                  <p>The result is fewer delays and better service.</p>
                </>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link to={`/${locale}/team`} className="bg-[#1C2530] text-white px-6 py-3 rounded font-bold hover:bg-gray-800 transition-colors text-center">
                {locale === 'es' ? 'Conozca al equipo' : 'Meet the Team'}
              </Link>
              <Link to={`/${locale}/apply`} className="bg-[#F36F20] text-white px-6 py-3 rounded font-bold hover:bg-orange-600 transition-colors text-center">
                {locale === 'es' ? 'Comenzar mi aprobación' : 'Start Your Approval'}
              </Link>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#1C2530] mb-4">
              {locale === 'es' ? 'Liderazgo' : `Led by ${COMPANY_INFO.leader}`}
            </h2>
            <div className="space-y-3 text-gray-600">
              {locale === 'es' ? (
                <>
                  <p>Vivian lidera con servicio, responsabilidad y comunicación clara.</p>
                  <p>Su enfoque combina eficiencia, conocimiento, honestidad y pasión.</p>
                  <p>Usted recibe dirección y consistencia, sin presión.</p>
                </>
              ) : (
                <>
                  <p>Vivian leads with efficient execution, strong product knowledge, and honest communication.</p>
                  <p>If you want direct guidance and clear expectations, you are in the right place.</p>
                </>
              )}
            </div>
            <div className="flex items-center gap-4 mt-6">
              <img
                src={COMPANY_INFO.profileImage}
                alt={`${COMPANY_INFO.leader}, Loan Officer at Legends Mortgage Team`}
                className="w-20 h-20 rounded-full object-cover"
                onError={(event) => {
                  event.currentTarget.src = TEAM_HEADSHOT_PLACEHOLDER;
                }}
              />
              <div>
                <p className="font-bold text-[#1C2530]">{COMPANY_INFO.leader}</p>
                <p className="text-sm text-gray-500">NMLS {COMPANY_INFO.nmls}</p>
              </div>
            </div>
            <div className="mt-6">
              <Link to={`/${locale}/about/vivian-delgado`} className="text-[#F36F20] font-bold hover:text-[#1C2530] transition-colors">
                {locale === 'es' ? 'Ver perfil de Vivian' : 'Read Vivian’s full profile'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
