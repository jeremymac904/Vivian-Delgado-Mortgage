import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { useLocale } from '../i18n/locale';

const InvestorHubPage: React.FC = () => {
  const locale = useLocale();
  const isEs = locale === 'es';
  const canonicalPath = isEs ? '/inversionistas' : '/investors';

  const seo = isEs
    ? {
        title: 'Inversionistas | Legends Mortgage Team',
        description: 'Soluciones hipotecarias para inversionistas con estructura clara, números reales y ejecución precisa.'
      }
    : {
        title: 'Investors | Legends Mortgage Team',
        description: 'Investor focused mortgage solutions with clear structure, real numbers, and disciplined execution.'
      };

  return (
    <section className="py-16 bg-white">
      <Seo
        title={seo.title}
        description={seo.description}
        canonical={`/${locale}${canonicalPath}`}
        locale={locale}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#1C2530] mb-4">
          {isEs ? 'Soluciones hipotecarias para inversionistas' : 'Investor-Focused Mortgage Solutions'}
        </h1>
        <p className="text-[#F36F20] font-bold mb-8">
          {isEs ? 'Estructura clara. Números reales. Sin adivinanzas.' : 'Clear structure. Real numbers. No guessing.'}
        </p>

        <div className="space-y-4 text-gray-700 mb-10">
          {isEs ? (
            <>
              <p>Este espacio es para inversionistas serios, con metas claras y enfoque en ejecución.</p>
              <p>La estructura correcta define el costo total, el riesgo y el ritmo del cierre.</p>
              <p>No todos los acuerdos encajan con todos los prestamistas, por eso comparamos.</p>
              <p>Si busca una decisión rápida sin números claros, este no es el lugar.</p>
            </>
          ) : (
            <>
              <p>This is built for serious investors who value structure and execution.</p>
              <p>The right structure drives total cost, risk, and closing speed.</p>
              <p>Not every deal fits every lender, we compare options early.</p>
              <p>If you want a fast answer without clean numbers, this is not a fit.</p>
            </>
          )}
        </div>

        <h2 className="text-2xl font-bold text-[#1C2530] mb-6">
          {isEs ? 'Rutas para inversionistas' : 'Investor Paths'}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-[#1C2530] mb-3">{isEs ? 'Buy and Hold' : 'Buy and Hold Investors'}</h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <Link to={`/${locale}/loan-options/dscr`} className="text-[#F36F20] font-bold hover:text-[#1C2530] transition-colors">
                  {isEs ? 'Préstamos DSCR' : 'DSCR Loans'}
                </Link>
              </li>
              <li>
                <Link to={`/${locale}/loan-options/bank-statement`} className="text-[#F36F20] font-bold hover:text-[#1C2530] transition-colors">
                  {isEs ? 'Préstamos con estados de cuenta' : 'Bank Statement Loans'}
                </Link>
              </li>
              <li>
                <Link to={`/${locale}/loan-options/heloc-investment`} className="text-[#F36F20] font-bold hover:text-[#1C2530] transition-colors">
                  {isEs ? 'HELOC propiedad de inversión' : 'HELOC, Investment Property'}
                </Link>
              </li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-[#1C2530] mb-3">{isEs ? 'Valor agregado y corto plazo' : 'Value Add and Short Term'}</h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <Link to={`/${locale}/loan-options/fix-flip`} className="text-[#F36F20] font-bold hover:text-[#1C2530] transition-colors">
                  {isEs ? 'Préstamos Fix & Flip' : 'Fix and Flip Loans'}
                </Link>
              </li>
              <li>
                <Link to={`/${locale}/loan-options/fha-203k`} className="text-[#F36F20] font-bold hover:text-[#1C2530] transition-colors">
                  {isEs ? 'FHA 203k para estrategia ocupante' : 'FHA 203k, Owner Occupant Strategy'}
                </Link>
              </li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-[#1C2530] mb-3">{isEs ? 'Construcción y estrategias avanzadas' : 'Ground Up and Advanced'}</h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <Link to={`/${locale}/loan-options/ground-up-construction`} className="text-[#F36F20] font-bold hover:text-[#1C2530] transition-colors">
                  {isEs ? 'Construcción desde cero' : 'Ground Up Construction'}
                </Link>
              </li>
              <li>
                <span className="text-gray-700 font-semibold">
                  {isEs ? 'Estrategia de portafolio y múltiples propiedades' : 'Portfolio and Multiple Property Strategy'}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-[#1C2530] mb-4">
          {isEs ? 'Cómo trabajamos con inversionistas' : 'How We Work With Investors'}
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-10">
          <li>{isEs ? 'Estructura del acuerdo primero.' : 'Deal structure first.'}</li>
          <li>{isEs ? 'La estrategia de salida importa.' : 'Exit strategy matters.'}</li>
          <li>{isEs ? 'Mejor prestamista según el trato, no por logo.' : 'Lender fit over lender logos.'}</li>
          <li>{isEs ? 'Números claros antes de la solicitud.' : 'Clear numbers before application.'}</li>
        </ul>

        <h2 className="text-2xl font-bold text-[#1C2530] mb-4">
          {isEs ? 'Errores comunes de inversionistas' : 'Common Investor Mistakes'}
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-10">
          <li>{isEs ? 'Sobre apalancarse.' : 'Over leveraging.'}</li>
          <li>{isEs ? 'Buscar velocidad sin estructura.' : 'Chasing speed over structure.'}</li>
          <li>{isEs ? 'Usar préstamos de consumo para negocios.' : 'Using consumer loans for business deals.'}</li>
          <li>{isEs ? 'No planear la salida.' : 'Not planning the exit.'}</li>
        </ul>

        <h2 className="text-2xl font-bold text-[#1C2530] mb-4">
          {isEs ? 'Por qué The Legends Mortgage Team' : 'Why Legends Mortgage Team'}
        </h2>
        <div className="space-y-3 text-gray-700 mb-10">
          {isEs ? (
            <>
              <p>Como broker, comparamos múltiples prestamistas de inversión.</p>
              <p>La organización se apoya en IA, las decisiones quedan en manos humanas.</p>
              <p>La responsabilidad se mantiene hasta el cierre.</p>
            </>
          ) : (
            <>
              <p>As a broker, we compare multiple investor focused lenders.</p>
              <p>AI supports organization, humans own decisions.</p>
              <p>Accountability stays with us through closing.</p>
            </>
          )}
        </div>

        <div className="bg-[#F1F3F5] rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-bold text-[#1C2530] mb-4">
            {isEs ? '¿Listo para avanzar?' : 'Ready to Move Forward?'}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to={`/${locale}/apply`} className="inline-block bg-[#F36F20] text-white px-6 py-3 rounded font-bold hover:bg-orange-600 transition-colors text-center">
              {isEs ? 'Comenzar con los números' : 'Start With the Numbers'}
            </Link>
            <Link to={`/${locale}/contact`} className="inline-block bg-[#1C2530] text-white px-6 py-3 rounded font-bold hover:bg-gray-800 transition-colors text-center">
              {isEs ? 'Hablar sobre un trato' : 'Talk Through a Deal'}
            </Link>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-[#1C2530] mb-4">{isEs ? 'Preguntas frecuentes' : 'FAQ'}</h2>
        <div className="space-y-4 text-gray-700">
          <p><strong>{isEs ? '¿Quién califica como inversionista?' : 'Who qualifies as an investor?'}</strong> {isEs ? 'Quien compra con objetivos de renta, reventa o portafolio.' : 'Anyone buying with rental, resale, or portfolio goals.'}</p>
          <p><strong>{isEs ? '¿Necesito una LLC?' : 'Do I need an LLC?'}</strong> {isEs ? 'No siempre, depende de la estrategia y el prestamista.' : 'Not always, it depends on the strategy and lender.'}</p>
          <p><strong>{isEs ? '¿Puedo financiar varias propiedades?' : 'Can I finance multiple properties?'}</strong> {isEs ? 'Sí, con estructura, reservas y documentación claras.' : 'Yes, with clear structure, reserves, and documentation.'}</p>
          <p><strong>{isEs ? '¿Cuándo DSCR no funciona?' : 'When does DSCR not work?'}</strong> {isEs ? 'Cuando la propiedad no genera flujo suficiente o no hay reservas.' : 'When the property does not cash flow or reserves are thin.'}</p>
        </div>
      </div>
    </section>
  );
};

export default InvestorHubPage;
