import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../../components/Seo';
import ProgramVideo from '../../components/ProgramVideo';
import { useLocale } from '../../i18n/locale';

const RefinancePage: React.FC = () => {
  const locale = useLocale();
  const seo = locale === 'es'
    ? {
        title: 'Refinanciamiento con beneficio neto | Legends Mortgage Team',
        description: 'Refinanciamiento enfocado en beneficio neto, punto de equilibrio y ahorro real, con plan claro de plazo y pago mensual.'
      }
    : {
        title: 'Refinance | Legends Mortgage Team',
        description: 'Refinance strategy focused on net benefit, break even math, and long term savings.'
      };

  const faq = locale === 'es'
    ? [
        { q: 'Cómo sé si un refinanciamiento conviene?', a: 'Calculamos el punto de equilibrio y el ahorro real.' },
        { q: 'Puedo refinanciar para quitar el seguro hipotecario?', a: 'Sí, cuando la plusvalía y el crédito lo permiten.' },
        { q: 'El retiro de efectivo siempre conviene?', a: 'Solo con un plan claro y beneficio neto.' }
      ]
    : [
        { q: 'How do I know a refinance makes sense?', a: 'We use break even math and savings tests.' },
        { q: 'Can I refinance to remove mortgage insurance?', a: 'Yes, when equity and credit support it.' },
        { q: 'Is cash out always a good idea?', a: 'Only with a clear plan and benefit.' }
      ];

  return (
    <section className="py-16 bg-white">
      <Seo
        title={seo.title}
        description={seo.description}
        canonical={`/${locale}/loan-options/refinance`}
        locale={locale}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link to={`/${locale}/loan-options`} className="text-[#F36F20] font-bold hover:text-[#1C2530] transition-colors">
            {locale === 'es' ? 'Volver a Opciones de Préstamo' : 'Back to Loan Options'}
          </Link>
        </div>
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#1C2530] mb-6">
          {locale === 'es'
            ? 'Préstamos de refinanciamiento para propietarios enfocados en beneficio neto'
            : 'Refinance Loans for Owners Focused on Net Benefit'}
        </h1>
        <p className="text-[#F36F20] font-bold mb-6">
          {locale === 'es'
            ? 'Ideal para propietarios que quieren un punto de equilibrio claro y un plan real.'
            : 'Best for owners who want clear break even math and a real plan.'}
        </p>

        <div className="space-y-4 text-gray-700">
          {locale === 'es' ? (
            <>
              <p>El refinanciamiento debe mejorar el costo total, no solo la tasa.</p>
              <p>Calculamos el punto de equilibrio y el ahorro real.</p>
              <p>Definimos plazo, retiro de efectivo y metas de pago mensual.</p>
              <p>Usted recibe un plan alineado con su horizonte.</p>
              <p>No es para usted si busca solo bajar la tasa sin evaluar el costo total.</p>
            </>
          ) : (
            <>
              <p>Refinance should lower total cost, not just chase a rate.</p>
              <p>We run break even math and review the real savings.</p>
              <p>We also weigh term changes, cash out, and monthly payment goals.</p>
              <p>You get a plan that fits your timeline.</p>
            </>
          )}
        </div>
        <ProgramVideo slug="refinance" />

        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">
          {locale === 'es' ? 'Para quién es' : 'Who This Is For'}
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          {locale === 'es' ? (
            <>
              <li>Propietarios que buscan reducir el costo total de interés.</li>
              <li>Propietarios que evalúan retiro de efectivo con un plan.</li>
              <li>Clientes que quieren eliminar el seguro hipotecario.</li>
              <li>Personas que buscan estabilidad de pago a largo plazo.</li>
            </>
          ) : (
            <>
              <li>Owners who want lower total interest costs.</li>
              <li>Homeowners considering cash out for goals.</li>
              <li>Borrowers who want to remove mortgage insurance.</li>
              <li>Clients planning long term payment stability.</li>
            </>
          )}
        </ul>

        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">
          {locale === 'es' ? 'Cómo funciona en la práctica' : 'How It Actually Works'}
        </h2>
        <div className="space-y-4 text-gray-700">
          {locale === 'es' ? (
            <>
              <p>Comparamos su préstamo actual con opciones de refinanciamiento.</p>
              <p>Calculamos el punto de equilibrio con base en los costos de cierre.</p>
              <p>Probamos cambios de plazo y su impacto en el pago mensual.</p>
              <p>Solo avanzamos con un refinanciamiento de beneficio neto.</p>
            </>
          ) : (
            <>
              <p>We compare your current loan to refinance options across lenders.</p>
              <p>We calculate break even based on total closing costs.</p>
              <p>We also test term changes and payment impact.</p>
              <p>We only recommend a refinance with clear net benefit.</p>
            </>
          )}
        </div>

        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">
          {locale === 'es' ? 'Errores comunes' : 'Common Mistakes'}
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          {locale === 'es' ? (
            <>
              <li>Enfocarse en la tasa e ignorar el costo total.</li>
              <li>Extender el plazo sin revisar el interés total de vida.</li>
              <li>Retirar efectivo sin un plan claro.</li>
              <li>Omitir el cálculo de punto de equilibrio.</li>
            </>
          ) : (
            <>
              <li>Focusing on rate and ignoring total costs.</li>
              <li>Extending the term without checking lifetime interest.</li>
              <li>Using cash out without a clear plan.</li>
              <li>Skipping break even math.</li>
            </>
          )}
        </ul>

        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">
          {locale === 'es' ? 'Por qué The Legends Mortgage Team' : 'Why The Legends Mortgage Team'}
        </h2>
        <div className="space-y-4 text-gray-700">
          {locale === 'es' ? (
            <>
              <p>Revisamos prestamistas y mostramos costo total y tiempos.</p>
              <p>Explicamos la matemática, no solo la tasa.</p>
              <p>Usted recibe estrategia clara y ejecución precisa.</p>
            </>
          ) : (
            <>
              <p>We compare lenders and show total cost and timing.</p>
              <p>We explain the math, not just the rate.</p>
              <p>You get a clear refinance strategy and execution plan.</p>
            </>
          )}
        </div>

        <div className="mt-10 bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-[#1C2530] mb-4">
            {locale === 'es' ? 'Lo que necesito para cotizar con precisión' : 'Fast Pre Check'}
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            {locale === 'es' ? (
              <>
                <li>Saldo actual, tasa y plazo del préstamo.</li>
                <li>Valor estimado de la vivienda y rango de puntaje de crédito.</li>
                <li>Objetivo principal, pago más bajo, plazo menor o retiro de efectivo.</li>
              </>
            ) : (
              <>
                <li>Current loan balance, rate, and term.</li>
                <li>Estimated home value and credit score range.</li>
                <li>Goal, lower payment, shorter term, or cash out.</li>
              </>
            )}
          </ul>
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

        <div className="mt-10">
          <Link
            to={`/${locale}/apply`}
            className="inline-block bg-[#F36F20] text-white px-6 py-3 rounded font-bold hover:bg-orange-600 transition-colors"
          >
            {locale === 'es' ? 'Iniciar solicitud de refinanciamiento' : 'Start a Refinance Request'}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RefinancePage;
