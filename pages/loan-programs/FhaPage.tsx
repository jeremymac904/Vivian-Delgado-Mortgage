import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../../components/Seo';
import ProgramVideo from '../../components/ProgramVideo';
import { useLocale } from '../../i18n/locale';

const FhaPage: React.FC = () => {
  const locale = useLocale();
  const isEs = locale === 'es';
  const t = {
    title: isEs ? 'Préstamos FHA para compradores con bajo pago inicial' : 'FHA Loans for First Time Buyers Seeking Low Down Payments',
    metaTitle: isEs ? 'Préstamos FHA | Legends Mortgage Team' : 'FHA Loans | Legends Mortgage Team',
    metaDesc: isEs
      ? 'Préstamos FHA para compradores con pago inicial (enganche) bajo, requisitos claros y plan de salida definido.'
      : 'FHA loans for first time buyers with low down payments, flexible credit, and a future refinance plan.',
    intent: isEs ? 'Ideal para compradores que necesitan bajo pago inicial y guía clara.' : 'Best for buyers who need low down payment options and clear guidance.',
    intro: isEs
      ? [
          'Los préstamos FHA están diseñados para compradores con ahorro limitado o crédito en recuperación.',
          'Abren puertas, pero la estrategia a largo plazo importa.',
          'Definimos el préstamo inicial y planificamos la mejor salida.',
          'Usted entiende los costos actuales y los pasos futuros.',
          'No es para usted si necesita un cierre muy rápido o un proceso con pocos requisitos.'
        ]
      : [
          'FHA loans are built for buyers with limited savings or credit challenges.',
          'They open doors, but the long term plan matters.',
          'We map the initial loan and the best exit strategy.',
          'You get clarity on costs and future options.'
        ],
    whoTitle: isEs ? 'Para quién es' : 'Who This Is For',
    who: isEs
      ? [
          'Compradores primerizos con bajo pago inicial.',
          'Compradores que están recuperando crédito.',
          'Familias que buscan pago mensual predecible.',
          'Personas que planean refinanciamiento a futuro.'
        ]
      : [
          'First time buyers who need a low down payment.',
          'Buyers rebuilding credit after a life event.',
          'Families who want a predictable payment today.',
          'Borrowers who plan to refinance later.'
        ],
    howTitle: isEs ? 'Cómo funciona en la práctica' : 'How It Actually Works',
    how: isEs
      ? [
          'FHA permite puntajes más bajos y pago inicial reducido.',
          'Incluye seguro hipotecario, por lo general durante todo el plazo.',
          'Comparamos FHA con convencional y definimos la salida.',
          'Esa salida suele ser un refinanciamiento cuando sube el capital.'
        ]
      : [
          'FHA loans allow lower credit scores and smaller down payments.',
          'They include mortgage insurance that often lasts for the full loan term.',
          'We compare FHA to conventional and build a clear exit plan.',
          'That plan often targets a future refinance when equity rises.'
        ],
    mistakesTitle: isEs ? 'Errores comunes' : 'Common Mistakes',
    mistakes: isEs
      ? [
          'Elegir FHA sin plan de refinanciamiento.',
          'Ignorar el costo del seguro hipotecario.',
          'Comprar por encima del pago mensual realista.',
          'Asumir que FHA siempre es la opción más barata.'
        ]
      : [
          'Choosing FHA without planning the refinance timeline.',
          'Ignoring the long term cost of mortgage insurance.',
          'Overbuying and risking payment stress.',
          'Assuming FHA is always the cheapest option.'
        ],
    whyTitle: isEs ? 'Por qué Legends Mortgage Team' : 'Why The Legends Mortgage Team',
    why: isEs
      ? [
          'Explicamos FHA en términos claros y el costo total.',
          'Comparamos prestamistas y mostramos diferencias reales.',
          'Usted recibe un plan desde aprobación hasta refinanciamiento.'
        ]
      : [
          'We explain FHA in plain terms and show the full cost path.',
          'We compare lenders and highlight meaningful tradeoffs.',
          'You get a clear plan from approval to future refinance.'
        ],
    fastTitle: isEs ? 'Revisión rápida' : 'Fast Pre Check',
    fast: isEs
      ? ['Precio objetivo y pago inicial.', 'Rango de crédito estimado.', 'Ingreso mensual y deudas actuales.']
      : ['Target purchase price and down payment.', 'Estimated credit score range.', 'Monthly income and current debts.'],
    faqTitle: isEs ? 'Preguntas frecuentes' : 'FAQs',
    faq: isEs
      ? [
          ['¿FHA es solo para primerizos?', 'No, también puede aplicar si ya compró antes.'],
          ['¿FHA requiere seguro hipotecario?', 'Sí, es parte del programa.'],
          ['¿Puedo refinanciar después?', 'Sí, lo planeamos desde el inicio.']
        ]
      : [
          ['Is FHA only for first time buyers?', 'No, repeat buyers can qualify too.'],
          ['Does FHA require mortgage insurance?', 'Yes, it is part of the program.'],
          ['Can I refinance later?', 'Yes, we plan that timeline from day one.']
        ],
    cta: isEs ? 'Iniciar solicitud FHA' : 'Start an FHA Application'
  };

  return (
    <section className="py-16 bg-white">
      <Seo
        title={t.metaTitle}
        description={t.metaDesc}
        canonical={`/${locale}/loan-options/fha`}
        locale={locale}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link to={`/${locale}/loan-options`} className="text-[#F36F20] font-bold hover:text-[#1C2530] transition-colors">
            {isEs ? 'Volver a Programas' : 'Back to Loan Options'}
          </Link>
        </div>
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#1C2530] mb-6">{t.title}</h1>
        <p className="text-[#F36F20] font-bold mb-6">{t.intent}</p>

        <div className="space-y-4 text-gray-700">
          {t.intro.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
        <ProgramVideo slug="fha" />

        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">{t.whoTitle}</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          {t.who.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">{t.howTitle}</h2>
        <div className="space-y-4 text-gray-700">
          {t.how.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">{t.mistakesTitle}</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          {t.mistakes.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">{t.whyTitle}</h2>
        <div className="space-y-4 text-gray-700">
          {t.why.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </div>

        <div className="mt-10 bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-[#1C2530] mb-4">{t.fastTitle}</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            {t.fast.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">{t.faqTitle}</h2>
        <div className="space-y-4 text-gray-700">
          {t.faq.map((row, i) => (
            <p key={i}>
              <strong>{row[0]}</strong> {row[1]}
            </p>
          ))}
        </div>

        <div className="mt-10">
          <Link to={`/${locale}/apply`} className="inline-block bg-[#F36F20] text-white px-6 py-3 rounded font-bold hover:bg-orange-600 transition-colors">
            {t.cta}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FhaPage;
