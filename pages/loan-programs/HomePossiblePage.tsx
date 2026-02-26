import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../../components/Seo';
import ProgramVideo from '../../components/ProgramVideo';
import { useLocale } from '../../i18n/locale';

const HomePossiblePage: React.FC = () => {
  const locale = useLocale();
  const seo = locale === 'es'
    ? {
        title: 'Préstamos Home Possible con límites de ingreso | Legends Mortgage Team',
        description: 'Préstamos Home Possible para compradores con ingreso calificado, seguro hipotecario reducido y requisitos de educación claros.'
      }
    : {
        title: 'Home Possible Loans for Buyers | Legends Mortgage Team.',
        description: 'Home Possible loans for qualified buyers seeking affordable conventional financing, clear terms, and strong guidance, with income limits reviewed early.'
      };

  const faq = locale === 'es'
    ? [
        { q: 'Qué es un préstamo Home Possible?', a: 'Home Possible es un préstamo convencional de Freddie Mac con pago inicial bajo y seguro hipotecario reducido.' },
        { q: 'En qué se diferencia de HomeReady?', a: 'Son programas similares, pero usan límites de ingreso y guías distintas.' },
        { q: 'Se requiere educación para compradores?', a: 'Sí, al menos un prestatario debe completar educación aprobada.' },
        { q: 'Cuándo no conviene Home Possible?', a: 'Cuando el ingreso supera los límites o se quiere evitar la educación.' }
      ]
    : [
        { q: 'What is a Home Possible loan?', a: 'Home Possible is a Freddie Mac conventional loan with low down payment and reduced mortgage insurance.' },
        { q: 'How is Home Possible different from HomeReady?', a: 'They are similar programs but use different income limits and guidelines.' },
        { q: 'Is homebuyer education required?', a: 'Yes, at least one borrower must complete an approved education course.' },
        { q: 'When is Home Possible not a good fit?', a: 'When income exceeds limits or you want to avoid education requirements.' }
      ];

  return (
    <section className="py-16 bg-white">
      <Seo
        title={seo.title}
        description={seo.description}
        canonical={`/${locale}/loan-options/home-possible`}
        locale={locale}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-sm text-gray-500 mb-4">
          <Link to={`/${locale}`} className="hover:text-[#1C2530]">{locale === 'es' ? 'Inicio' : 'Home'}</Link>
          <span className="mx-2">→</span>
          <Link to={`/${locale}/loan-options`} className="hover:text-[#1C2530]">{locale === 'es' ? 'Opciones de Préstamo' : 'Loan Options'}</Link>
          <span className="mx-2">→</span>
          <span>{locale === 'es' ? 'Préstamos Home Possible' : 'Home Possible Loans'}</span>
        </div>
        <div className="mb-6">
          <Link to={`/${locale}/loan-options`} className="text-[#F36F20] font-bold hover:text-[#1C2530] transition-colors">
            {locale === 'es' ? 'Volver a Opciones de Préstamo' : 'Back to Loan Options'}
          </Link>
        </div>
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#1C2530] mb-6">
          {locale === 'es'
            ? 'Préstamos Home Possible para compradores con ingreso calificado'
            : 'Home Possible Loans for Buyers Seeking Affordable Conventional Terms'}
        </h1>
        <p className="text-[#F36F20] font-bold mb-6">
          {locale === 'es'
            ? 'Ideal para compradores que cumplen límites de ingreso y aceptan educación del comprador.'
            : 'Best for qualified buyers who meet income limits and want lower MI.'}
        </p>
        <div className="space-y-4 text-gray-700">
          {locale === 'es' ? (
            <>
              <p>Home Possible es un programa convencional con límites de ingreso claros.</p>
              <p>Funciona para compradores que cumplen límites y aceptan educación.</p>
              <p>Confirmamos elegibilidad y comparamos con convencional estándar.</p>
              <p>Definimos el costo total y el seguro hipotecario.</p>
              <p>No es para usted si su ingreso supera los límites o necesita un programa sin requisito de educación.</p>
            </>
          ) : (
            <>
              <p>Home Possible is a Freddie Mac option with flexible eligibility.</p>
              <p>It works for qualified buyers with lower down payments.</p>
              <p>We compare Home Possible with standard conventional options.</p>
              <p>Not a fit if your income exceeds limits or you need a program with no education requirement.</p>
            </>
          )}
        </div>
        <ProgramVideo slug="home-possible" />
        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">{locale === 'es' ? 'Para quién es' : 'Who This Is For'}</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          {locale === 'es' ? (
            <>
              <li>Compradores con ingreso estable y ahorro limitado.</li>
              <li>Compradores por primera vez que aceptan educación.</li>
              <li>Hogares que cumplen límites de ingreso del área.</li>
              <li>Clientes que buscan seguro hipotecario reducido.</li>
            </>
          ) : (
            <>
              <li>Buyers with stable income and limited savings.</li>
              <li>First time buyers who want conventional terms.</li>
              <li>Households that meet income guidelines.</li>
              <li>Borrowers who want lower mortgage insurance costs.</li>
            </>
          )}
        </ul>
        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">{locale === 'es' ? 'Cómo funciona en la práctica' : 'How It Actually Works'}</h2>
        <div className="space-y-4 text-gray-700">
          {locale === 'es' ? (
            <>
              <p>Home Possible es un programa de Freddie Mac con límites de ingreso.</p>
              <p>Permite pago inicial más bajo y seguro hipotecario reducido.</p>
              <p>Confirmamos elegibilidad y comparamos el costo total con FHA.</p>
              <p>Definimos una estrategia para retirar el seguro hipotecario.</p>
            </>
          ) : (
            <>
              <p>Home Possible uses Freddie Mac eligibility guidelines.</p>
              <p>It offers low down payment and reduced mortgage insurance.</p>
              <p>We compare Home Possible with FHA and conventional options.</p>
              <p>We plan how to remove mortgage insurance later.</p>
            </>
          )}
        </div>
        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">{locale === 'es' ? 'Errores comunes' : 'Common Mistakes'}</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          {locale === 'es' ? (
            <>
              <li>Asumir que Home Possible aplica en todas las áreas.</li>
              <li>No revisar los límites de ingreso al inicio.</li>
              <li>Evitar educación cuando es requisito.</li>
              <li>Ignorar la estrategia para retirar el seguro hipotecario.</li>
            </>
          ) : (
            <>
              <li>Skipping the income limit check early.</li>
              <li>Ignoring homebuyer education requirements.</li>
              <li>Choosing FHA without comparing total cost.</li>
              <li>Missing the mortgage insurance removal strategy.</li>
            </>
          )}
        </ul>
        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">{locale === 'es' ? 'Por qué The Legends Mortgage Team' : 'Why The Legends Mortgage Team'}</h2>
        <div className="space-y-4 text-gray-700">
          {locale === 'es' ? (
            <>
              <p>Comparamos Home Possible con FHA y convencional estándar.</p>
              <p>Explicamos precio, elegibilidad e impacto a largo plazo.</p>
              <p>Usted recibe claridad antes de comprometerse.</p>
            </>
          ) : (
            <>
              <p>We compare Home Possible with FHA and conventional options.</p>
              <p>We explain eligibility, pricing, and long term impact.</p>
              <p>You get clear guidance before you commit.</p>
            </>
          )}
        </div>
        <div className="mt-10 bg-[#F1F3F5] rounded-lg p-6">
          <h2 className="text-2xl font-bold text-[#1C2530] mb-4">
            {locale === 'es' ? 'Lo que necesito para cotizar con precisión' : 'What I Need From You to Quote Accurately'}
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            {locale === 'es' ? (
              <>
                <li>Ingreso del hogar y número de ocupantes.</li>
                <li>Precio objetivo y monto de pago inicial.</li>
                <li>Rango de puntaje de crédito y cambios recientes.</li>
              </>
            ) : (
              <>
                <li>Household income and number of occupants.</li>
                <li>Target purchase price and down payment amount.</li>
                <li>Credit score range and recent credit changes.</li>
              </>
            )}
          </ul>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Link to={`/${locale}/apply`} className="inline-block bg-[#F36F20] text-white px-6 py-3 rounded font-bold hover:bg-orange-600 transition-colors text-center">
              {locale === 'es' ? 'Comenzar mi aprobación' : 'Apply Online'}
            </Link>
            <Link to={`/${locale}/team`} className="inline-block bg-[#1C2530] text-white px-6 py-3 rounded font-bold hover:bg-gray-800 transition-colors text-center">
              {locale === 'es' ? 'Conozca al equipo' : 'Get a Clear Answer'}
            </Link>
          </div>
        </div>
        <div className="mt-10 bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-[#1C2530] mb-4">
            {locale === 'es' ? 'Chequeo rápido' : 'Fast Pre Check'}
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            {locale === 'es' ? (
              <>
                <li>Ingreso del hogar y ubicación del condado.</li>
                <li>Monto de pago inicial y rango de crédito.</li>
                <li>Precio objetivo de compra.</li>
              </>
            ) : (
              <>
                <li>Household income and county location.</li>
                <li>Down payment amount and credit score range.</li>
                <li>Target purchase price.</li>
              </>
            )}
          </ul>
        </div>
        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">{locale === 'es' ? 'Opciones relacionadas' : 'Related Options'}</h2>
        <div className="space-y-2 text-gray-700">
          <Link to={`/${locale}/loan-options/homeready`} className="text-[#F36F20] font-bold hover:text-[#1C2530] transition-colors">{locale === 'es' ? 'Préstamos HomeReady' : 'HomeReady Loans'}</Link>
          <span className="mx-2">,</span>
          <Link to={`/${locale}/loan-options/fha`} className="text-[#F36F20] font-bold hover:text-[#1C2530] transition-colors">{locale === 'es' ? 'Préstamos FHA' : 'FHA Loans'}</Link>
          <span className="mx-2">,</span>
          <Link to={`/${locale}/loan-options/conventional`} className="text-[#F36F20] font-bold hover:text-[#1C2530] transition-colors">{locale === 'es' ? 'Préstamos Convencionales' : 'Conventional Loans'}</Link>
        </div>
        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">{locale === 'es' ? 'Preguntas frecuentes' : 'FAQs'}</h2>
        <div className="space-y-4 text-gray-700">
          {faq.map((item) => (
            <p key={item.q}><strong>{item.q}</strong> {item.a}</p>
          ))}
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faq.map((item) => ({
                "@type": "Quéstion",
                "name": item.q,
                "acceptedAnswer": { "@type": "Answer", "text": item.a }
              }))
            })
          }}
        />
      </div>
    </section>
  );
};

export default HomePossiblePage;
