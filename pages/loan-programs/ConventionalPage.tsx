import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../../components/Seo';
import ProgramVideo from '../../components/ProgramVideo';
import { useLocale } from '../../i18n/locale';

const ConventionalPage: React.FC = () => {
  const locale = useLocale();
  const isEs = locale === 'es';
  const t = {
    title: isEs
      ? 'Préstamos Convencionales para compradores con crédito sólido'
      : 'Conventional Loans for Buyers with Strong Credit and Long Term Goals',
    metaTitle: isEs ? 'Préstamos Convencionales | Legends Mortgage Team' : 'Conventional Loans | Legends Mortgage Team',
    metaDesc: isEs
      ? 'Préstamos convencionales para compradores con crédito fuerte, estructura clara y costo total controlado.'
      : 'Conventional loans for buyers with strong credit, flexible terms, and clear mortgage insurance planning.',
    intent: isEs
      ? 'Ideal para compradores con crédito fuerte que buscan costo total claro.'
      : 'Best for buyers with strong credit who want long term cost control.',
    intro: isEs
      ? [
          'Los préstamos convencionales funcionan para compradores con crédito sólido e ingresos estables.',
          'Ofrecen flexibilidad y control del costo a largo plazo.',
          'Le guiamos en precio, seguro hipotecario, y estructura del préstamo.',
          'Usted entiende las opciones antes de comprometerse con un pago mensual.',
          'No es para usted si necesita calificar con crédito muy limitado o ingresos inestables.'
        ]
      : [
          'Conventional loans fit buyers with solid credit and stable income.',
          'They offer flexible terms and strong long term value.',
          'We guide you through pricing, mortgage insurance, and structure.',
          'You will know the tradeoffs before you choose a payment.'
        ],
    whoTitle: isEs ? 'Para quién es' : 'Who This Is For',
    who: isEs
      ? [
          'Compradores con crédito fuerte e historial estable.',
          'Compradores primerizos con ahorro sólido.',
          'Compradores de mejora que buscan términos flexibles.',
          'Propietarios que desean refinanciamiento con costo total claro.'
        ]
      : [
          'Buyers with strong credit and stable income history.',
          'First time buyers with solid savings and clean credit.',
          'Move up buyers who want flexible terms.',
          'Refinance clients focused on long term cost.'
        ],
    howTitle: isEs ? 'Cómo funciona en la práctica' : 'How It Actually Works',
    how: isEs
      ? [
          'No es un préstamo asegurado por el gobierno, la tasa depende de crédito y capital.',
          'El seguro hipotecario aplica con bajo pago inicial y se puede eliminar después.',
          'Comparamos prestamistas para equilibrar tasa, costos y velocidad de cierre.',
          'Planificamos cuándo retirar el seguro hipotecario.'
        ]
      : [
          'Conventional loans are not government insured, so pricing leans on credit and equity.',
          'Mortgage insurance can apply with lower down payments, and it can be removed later.',
          'We compare lenders to find the balance between rate, fees, and closing speed.',
          'We also plan a strategy to drop mortgage insurance when it makes sense.'
        ],
    mistakesTitle: isEs ? 'Errores comunes' : 'Common Mistakes',
    mistakes: isEs
      ? [
          'Creer que el seguro hipotecario es permanente.',
          'Elegir solo por tasa sin revisar costos totales.',
          'Ignorar cómo el crédito cambia el precio.',
          'No planear la eliminación del seguro hipotecario.'
        ]
      : [
          'Assuming mortgage insurance is permanent or always expensive.',
          'Choosing a lower rate without checking total fees.',
          'Ignoring how small credit shifts affect pricing.',
          'Skipping a plan to remove mortgage insurance.'
        ],
    whyTitle: isEs ? 'Por qué Legends Mortgage Team' : 'Why The Legends Mortgage Team',
    why: isEs
      ? [
          'Accedemos a muchos prestamistas y mostramos opciones claras.',
          'Explicamos el seguro hipotecario y su plan de salida.',
          'Usted recibe un camino limpio de solicitud a cierre.'
        ]
      : [
          'We access many lenders and show clear pricing options.',
          'We explain mortgage insurance and outline a removal timeline.',
          'You get a clean path from application to closing.'
        ],
    fastTitle: isEs ? 'Revisión rápida' : 'Fast Pre Check',
    fast: isEs
      ? ['Precio objetivo y pago inicial.', 'Rango de crédito estimado.', 'Tipo de ingreso, W2 o independiente.']
      : ['Target purchase price and down payment amount.', 'Estimated credit score range.', 'Income type, W2, salary, or self employed.'],
    faqTitle: isEs ? 'Preguntas frecuentes' : 'FAQs',
    faq: isEs
      ? [
          ['¿El convencional siempre es la tasa más baja?', 'No siempre, comparamos el costo total y la estructura.'],
          ['¿Se puede eliminar el seguro hipotecario?', 'Sí, cuando el capital y las reglas lo permiten.'],
          ['¿Compradores primerizos pueden calificar?', 'Sí, con crédito fuerte e ingresos estables.']
        ]
      : [
          ['Is conventional always the lowest rate?', 'Not always. We compare total cost and structure.'],
          ['Can mortgage insurance be removed?', 'Yes, once equity and rules allow removal.'],
          ['Do first time buyers qualify?', 'Yes, with strong credit and stable income.']
        ],
    cta: isEs ? 'Iniciar solicitud convencional' : 'Start a Conventional Application'
  };

  return (
    <section className="py-16 bg-white">
      <Seo
        title={t.metaTitle}
        description={t.metaDesc}
        canonical={`/${locale}/loan-options/conventional`}
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
        <ProgramVideo slug="conventional" />

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

export default ConventionalPage;
