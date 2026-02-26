import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../../components/Seo';
import ProgramVideo from '../../components/ProgramVideo';
import { useLocale } from '../../i18n/locale';

const FixFlipPage: React.FC = () => {
  const locale = useLocale();
  return (
    <section className="py-16 bg-white">
      <Seo
        title="Fix and Flip Loans for Investors | Legends Mortgage Team"
        description="Fix and flip loans for investors who need fast funding, clear draws, and tight project control, with a defined scope, budget, and exit plan for serious buyers."
        canonical={`/${locale}/loan-options/fix-flip`}
        locale={locale}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:text-[#1C2530]">Home</Link>
          <span className="mx-2">→</span>
          <Link to={`/${locale}/loan-options`} className="hover:text-[#1C2530]">Loan Options</Link>
          <span className="mx-2">→</span>
          <span>Fix and Flip Loans</span>
        </div>
        <div className="mb-6">
          <Link to={`/${locale}/loan-options`} className="text-[#F36F20] font-bold hover:text-[#1C2530] transition-colors">
            Back to Loan Options
          </Link>
        </div>
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#1C2530] mb-6">
          Fix and Flip Loans for Investors Who Need Fast Capital
        </h1>
        <p className="text-[#F36F20] font-bold mb-6">Best for investors with a defined scope, budget, and resale timeline.</p>
        <div className="space-y-4 text-gray-700">
          {locale === 'es' ? (
            <>
              <p>Los préstamos Fix & Flip financian la compra y remodelación en plazos cortos.</p>
              <p>Funcionan mejor con un presupuesto y cronograma bien definidos.</p>
              <p>Estructuramos desembolsos, tiempos y estrategia de salida desde el inicio.</p>
              <p>No es para usted si no tiene un plan claro de rehabilitación y salida.</p>
            </>
          ) : (
            <>
              <p>Fix and flip loans fund purchase and rehab on a short timeline.</p>
              <p>They work best for experienced investors with a clear budget.</p>
              <p>We align draws, timelines, and exit plans from day one.</p>
              <p>Not a fit if you don't have a clear rehab plan and exit strategy.</p>
            </>
          )}
        </div>
        <ProgramVideo slug="fix-flip" />
        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">Who This Is For</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Investors with a defined rehab scope and budget.</li>
          <li>Buyers who need fast closings.</li>
          <li>Projects with a clear resale or rental exit.</li>
          <li>Teams with a reliable contractor plan.</li>
        </ul>
        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">How It Actually Works</h2>
        <div className="space-y-4 text-gray-700">
          <p>Funding is based on purchase price and after repair value.</p>
          <p>Rehab funds release in draws after inspections.</p>
          <p>We review the scope, timeline, and exit strategy.</p>
          <p>Pricing reflects project risk and leverage.</p>
        </div>
        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">Common Mistakes</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Underestimating rehab costs and timelines.</li>
          <li>Ignoring draw schedules and cash flow timing.</li>
          <li>Choosing leverage that leaves no contingency.</li>
          <li>Skipping a clear exit plan.</li>
        </ul>
        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">Why The Legends Mortgage Team</h2>
        <div className="space-y-4 text-gray-700">
          <p>We work with fix and flip lenders that move quickly.</p>
          <p>We structure draws to match your project plan.</p>
          <p>You get transparency on costs and timing.</p>
        </div>
        <div className="mt-10 bg-[#F1F3F5] rounded-lg p-6">
          <h2 className="text-2xl font-bold text-[#1C2530] mb-4">What I Need From You to Quote Accurately</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Purchase price, rehab budget, and target timeline.</li>
            <li>Scope of work and contractor details.</li>
            <li>Exit plan, resale or hold strategy.</li>
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
            <li>Purchase price and rehab budget.</li>
            <li>Contractor details and scope of work.</li>
            <li>Planned exit timeline.</li>
          </ul>
        </div>
        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">Related Options</h2>
        <div className="space-y-2 text-gray-700">
          <Link to={`/${locale}/loan-options/dscr`} className="text-[#F36F20] font-bold hover:text-[#1C2530] transition-colors">DSCR Loans</Link>
          <span className="mx-2">,</span>
          <Link to={`/${locale}/loan-options/ground-up-construction`} className="text-[#F36F20] font-bold hover:text-[#1C2530] transition-colors">Ground Up Investor Construction Loans</Link>
          <span className="mx-2">,</span>
          <Link to={`/${locale}/loan-options/heloc-investment`} className="text-[#F36F20] font-bold hover:text-[#1C2530] transition-colors">HELOCs, Investment Property</Link>
        </div>
        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">FAQs</h2>
        <div className="space-y-4 text-gray-700">
          <p><strong>What is a fix and flip loan?</strong> A fix and flip loan is short-term financing used to purchase and renovate a property before selling it.</p>
          <p><strong>Do fix and flip loans cover renovation costs?</strong> Yes. Most programs finance both the purchase price and renovation through a draw schedule.</p>
          <p><strong>How fast can fix and flip loans close?</strong> Well-structured deals can close quickly, often faster than traditional mortgages.</p>
          <p><strong>When is a fix and flip loan not a good fit?</strong> When there is no clear rehab plan or no defined exit strategy.</p>
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
                  "name": "What is a fix and flip loan?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A fix and flip loan is short-term financing used to purchase and renovate a property before selling it."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do fix and flip loans cover renovation costs?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Most programs finance both the purchase price and renovation through a draw schedule."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How fast can fix and flip loans close?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Well-structured deals can close quickly, often faster than traditional mortgages."
                  }
                },
                {
                  "@type": "Question",
                  "name": "When is a fix and flip loan not a good fit?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "When there is no clear rehab plan or no defined exit strategy."
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

export default FixFlipPage;
