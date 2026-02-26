import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../../components/Seo';
import ProgramVideo from '../../components/ProgramVideo';
import { useLocale } from '../../i18n/locale';

const Fha203kPage: React.FC = () => {
  const locale = useLocale();
  const seo = locale === 'es'
    ? {
        title: 'FHA 203k para compra y remodelación | Legends Mortgage Team',
        description: 'FHA 203k combina compra o refinanciamiento con remodelación, con reglas claras, presupuesto definido y coordinación estricta.'
      }
    : {
        title: 'FHA 203k Renovation Loans for Buyers | Legends Mortgage Team',
        description: 'FHA 203k renovation loans that combine purchase and rehab with clear budgets, structured draws, and lender guidance for committed buyers and timelines.'
      };

  return (
    <section className="py-16 bg-white">
      <Seo
        title={seo.title}
        description={seo.description}
        canonical={`/${locale}/loan-options/fha-203k`}
        locale={locale}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-sm text-gray-500 mb-4">
          <Link to={`/${locale}`} className="hover:text-[#1C2530]">{locale === 'es' ? 'Inicio' : 'Home'}</Link>
          <span className="mx-2">→</span>
          <Link to={`/${locale}/loan-options`} className="hover:text-[#1C2530]">{locale === 'es' ? 'Opciones de Préstamo' : 'Loan Options'}</Link>
          <span className="mx-2">→</span>
          <span>{locale === 'es' ? 'FHA 203k' : 'FHA 203k Renovation Loans'}</span>
        </div>
        <div className="mb-6">
          <Link to={`/${locale}/loan-options`} className="text-[#F36F20] font-bold hover:text-[#1C2530] transition-colors">
            {locale === 'es' ? 'Volver a Opciones de Préstamo' : 'Back to Loan Options'}
          </Link>
        </div>
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#1C2530] mb-6">
          {locale === 'es'
            ? 'FHA 203k para compra y remodelación en un solo préstamo'
            : 'FHA 203k Renovation Loans for Buyers Who Need Rehab Funding'}
        </h1>
        <p className="text-[#F36F20] font-bold mb-6">
          {locale === 'es'
            ? 'Ideal para compradores que quieren un solo préstamo para compra y remodelación.'
            : 'Best for buyers who want one loan for purchase and renovation.'}
        </p>
        <div className="space-y-4 text-gray-700">
          {locale === 'es' ? (
            <>
              <p>FHA 203k combina compra o refinanciamiento con remodelación en un solo préstamo.</p>
              <p>Funciona para compradores que quieren mejorar la propiedad antes de mudarse.</p>
              <p>Definimos alcance, presupuesto y contratista con reglas claras.</p>
              <p>Este proceso es más largo y requiere coordinación estricta.</p>
              <p>No es para usted si necesita un cierre rápido o poca documentación.</p>
            </>
          ) : (
            <>
              <p>FHA 203k combines the purchase and renovation in one loan.</p>
              <p>This works for buyers who want to improve a property before moving in.</p>
              <p>We set a realistic scope, budget, and contractor plan.</p>
              <p>Not a fit if you need a fast close or want a "light paperwork" renovation.</p>
            </>
          )}
        </div>
        <ProgramVideo slug="fha-203k" />

        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">{locale === 'es' ? 'Para quién es' : 'Who This Is For'}</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          {locale === 'es' ? (
            <>
              <li>Compradores que quieren financiar reparaciones en el préstamo.</li>
              <li>Propietarios que necesitan un proceso de obra controlado.</li>
              <li>Personas con plan de contratista calificado.</li>
              <li>Clientes que buscan un solo cierre para compra y obra.</li>
            </>
          ) : (
            <>
              <li>Buyers who want to finance repairs in the loan.</li>
              <li>Owners who need a controlled rehab process.</li>
              <li>Borrowers with a qualified contractor plan.</li>
              <li>Clients who want one closing for purchase and rehab.</li>
            </>
          )}
        </ul>

        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">{locale === 'es' ? 'Cómo funciona en la práctica' : 'How It Actually Works'}</h2>
        <div className="space-y-4 text-gray-700">
          {locale === 'es' ? (
            <>
              <p>El préstamo se calcula con base en el valor mejorado.</p>
              <p>Las reparaciones se liberan por etapas con inspecciones.</p>
              <p>Coordinamos prestamista, contratista y tasación.</p>
              <p>El tiempo y la documentación importan más de lo que parece.</p>
            </>
          ) : (
            <>
              <p>The loan is based on the after improved value.</p>
              <p>Repairs are completed through draws with inspections.</p>
              <p>We coordinate the lender, contractor, and appraisal steps.</p>
              <p>Timing and documentation matter more than most buyers expect.</p>
            </>
          )}
        </div>

        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">{locale === 'es' ? 'Errores comunes' : 'Common Mistakes'}</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          {locale === 'es' ? (
            <>
              <li>Elegir un contratista que no cumple reglas del prestamista.</li>
              <li>Subestimar tiempos de inspecciones y desembolsos.</li>
              <li>Suponer que el vendedor esperará sin plan claro.</li>
              <li>No definir un alcance detallado de trabajo.</li>
            </>
          ) : (
            <>
              <li>Choosing a contractor who cannot meet lender rules.</li>
              <li>Underestimating timelines for draws and inspections.</li>
              <li>Assuming the seller will wait without a clear plan.</li>
              <li>Skipping a detailed scope of work.</li>
            </>
          )}
        </ul>

        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">{locale === 'es' ? 'Por qué The Legends Mortgage Team' : 'Why The Legends Mortgage Team'}</h2>
        <div className="space-y-4 text-gray-700">
          {locale === 'es' ? (
            <>
              <p>Guiamos el alcance, la línea de tiempo y el prestamista correcto.</p>
              <p>Coordinamos partes para evitar retrasos costosos.</p>
              <p>Usted recibe expectativas claras antes de comprometerse.</p>
            </>
          ) : (
            <>
              <p>We guide the project scope, timeline, and lender fit.</p>
              <p>We coordinate the parties to avoid costly delays.</p>
              <p>You get clear expectations before you commit.</p>
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
                <li>Dirección de la propiedad y presupuesto de obra.</li>
                <li>Precio de compra y monto de pago inicial.</li>
                <li>Contratista propuesto y alcance preliminar.</li>
              </>
            ) : (
              <>
                <li>Property address and rehab budget.</li>
                <li>Purchase price and down payment amount.</li>
                <li>Proposed contractor and initial scope.</li>
              </>
            )}
          </ul>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Link to={`/${locale}/apply`} className="inline-block bg-[#F36F20] text-white px-6 py-3 rounded font-bold hover:bg-orange-600 transition-colors text-center">
              {locale === 'es' ? 'Comenzar mi aprobación' : 'Apply Online'}
            </Link>
            <Link to={`/${locale}/team`} className="inline-block bg-[#1C2530] text-white px-6 py-3 rounded font-bold hover:bg-gray-800 transition-colors text-center">
              {locale === 'es' ? 'Conozca al equipo' : 'Meet the Team'}
            </Link>
          </div>
        </div>

        <div className="mt-10 bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-[#1C2530] mb-4">{locale === 'es' ? 'Chequeo rápido' : 'Fast Pre Check'}</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            {locale === 'es' ? (
              <>
                <li>Objetivo y tipo de propiedad.</li>
                <li>Rango de precio y pago inicial.</li>
                <li>Plazo deseado para cierre.</li>
              </>
            ) : (
              <>
                <li>Goal and property type.</li>
                <li>Target price range and down payment.</li>
                <li>Desired closing timeline.</li>
              </>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Fha203kPage;
