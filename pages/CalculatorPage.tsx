import React from 'react';
import Calculators from '../components/Calculators';
import Seo from '../components/Seo';
import { useLocale } from '../i18n/locale';

const CalculatorPage: React.FC = () => {
  const locale = useLocale();
  const seo = locale === 'es'
    ? {
        title: 'Calculadoras hipotecarias | Legends Mortgage Team',
        description: 'Calcule pagos, DSCR, Fix & Flip, comparaciones y VA con cifras claras.'
      }
    : {
        title: 'Mortgage Calculators | Legends Mortgage Team',
        description: 'Estimate payments, DSCR, Fix & Flip, comparisons, and VA with clear inputs.'
      };

  return (
    <>
      <Seo
        title={seo.title}
        description={seo.description}
        canonical={`/${locale}/calculator`}
        locale={locale}
      />
      <Calculators />
    </>
  );
};

export default CalculatorPage;
