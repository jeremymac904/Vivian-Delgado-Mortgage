import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../../components/Seo';
import ProgramVideo from '../../components/ProgramVideo';
import { useLocale } from '../../i18n/locale';

const GroundUpConstructionPage: React.FC = () => {
  const locale = useLocale();
  return (
    <section className="py-16 bg-white">
      <Seo
        title="Ground Up Investor Construction | Legends Mortgage Team"
        description="Ground up construction financing for investors who need clear draw control, reliable timelines, and lender fit. We explain tradeoffs and next steps early."
        canonical={`/${locale}/loan-options/ground-up-construction`}
        locale={locale}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:text-[#1C2530]">Home</Link>
          <span className="mx-2">→</span>
          <Link to={`/${locale}/loan-options`} className="hover:text-[#1C2530]">Loan Options</Link>
          <span className="mx-2">→</span>
          <span>Ground Up Investor Construction Loans</span>
        </div>
        <div className="mb-6">
          <Link to={`/${locale}/loan-options`} className="text-[#F36F20] font-bold hover:text-[#1C2530] transition-colors">
            Back to Loan Options
          </Link>
        </div>
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#1C2530] mb-6">
          Ground Up Investor Construction Loans for Planned Builds
        </h1>
        <p className="text-[#F36F20] font-bold mb-6">Best for investors with strong reserves, a build team, and a clear takeout plan.</p>
        <div className="space-y-4 text-gray-700">
          {locale === 'es' ? (
            <>
              <p>Los préstamos de construcción desde cero financian el desarrollo completo del proyecto.</p>
              <p>Requieren capital, reservas y planificación clara.</p>
              <p>Definimos presupuesto, cronograma y estrategia de salida.</p>
              <p>Confirmamos el prestamista adecuado según el proyecto.</p>
              <p>No es para usted si no cuenta con reservas o si la planificación es débil.</p>
            </>
          ) : (
            <>
              <p>Ground up construction loans fund a full build for investors.</p>
              <p>These loans require a clear budget, timeline, and exit plan.</p>
              <p>We align lender rules with your build strategy.</p>
              <p>Not a fit if you're under-capitalized or trying to build without reserves.</p>
            </>
          )}
        </div>
        <ProgramVideo slug="ground-up-construction" />
        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">Who This Is For</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Investors with a defined build scope and team.</li>
          <li>Projects with a clear resale or rental plan.</li>
          <li>Borrowers who can manage draw schedules.</li>
          <li>Clients seeking structured build financing.</li>
        </ul>
        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">How It Actually Works</h2>
        <div className="space-y-4 text-gray-700">
          <p>Funds release in draws tied to build milestones.</p>
          <p>We review plans, budget, permits, and contractor details.</p>
          <p>Pricing reflects project risk, leverage, and timeline.</p>
          <p>We map the takeout plan from day one.</p>
        </div>
        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">Common Mistakes</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Underestimating build costs and timelines.</li>
          <li>Missing documentation for permits or plans.</li>
          <li>Using a lender that does not match the project type.</li>
          <li>Ignoring the takeout financing plan.</li>
        </ul>
        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">Why The Legends Mortgage Team</h2>
        <div className="space-y-4 text-gray-700">
          <p>We match the right construction lender to the project.</p>
          <p>We set expectations for draws and inspections early.</p>
          <p>You get clear structure and proactive support.</p>
        </div>
        <div className="mt-10 bg-[#F1F3F5] rounded-lg p-6">
          <h2 className="text-2xl font-bold text-[#1C2530] mb-4">What I Need From You to Quote Accurately</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Full budget, plans, and build timeline.</li>
            <li>Builder details, insurance, and track record.</li>
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
            <li>Land cost, build budget, and timeline.</li>
            <li>Builder name and licensing details.</li>
            <li>Planned exit and takeout financing.</li>
          </ul>
        </div>
        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">Related Options</h2>
        <div className="space-y-2 text-gray-700">
          <Link to={`/${locale}/loan-options/fix-flip`} className="text-[#F36F20] font-bold hover:text-[#1C2530] transition-colors">Fix and Flip Loans</Link>
          <span className="mx-2">,</span>
          <Link to={`/${locale}/loan-options/dscr`} className="text-[#F36F20] font-bold hover:text-[#1C2530] transition-colors">DSCR Loans</Link>
          <span className="mx-2">,</span>
          <Link to={`/${locale}/loan-options/heloc-investment`} className="text-[#F36F20] font-bold hover:text-[#1C2530] transition-colors">HELOCs, Investment Property</Link>
        </div>
        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">FAQs</h2>
        <div className="space-y-4 text-gray-700">
          <p><strong>What is a ground-up construction loan for investors?</strong> It finances the purchase of land and the construction of a new investment property.</p>
          <p><strong>How are funds released during construction?</strong> Funds are distributed in stages, called draws, as construction milestones are completed.</p>
          <p><strong>Do I need prior construction experience?</strong> Experience helps, but strong liquidity and a solid build plan matter most.</p>
          <p><strong>When is this loan not a good option?</strong> When reserves are limited or the project lacks contingency planning.</p>
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
                  "name": "What is a ground-up construction loan for investors?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It finances the purchase of land and the construction of a new investment property."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How are funds released during construction?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Funds are distributed in stages, called draws, as construction milestones are completed."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do I need prior construction experience?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Experience helps, but strong liquidity and a solid build plan matter most."
                  }
                },
                {
                  "@type": "Question",
                  "name": "When is this loan not a good option?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "When reserves are limited or the project lacks contingency planning."
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

export default GroundUpConstructionPage;
