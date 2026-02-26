import React from 'react';
import { useParams } from 'react-router-dom';
import DigitalBusinessCardTemplate from '../components/DigitalBusinessCardTemplate';
import { TEAM_MEMBERS, COMPANY_INFO } from '../constants';
import { useLocale } from '../i18n/locale';

const TeamMemberCardPage: React.FC = () => {
  const { slug } = useParams();
  const locale = useLocale();
  const member = TEAM_MEMBERS.find((m) => m.slug === slug || m.slugAliases?.includes(slug || ''));

  if (!member && import.meta.env.DEV) {
    console.warn(`[TeamMemberCardPage] Team member not found for slug: ${slug}`);
  }

  if (!member) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-serif font-bold text-[#1C2530] mb-4">
            {locale === 'es' ? 'Perfil no encontrado' : 'Team Member Not Found'}
          </h1>
          <p className="text-gray-700">
            {locale === 'es'
              ? 'Regrese al equipo y seleccione un perfil válido.'
              : 'Please return to the team page and choose a valid profile.'}
          </p>
        </div>
      </section>
    );
  }

  const loanTypesEs = [
    'Préstamos Convencionales',
    'Préstamos FHA',
    'Préstamos VA',
    'Préstamos USDA',
    'Préstamos Jumbo',
    'Refinanciamiento'
  ];
  const loanTypesEn = [
    'Conventional Loans',
    'FHA Loans',
    'VA Loans',
    'USDA Loans',
    'Jumbo Loans',
    'Refinance'
  ];

  return (
    <DigitalBusinessCardTemplate
      name={member.name}
      title={member.title}
      secondaryTitle={member.secondaryTitle}
      nmls={member.nmls}
      companyNmls={member.companyNmls || COMPANY_INFO.companyNmls}
      licenses={member.licenses}
      company={member.company}
      phone={member.phone || COMPANY_INFO.phone}
      directPhone={member.directPhone}
      corporatePhone={member.corporatePhone}
      email={member.email || ''}
      location={member.address || COMPANY_INFO.location}
      headshotUrl={member.image}
      applyUrl={member.applyUrl}
      applyLabel={member.applyLabel}
      social={member.social}
      backLink="/team"
      loanTypes={locale === 'es' ? loanTypesEs : loanTypesEn}
      canonicalPath={`/team/${member.slug}`}
      seoDescription={member.seoDescription}
      operationsProfile={member.slug === 'ashley-rogers'}
    />
  );
};

export default TeamMemberCardPage;
