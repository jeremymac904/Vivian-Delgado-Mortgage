import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../../components/Seo';
import ProgramVideo from '../../components/ProgramVideo';
import { useLocale } from '../../i18n/locale';

const HelocPrimaryPage: React.FC = () => {
  const locale = useLocale();
  return (
    <section className="py-16 bg-white">
      <Seo
        title="HELOCs for Primary Residence Owners | Legends Mortgage Team"
        description="Primary residence HELOCs for homeowners who want flexible access to equity with clear terms, costs, and expectations, plus repayment planning and rate clarity."
        canonical={`/${locale}/loan-options/heloc-primary`}
        locale={locale}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:text-[#1C2530]">Home</Link>
          <span className="mx-2">→</span>
          <Link to={`/${locale}/loan-options`} className="hover:text-[#1C2530]">Loan Options</Link>
          <span className="mx-2">→</span>
          <span>HELOCs, Primary Residence</span>
        </div>
        <div className="mb-6">
          <Link to={`/${locale}/loan-options`} className="text-[#F36F20] font-bold hover:text-[#1C2530] transition-colors">
            Back to Loan Options
          </Link>
        </div>
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#1C2530] mb-6">
          HELOCs for Primary Residence Owners Seeking Flexible Equity Access
        </h1>
        <p className="text-[#F36F20] font-bold mb-6">Best for owners with strong equity and a defined repayment plan.</p>
        <div className="space-y-4 text-gray-700">
          {locale === 'es' ? (
            <>
              <p>Un HELOC sobre vivienda principal permite acceder a capital sin reemplazar la hipoteca existente.</p>
              <p>Funciona mejor con un plan claro de uso y pago.</p>
              <p>Revisamos tasa, términos y costo total del crédito.</p>
              <p>No es para usted si ya está ajustado en obligaciones mensuales.</p>
            </>
          ) : (
            <>
              <p>A primary residence HELOC gives access to equity without replacing your first mortgage.</p>
              <p>It works best for owners who want flexible draw and repayment options.</p>
              <p>We review rate structure, terms, and total cost.</p>
              <p>Not a fit if you're already stretched thin on monthly obligations.</p>
            </>
          )}
        </div>
        <ProgramVideo slug="heloc-primary" />
        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">Who This Is For</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Owners with meaningful equity in their primary home.</li>
          <li>Borrowers who want a revolving credit line.</li>
          <li>Clients planning renovations or large expenses.</li>
          <li>Homeowners who want to keep their first mortgage.</li>
        </ul>
        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">How It Actually Works</h2>
        <div className="space-y-4 text-gray-700">
          <p>A HELOC is a second lien with a draw period and repayment period.</p>
          <p>Rates are often variable, and payments change with balances.</p>
          <p>We compare lenders for margin, caps, and fees.</p>
          <p>We also review combined loan to value limits.</p>
        </div>
        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">Common Mistakes</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Ignoring how variable rates affect long term cost.</li>
          <li>Using a HELOC without a repayment plan.</li>
          <li>Assuming approval is the same as conventional loans.</li>
          <li>Not comparing fees and line terms.</li>
        </ul>
        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">Why The Legends Mortgage Team</h2>
        <div className="space-y-4 text-gray-700">
          <p>We compare HELOC terms across lenders.</p>
          <p>We explain rate structure and total cost in plain language.</p>
          <p>You get a clean plan before you draw funds.</p>
        </div>
        <div className="mt-10 bg-[#F1F3F5] rounded-lg p-6">
          <h2 className="text-2xl font-bold text-[#1C2530] mb-4">What I Need From You to Quote Accurately</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Current mortgage balance and estimated home value.</li>
            <li>Credit score range and current income.</li>
            <li>How you plan to use the line.</li>
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
            <li>Estimated home value and current balance.</li>
            <li>Credit score range and monthly income.</li>
            <li>Planned use and repayment timeline.</li>
          </ul>
        </div>
        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">Related Options</h2>
        <div className="space-y-2 text-gray-700">
          <Link to={`/${locale}/loan-options/refinance`} className="text-[#F36F20] font-bold hover:text-[#1C2530] transition-colors">Refinance</Link>
          <span className="mx-2">,</span>
          <Link to={`/${locale}/loan-options/heloc-investment`} className="text-[#F36F20] font-bold hover:text-[#1C2530] transition-colors">HELOCs, Investment Property</Link>
          <span className="mx-2">,</span>
          <Link to={`/${locale}/loan-options/conventional`} className="text-[#F36F20] font-bold hover:text-[#1C2530] transition-colors">Conventional Loans</Link>
        </div>
        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">FAQs</h2>
        <div className="space-y-4 text-gray-700">
          <p><strong>What is a HELOC on a primary residence?</strong> A HELOC is a revolving line of credit secured by your home’s equity.</p>
          <p><strong>How does repayment work?</strong> You can draw funds as needed and make payments based on the balance used.</p>
          <p><strong>Are HELOC rates fixed or variable?</strong> Most HELOCs have variable interest rates.</p>
          <p><strong>When is a HELOC not a good idea?</strong> When monthly obligations are already tight or equity is needed for stability.</p>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "What is a HELOC on a primary residence?", "acceptedAnswer": { "@type": "Answer", "text": "A HELOC is a revolving line of credit secured by your home’s equity." } },
                { "@type": "Question", "name": "How does repayment work?", "acceptedAnswer": { "@type": "Answer", "text": "You can draw funds as needed and make payments based on the balance used." } },
                { "@type": "Question", "name": "Are HELOC rates fixed or variable?", "acceptedAnswer": { "@type": "Answer", "text": "Most HELOCs have variable interest rates." } },
                { "@type": "Question", "name": "When is a HELOC not a good idea?", "acceptedAnswer": { "@type": "Answer", "text": "When monthly obligations are already tight or equity is needed for stability." } }
              ]
            })
          }}
        />
      </div>
    </section>
  );
};

export default HelocPrimaryPage;
