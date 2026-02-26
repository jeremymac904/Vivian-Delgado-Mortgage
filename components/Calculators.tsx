import React, { useMemo, useState } from "react";
import { Info } from "lucide-react";
import LocaleLink from "./LocaleLink";
import { useLocale } from "../i18n/locale";
import { calculators } from "../i18n/calculators";

const formatCurrency = (value: number) =>
  value.toLocaleString(undefined, { style: "currency", currency: "USD", maximumFractionDigits: 0 });

type TabKey = "mortgage" | "dscr" | "fixflip" | "compare" | "va";

const tabKeys: TabKey[] = ["mortgage", "dscr", "fixflip", "compare", "va"];

const calcPayment = (principal: number, rate: number, years: number) => {
  const r = rate / 100 / 12;
  const n = years * 12;
  if (r === 0) return principal / n;
  return (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
};

const toNumber = (value: unknown, fallback = 0) => {
  const num = typeof value === "number" ? value : Number(value);
  return Number.isFinite(num) ? num : fallback;
};

const FieldLabel: React.FC<{ htmlFor: string; label: string; helper: string; tooltip?: string }> = ({ htmlFor, label, helper, tooltip }) => (
  <div className="mb-2">
    <label htmlFor={htmlFor} className="block text-sm font-bold text-gray-100">
      {label}
      {tooltip && (
        <span className="inline-flex align-middle ml-1" title={tooltip} aria-label={tooltip}>
          <Info className="w-3.5 h-3.5 text-gray-400" />
        </span>
      )}
    </label>
    <p className="text-xs text-gray-400">{helper}</p>
  </div>
);

const MortgageCalculator: React.FC<{ t: typeof calculators.en }> = ({ t }) => {
  const [price, setPrice] = useState(350000);
  const [down, setDown] = useState(70000);
  const [rate, setRate] = useState(6.5);
  const [term, setTerm] = useState(30);
  const [taxesOn, setTaxesOn] = useState(true);
  const [insuranceOn, setInsuranceOn] = useState(true);
  const [taxesAnnual, setTaxesAnnual] = useState(4200);
  const [insuranceAnnual, setInsuranceAnnual] = useState(1800);
  const [hoa, setHoa] = useState(0);
  const [hoaEstimateOn, setHoaEstimateOn] = useState(false);

  const loanAmount = Math.max(price - down, 0);
  const pi = calcPayment(loanAmount, rate, term);
  const estimatedTaxes = (price * 0.0115) / 12;
  const estimatedInsurance = (price * 0.0035) / 12;
  const effectiveTaxes = taxesOn ? estimatedTaxes : Math.max(toNumber(taxesAnnual), 0) / 12;
  const effectiveInsurance = insuranceOn ? estimatedInsurance : Math.max(toNumber(insuranceAnnual), 0) / 12;
  const effectiveHoa = hoaEstimateOn ? 125 : hoa;
  const total = pi + effectiveTaxes + effectiveInsurance + effectiveHoa;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div>
          <FieldLabel htmlFor="mortgage-price" label="Purchase Price ($)" helper="Enter the home purchase amount before down payment." />
          <input id="mortgage-price" type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} className="w-full p-3 border rounded" placeholder="350000" />
        </div>
        <div>
          <FieldLabel htmlFor="mortgage-down" label="Down Payment ($ or %)" helper="Enter dollar amount, example 20 percent on 350000 is 70000." />
          <input id="mortgage-down" type="number" value={down} onChange={(e) => setDown(Number(e.target.value))} className="w-full p-3 border rounded" placeholder="70000" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <FieldLabel htmlFor="mortgage-rate" label="Interest Rate (%)" helper="Use a note rate estimate for principal and interest." />
            <input id="mortgage-rate" type="number" value={rate} step="0.1" onChange={(e) => setRate(Number(e.target.value))} className="w-full p-3 border rounded" placeholder="6.50" />
          </div>
          <div>
            <FieldLabel htmlFor="mortgage-term" label="Loan Term (years)" helper="Select the amortization period in years." />
            <select id="mortgage-term" value={term} onChange={(e) => setTerm(Number(e.target.value))} className="w-full p-3 border rounded">
              <option value={30}>30 Years</option>
              <option value={20}>20 Years</option>
              <option value={15}>15 Years</option>
            </select>
          </div>
        </div>
        <div className="border rounded p-4 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-bold text-gray-700">{t.mortgage.estimatedTaxes}</p>
              <p className="text-xs text-gray-500">{t.mortgage.taxesHelp}</p>
            </div>
            <input id="mortgage-taxes-toggle" type="checkbox" checked={taxesOn} onChange={() => setTaxesOn(!taxesOn)} />
          </div>
          {!taxesOn && (
            <div>
              <FieldLabel htmlFor="mortgage-taxes" label="Property Taxes (annual $)" helper="Use yearly property tax amount, we convert to monthly." />
              <input id="mortgage-taxes" type="number" value={taxesAnnual} onChange={(e) => setTaxesAnnual(Number(e.target.value))} className="w-full p-3 border rounded" placeholder="4200" />
            </div>
          )}
          <div className="flex items-center justify-between">
            <div>
              <p className="font-bold text-gray-700">{t.mortgage.estimatedInsurance}</p>
              <p className="text-xs text-gray-500">{t.mortgage.insuranceHelp}</p>
            </div>
            <input id="mortgage-insurance-toggle" type="checkbox" checked={insuranceOn} onChange={() => setInsuranceOn(!insuranceOn)} />
          </div>
          <FieldLabel htmlFor="mortgage-insurance" label="Insurance (annual $)" helper="Enter yearly insurance estimate, converted to monthly." />
          <input
            id="mortgage-insurance"
            type="number"
            value={insuranceOn ? Math.round(estimatedInsurance * 12) : insuranceAnnual}
            onChange={(e) => setInsuranceAnnual(Number(e.target.value))}
            className="w-full p-3 border rounded"
            placeholder="1800"
          />
          <p className="text-xs text-gray-400">Insurance (annual $), converted to monthly in the payment output.</p>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-bold text-gray-700">{t.mortgage.estimateHoa}</p>
              <p className="text-xs text-gray-500">{t.mortgage.hoaHelp}</p>
            </div>
            <input id="mortgage-hoa-toggle" type="checkbox" checked={hoaEstimateOn} onChange={() => setHoaEstimateOn(!hoaEstimateOn)} />
          </div>
          {!hoaEstimateOn && (
            <input id="mortgage-hoa" type="number" value={hoa} onChange={(e) => setHoa(Number(e.target.value))} className="w-full p-3 border rounded" placeholder="125" />
          )}
        </div>
      </div>
      <div className="bg-[#1C2530] text-white rounded-lg p-6">
        <h3 className="text-xl font-bold mb-4">{t.mortgage.paymentBreakdown}</h3>
        <div className="space-y-2">
          <div className="flex justify-between"><span>{t.mortgage.principalInterest}</span><span>{formatCurrency(pi)}</span></div>
          <div className="flex justify-between"><span>{t.mortgage.taxes}</span><span>{formatCurrency(effectiveTaxes)}</span></div>
          <div className="flex justify-between"><span>{t.mortgage.insurance}</span><span>{formatCurrency(effectiveInsurance)}</span></div>
          <div className="flex justify-between"><span>{t.mortgage.hoa}</span><span>{formatCurrency(effectiveHoa)}</span></div>
          <div className="border-t border-gray-600 pt-2 flex justify-between font-bold"><span>{t.mortgage.total}</span><span>{formatCurrency(total)}</span></div>
        </div>
      </div>
    </div>
  );
};

const DscrCalculator: React.FC<{ t: typeof calculators.en; locale: "en" | "es" }> = ({ t, locale }) => {
  const [price, setPrice] = useState(400000);
  const [loanAmount, setLoanAmount] = useState(300000);
  const [useLtv, setUseLtv] = useState(false);
  const [ltv, setLtv] = useState(75);
  const [rate, setRate] = useState(7.5);
  const [term, setTerm] = useState(30);
  const [rent, setRent] = useState(2800);
  const [taxesOn, setTaxesOn] = useState(true);
  const [insurance, setInsurance] = useState(0);
  const [hoa, setHoa] = useState(0);
  const [vacancy, setVacancy] = useState(5);
  const [management, setManagement] = useState(8);

  const value = Math.max(toNumber(price), 0);
  const effectiveLoan = useLtv
    ? Math.max((value * Math.max(toNumber(ltv), 0)) / 100, 0)
    : Math.max(toNumber(loanAmount), 0);
  const safeRate = Math.max(toNumber(rate), 0);
  const safeTerm = Math.max(toNumber(term), 1);
  const safeRent = Math.max(toNumber(rent), 0);
  const safeVacancy = Math.min(Math.max(toNumber(vacancy), 0), 100);
  const safeManagement = Math.min(Math.max(toNumber(management), 0), 100);
  const safeHoa = Math.max(toNumber(hoa), 0);
  const safeInsuranceInput = Math.max(toNumber(insurance), 0);

  const pi = Math.max(calcPayment(effectiveLoan, safeRate, safeTerm), 0);
  const estimatedTaxes = (value * 0.0115) / 12;
  const estimatedInsurance = (value * 0.0035) / 12;
  const effectiveTaxes = taxesOn ? estimatedTaxes : 0;
  const effectiveInsurance = safeInsuranceInput > 0 ? safeInsuranceInput : estimatedInsurance;

  // DSCR = NOI / Total Debt Service
  const vacancyLoss = safeRent * (safeVacancy / 100);
  const managementCost = safeRent * (safeManagement / 100);
  const noi = Math.max(safeRent - vacancyLoss - managementCost, 0);
  const totalDebtService = pi + effectiveTaxes + effectiveInsurance + safeHoa;
  const rawDscr = totalDebtService > 0 ? noi / totalDebtService : 0;
  const dscr = Number.isFinite(rawDscr) ? rawDscr : 0;

  const badge = dscr >= 1.2 ? t.dscr.strong : dscr >= 1.0 ? t.dscr.borderline : t.dscr.needsWork;
  const validationMessage =
    totalDebtService <= 0
      ? locale === "es"
        ? "Ingrese datos válidos para calcular DSCR."
        : "Enter valid values to calculate DSCR."
      : null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <FieldLabel htmlFor="dscr-value" label="Property Value ($)" helper="Use current appraised or purchase value." />
            <input id="dscr-value" type="number" value={price} onChange={(e) => setPrice(toNumber(e.target.value))} className="w-full p-3 border rounded" placeholder="400000" />
          </div>
          <div>
            <FieldLabel htmlFor="dscr-term" label="Loan Term (years)" helper="Select loan amortization period." />
            <select id="dscr-term" value={term} onChange={(e) => setTerm(toNumber(e.target.value, 30))} className="w-full p-3 border rounded">
              <option value={30}>30 Years</option>
              <option value={25}>25 Years</option>
              <option value={20}>20 Years</option>
            </select>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <input id="dscr-use-ltv" type="checkbox" checked={useLtv} onChange={() => setUseLtv(!useLtv)} />
          <label htmlFor="dscr-use-ltv" className="text-sm text-gray-100">{t.dscr.useLtv}</label>
        </div>
        {useLtv ? (
          <div>
            <FieldLabel htmlFor="dscr-ltv" label="LTV (%)" helper="Loan to value percent, example 75 for 75 percent." />
            <input id="dscr-ltv" type="number" value={ltv} onChange={(e) => setLtv(toNumber(e.target.value))} className="w-full p-3 border rounded" placeholder="75" />
          </div>
        ) : (
          <div>
            <FieldLabel htmlFor="dscr-loan-amount" label="Loan Amount ($)" helper="Enter requested loan amount before fees." />
            <input id="dscr-loan-amount" type="number" value={loanAmount} onChange={(e) => setLoanAmount(toNumber(e.target.value))} className="w-full p-3 border rounded" placeholder="300000" />
          </div>
        )}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <FieldLabel htmlFor="dscr-rate" label="Interest Rate (%)" helper="Use expected note rate for debt service." />
            <input id="dscr-rate" type="number" value={rate} onChange={(e) => setRate(toNumber(e.target.value))} className="w-full p-3 border rounded" placeholder="7.50" />
          </div>
          <div>
            <FieldLabel htmlFor="dscr-rent" label="Monthly Rent ($)" helper="Use market rent or signed lease amount." />
            <input id="dscr-rent" type="number" value={rent} onChange={(e) => setRent(toNumber(e.target.value))} className="w-full p-3 border rounded" placeholder="2800" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <FieldLabel htmlFor="dscr-vacancy" label="Vacancy Rate (%)" helper="Percent of rent reserved for vacancy." tooltip="Typical investor assumption ranges from 5 to 8 percent." />
            <input id="dscr-vacancy" type="number" value={vacancy} onChange={(e) => setVacancy(toNumber(e.target.value))} className="w-full p-3 border rounded" placeholder="5" />
          </div>
          <div>
            <FieldLabel htmlFor="dscr-management" label="Property Management (%)" helper="Percent of rent allocated to management." />
            <input id="dscr-management" type="number" value={management} onChange={(e) => setManagement(toNumber(e.target.value))} className="w-full p-3 border rounded" placeholder="8" />
          </div>
          <div>
            <FieldLabel htmlFor="dscr-hoa" label="HOA ($/month)" helper="Monthly HOA dues if applicable." />
            <input id="dscr-hoa" type="number" value={hoa} onChange={(e) => setHoa(toNumber(e.target.value))} className="w-full p-3 border rounded" placeholder="125" />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <input id="dscr-taxes-toggle" type="checkbox" checked={taxesOn} onChange={() => setTaxesOn(!taxesOn)} />
          <label htmlFor="dscr-taxes-toggle" className="text-sm text-gray-100">{t.dscr.taxesToggle}</label>
        </div>
        <p className="text-xs text-gray-400">When enabled, taxes use an estimate of 1.15 percent annually, converted to monthly debt service.</p>
        <div>
          <FieldLabel htmlFor="dscr-insurance" label="Insurance ($/month)" helper="Monthly hazard insurance estimate." />
          <input id="dscr-insurance" type="number" value={insurance || estimatedInsurance} onChange={(e) => setInsurance(toNumber(e.target.value))} className="w-full p-3 border rounded" placeholder="115" />
        </div>
      </div>
      <div className="bg-[#1C2530] text-white rounded-lg p-6">
        <h3 className="text-xl font-bold mb-4">{t.dscr.summary}</h3>
        <div className="space-y-2">
          <div className="flex justify-between"><span>{t.dscr.monthlyPitia}</span><span>{formatCurrency(totalDebtService)}</span></div>
          <div className="flex justify-between"><span>{t.dscr.netRent}</span><span>{formatCurrency(noi)}</span></div>
          <div className="flex justify-between"><span>{t.dscr.dscr}</span><span>{dscr.toFixed(2)}</span></div>
          <div className="mt-4 inline-block bg-white text-[#1C2530] px-3 py-1 rounded font-bold">{badge}</div>
          {validationMessage && <div className="text-sm text-red-200 mt-2">{validationMessage}</div>}
        </div>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <LocaleLink to="/contact" className="bg-white text-[#1C2530] font-bold px-4 py-2 rounded text-center">Talk to Vivian</LocaleLink>
          <LocaleLink to="/apply" className="bg-[#F36F20] text-white font-bold px-4 py-2 rounded text-center">
            {locale === 'es' ? 'Comenzar mi aprobación' : 'Apply'}
          </LocaleLink>
        </div>
      </div>
    </div>
  );
};

const FixFlipCalculator: React.FC<{ t: typeof calculators.en }> = ({ t }) => {
  const [arv, setArv] = useState(450000);
  const [purchase, setPurchase] = useState(260000);
  const [rehab, setRehab] = useState(70000);
  const [costPct, setCostPct] = useState(2);
  const [holdingMonths, setHoldingMonths] = useState(6);
  const [interestRate, setInterestRate] = useState(11);
  const closingCosts = (purchase * costPct) / 100;
  const interestCarry = ((purchase + rehab) * (interestRate / 100) * holdingMonths) / 12;
  const costs = closingCosts + interestCarry;
  const maxLoan = 0.65 * arv;
  const totalBasis = purchase + rehab + costs;
  const diff = totalBasis - maxLoan;
  const inZone = diff <= 0;
  const maxPurchase = maxLoan - rehab - costs;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-4">
        <div>
          <FieldLabel htmlFor="fixflip-arv" label="ARV ($)" helper="After repair value used to size leverage." tooltip="ARV is the estimated market value after renovation is completed." />
          <input id="fixflip-arv" type="number" value={arv} onChange={(e) => setArv(Number(e.target.value))} className="w-full p-3 border rounded" placeholder="450000" />
        </div>
        <div>
          <FieldLabel htmlFor="fixflip-purchase" label="Purchase Price ($)" helper="Contract purchase amount before repairs." />
          <input id="fixflip-purchase" type="number" value={purchase} onChange={(e) => setPurchase(Number(e.target.value))} className="w-full p-3 border rounded" placeholder="260000" />
        </div>
        <div>
          <FieldLabel htmlFor="fixflip-rehab" label="Rehab Budget ($)" helper="Total planned renovation budget." />
          <input id="fixflip-rehab" type="number" value={rehab} onChange={(e) => setRehab(Number(e.target.value))} className="w-full p-3 border rounded" placeholder="70000" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <FieldLabel htmlFor="fixflip-holding" label="Holding Months" helper="Expected timeline to complete and exit." />
            <input id="fixflip-holding" type="number" value={holdingMonths} onChange={(e) => setHoldingMonths(Number(e.target.value))} className="w-full p-3 border rounded" placeholder="6" />
          </div>
          <div>
            <FieldLabel htmlFor="fixflip-rate" label="Interest Rate (%)" helper="Estimated hard-money interest rate." />
            <input id="fixflip-rate" type="number" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} className="w-full p-3 border rounded" placeholder="11.00" />
          </div>
        </div>
        <div>
          <FieldLabel htmlFor="fixflip-cost-pct" label="Closing Cost (%)" helper="Percent of purchase used for closing costs." />
          <input id="fixflip-cost-pct" type="number" value={costPct} onChange={(e) => setCostPct(Number(e.target.value))} className="w-full p-3 border rounded" placeholder="2" />
        </div>
      </div>
      <div className="bg-[#1C2530] text-white rounded-lg p-6 space-y-2">
        <div className="flex justify-between"><span>{t.fixflip.totalBasis}</span><span>{formatCurrency(totalBasis)}</span></div>
        <div className="flex justify-between"><span>{t.fixflip.maxLoan}</span><span>{formatCurrency(maxLoan)}</span></div>
        <div className="mt-4 font-bold">{inZone ? t.fixflip.inZone : t.fixflip.overZone}</div>
        {!inZone && (
          <div className="text-sm">{t.fixflip.overBy} {formatCurrency(diff)}. {t.fixflip.maxPurchase} {formatCurrency(maxPurchase)}.</div>
        )}
      </div>
    </div>
  );
};

const CompareCalculator: React.FC<{ t: typeof calculators.en }> = ({ t }) => {
  const [price, setPrice] = useState(350000);
  const [downPct, setDownPct] = useState(3);
  const [scoreBand, setScoreBand] = useState("700-739");
  const [convRate, setConvRate] = useState(6.5);
  const [fhaRate, setFhaRate] = useState(6.75);
  const [term, setTerm] = useState(30);
  const [ufmipOn, setUfmipOn] = useState(true);
  const [fhaMip, setFhaMip] = useState(120);
  const [convMi, setConvMi] = useState(90);

  const down = (price * downPct) / 100;
  const convLoan = price - down;
  const fhaBaseLoan = price - down;
  const fhaUfmip = ufmipOn ? fhaBaseLoan * 0.0175 : 0;
  const fhaLoan = fhaBaseLoan + fhaUfmip;

  const convPI = calcPayment(convLoan, convRate, term);
  const fhaPI = calcPayment(fhaLoan, fhaRate, term);
  const taxes = (price * 0.0115) / 12;
  const insurance = (price * 0.0035) / 12;
  const convTotal = convPI + convMi + taxes + insurance;
  const fhaTotal = fhaPI + fhaMip + taxes + insurance;
  const convCash = down;
  const fhaCash = down + (ufmipOn ? 0 : fhaUfmip);

  const summary = convTotal < fhaTotal ? "Conventional looks lower on monthly cost, confirm MI details." : "FHA looks lower on monthly cost, confirm MIP and total cost.";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-4">
        <div>
          <FieldLabel htmlFor="compare-price" label="Purchase Price ($)" helper="Target purchase amount used for both scenarios." />
          <input id="compare-price" type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} className="w-full p-3 border rounded" placeholder="350000" />
        </div>
        <div>
          <FieldLabel htmlFor="compare-down" label="Down Payment (%)" helper="Percent down payment applied to both loans." />
          <input id="compare-down" type="number" value={downPct} onChange={(e) => setDownPct(Number(e.target.value))} className="w-full p-3 border rounded" placeholder="3" />
        </div>
        <div>
          <FieldLabel htmlFor="compare-score" label="Credit Score Range" helper="Select score band for MI assumptions." />
          <select id="compare-score" value={scoreBand} onChange={(e) => setScoreBand(e.target.value)} className="w-full p-3 border rounded">
          <option>740+</option>
          <option>700-739</option>
          <option>660-699</option>
          <option>&lt;660</option>
        </select>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <FieldLabel htmlFor="compare-conv-rate" label="Conventional Rate (%)" helper="Estimated note rate for conventional loan." />
            <input id="compare-conv-rate" type="number" value={convRate} onChange={(e) => setConvRate(Number(e.target.value))} className="w-full p-3 border rounded" placeholder="6.50" />
          </div>
          <div>
            <FieldLabel htmlFor="compare-fha-rate" label="FHA Rate (%)" helper="Estimated note rate for FHA loan." />
            <input id="compare-fha-rate" type="number" value={fhaRate} onChange={(e) => setFhaRate(Number(e.target.value))} className="w-full p-3 border rounded" placeholder="6.75" />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <input id="compare-ufmip" type="checkbox" checked={ufmipOn} onChange={() => setUfmipOn(!ufmipOn)} />
          <label htmlFor="compare-ufmip" className="text-sm text-gray-100">{t.compare.financeUfmip}</label>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <FieldLabel htmlFor="compare-mip" label="MIP ($/month)" helper="Estimated FHA mortgage insurance amount." />
            <input id="compare-mip" type="number" value={fhaMip} onChange={(e) => setFhaMip(Number(e.target.value))} className="w-full p-3 border rounded" placeholder="120" />
          </div>
          <div>
            <FieldLabel htmlFor="compare-pmi" label="PMI ($/month)" helper="Estimated conventional MI amount." />
            <input id="compare-pmi" type="number" value={convMi} onChange={(e) => setConvMi(Number(e.target.value))} className="w-full p-3 border rounded" placeholder="90" />
          </div>
        </div>
      </div>
      <div className="bg-[#1C2530] text-white rounded-lg p-6 space-y-3">
        <div className="font-bold">{t.compare.monthlyTotals}</div>
        <div className="flex justify-between"><span>Conventional</span><span>{formatCurrency(convTotal)}</span></div>
        <div className="flex justify-between"><span>FHA</span><span>{formatCurrency(fhaTotal)}</span></div>
        <div className="font-bold mt-4">{t.compare.cashToClose}</div>
        <div className="flex justify-between"><span>Conventional</span><span>{formatCurrency(convCash)}</span></div>
        <div className="flex justify-between"><span>FHA</span><span>{formatCurrency(fhaCash)}</span></div>
        <div className="mt-4 text-sm">{summary}</div>
      </div>
    </div>
  );
};

const VaCalculator: React.FC<{ t: typeof calculators.en }> = ({ t }) => {
  const [price, setPrice] = useState(350000);
  const [down, setDown] = useState(0);
  const [rate, setRate] = useState(6.25);
  const [term, setTerm] = useState(30);
  const [firstUse, setFirstUse] = useState(true);
  const [exempt, setExempt] = useState(false);
  const taxes = (price * 0.0115) / 12;
  const insurance = (price * 0.0035) / 12;
  const loan = price - down;
  const fundingFeeRate = exempt ? 0 : firstUse ? 0.0215 : 0.033;
  const fundingFee = loan * fundingFeeRate;
  const pi = calcPayment(loan + fundingFee, rate, term);
  const total = pi + taxes + insurance;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-4">
        <div>
          <FieldLabel htmlFor="va-price" label="Purchase Price ($)" helper="Target purchase amount for VA estimate." />
          <input id="va-price" type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} className="w-full p-3 border rounded" placeholder="350000" />
        </div>
        <div>
          <FieldLabel htmlFor="va-down" label="Down Payment ($)" helper="Enter dollar down payment, often zero for VA." />
          <input id="va-down" type="number" value={down} onChange={(e) => setDown(Number(e.target.value))} className="w-full p-3 border rounded" placeholder="0" />
        </div>
        <div>
          <FieldLabel htmlFor="va-rate" label="Interest Rate (%)" helper="Estimated note rate for monthly PI." />
          <input id="va-rate" type="number" value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-full p-3 border rounded" placeholder="6.25" />
        </div>
        <div>
          <FieldLabel htmlFor="va-term" label="Loan Term (years)" helper="Select amortization period." />
          <select id="va-term" value={term} onChange={(e) => setTerm(Number(e.target.value))} className="w-full p-3 border rounded">
          <option value={30}>30 Years</option>
          <option value={20}>20 Years</option>
          <option value={15}>15 Years</option>
        </select>
        </div>
        <div className="flex items-center gap-3">
          <input id="va-first-use" type="checkbox" checked={firstUse} onChange={() => setFirstUse(!firstUse)} />
          <label htmlFor="va-first-use" className="text-sm text-gray-100">First Use toggle, {t.va.firstUse}</label>
        </div>
        <div className="flex items-center gap-3">
          <input id="va-exempt" type="checkbox" checked={exempt} onChange={() => setExempt(!exempt)} />
          <label htmlFor="va-exempt" className="text-sm text-gray-100">Service-connected toggle, {t.va.exempt}</label>
        </div>
      </div>
      <div className="bg-[#1C2530] text-white rounded-lg p-6 space-y-2">
        <div className="flex justify-between"><span>{t.va.monthlyPi}</span><span>{formatCurrency(pi)}</span></div>
        <div className="flex justify-between">
          <span className="inline-flex items-center gap-1">
            {t.va.fundingFee}
            <span title="Funding fee depends on use and exemption status." aria-label="Funding fee depends on use and exemption status.">
              <Info className="w-3.5 h-3.5 text-gray-300" />
            </span>
          </span>
          <span>{formatCurrency(fundingFee)}</span>
        </div>
        <div className="flex justify-between"><span>{t.va.total}</span><span>{formatCurrency(total)}</span></div>
        <div className="text-sm mt-4">{t.va.note}</div>
      </div>
    </div>
  );
};

const Calculators: React.FC = () => {
  const [active, setActive] = useState<TabKey>("mortgage");
  const locale = useLocale();
  const t = calculators[locale];

  const current = useMemo(() => t.tabs[active], [active, t]);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#1C2530] mb-4">{t.title}</h1>
        <p className="text-gray-600 mb-8">{t.subtitle}</p>
        <div className="flex flex-wrap gap-3 mb-8">
          {tabKeys.map((key) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`px-4 py-2 rounded font-bold ${active === key ? "bg-[#1C2530] text-white" : "bg-gray-100 text-[#1C2530]"}`}
            >
              {t.tabs[key].label}
            </button>
          ))}
        </div>
        {current && (
          <div className="mb-8">
            <p className="text-gray-700">{current.intro}</p>
            <p className="text-gray-500 text-sm mt-2">{t.notFitLabel} {current.notFit}</p>
          </div>
        )}
        {active === "mortgage" && <MortgageCalculator t={t} />}
        {active === "dscr" && <DscrCalculator t={t} locale={locale} />}
        {active === "fixflip" && <FixFlipCalculator t={t} />}
        {active === "compare" && <CompareCalculator t={t} />}
        {active === "va" && <VaCalculator t={t} />}
      </div>
    </section>
  );
};

export default Calculators;
