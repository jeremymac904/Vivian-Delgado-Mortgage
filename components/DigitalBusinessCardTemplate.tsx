import React from 'react';
import { Link } from 'react-router-dom';
import Seo from './Seo';
import { useLocale } from '../i18n/locale';
import { TEAM_HEADSHOT_PLACEHOLDER } from '../constants';

type DigitalBusinessCardProps = {
  name: string;
  title: string;
  secondaryTitle?: string;
  nmls: string;
  companyNmls?: string;
  licenses: string;
  company?: string;
  phone: string;
  directPhone?: string;
  corporatePhone?: string;
  email?: string;
  location: string;
  headshotUrl?: string;
  backLink?: string;
  applyUrl?: string;
  applyLabel?: string;
  social?: string;
  loanTypes: string[];
  canonicalPath?: string;
  seoDescription?: string;
  operationsProfile?: boolean;
};

const DigitalBusinessCardTemplate: React.FC<DigitalBusinessCardProps> = ({
  name,
  title,
  secondaryTitle,
  nmls,
  companyNmls,
  licenses,
  company,
  phone,
  directPhone,
  corporatePhone,
  email,
  location,
  headshotUrl,
  backLink = '/team',
  applyUrl,
  applyLabel,
  social,
  loanTypes,
  canonicalPath,
  seoDescription,
  operationsProfile = false
}) => {
  const locale = useLocale();
  const firstName = name.split(' ')[0];
  const hasEmail = Boolean(email && email.trim().length > 0);

  return (
    <section className="py-16 bg-white">
      <Seo
        title={
          locale === 'es'
            ? `${name} | ${title} | Legends Mortgage Team`
            : `${name} | ${title} | Legends Mortgage Team`
        }
        description={
          seoDescription || (
            locale === 'es'
              ? `Conecte con ${name}, ${title} en Legends Mortgage Team. Atención personalizada en ${location}.`
              : `Connect with ${name}, ${title} at Legends Mortgage Team. Serving ${location} with personalized mortgage solutions.`
          )
        }
        canonical={canonicalPath ? `/${locale}${canonicalPath}` : undefined}
        locale={locale}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link to={`/${locale}${backLink}`} className="text-[#F36F20] font-bold hover:text-[#1C2530] transition-colors">
            {locale === 'es' ? 'Volver al equipo' : 'Back to Team'}
          </Link>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
            <img
              src={headshotUrl || TEAM_HEADSHOT_PLACEHOLDER}
              alt={`${name}, ${title} at Legends Mortgage Team`}
              className="w-full h-full object-cover"
              onError={(event) => {
                event.currentTarget.src = TEAM_HEADSHOT_PLACEHOLDER;
              }}
            />
          </div>

          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#1C2530] mb-2">
              {locale === 'es' ? `${name} | ${title}` : `${name} | ${title}`}
            </h1>
            <p className="text-[#F36F20] font-bold text-sm mb-4">
              {locale === 'es' ? 'Respuestas claras. Proceso simple. Sin sorpresas.' : title}
            </p>
            {secondaryTitle && (
              <p className="text-sm text-gray-500 mb-4">{secondaryTitle}</p>
            )}
            <div className="space-y-2 text-gray-700">
              {locale === 'es' ? (
                <>
                  <p>Soy {name}, Oficial de Préstamos con The Legends Mortgage Team.</p>
                  <p>Mi enfoque es hacer que el proceso hipotecario sea claro, organizado y sin estrés.</p>
                  <p>Me encargo de los detalles, para que usted siempre sepa qué sigue.</p>
                </>
              ) : (
                <>
                  <p>{name} works with buyers and owners who want a clear, organized process.</p>
                  <p>Expectations are defined early, with calm guidance throughout.</p>
                  <p>You always know the next step before you commit.</p>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#F1F3F5] rounded-lg p-6">
            <h2 className="text-xl font-bold text-[#1C2530] mb-4">{locale === 'es' ? 'Contacto' : 'Contact'}</h2>
            <div className="space-y-2 text-gray-700">
              <p>
                <strong>{locale === 'es' ? 'Teléfono directo' : 'Direct Phone'}:</strong>{' '}
                <a className="text-[#F36F20] font-bold hover:text-[#1C2530] transition-colors" href={`tel:${(directPhone || phone).replace(/\D/g, '')}`}>
                  {directPhone || phone}
                </a>
              </p>
              {corporatePhone && (
                <p>
                  <strong>{locale === 'es' ? 'Teléfono corporativo' : 'Corporate Phone'}:</strong>{' '}
                  <a className="text-[#F36F20] font-bold hover:text-[#1C2530] transition-colors" href={`tel:${corporatePhone.replace(/\D/g, '')}`}>
                    {corporatePhone}
                  </a>
                </p>
              )}
              {hasEmail && (
                <p>
                  <strong>Email:</strong>{' '}
                  <a className="text-[#F36F20] font-bold hover:text-[#1C2530] transition-colors" href={`mailto:${email}`}>
                    {email}
                  </a>
                </p>
              )}
              <p><strong>{locale === 'es' ? 'Dirección' : 'Address'}:</strong> {location}</p>
              {company && <p><strong>{locale === 'es' ? 'Compañía' : 'Company'}:</strong> {company}</p>}
              {social && <p><strong>{locale === 'es' ? 'Social' : 'Social'}:</strong> {social}</p>}
            </div>
          </div>
          <div className="bg-[#F1F3F5] rounded-lg p-6">
            <h2 className="text-xl font-bold text-[#1C2530] mb-4">{locale === 'es' ? 'Licencias' : 'Licensing'}</h2>
            <div className="space-y-2 text-gray-700">
              <p><strong>NMLS:</strong> #{nmls}</p>
              {companyNmls && <p><strong>{locale === 'es' ? 'NMLS de la compañía' : 'Company NMLS'}:</strong> #{companyNmls}</p>}
              <p><strong>{locale === 'es' ? 'Licencias' : 'Licenses'}:</strong> {licenses}</p>
              {applyUrl && (
                <p>
                  <strong>{locale === 'es' ? 'Comenzar mi aprobación' : 'Apply'}:</strong>{' '}
                  <a href={applyUrl} className="text-[#F36F20] font-bold hover:text-[#1C2530] transition-colors">
                    {applyLabel || applyUrl}
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">
          {locale === 'es' ? 'Cómo trabajo con mis clientes' : 'How I Work With Clients'}
        </h2>
        {locale === 'es' ? (
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Comunicación clara y constante.</li>
            <li>Expectativas definidas desde el inicio.</li>
            <li>Acompañamiento hasta el cierre.</li>
          </ul>
        ) : (
          <div className="space-y-3 text-gray-700">
            <p>Clear communication and steady updates.</p>
            <p>Expectations defined from day one.</p>
            <p>Guidance from start to closing.</p>
          </div>
        )}

        {!operationsProfile && (
          <>
            <h2 className="text-2xl font-bold text-[#1C2530] mt-10 mb-4">
              {locale === 'es' ? 'Tipos de préstamos con los que trabajo' : 'Loan Types I Work With'}
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              {loanTypes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </>
        )}

        <div className="mt-10 bg-[#F1F3F5] rounded-lg p-6">
          <h2 className="text-2xl font-bold text-[#1C2530] mb-4">
            {locale === 'es' ? '¿Listo para comenzar?' : 'Ready to Start?'}
          </h2>
          {operationsProfile ? (
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${(directPhone || phone).replace(/\D/g, '')}`}
                className="inline-block bg-[#1C2530] text-white px-6 py-3 rounded font-bold hover:bg-gray-800 transition-colors text-center"
              >
                {locale === 'es' ? `Llamar a ${firstName}` : `Call ${firstName}`}
              </a>
              {hasEmail && (
                <a
                  href={`mailto:${email}`}
                  className="inline-block bg-[#F36F20] text-white px-6 py-3 rounded font-bold hover:bg-orange-600 transition-colors text-center"
                >
                  {locale === 'es' ? `Enviar correo a ${firstName}` : `Email ${firstName}`}
                </a>
              )}
              <Link
                to={`/${locale}/contact`}
                className="inline-block bg-[#1C2530] text-white px-6 py-3 rounded font-bold hover:bg-gray-800 transition-colors text-center"
              >
                {locale === 'es' ? 'Ir a contacto' : 'Go to Contact'}
              </Link>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row gap-4">
              {(applyUrl || hasEmail) && (
                <a
                  href={applyUrl || `mailto:${email}`}
                  className="inline-block bg-[#F36F20] text-white px-6 py-3 rounded font-bold hover:bg-orange-600 transition-colors text-center"
                >
                  {locale === 'es' ? 'Comenzar mi aprobación' : `Apply with ${firstName}`}
                </a>
              )}
              <a
                href={`tel:${(directPhone || phone).replace(/\D/g, '')}`}
                className="inline-block bg-[#1C2530] text-white px-6 py-3 rounded font-bold hover:bg-gray-800 transition-colors text-center"
              >
                {locale === 'es' ? `Llamar a ${firstName}` : `Call ${firstName}`}
              </a>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default DigitalBusinessCardTemplate;
