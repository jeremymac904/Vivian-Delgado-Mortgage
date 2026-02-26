import React from 'react';
import Contact from '../components/Contact';
import Seo from '../components/Seo';
import { useLocale } from '../i18n/locale';

const ContactPage: React.FC = () => {
  const locale = useLocale();
  const seo = locale === 'es'
    ? {
        title: 'Contacto | Vivian Delgado Mortgage',
        description: 'Contáctenos para un plan claro y próximos pasos definidos.'
      }
    : {
        title: 'Contact | Vivian Delgado Mortgage',
        description: 'Call, text, or message Vivian for clear mortgage options and quick answers.'
      };

  return (
    <>
      <Seo
        title={seo.title}
        description={seo.description}
        canonical={`/${locale}/contact`}
        locale={locale}
      />
      <Contact />
    </>
  );
};

export default ContactPage;
