import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../../components/Seo';
import ProgramVideo from '../../components/ProgramVideo';
import { useLocale } from '../../i18n/locale';

const DscrPage: React.FC = () => {
  const locale = useLocale();
  const seo = locale === 'es'
    ? {
        title: 'Préstamos DSCR para inversionistas | Legends Mortgage Team',
        description: 'Préstamos DSCR para inversionistas enfocados en flujo de renta, estructura clara y ejecución eficiente.'
      }
    : {
        title: 'DSCR Loans for Real Estate Investors | Legends Mortgage',
        description: 'DSCR loans for investors focused on rental cash flow, property performance, and clean structure. We explain tradeoffs, fit, and next steps with clear answers.'
      };

  return (
    <section className="py-16 bg-white">
      <Seo
        title={seo.title}
        description={seo.description}
        canonical={`/${locale}/loan-options/dscr`}
        locale={locale}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-sm text-gray-500 mb-4">
          <Link to={`/${locale}`} className="hover:text-[#1C2530]">{locale === 'es' ? 'Inicio' : 'Home'}</Link>
          <span className="mx-2">→</span>
          <Link to={`/${locale}/loan-options`} className="hover:text-[#1C2530]">{locale === 'es' ? 'Opciones de Préstamo' : 'Loan Options'}</Link>
          <span className="mx-2">→</span>
          <span>{locale === 'es' ? 'Préstamos DSCR' : 'DSCR Loans'}</span>
        </div>
        <div className="mb-6">
          <Link to={`/${locale}/loan-options`} className="text-[#F36F20] font-bold hover:text-[#1C2530] transition-colors">
            {locale === 'es' ? 'Volver a Opciones de Préstamo' : 'Back to Loan Options'}
          </Link>
        </div>
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#1C2530] mb-6">
          {locale === 'es'
            ? 'Préstamos DSCR para inversionistas enfocados en flujo de renta'
            : 'DSCR Loans for Investors Focused on Cash Flow and Speed'}
        </h1>
        <p className="text-[#F36F20] font-bold mb-6">
          {locale === 'es'
            ? 'Ideal para inversionistas que buscan estructura clara y ejecución eficiente.'
            : 'Best for rental investors who want asset based approval and fast execution.'}
        </p>
        <div className="space-y-4 text-gray-700">
          {locale === 'es' ? (
            <>
              <p>Los préstamos DSCR califican con el flujo de renta de la propiedad, no con ingreso personal.</p>
              <p>Son ideales para inversionistas que buscan estructura clara y ejecución eficiente.</p>
              <p>Confirmamos renta, reservas y estructura del precio antes de avanzar.</p>
              <p>No es para usted si necesita calificar con ingreso W-2 en lugar de flujo de renta.</p>
            </>
          ) : (
            <>
              <p>DSCR loans qualify the property, not your personal income.</p>
              <p>This fits investors who want a clean path to scale.</p>
              <p>We set expectations on rents, reserves, and pricing.</p>
              <p>Not a fit if you need to qualify using W2 income instead of property cash flow.</p>
            </>
          )}
        </div>
        <ProgramVideo slug="dscr" />

        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">
          {locale === 'es' ? 'Para quién es' : 'Who This Is For'}
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          {locale === 'es' ? (
            <>
              <li>Inversionistas con renta estable y flujo claro.</li>
              <li>Compradores que quieren calificar por activo.</li>
              <li>Clientes que construyen portafolio de renta.</li>
              <li>Propietarios que valoran velocidad y simplicidad.</li>
            </>
          ) : (
            <>
              <li>Investors with stable rents and clear cash flow.</li>
              <li>Borrowers who want asset based qualifying.</li>
              <li>Clients building a rental portfolio.</li>
              <li>Owners who value speed and simplicity.</li>
            </>
          )}
        </ul>

        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">
          {locale === 'es' ? 'Cómo funciona en la práctica' : 'How It Actually Works'}
        </h2>
        <div className="space-y-4 text-gray-700">
          {locale === 'es' ? (
            <>
              <p>DSCR usa la renta para cubrir pago, impuestos y seguro.</p>
              <p>Revisamos contratos, renta de mercado y condición de la propiedad.</p>
              <p>El precio cambia según flujo y nivel de apalancamiento.</p>
              <p>Estructuramos términos según su estrategia de tenencia.</p>
            </>
          ) : (
            <>
              <p>DSCR uses rent to cover the payment, taxes, and insurance.</p>
              <p>We review leases, market rent, and property condition.</p>
              <p>Pricing changes with cash flow strength and leverage.</p>
              <p>We structure terms to fit your hold strategy.</p>
            </>
          )}
        </div>

        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">
          {locale === 'es' ? 'Errores comunes' : 'Common Mistakes'}
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          {locale === 'es' ? (
            <>
              <li>Usar renta optimista sin soporte real.</li>
              <li>Ignorar necesidades de reservas y liquidez.</li>
              <li>Elegir el máximo apalancamiento sin margen de flujo.</li>
              <li>Asumir que todos los prestamistas DSCR cobran igual.</li>
            </>
          ) : (
            <>
              <li>Using optimistic rent estimates without support.</li>
              <li>Ignoring reserve and liquidity needs.</li>
              <li>Choosing the highest leverage without a cash flow buffer.</li>
              <li>Assuming all DSCR lenders price the same.</li>
            </>
          )}
        </ul>

        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">
          {locale === 'es' ? 'Por qué The Legends Mortgage Team' : 'Why The Legends Mortgage Team'}
        </h2>
        <div className="space-y-4 text-gray-700">
          {locale === 'es' ? (
            <>
              <p>Comparamos prestamistas DSCR y diferencias reales de precio.</p>
              <p>Mostramos el impacto real en flujo y en costo total.</p>
              <p>Usted recibe claridad antes de comprometerse.</p>
            </>
          ) : (
            <>
              <p>We compare DSCR lenders and pricing differences.</p>
              <p>We show the real cash flow impact and tradeoffs.</p>
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
                <li>Dirección de la propiedad y renta actual o proyectada.</li>
                <li>Precio de compra o saldo actual.</li>
                <li>Efectivo disponible para pago inicial y reservas.</li>
              </>
            ) : (
              <>
                <li>Property address and current or projected rent.</li>
                <li>Purchase price or current loan balance.</li>
                <li>Estimated cash available for down payment and reserves.</li>
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
                <li>Renta mensual estimada y dirección.</li>
                <li>Precio de compra y efectivo disponible.</li>
                <li>Plazo objetivo para cierre.</li>
              </>
            ) : (
              <>
                <li>Estimated monthly rent and property address.</li>
                <li>Purchase price and estimated cash available.</li>
                <li>Target closing timeline.</li>
              </>
            )}
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">{locale === 'es' ? 'Opciones relacionadas' : 'Related Options'}</h2>
        <div className="space-y-2 text-gray-700">
          <Link to={`/${locale}/loan-options/fix-flip`} className="text-[#F36F20] font-bold hover:text-[#1C2530] transition-colors">
            {locale === 'es' ? 'Préstamos Fix & Flip' : 'Fix and Flip Loans'}
          </Link>
          <span className="mx-2">,</span>
          <Link to={`/${locale}/loan-options/heloc-investment`} className="text-[#F36F20] font-bold hover:text-[#1C2530] transition-colors">
            {locale === 'es' ? 'HELOC propiedad de inversión' : 'HELOCs, Investment Property'}
          </Link>
          <span className="mx-2">,</span>
          <Link to={`/${locale}/loan-options/bank-statement`} className="text-[#F36F20] font-bold hover:text-[#1C2530] transition-colors">
            {locale === 'es' ? 'Préstamos con estados de cuenta' : 'Bank Statement Loans'}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DscrPage;
