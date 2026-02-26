import React, { useState, useEffect } from 'react';
import { DollarSign, Calculator } from 'lucide-react';

const MortgageCalculator: React.FC = () => {
  const [homePrice, setHomePrice] = useState(350000);
  const [downPayment, setDownPayment] = useState(70000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  useEffect(() => {
    const principal = homePrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    if (monthlyRate === 0) {
      setMonthlyPayment(principal / numberOfPayments);
    } else {
      const payment =
        (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
      setMonthlyPayment(payment);
    }
  }, [homePrice, downPayment, interestRate, loanTerm]);

  return (
    <section className="py-20 bg-[#1C2530] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 text-[#F36F20] font-bold tracking-wider mb-2">
              <Calculator className="w-5 h-5" />
              <span>ESTIMATE YOUR PAYMENT</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Mortgage Calculator
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Estimate your payment. Contact us for taxes, insurance, and exact quotes.
            </p>
            
            <div className="bg-[#2A3441] p-8 rounded-xl shadow-2xl border border-gray-700">
              <div className="text-center">
                <p className="text-gray-400 text-sm uppercase tracking-widest mb-2">Estimated Monthly Payment (P&I)</p>
                <div className="text-5xl font-bold text-[#F36F20]">
                  ${monthlyPayment.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 bg-white text-[#1C2530] rounded-xl p-8 shadow-xl">
            <div className="space-y-6">
              {/* Home Price */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Home Price</label>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <DollarSign className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="number"
                    value={homePrice}
                    onChange={(e) => setHomePrice(Number(e.target.value))}
                    className="focus:ring-[#F36F20] focus:border-[#F36F20] block w-full pl-10 sm:text-lg border-gray-300 rounded-md py-3 bg-gray-50"
                  />
                </div>
                <input 
                  type="range" 
                  min="50000" 
                  max="2000000" 
                  step="1000"
                  value={homePrice}
                  onChange={(e) => setHomePrice(Number(e.target.value))}
                  className="w-full mt-3 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#F36F20]"
                />
              </div>

              {/* Down Payment */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Down Payment ($)</label>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <DollarSign className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="number"
                    value={downPayment}
                    onChange={(e) => setDownPayment(Number(e.target.value))}
                    className="focus:ring-[#F36F20] focus:border-[#F36F20] block w-full pl-10 sm:text-lg border-gray-300 rounded-md py-3 bg-gray-50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {/* Interest Rate */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Interest Rate (%)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="focus:ring-[#F36F20] focus:border-[#F36F20] block w-full sm:text-lg border-gray-300 rounded-md py-3 bg-gray-50 px-4"
                  />
                </div>

                {/* Loan Term */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Loan Term (Years)</label>
                  <select
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(Number(e.target.value))}
                    className="focus:ring-[#F36F20] focus:border-[#F36F20] block w-full sm:text-lg border-gray-300 rounded-md py-3 bg-gray-50 px-4"
                  >
                    <option value={30}>30 Years</option>
                    <option value={20}>20 Years</option>
                    <option value={15}>15 Years</option>
                    <option value={10}>10 Years</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MortgageCalculator;
