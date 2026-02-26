import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../../components/Seo';
import ProgramVideo from '../../components/ProgramVideo';
import { useLocale } from '../../i18n/locale';

const UsdaPage: React.FC = () => {
  const locale = useLocale();
  const isEs = locale === 'es';
  const t = {
    title: isEs ? 'Préstamos USDA para compradores en zonas elegibles' : 'USDA Loans for Buyers Seeking Zero Down in Eligible Areas',
    metaTitle: isEs ? 'Préstamos USDA | Legends Mortgage Team' : 'USDA Loans | Legends Mortgage Team',
    metaDesc: isEs
      ? 'Préstamos USDA con cero pago inicial en zonas elegibles, con reglas de ubicación e ingresos claras.'
      : 'USDA loans for zero down in eligible areas, with clear income and location guidance.',
    intent: isEs ? 'Ideal para compradores que aceptan reglas de ubicación e ingresos.' : 'Best for buyers who want zero down and can meet location and income rules.',
    intro: isEs
      ? [
          'Los préstamos USDA permiten comprar con cero pago inicial fuera de zonas densamente pobladas.',
          'Muchos suburbios califican, los mapas suelen malinterpretarse.',
          'Confirmamos la elegibilidad temprano y definimos expectativas claras.',
          'Usted sabe si la propiedad y el ingreso califican.',
          'No es para usted si la vivienda está fuera del mapa elegible o excede los límites de ingreso.'
        ]
      : [
          'USDA loans support buyers who want zero down outside dense metros.',
          'Many suburbs qualify, and the maps are often misunderstood.',
          'We confirm eligibility early and set clear expectations.',
          'You will know if the home and income fit before you commit.'
        ],
    whoTitle: isEs ? 'Para quién es' : 'Who This Is For',
    who: isEs
      ? [
          'Compradores que desean cero pago inicial.',
          'Familias abiertas a zonas elegibles.',
          'Hogares dentro de límites de ingreso.',
          'Compradores que quieren opciones claras.'
        ]
      : [
          'Buyers who want zero down and stable payments.',
          'Families open to eligible suburban or rural areas.',
          'Borrowers who meet household income guidelines.',
          'First time buyers who want clear options.'
        ],
    howTitle: isEs ? 'Cómo funciona en la práctica' : 'How It Actually Works',
    how: isEs
      ? [
          'USDA es un préstamo respaldado por el gobierno.',
          'Existen límites de ingreso según tamaño del hogar.',
          'Validamos dirección y ingresos desde el inicio.',
          'Comparamos USDA con FHA o convencional cuando conviene.'
        ]
      : [
          'USDA loans are government backed and designed for eligible locations.',
          'Income limits apply, and household size matters.',
          'We verify the property address and household income early.',
          'We also compare USDA to FHA or conventional when needed.'
        ],
    mistakesTitle: isEs ? 'Errores comunes' : 'Common Mistakes',
    mistakes: isEs
      ? [
          'Pensar que USDA es solo para zonas rurales.',
          'Ignorar límites de ingreso hasta el final.',
          'Elegir una casa fuera del mapa.',
          'No tener un plan alterno.'
        ]
      : [
          'Assuming USDA only works in remote areas.',
          'Ignoring household income limits until late.',
          'Choosing a home outside the eligible map.',
          'Skipping a backup plan before making offers.'
        ],
    whyTitle: isEs ? 'Por qué Legends Mortgage Team' : 'Why The Legends Mortgage Team',
    why: isEs
      ? [
          'Confirmamos elegibilidad USDA antes de ofertar.',
          'Estructuramos el archivo para evitar sorpresas.',
          'Usted recibe guía clara sobre ubicación e ingresos.'
        ]
      : [
          'We confirm USDA eligibility before you write an offer.',
          'We structure the file to avoid last minute surprises.',
          'You get clear guidance on location and income rules.'
        ],
    fastTitle: isEs ? 'Revisión rápida' : 'Fast Pre Check',
    fast: isEs
      ? ['Dirección o zona objetivo.', 'Tamaño del hogar e ingreso total.', 'Rango de crédito estimado.']
      : ['Property address or target area.', 'Household size and total income.', 'Estimated credit score range.'],
    faqTitle: isEs ? 'Preguntas frecuentes' : 'FAQs',
    faq: isEs
      ? [
          ['¿USDA es solo para áreas rurales?', 'No, muchos suburbios califican.'],
          ['¿Hay límites de ingreso?', 'Sí, dependen del área y del hogar.'],
          ['¿Puedo usar USDA si soy primerizo?', 'Sí, si cumple con las reglas.']
        ]
      : [
          ['Is USDA only for rural areas?', 'No, many suburbs qualify.'],
          ['Are there income limits?', 'Yes, household income limits apply.'],
          ['Can I use USDA as a first time buyer?', 'Yes, if you meet the rules.']
        ],
    cta: isEs ? 'Iniciar solicitud USDA' : 'Start a USDA Application'
  };

  return (
    <section className="py-16 bg-white">
      <Seo
        title={t.metaTitle}
        description={t.metaDesc}
        canonical={`/${locale}/loan-options/usda`}
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
        <ProgramVideo slug="usda" />

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

export default UsdaPage;
