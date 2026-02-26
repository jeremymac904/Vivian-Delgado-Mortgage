import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../../components/Seo';
import ProgramVideo from '../../components/ProgramVideo';
import { useLocale } from '../../i18n/locale';

const ItinPage: React.FC = () => {
  const locale = useLocale();
  return (
    <section className="py-16 bg-white">
      <Seo
        title="ITIN Loans for Qualified Buyers | Legends Mortgage Team"
        description="ITIN loans for qualified borrowers using alternative documentation with clear structure, tradeoffs, and next steps, including down payment and reserve planning."
        canonical={`/${locale}/loan-options/itin`}
        locale={locale}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:text-[#1C2530]">Home</Link>
          <span className="mx-2">→</span>
          <Link to={`/${locale}/loan-options`} className="hover:text-[#1C2530]">Loan Options</Link>
          <span className="mx-2">→</span>
          <span>ITIN Loans</span>
        </div>
        <div className="mb-6">
          <Link to={`/${locale}/loan-options`} className="text-[#F36F20] font-bold hover:text-[#1C2530] transition-colors">
            Back to Loan Options
          </Link>
        </div>
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#1C2530] mb-6">
          ITIN Loans for Borrowers Who Use Alternative Documentation
        </h1>
        <p className="text-[#F36F20] font-bold mb-6">Best for ITIN borrowers with stable income and clear documentation.</p>
        <div className="space-y-4 text-gray-700">
          {locale === 'es' ? (
            <>
              <p>Los préstamos ITIN permiten calificar sin Seguro Social, usando ITIN.</p>
              <p>Son para compradores con documentación sólida y pagos iniciales más altos.</p>
              <p>Confirmamos ingreso, reservas y estructura del préstamo desde el inicio.</p>
              <p>Definimos los requisitos reales para evitar sorpresas.</p>
              <p>No es para usted si la documentación es débil o inconsistente.</p>
            </>
          ) : (
            <>
              <p>ITIN loans serve borrowers who do not use a Social Security number.</p>
              <p>These loans require clear documentation and stable income.</p>
              <p>We set expectations on down payment, reserves, and pricing.</p>
              <p>Not a fit if your income documentation is thin or inconsistent.</p>
            </>
          )}
        </div>
        <ProgramVideo slug="itin" />
        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">Who This Is For</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Borrowers with an ITIN and stable income history.</li>
          <li>Buyers who can document assets and income clearly.</li>
          <li>Clients who want a structured path to approval.</li>
          <li>Homeowners planning a purchase or refinance.</li>
        </ul>
        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">How It Actually Works</h2>
        <div className="space-y-4 text-gray-700">
          <p>ITIN loans are portfolio products with lender specific rules.</p>
          <p>Down payments and reserves are often higher than standard loans.</p>
          <p>We review documentation early to avoid late issues.</p>
          <p>We compare lenders to find the best fit.</p>
        </div>
        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">Common Mistakes</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Waiting too long to gather documentation.</li>
          <li>Assuming all ITIN programs are the same.</li>
          <li>Underestimating down payment requirements.</li>
          <li>Ignoring reserve requirements.</li>
        </ul>
        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">Why The Legends Mortgage Team</h2>
        <div className="space-y-4 text-gray-700">
          <p>We work with ITIN lenders and explain the tradeoffs.</p>
          <p>We outline the document checklist up front.</p>
          <p>You get clear guidance and a realistic plan.</p>
        </div>
        <div className="mt-10 bg-[#F1F3F5] rounded-lg p-6">
          <h2 className="text-2xl font-bold text-[#1C2530] mb-4">What I Need From You to Quote Accurately</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>ITIN documentation and current income source.</li>
            <li>Down payment amount and reserves.</li>
            <li>Property type and purchase price.</li>
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
            <li>ITIN status and income source.</li>
            <li>Down payment and reserve totals.</li>
            <li>Target purchase price.</li>
          </ul>
        </div>
        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">Related Options</h2>
        <div className="space-y-2 text-gray-700">
          <Link to={`/${locale}/loan-options/bank-statement`} className="text-[#F36F20] font-bold hover:text-[#1C2530] transition-colors">Bank Statement Loans</Link>
          <span className="mx-2">,</span>
          <Link to={`/${locale}/loan-options/conventional`} className="text-[#F36F20] font-bold hover:text-[#1C2530] transition-colors">Conventional Loans</Link>
          <span className="mx-2">,</span>
          <Link to={`/${locale}/loan-options/fha`} className="text-[#F36F20] font-bold hover:text-[#1C2530] transition-colors">FHA Loans</Link>
        </div>
        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">FAQs</h2>
        <div className="space-y-4 text-gray-700">
          <p><strong>What is an ITIN loan?</strong> An ITIN loan allows borrowers without a Social Security Number to qualify using an Individual Taxpayer Identification Number.</p>
          <p><strong>What documentation is required?</strong> Strong income documentation, proof of employment, and larger down payments are typical.</p>
          <p><strong>Are ITIN loan rates higher?</strong> Rates are usually higher than conventional loans due to increased risk.</p>
          <p><strong>When is an ITIN loan not a good option?</strong> When income documentation is inconsistent or funds cannot be sourced clearly.</p>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "What is an ITIN loan?", "acceptedAnswer": { "@type": "Answer", "text": "An ITIN loan allows borrowers without a Social Security Number to qualify using an Individual Taxpayer Identification Number." } },
                { "@type": "Question", "name": "What documentation is required?", "acceptedAnswer": { "@type": "Answer", "text": "Strong income documentation, proof of employment, and larger down payments are typical." } },
                { "@type": "Question", "name": "Are ITIN loan rates higher?", "acceptedAnswer": { "@type": "Answer", "text": "Rates are usually higher than conventional loans due to increased risk." } },
                { "@type": "Question", "name": "When is an ITIN loan not a good option?", "acceptedAnswer": { "@type": "Answer", "text": "When income documentation is inconsistent or funds cannot be sourced clearly." } }
              ]
            })
          }}
        />
      </div>
    </section>
  );
};

export default ItinPage;
