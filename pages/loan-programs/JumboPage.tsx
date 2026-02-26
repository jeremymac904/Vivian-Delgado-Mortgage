import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../../components/Seo';
import ProgramVideo from '../../components/ProgramVideo';
import { useLocale } from '../../i18n/locale';

const JumboPage: React.FC = () => {
  const locale = useLocale();
  const seo = locale === 'es'
    ? {
        title: 'Préstamos Jumbo para compradores con activos | Legends Mortgage Team',
        description: 'Préstamos Jumbo para compradores con activos altos, estructura clara, comparación de prestamistas y enfoque en liquidez.'
      }
    : {
        title: 'Jumbo Loans | Legends Mortgage Team',
        description: 'Jumbo loans for high asset buyers needing tailored structure, lender comparisons, and clear pricing.'
      };

  const faq = locale === 'es'
    ? [
        { q: 'Las tasas Jumbo son iguales a las convencionales?', a: 'No siempre, el precio varía por prestamista.' },
        { q: 'Son importantes los estados de cuenta de activos?', a: 'Sí, las reservas pueden ser un factor clave.' },
        { q: 'Puedo usar varias fuentes de ingreso?', a: 'Sí, con documentación clara.' }
      ]
    : [
        { q: 'Do jumbo rates match conventional rates?', a: 'Not always, pricing varies by lender.' },
        { q: 'Are asset statements important?', a: 'Yes, reserves can be a key approval factor.' },
        { q: 'Can I use multiple income sources?', a: 'Yes, with clear documentation.' }
      ];

  return (
    <section className="py-16 bg-white">
      <Seo
        title={seo.title}
        description={seo.description}
        canonical={`/${locale}/loan-options/jumbo`}
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
            ? 'Préstamos Jumbo para compradores con activos altos y estructura compleja'
            : 'Jumbo Loans for High Asset Buyers with Complex Financing'}
        </h1>
        <p className="text-[#F36F20] font-bold mb-6">
          {locale === 'es'
            ? 'Ideal para compradores con activos sólidos y estructura personalizada.'
            : 'Best for buyers with strong assets who need tailored underwriting.'}
        </p>

        <div className="space-y-4 text-gray-700">
          {locale === 'es' ? (
            <>
              <p>Los préstamos Jumbo son para compradores que superan los límites convencionales.</p>
              <p>La tasa y costos varían entre prestamistas, la estructura importa.</p>
              <p>Confirmamos activos, ingresos y reservas con detalle.</p>
              <p>Definimos la mejor combinación entre tasa, costo y liquidez.</p>
              <p>No es para usted si no cuenta con reservas o necesita la estructura más básica.</p>
            </>
          ) : (
            <>
              <p>Jumbo loans fit buyers who exceed conforming loan limits.</p>
              <p>Pricing varies widely between lenders, and structure matters.</p>
              <p>We review assets, income, and reserves with real detail.</p>
              <p>You will see the best option for rate and terms.</p>
            </>
          )}
        </div>
        <ProgramVideo slug="jumbo" />

        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">
          {locale === 'es' ? 'Para quién es' : 'Who This Is For'}
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          {locale === 'es' ? (
            <>
              <li>Compradores que superan los límites convencionales.</li>
              <li>Clientes con ingresos o activos complejos.</li>
              <li>Compradores que buscan términos personalizados y liquidez.</li>
              <li>Compradores de alto valor que necesitan flexibilidad.</li>
            </>
          ) : (
            <>
              <li>Buyers purchasing high value homes.</li>
              <li>Clients with complex income or asset profiles.</li>
              <li>Borrowers who want tailored terms and liquidity.</li>
              <li>Move up buyers needing flexible underwriting.</li>
            </>
          )}
        </ul>

        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">
          {locale === 'es' ? 'Cómo funciona en la práctica' : 'How It Actually Works'}
        </h2>
        <div className="space-y-4 text-gray-700">
          {locale === 'es' ? (
            <>
              <p>Los préstamos Jumbo son productos de portafolio con precios y políticas propias.</p>
              <p>Cada prestamista evalúa activos, reservas e ingresos de forma distinta.</p>
              <p>Comparamos varias opciones para estructurar tasa, costos y liquidez.</p>
              <p>Definimos el equilibrio entre tasa, costo total y reservas.</p>
            </>
          ) : (
            <>
              <p>Jumbo loans are portfolio products with unique pricing models.</p>
              <p>Each lender weighs assets, reserves, and income differently.</p>
              <p>We compare multiple lenders to find the right structure.</p>
              <p>We focus on rate, fees, and liquidity impact together.</p>
            </>
          )}
        </div>

        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">
          {locale === 'es' ? 'Errores comunes' : 'Common Mistakes'}
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          {locale === 'es' ? (
            <>
              <li>Asumir que el precio Jumbo es igual en todos los prestamistas.</li>
              <li>Mover activos tarde y causar retrasos.</li>
              <li>Ignorar los requisitos de reservas hasta la aprobación.</li>
              <li>Enfocarse solo en la tasa sin revisar el costo total.</li>
            </>
          ) : (
            <>
              <li>Assuming jumbo pricing is the same everywhere.</li>
              <li>Moving assets late and triggering delays.</li>
              <li>Ignoring reserve requirements until underwriting.</li>
              <li>Focusing only on rate without total cost review.</li>
            </>
          )}
        </ul>

        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">
          {locale === 'es' ? 'Por qué The Legends Mortgage Team' : 'Why The Legends Mortgage Team'}
        </h2>
        <div className="space-y-4 text-gray-700">
          {locale === 'es' ? (
            <>
              <p>Revisamos prestamistas Jumbo y mostramos diferencias reales de precio.</p>
              <p>Estructuramos el préstamo para proteger liquidez.</p>
              <p>Usted recibe claridad y tiempos reales de ejecución.</p>
            </>
          ) : (
            <>
              <p>We shop jumbo lenders and show clear pricing differences.</p>
              <p>We build a structure that protects liquidity.</p>
              <p>You get transparent guidance and fast answers.</p>
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
                <li>Precio de compra y monto de pago inicial.</li>
                <li>Resumen de activos y reservas.</li>
                <li>Tipos de ingreso y formato de documentación.</li>
              </>
            ) : (
              <>
                <li>Purchase price and down payment amount.</li>
                <li>Asset and reserve totals.</li>
                <li>Income types and documentation format.</li>
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
            {locale === 'es' ? 'Iniciar solicitud Jumbo' : 'Start a Jumbo Application'}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JumboPage;
