import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../../components/Seo';
import ProgramVideo from '../../components/ProgramVideo';
import { useLocale } from '../../i18n/locale';

const HomeReadyPage: React.FC = () => {
  const locale = useLocale();
  const seo = locale === 'es'
    ? {
        title: 'Préstamos HomeReady con límites de ingreso | Legends Mortgage Team',
        description: 'Préstamos HomeReady para compradores con ingreso calificado, costo claro de seguro hipotecario y comparación con FHA y convencional.'
      }
    : {
        title: 'HomeReady Loans for Qualified Buyers | Legends Mortgage Team',
        description: 'HomeReady loans for qualified buyers seeking affordable conventional financing with expectations, tradeoffs, and next steps plus mortgage insurance planning.'
      };

  const faq = locale === 'es'
    ? [
        { q: 'Qué es un préstamo HomeReady?', a: 'HomeReady es un préstamo convencional para compradores de ingreso bajo a moderado con seguro hipotecario reducido.' },
        { q: 'Cuánto pago inicial se requiere?', a: 'Desde 3 por ciento para compradores calificados.' },
        { q: 'Hay límites de ingreso?', a: 'Sí, los límites varían por ubicación y se deben cumplir.' },
        { q: 'Cuándo no conviene HomeReady?', a: 'Cuando el ingreso supera los límites o FHA es mejor a largo plazo.' }
      ]
    : [
        { q: 'What is a HomeReady loan?', a: 'HomeReady is a conventional loan designed for low-to-moderate income buyers with reduced mortgage insurance.' },
        { q: 'How much down payment is required?', a: 'As little as 3% down for qualified borrowers.' },
        { q: 'Are there income limits?', a: 'Yes. Income limits vary by location and must be met to qualify.' },
        { q: 'When is HomeReady not the right option?', a: 'When income exceeds program limits or FHA is more cost-effective long term.' }
      ];

  return (
    <section className="py-16 bg-white">
      <Seo
        title={seo.title}
        description={seo.description}
        canonical={`/${locale}/loan-options/homeready`}
        locale={locale}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-sm text-gray-500 mb-4">
          <Link to={`/${locale}`} className="hover:text-[#1C2530]">{locale === 'es' ? 'Inicio' : 'Home'}</Link>
          <span className="mx-2">→</span>
          <Link to={`/${locale}/loan-options`} className="hover:text-[#1C2530]">{locale === 'es' ? 'Opciones de Préstamo' : 'Loan Options'}</Link>
          <span className="mx-2">→</span>
          <span>{locale === 'es' ? 'Préstamos HomeReady' : 'HomeReady Loans'}</span>
        </div>
        <div className="mb-6">
          <Link to={`/${locale}/loan-options`} className="text-[#F36F20] font-bold hover:text-[#1C2530] transition-colors">
            {locale === 'es' ? 'Volver a Opciones de Préstamo' : 'Back to Loan Options'}
          </Link>
        </div>
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#1C2530] mb-6">
          {locale === 'es'
            ? 'Préstamos HomeReady para compradores con ingreso calificado'
            : 'HomeReady Loans for Buyers Seeking Affordable Conventional Options'}
        </h1>
        <p className="text-[#F36F20] font-bold mb-6">
          {locale === 'es'
            ? 'Ideal para compradores que cumplen límites de ingreso y buscan seguro hipotecario más bajo.'
            : 'Best for qualified buyers who meet income limits and want lower MI.'}
        </p>
        <div className="space-y-4 text-gray-700">
          {locale === 'es' ? (
            <>
              <p>HomeReady es un programa convencional con reglas de ingreso específicas.</p>
              <p>Funciona para compradores que cumplen límites de ingreso.</p>
              <p>Confirmamos elegibilidad y comparamos con convencional estándar.</p>
              <p>Definimos el costo total y el seguro hipotecario.</p>
              <p>No es para usted si su ingreso supera los límites del área.</p>
            </>
          ) : (
            <>
              <p>HomeReady is a conventional option with flexible income rules.</p>
              <p>It fits qualified buyers who need a smaller down payment.</p>
              <p>We confirm eligibility and compare it to standard conventional.</p>
              <p>Not a fit if your income is over the program limits for the area.</p>
            </>
          )}
        </div>
        <ProgramVideo slug="homeready" />
        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">{locale === 'es' ? 'Para quién es' : 'Who This Is For'}</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          {locale === 'es' ? (
            <>
              <li>Compradores con ingreso estable y ahorro limitado.</li>
              <li>Compradores por primera vez que buscan términos convencionales.</li>
              <li>Hogares que cumplen límites de ingreso del área.</li>
              <li>Clientes que quieren menor costo de seguro hipotecario.</li>
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
              <p>HomeReady es un programa de Fannie Mae con límites de ingreso.</p>
              <p>Permite pago inicial más bajo y seguro hipotecario reducido.</p>
              <p>Confirmamos elegibilidad y comparamos el costo total con FHA.</p>
              <p>Definimos una estrategia para retirar el seguro hipotecario.</p>
            </>
          ) : (
            <>
              <p>HomeReady is a Fannie Mae program with specific income limits.</p>
              <p>It offers lower down payments and reduced mortgage insurance.</p>
              <p>We verify eligibility and compare total cost to FHA.</p>
              <p>We also plan how to remove mortgage insurance later.</p>
            </>
          )}
        </div>
        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">{locale === 'es' ? 'Errores comunes' : 'Common Mistakes'}</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          {locale === 'es' ? (
            <>
              <li>Asumir que HomeReady aplica en todas las áreas.</li>
              <li>No revisar los límites de ingreso al inicio.</li>
              <li>Elegir FHA cuando HomeReady es mejor opción.</li>
              <li>Ignorar la estrategia para retirar el seguro hipotecario.</li>
            </>
          ) : (
            <>
              <li>Assuming HomeReady is available in every area.</li>
              <li>Skipping the income limit check early.</li>
              <li>Choosing FHA when HomeReady is a better fit.</li>
              <li>Ignoring mortgage insurance removal strategy.</li>
            </>
          )}
        </ul>
        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">{locale === 'es' ? 'Por qué The Legends Mortgage Team' : 'Why The Legends Mortgage Team'}</h2>
        <div className="space-y-4 text-gray-700">
          {locale === 'es' ? (
            <>
              <p>Comparamos HomeReady con FHA y convencional estándar.</p>
              <p>Explicamos precio, elegibilidad e impacto a largo plazo.</p>
              <p>Usted recibe claridad antes de comprometerse.</p>
            </>
          ) : (
            <>
              <p>We compare HomeReady to FHA and standard conventional.</p>
              <p>We explain pricing, eligibility, and long term impact.</p>
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
                <li>Precio objetivo y pago inicial (enganche).</li>
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
          <Link to={`/${locale}/loan-options/home-possible`} className="text-[#F36F20] font-bold hover:text-[#1C2530] transition-colors">{locale === 'es' ? 'Préstamos Home Possible' : 'Home Possible Loans'}</Link>
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

export default HomeReadyPage;
