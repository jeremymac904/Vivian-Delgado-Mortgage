import React from 'react';
import DigitalBusinessCardTemplate from '../components/DigitalBusinessCardTemplate';
import { COMPANY_INFO } from '../constants';
import { useLocale } from '../i18n/locale';

const DigitalBusinessCardTemplatePage: React.FC = () => {
  const locale = useLocale();
  const loanTypesEs = [
    'Préstamos Convencionales',
    'Préstamos FHA',
    'Préstamos VA',
    'Préstamos Jumbo',
    'Préstamos Non QM',
    'Préstamos DSCR',
    'Hipoteca Reversa'
  ];
  const loanTypesEn = [
    'Conventional Loans',
    'FHA Loans',
    'VA Loans',
    'Jumbo Loans',
    'Non QM Loans',
    'DSCR Loans',
    'Reverse Mortgage'
  ];

  return (
    <DigitalBusinessCardTemplate
      name={COMPANY_INFO.leader}
      title="Mortgage Loan Officer"
      nmls={COMPANY_INFO.nmls}
      licenses="FL"
      phone={COMPANY_INFO.phone}
      email={COMPANY_INFO.email}
      location={COMPANY_INFO.location}
      headshotUrl={COMPANY_INFO.profileImage}
      applyUrl={`mailto:${COMPANY_INFO.email}`}
      applyLabel={COMPANY_INFO.email}
      loanTypes={locale === 'es' ? loanTypesEs : loanTypesEn}
      backLink="/team"
      canonicalPath="/team/digital-business-card"
    />
  );
};

export default DigitalBusinessCardTemplatePage;
