import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { COMPANY_INFO } from '../constants';
import { useLocale } from '../i18n/locale';

const AboutJeremyPage: React.FC = () => {
  const locale = useLocale();
  const seo = locale === 'es'
    ? {
        title: 'Sobre Vivian Delgado | Legends Mortgage Team',
        description: 'Perfil de Vivian Delgado, asesora hipotecaria bilingüe con servicio claro y eficiente.'
      }
    : {
        title: 'About Vivian Delgado | Legends Mortgage Team',
        description: 'About Vivian Delgado, bilingual Mortgage Loan Officer, with clear guidance and honest communication.'
      };

  return (
    <section className="py-16 bg-white">
      <Seo
        title={seo.title}
        description={seo.description}
        canonical={`/${locale}/about/vivian-delgado`}
        locale={locale}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link to={`/${locale}/about`} className="text-[#F36F20] font-bold hover:text-[#1C2530] transition-colors">
            {locale === 'es' ? 'Volver a Sobre Nosotros' : 'Back to About'}
          </Link>
        </div>

        <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#1C2530] mb-6">
          {locale === 'es' ? 'Vivian Delgado, Asesora Hipotecaria' : 'About Vivian Delgado, Mortgage Loan Officer'}
        </h1>
        <p className="text-[#F36F20] font-bold mb-6">
          {locale === 'es'
            ? 'Built on Trust . Backed by Results'
            : 'Built on Trust . Backed by Results'}
        </p>

        <div className="space-y-4 text-gray-700">
          {locale === 'es' ? (
            <>
              <p>Vivian Delgado es una asesora hipotecaria con más de 10 años de experiencia sirviendo a su comunidad.</p>
              <p>Ha ayudado a decenas de familias no solo a obtener el préstamo adecuado, sino también a guiarse con confianza en cada paso del proceso de compra de vivienda.</p>
              <p>Con amplio conocimiento de una gran variedad de productos hipotecarios, Vivian ofrece soluciones personalizadas para cada cliente.</p>
              <p>Además, es completamente bilingüe y habla español con fluidez.</p>
            </>
          ) : (
            <>
              <p>Vivian Delgado is a seasoned Mortgage Loan Officer with over 10 years of experience serving homeowners.</p>
              <p>She has helped dozens of families not only secure the right loan, but also confidently navigate every step of the home buying process as a trusted Real Estate Advisor.</p>
              <p>With in depth knowledge of a wide range of loan products, Vivian tailors solutions to fit each client's unique needs.</p>
              <p>She is proudly bilingual and fluent in Spanish.</p>
            </>
          )}
        </div>

        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">
          {locale === 'es' ? 'Diferenciador de servicio' : 'Service Differentiator'}
        </h2>
        <div className="space-y-4 text-gray-700">
          {locale === 'es' ? (
            <>
              <p>Vivian está dedicada a ser eficiente, conocedora, honesta y apasionada.</p>
              <p>Su enfoque combina servicio fuerte con comunicación constante.</p>
              <p>Usted recibe claridad sobre opciones, tiempos y próximos pasos.</p>
              <p>La meta es una experiencia de préstamo sin sorpresas.</p>
            </>
          ) : (
            <>
              <p>Vivian is dedicated to being efficient, knowledgeable, honest, and passionate.</p>
              <p>Her approach combines strong service with clear communication.</p>
              <p>You get direct guidance on options, timing, and next steps.</p>
              <p>The goal is a clean mortgage process with no surprises.</p>
            </>
          )}
        </div>

        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">
          {locale === 'es' ? 'Con quién trabaja mejor Vivian' : 'Who Vivian Works Best With'}
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          {locale === 'es' ? (
            <>
              <li>Compradores de vivienda por primera vez.</li>
              <li>Familias militares.</li>
              <li>Primeros respondedores.</li>
              <li>Extranjeros.</li>
            </>
          ) : (
            <>
              <li>First-time home buyers.</li>
              <li>Military families.</li>
              <li>First responders.</li>
              <li>Foreign nationals.</li>
            </>
          )}
        </ul>

        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">
          {locale === 'es' ? 'Cómo funciona el proceso' : 'How the Process Works'}
        </h2>
        <div className="space-y-4 text-gray-700">
          {locale === 'es' ? (
            <>
              <p>Iniciamos con un diagnóstico claro para entender objetivos y límites.</p>
              <p>Revisamos ingreso, activos y crédito, luego definimos el programa correcto.</p>
              <p>Usted recibe un plan con pasos, tiempos y expectativas.</p>
              <p>Nos mantenemos proactivos durante aprobación y cierre.</p>
            </>
          ) : (
            <>
              <p>Start with a focused intake so we understand goals and constraints.</p>
              <p>We review income, assets, and credit, then match the right program.</p>
              <p>You get a clean plan with next steps, deadlines, and expectations.</p>
              <p>We stay proactive through underwriting and closing.</p>
            </>
          )}
        </div>

        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">
          {locale === 'es' ? 'Contacto y licencias' : 'Contact and Licensing'}
        </h2>
        <div className="text-gray-700 space-y-2">
          <p><strong>{locale === 'es' ? 'Nombre' : 'Name'}:</strong> {COMPANY_INFO.leader}</p>
          <p><strong>NMLS:</strong> {COMPANY_INFO.nmls}</p>
          <p><strong>{locale === 'es' ? 'Teléfono' : 'Phone'}:</strong> {COMPANY_INFO.phone}</p>
          <p><strong>Email:</strong> {COMPANY_INFO.email}</p>
          <p><strong>{locale === 'es' ? 'Ubicación' : 'Location'}:</strong> {COMPANY_INFO.location}</p>
        </div>

        <div className="mt-10 bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-[#1C2530] mb-4">
            {locale === 'es' ? 'Lo que necesito para avanzar' : 'Fast Pre Check'}
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            {locale === 'es' ? (
              <>
                <li>Meta, compra, refinanciamiento o inversión.</li>
                <li>Rango de precio y pago inicial estimado.</li>
                <li>Mejor horario de contacto y plazo.</li>
              </>
            ) : (
              <>
                <li>Goal, purchase, refinance, or investment.</li>
                <li>Target price range and down payment estimate.</li>
                <li>Best contact time and timeline.</li>
              </>
            )}
          </ul>
        </div>

        <div className="mt-10">
          <Link
            to={`/${locale}/apply`}
            className="inline-block bg-[#F36F20] text-white px-6 py-3 rounded font-bold hover:bg-orange-600 transition-colors"
          >
            {locale === 'es' ? 'Comenzar mi aprobación' : 'Start Your Application'}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutJeremyPage;
