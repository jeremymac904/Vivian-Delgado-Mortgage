import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../../components/Seo';
import ProgramVideo from '../../components/ProgramVideo';
import { useLocale } from '../../i18n/locale';

const VaPage: React.FC = () => {
  const locale = useLocale();
  const isEs = locale === 'es';
  const t = {
    title: isEs ? 'Préstamos VA para veteranos elegibles con cero pago inicial' : 'VA Loans for Eligible Veterans Seeking Zero Down Financing',
    metaTitle: isEs ? 'Préstamos VA | Legends Mortgage Team' : 'VA Loans | Legends Mortgage Team',
    metaDesc: isEs
      ? 'Préstamos VA para veteranos elegibles con cero pago inicial y sin seguro hipotecario mensual.'
      : 'VA loans for eligible veterans with zero down, no monthly mortgage insurance, and clear closing guidance.',
    intent: isEs ? 'Ideal para veteranos elegibles que quieren cero pago inicial y sin MI mensual.' : 'Best for eligible veterans who want zero down and no monthly MI.',
    intro: isEs
      ? [
          'Los préstamos VA son un beneficio ganado para militares y veteranos elegibles.',
          'Ofrecen cero pago inicial y sin seguro hipotecario mensual.',
          'Le guiamos en elegibilidad, tasación y expectativas reales del vendedor.',
          'Usted conoce las reglas y los tiempos reales del proceso.',
          'No es para usted si no cuenta con elegibilidad VA activa.'
        ]
      : [
          'VA loans are an earned benefit for qualified service members and veterans.',
          'They offer zero down and no monthly mortgage insurance.',
          'We guide you through eligibility, appraisal, and seller concerns.',
          'You will know the rules and the real world expectations.'
        ],
    whoTitle: isEs ? 'Para quién es' : 'Who This Is For',
    who: isEs
      ? [
          'Veteranos y militares activos elegibles.',
          'Compradores que desean cero pago inicial.',
          'Familias que buscan pago mensual estable.',
          'Personas que valoran un proceso claro.'
        ]
      : [
          'Eligible veterans and active duty service members.',
          'Buyers who want zero down without monthly mortgage insurance.',
          'Families who value payment stability and fair pricing.',
          'Borrowers who want a clear path to closing.'
        ],
    howTitle: isEs ? 'Cómo funciona en la práctica' : 'How It Actually Works',
    how: isEs
      ? [
          'VA usa una garantía, no seguro hipotecario.',
          'La tasación verifica valor y estándares mínimos.',
          'Preparamos el archivo y alineamos expectativas con el vendedor.',
          'Explicamos la cuota de financiamiento y las exenciones.'
        ]
      : [
          'VA loans use a guaranty, not mortgage insurance.',
          'The appraisal checks value and minimum property standards.',
          'We prepare the file and set expectations with the seller.',
          'We also show funding fee options and waiver rules.'
        ],
    mistakesTitle: isEs ? 'Errores comunes' : 'Common Mistakes',
    mistakes: isEs
      ? [
          'Asumir que todos los vendedores rechazan VA.',
          'Ignorar condiciones de la propiedad antes de ofertar.',
          'No obtener una preaprobación clara de VA.',
          'No planificar la cuota de financiamiento.'
        ]
      : [
          'Assuming all sellers reject VA offers.',
          'Ignoring property condition concerns before making an offer.',
          'Skipping a preapproval that explains VA guidelines.',
          'Overlooking funding fee planning.'
        ],
    whyTitle: isEs ? 'Por qué Legends Mortgage Team' : 'Why The Legends Mortgage Team',
    why: isEs
      ? [
          'Estructuramos VA con expectativas claras.',
          'Trabajamos con prestamistas que conocen los tiempos VA.',
          'Usted recibe un proceso sin sorpresas.'
        ]
      : [
          'We structure VA loans with clear expectations for all parties.',
          'We work with lenders that understand VA timelines.',
          'You get a smooth process without surprises.'
        ],
    fastTitle: isEs ? 'Revisión rápida' : 'Fast Pre Check',
    fast: isEs
      ? ['Estatus de elegibilidad VA.', 'Precio objetivo y pago inicial.', 'Rango de crédito estimado.']
      : ['Eligibility status and service details.', 'Target purchase price and down payment plan.', 'Estimated credit score range.'],
    faqTitle: isEs ? 'Preguntas frecuentes' : 'FAQs',
    faq: isEs
      ? [
          ['¿VA tiene seguro hipotecario mensual?', 'No, VA no usa MI mensual.'],
          ['¿Los vendedores aceptan VA?', 'Sí, con expectativas claras y buena preaprobación.'],
          ['¿Cómo funciona la tasación VA?', 'Revisa valor y estándares básicos.']
        ]
      : [
          ['Do VA loans require monthly mortgage insurance?', 'No, VA loans do not use monthly MI.'],
          ['Will sellers accept VA offers?', 'Yes, with clear expectations and strong preapproval.'],
          ['How does the VA appraisal work?', 'It checks value and basic property standards.']
        ],
    cta: isEs ? 'Iniciar solicitud VA' : 'Start a VA Application'
  };

  return (
    <section className="py-16 bg-white">
      <Seo
        title={t.metaTitle}
        description={t.metaDesc}
        canonical={`/${locale}/loan-options/va`}
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
        <ProgramVideo slug="va" />

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

export default VaPage;
