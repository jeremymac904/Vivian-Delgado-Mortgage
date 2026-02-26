import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../../components/Seo';
import ProgramVideo from '../../components/ProgramVideo';
import { useLocale } from '../../i18n/locale';

const HelocInvestmentPage: React.FC = () => {
  const locale = useLocale();
  return (
    <section className="py-16 bg-white">
      <Seo
        title="Investment Property HELOCs for Investors | Legends Mortgage"
        description="Investment property HELOCs for investors seeking flexible equity access with clear risk, pricing, and expectations for long term planning and liquidity."
        canonical={`/${locale}/loan-options/heloc-investment`}
        locale={locale}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:text-[#1C2530]">Home</Link>
          <span className="mx-2">→</span>
          <Link to={`/${locale}/loan-options`} className="hover:text-[#1C2530]">Loan Options</Link>
          <span className="mx-2">→</span>
          <span>HELOCs, Investment Property</span>
        </div>
        <div className="mb-6">
          <Link to={`/${locale}/loan-options`} className="text-[#F36F20] font-bold hover:text-[#1C2530] transition-colors">
            Back to Loan Options
          </Link>
        </div>
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#1C2530] mb-6">
          HELOCs for Investment Property Owners Seeking Flexible Capital
        </h1>
        <p className="text-[#F36F20] font-bold mb-6">Best for investors with strong equity and a clear capital plan.</p>
        <div className="space-y-4 text-gray-700">
          {locale === 'es' ? (
            <>
              <p>Los HELOCs sobre propiedades de inversión permiten acceder a capital para inversionistas.</p>
              <p>Los términos y precios son distintos a los de vivienda principal.</p>
              <p>Confirmamos apalancamiento, reservas y nivel de riesgo.</p>
              <p>No es para usted si espera precios de vivienda principal o documentación mínima.</p>
            </>
          ) : (
            <>
              <p>Investment property HELOCs provide access to equity for investors.</p>
              <p>Terms and pricing are different than primary residence HELOCs.</p>
              <p>We set expectations on leverage, reserves, and risk.</p>
              <p>Not a fit if you expect primary-residence pricing or minimal documentation.</p>
            </>
          )}
        </div>
        <ProgramVideo slug="heloc-investment" />
        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">Who This Is For</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Investors with equity in rental properties.</li>
          <li>Owners who want flexible capital for acquisitions.</li>
          <li>Borrowers with strong credit and liquidity.</li>
          <li>Clients who understand variable rate risk.</li>
        </ul>
        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">How It Actually Works</h2>
        <div className="space-y-4 text-gray-700">
          <p>These HELOCs are second liens with stricter leverage limits.</p>
          <p>Rates are often variable and pricing reflects risk.</p>
          <p>We compare lender terms and total cost.</p>
          <p>We also plan how you will use and repay the line.</p>
        </div>
        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">Common Mistakes</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Assuming primary residence terms apply.</li>
          <li>Taking maximum leverage without a plan.</li>
          <li>Ignoring lender reserve requirements.</li>
          <li>Overlooking prepayment rules and fees.</li>
        </ul>
        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">Why The Legends Mortgage Team</h2>
        <div className="space-y-4 text-gray-700">
          <p>We compare investment HELOC lenders and terms.</p>
          <p>We explain the risk, cost, and strategy clearly.</p>
          <p>You get a structure that fits your portfolio plan.</p>
        </div>
        <div className="mt-10 bg-[#F1F3F5] rounded-lg p-6">
          <h2 className="text-2xl font-bold text-[#1C2530] mb-4">What I Need From You to Quote Accurately</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Property address, current value, and loan balance.</li>
            <li>Rental income and current lease details.</li>
            <li>Credit score range and liquidity.</li>
          </ul>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Link to={`/${locale}/apply`} className="inline-block bg-[#F36F20] text-white px-6 py-3 rounded font-bold hover:bg-orange-600 transition-colors text-center">
              Apply Online
            </Link>
            <Link to={`/${locale}/contact`} className="inline-block bg-[#1C2530] text-white px-6 py-3 rounded font-bold hover:bg-gray-800 transition-colors text-center">
              Get a Clear Answer
            </Link>
          </div>
        </div>
        <div className="mt-10 bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-[#1C2530] mb-4">Fast Pre Check</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Property value and current loan balance.</li>
            <li>Rental income and occupancy status.</li>
            <li>Planned use of funds and repayment plan.</li>
          </ul>
        </div>
        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">Related Options</h2>
        <div className="space-y-2 text-gray-700">
          <Link to={`/${locale}/loan-options/dscr`} className="text-[#F36F20] font-bold hover:text-[#1C2530] transition-colors">DSCR Loans</Link>
          <span className="mx-2">,</span>
          <Link to={`/${locale}/loan-options/fix-flip`} className="text-[#F36F20] font-bold hover:text-[#1C2530] transition-colors">Fix and Flip Loans</Link>
          <span className="mx-2">,</span>
          <Link to={`/${locale}/loan-options/heloc-primary`} className="text-[#F36F20] font-bold hover:text-[#1C2530] transition-colors">HELOCs, Primary Residence</Link>
        </div>
        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">FAQs</h2>
        <div className="space-y-4 text-gray-700">
          <p><strong>Can you get a HELOC on an investment property?</strong> Yes, but fewer lenders offer them and requirements are stricter.</p>
          <p><strong>How are investment HELOCs different from primary HELOCs?</strong> They typically require more equity and have higher rates.</p>
          <p><strong>What can an investment HELOC be used for?</strong> Common uses include renovations, down payments, or portfolio leverage.</p>
          <p><strong>When is an investment HELOC not a good fit?</strong> When cash flow is weak or there is no clear repayment strategy.</p>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Can you get a HELOC on an investment property?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, but fewer lenders offer them and requirements are stricter."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How are investment HELOCs different from primary HELOCs?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "They typically require more equity and have higher rates."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What can an investment HELOC be used for?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Common uses include renovations, down payments, or portfolio leverage."
                  }
                },
                {
                  "@type": "Question",
                  "name": "When is an investment HELOC not a good fit?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "When cash flow is weak or there is no clear repayment strategy."
                  }
                }
              ]
            })
          }}
        />
      </div>
    </section>
  );
};

export default HelocInvestmentPage;
