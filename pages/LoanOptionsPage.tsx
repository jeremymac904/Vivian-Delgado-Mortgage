import React from 'react';
import { Link } from 'react-router-dom';
import LoanOptions from '../components/LoanOptions';
import Seo from '../components/Seo';
import { useLocale } from '../i18n/locale';

const LoanOptionsPage: React.FC = () => {
  const locale = useLocale();
  const seo = locale === 'es'
    ? {
        title: 'Opciones de préstamo | Legends Mortgage Team',
        description: 'Compare opciones por intención, compra, inversión o refinanciamiento, y elija el programa correcto con claridad.'
      }
    : {
        title: 'Loan Options | Legends Mortgage Team',
        description: 'Compare loan programs by intent, purchase, investment, or refinance, and choose the right fit with clarity.'
      };

  return (
    <>
      <Seo
        title={seo.title}
        description={seo.description}
        canonical={`/${locale}/loan-options`}
        locale={locale}
      />
      <LoanOptions />
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#1C2530] mb-6">
            {locale === 'es' ? 'Elija el programa correcto' : 'Explore Each Loan Program'}
          </h1>
          <p className="text-gray-600 mb-10 max-w-2xl">
            {locale === 'es'
              ? 'Use estas categorías para elegir con claridad, luego revise cada programa.'
              : 'Choose a program page for details, tradeoffs, and next steps.'}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#1C2530] mb-4">
                {locale === 'es' ? 'Compra de vivienda' : 'Home Purchase'}
              </h3>
              <div className="space-y-3 text-gray-700">
                <Link to={`/${locale}/loan-options/conventional`} className="text-[#F36F20] font-bold hover:text-[#1C2530] transition-colors">{locale === 'es' ? 'Préstamos Convencionales' : 'Conventional Loans'}</Link>
                <Link to={`/${locale}/loan-options/fha`} className="text-[#F36F20] font-bold hover:text-[#1C2530] transition-colors">{locale === 'es' ? 'Préstamos FHA' : 'FHA Loans'}</Link>
                <Link to={`/${locale}/loan-options/va`} className="text-[#F36F20] font-bold hover:text-[#1C2530] transition-colors">{locale === 'es' ? 'Préstamos VA' : 'VA Loans'}</Link>
                <Link to={`/${locale}/loan-options/usda`} className="text-[#F36F20] font-bold hover:text-[#1C2530] transition-colors">{locale === 'es' ? 'Préstamos USDA' : 'USDA Loans'}</Link>
                <Link to={`/${locale}/loan-options/jumbo`} className="text-[#F36F20] font-bold hover:text-[#1C2530] transition-colors">{locale === 'es' ? 'Préstamos Jumbo' : 'Jumbo Loans'}</Link>
                <Link to={`/${locale}/loan-options/homeready`} className="text-[#F36F20] font-bold hover:text-[#1C2530] transition-colors">{locale === 'es' ? 'Préstamos HomeReady' : 'HomeReady Loans'}</Link>
                <Link to={`/${locale}/loan-options/home-possible`} className="text-[#F36F20] font-bold hover:text-[#1C2530] transition-colors">{locale === 'es' ? 'Préstamos Home Possible' : 'Home Possible Loans'}</Link>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#1C2530] mb-4">
                {locale === 'es' ? 'Inversión y construcción' : 'Investor and Construction'}
              </h3>
              <div className="space-y-3 text-gray-700">
                <Link to={`/${locale}/loan-options/dscr`} className="text-[#F36F20] font-bold hover:text-[#1C2530] transition-colors">{locale === 'es' ? 'Préstamos DSCR' : 'DSCR Loans'}</Link>
                <Link to={`/${locale}/loan-options/fix-flip`} className="text-[#F36F20] font-bold hover:text-[#1C2530] transition-colors">{locale === 'es' ? 'Préstamos Fix & Flip' : 'Fix and Flip Loans'}</Link>
                <Link to={`/${locale}/loan-options/ground-up-construction`} className="text-[#F36F20] font-bold hover:text-[#1C2530] transition-colors">{locale === 'es' ? 'Construcción desde cero' : 'Ground Up Investor Construction Loans'}</Link>
                <Link to={`/${locale}/loan-options/fha-203k`} className="text-[#F36F20] font-bold hover:text-[#1C2530] transition-colors">{locale === 'es' ? 'FHA 203k' : 'FHA 203k Renovation Loans'}</Link>
                <Link to={`/${locale}/loan-options/itin`} className="text-[#F36F20] font-bold hover:text-[#1C2530] transition-colors">{locale === 'es' ? 'Préstamos ITIN' : 'ITIN Loans'}</Link>
                <Link to={`/${locale}/loan-options/bank-statement`} className="text-[#F36F20] font-bold hover:text-[#1C2530] transition-colors">{locale === 'es' ? 'Préstamos con estados de cuenta' : 'Bank Statement Loans'}</Link>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#1C2530] mb-4">
                {locale === 'es' ? 'Equidad y refinanciamiento' : 'Equity and Refinance'}
              </h3>
              <div className="space-y-3 text-gray-700">
                <Link to={`/${locale}/loan-options/refinance`} className="text-[#F36F20] font-bold hover:text-[#1C2530] transition-colors">{locale === 'es' ? 'Refinanciamiento' : 'Refinance'}</Link>
                <Link to={`/${locale}/loan-options/heloc-primary`} className="text-[#F36F20] font-bold hover:text-[#1C2530] transition-colors">{locale === 'es' ? 'HELOC vivienda principal' : 'HELOCs, Primary Residence'}</Link>
                <Link to={`/${locale}/loan-options/heloc-investment`} className="text-[#F36F20] font-bold hover:text-[#1C2530] transition-colors">{locale === 'es' ? 'HELOC propiedad de inversión' : 'HELOCs, Investment Property'}</Link>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-[#F1F3F5] rounded-lg p-6">
            <h2 className="text-2xl font-bold text-[#1C2530] mb-4">
              {locale === 'es' ? 'Siguiente paso claro' : 'Next Clear Step'}
            </h2>
            <p className="text-gray-700 mb-6">
              {locale === 'es'
                ? 'Elija un programa, luego confirme su elegibilidad y el costo total.'
                : 'Pick a program, then confirm eligibility and total cost before you commit.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={`/${locale}/apply`} className="inline-block bg-[#F36F20] text-white px-6 py-3 rounded font-bold hover:bg-orange-600 transition-colors text-center">
                {locale === 'es' ? 'Comenzar mi aprobación' : 'Apply Online'}
              </Link>
              <Link to={`/${locale}/team`} className="inline-block bg-[#1C2530] text-white px-6 py-3 rounded font-bold hover:bg-gray-800 transition-colors text-center">
                {locale === 'es' ? 'Conozca al equipo' : 'Get a Clear Answer'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoanOptionsPage;
