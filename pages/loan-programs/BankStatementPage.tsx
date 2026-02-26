import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../../components/Seo';
import ProgramVideo from '../../components/ProgramVideo';
import { useLocale } from '../../i18n/locale';

const BankStatementPage: React.FC = () => {
  const locale = useLocale();
  return (
    <section className="py-16 bg-white">
      <Seo
        title="Bank Statement Loans for Self Employed | Legends Mortgage"
        description="Bank statement loans for self employed borrowers who need alternative income documentation, clear structure, and realistic expectations with clean deposits."
        canonical={`/${locale}/loan-options/bank-statement`}
        locale={locale}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:text-[#1C2530]">Home</Link>
          <span className="mx-2">→</span>
          <Link to={`/${locale}/loan-options`} className="hover:text-[#1C2530]">Loan Options</Link>
          <span className="mx-2">→</span>
          <span>Bank Statement Loans</span>
        </div>
        <div className="mb-6">
          <Link to={`/${locale}/loan-options`} className="text-[#F36F20] font-bold hover:text-[#1C2530] transition-colors">
            Back to Loan Options
          </Link>
        </div>
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#1C2530] mb-6">
          Bank Statement Loans for Self Employed Borrowers
        </h1>
        <p className="text-[#F36F20] font-bold mb-6">Best for self employed borrowers with clean deposits and steady cash flow.</p>
        <div className="space-y-4 text-gray-700">
          {locale === 'es' ? (
            <>
              <p>Los préstamos con estados de cuenta califican con depósitos, no con declaraciones de impuestos.</p>
              <p>Son ideales para trabajadores independientes con flujo de efectivo consistente.</p>
              <p>Confirmamos depósitos, gastos y estructura del ingreso desde el inicio.</p>
              <p>Definimos el enfoque correcto de documentación antes de avanzar.</p>
              <p>No es para usted si los depósitos son irregulares o no están organizados.</p>
            </>
          ) : (
            <>
              <p>Bank statement loans qualify income from deposits, not tax returns.</p>
              <p>This fits self employed borrowers with strong cash flow.</p>
              <p>We review statements early and set clean expectations.</p>
              <p>Not a fit if your deposits are messy or you're trying to qualify off irregular cash.</p>
            </>
          )}
        </div>
        <ProgramVideo slug="bank-statement" />
        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">Who This Is For</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Self employed borrowers with consistent deposits.</li>
          <li>Owners with write offs that reduce taxable income.</li>
          <li>Buyers who want a clear documentation path.</li>
          <li>Clients who can show stable business activity.</li>
        </ul>
        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">How It Actually Works</h2>
        <div className="space-y-4 text-gray-700">
          <p>Income is calculated from bank statements over a set period.</p>
          <p>Business expense factors reduce qualifying income.</p>
          <p>We compare lenders to find the best expense factor.</p>
          <p>We also review assets and reserves to strengthen the file.</p>
        </div>
        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">Common Mistakes</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Mixing personal and business deposits without clarity.</li>
          <li>Waiting too long to gather statements.</li>
          <li>Assuming every lender uses the same expense factor.</li>
          <li>Ignoring reserve requirements.</li>
        </ul>
        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">Why The Legends Mortgage Team</h2>
        <div className="space-y-4 text-gray-700">
          <p>We review statements early and avoid surprises.</p>
          <p>We compare lenders and explain the real income calculation.</p>
          <p>You get a clear plan and realistic timeline.</p>
        </div>
        <div className="mt-10 bg-[#F1F3F5] rounded-lg p-6">
          <h2 className="text-2xl font-bold text-[#1C2530] mb-4">What I Need From You to Quote Accurately</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Recent bank statements for the required period.</li>
            <li>Business type and ownership details.</li>
            <li>Down payment amount and reserves.</li>
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
            <li>Statement period length and deposit pattern.</li>
            <li>Business type and ownership percentage.</li>
            <li>Target purchase price and cash available.</li>
          </ul>
        </div>
        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">Related Options</h2>
        <div className="space-y-2 text-gray-700">
          <Link to={`/${locale}/loan-options/itin`} className="text-[#F36F20] font-bold hover:text-[#1C2530] transition-colors">ITIN Loans</Link>
          <span className="mx-2">,</span>
          <Link to={`/${locale}/loan-options/dscr`} className="text-[#F36F20] font-bold hover:text-[#1C2530] transition-colors">DSCR Loans</Link>
          <span className="mx-2">,</span>
          <Link to={`/${locale}/loan-options/conventional`} className="text-[#F36F20] font-bold hover:text-[#1C2530] transition-colors">Conventional Loans</Link>
        </div>
        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">FAQs</h2>
        <div className="space-y-4 text-gray-700">
          <p><strong>What is a bank statement loan?</strong> It qualifies borrowers using bank deposits instead of tax returns.</p>
          <p><strong>How many bank statements are required?</strong> Most programs require 12 to 24 months of personal or business statements.</p>
          <p><strong>Can I use business bank statements?</strong> Yes, but lenders apply expense factors to calculate usable income.</p>
          <p><strong>When is a bank statement loan not a fit?</strong> When deposits are irregular or business finances are poorly organized.</p>
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
                  "name": "What is a bank statement loan?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It qualifies borrowers using bank deposits instead of tax returns."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How many bank statements are required?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most programs require 12 to 24 months of personal or business statements."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I use business bank statements?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, but lenders apply expense factors to calculate usable income."
                  }
                },
                {
                  "@type": "Question",
                  "name": "When is a bank statement loan not a fit?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "When deposits are irregular or business finances are poorly organized."
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

export default BankStatementPage;
