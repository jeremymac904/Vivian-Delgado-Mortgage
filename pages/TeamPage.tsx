import React from 'react';
import Team from '../components/Team';
import Seo from '../components/Seo';
import { useLocale } from '../i18n/locale';

const TeamPage: React.FC = () => {
  const locale = useLocale();
  const seo = locale === 'es'
    ? {
        title: 'Equipo | Legends Mortgage Team',
        description: 'Conozca al equipo de The Legends Mortgage Team y su forma de trabajo.'
      }
    : {
        title: 'Team | Legends Mortgage Team',
        description: 'Meet the Legends Mortgage Team and how we work with clients.'
      };

  return (
    <>
      <Seo
        title={seo.title}
        description={seo.description}
        canonical={`/${locale}/team`}
        locale={locale}
      />
      <Team />
    </>
  );
};

export default TeamPage;
