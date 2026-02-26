import React from 'react';
import { Home, Shield, Award, DollarSign, TrendingUp, Users, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLocale } from '../i18n/locale';
import NoirCard from './ui/NoirCard';

const iconMap: Record<string, React.FC<any>> = {
  Home,
  Shield,
  Award,
  DollarSign,
  TrendingUp,
  Users,
  CheckCircle
};

const loanLinks: Record<string, string> = {
  'Conventional Loans': '/loan-options/conventional',
  'FHA Loans': '/loan-options/fha',
  'VA Loans': '/loan-options/va',
  'Jumbo Loans': '/loan-options/jumbo',
  'Non-QM Loans': '/loan-options/bank-statement',
  'DSCR Loans': '/loan-options/dscr',
  'Reverse Mortgages': '/contact',
  'Préstamos Convencionales': '/loan-options/conventional',
  'Préstamos FHA': '/loan-options/fha',
  'Préstamos VA': '/loan-options/va',
  'Préstamos Jumbo': '/loan-options/jumbo',
  'Préstamos Non QM': '/loan-options/bank-statement',
  'Préstamos DSCR': '/loan-options/dscr',
  'Hipoteca Reversa': '/contact'
};

const LoanOptions: React.FC = () => {
  const locale = useLocale();
  const options = locale === 'es'
      ? [
        { title: 'Préstamos Convencionales', description: 'Para crédito sólido y costo total controlado.', iconName: 'Home' },
        { title: 'Préstamos FHA', description: 'Pago inicial bajo con requisitos claros.', iconName: 'Shield' },
        { title: 'Préstamos VA', description: 'Cero pago inicial para elegibles.', iconName: 'Award' },
        { title: 'Préstamos Jumbo', description: 'Estructura avanzada para montos altos.', iconName: 'DollarSign' },
        { title: 'Préstamos Non QM', description: 'Opciones flexibles para ingresos no tradicionales.', iconName: 'Users' },
        { title: 'Préstamos DSCR', description: 'Calificación por flujo de renta.', iconName: 'TrendingUp' },
        { title: 'Hipoteca Reversa', description: 'Soluciones de patrimonio para propietarios senior calificados.', iconName: 'CheckCircle' }
      ]
    : [
        { title: 'Conventional Loans', description: 'A classic loan for strong credit and steady income.', iconName: 'Home' },
        { title: 'FHA Loans', description: 'A flexible option with lower down payments.', iconName: 'Shield' },
        { title: 'VA Loans', description: 'A zero down option for eligible service members.', iconName: 'Award' },
        { title: 'Jumbo Loans', description: 'A higher limit loan for premium homes.', iconName: 'DollarSign' },
        { title: 'Non-QM Loans', description: 'Flexible guidelines for self-employed and complex files.', iconName: 'Users' },
        { title: 'DSCR Loans', description: 'Investor loans based on property cash flow.', iconName: 'TrendingUp' },
        { title: 'Reverse Mortgages', description: 'Home equity solutions for qualified senior homeowners.', iconName: 'CheckCircle' }
      ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            {locale === 'es' ? 'Opciones de préstamo con estrategia' : 'Tailored Loan Solutions'}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            {locale === 'es'
              ? 'Elija un programa que se alinee con su objetivo y su perfil.'
              : 'Choose a loan that fits your goals and timeline.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {options.map((loan, index) => {
            const Icon = iconMap[loan.iconName] || Home;
            const detailsLink = loanLinks[loan.title] || '/loan-options';
            return (
              <NoirCard key={index} className="p-8 group">
                <div className="w-14 h-14 bg-[#1C2530] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#F36F20] transition-colors">
                  <Icon className="text-white w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">{loan.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {loan.description}
                </p>
                <Link to={`/${locale}${detailsLink}`} className="inline-flex items-center text-[#F36F20] font-bold hover:text-[#1C2530] transition-colors">
                  {locale === 'es' ? 'Ver detalles' : 'Learn More'}
                  <span className="ml-2 text-xl">&rarr;</span>
                </Link>
              </NoirCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LoanOptions;
