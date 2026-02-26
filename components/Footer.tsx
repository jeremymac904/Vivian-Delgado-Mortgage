import React from 'react';
import { COMPANY_INFO, SITE_LINKS } from '../constants';
import { Home, Phone, Mail, FileText } from 'lucide-react';
import LocaleLink from './LocaleLink';
import { useLocation } from 'react-router-dom';

const Footer: React.FC = () => {
  const { pathname } = useLocation();
  const locale = pathname.startsWith('/es') ? 'es' : 'en';
  const enPath = `/en${pathname.replace(/^\/(en|es)/, '') || ''}`;
  const esPath = `/es${pathname.replace(/^\/(en|es)/, '') || ''}`;

  return (
    <footer className="py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="logo-legends text-2xl font-serif font-bold">VIVIAN</span>
              <span className="micro-label text-[#F36F20]">DELGADO MORTGAGE</span>
            </div>
            <p className="text-sm mb-4 max-w-sm">
              {locale === 'es'
                ? 'Powered by Loan Factory. Servicio claro y directo.'
                : 'Powered by Loan Factory. Broker guidance with lender options aligned to your goals.'}
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
                className="w-8 h-8 btn-glass rounded-full hover:bg-[#F36F20] transition-colors flex items-center justify-center"
                aria-label={locale === 'es' ? 'Llamar a Legends Mortgage Team' : 'Call Legends Mortgage Team'}
              >
                <Phone className="w-4 h-4 text-white" />
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="w-8 h-8 btn-glass rounded-full hover:bg-[#F36F20] transition-colors flex items-center justify-center"
                aria-label={locale === 'es' ? 'Enviar correo a Legends Mortgage Team' : 'Email Legends Mortgage Team'}
              >
                <Mail className="w-4 h-4 text-white" />
              </a>
              <LocaleLink
                to="/apply"
                className="w-8 h-8 btn-glass rounded-full hover:bg-[#F36F20] transition-colors flex items-center justify-center"
                aria-label={locale === 'es' ? 'Comenzar mi aprobación' : 'Apply online'}
              >
                <FileText className="w-4 h-4 text-white" />
              </LocaleLink>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">{locale === 'es' ? 'Recursos' : 'Quick Links'}</h4>
            <ul className="space-y-2 text-sm">
              <li><LocaleLink to="/loan-options" className="hover:text-[#F36F20] transition-colors">{locale === 'es' ? 'Opciones de Préstamo' : 'Loan Options'}</LocaleLink></li>
              <li><LocaleLink to="/calculator" className="hover:text-[#F36F20] transition-colors">{locale === 'es' ? 'Calculadoras' : 'Calculator'}</LocaleLink></li>
              <li><LocaleLink to="/reviews" className="hover:text-[#F36F20] transition-colors">{locale === 'es' ? 'Opiniones' : 'Reviews'}</LocaleLink></li>
              <li><LocaleLink to="/blog" className="hover:text-[#F36F20] transition-colors">{locale === 'es' ? 'Blog' : 'Blog'}</LocaleLink></li>
              <li>
                <a href={SITE_LINKS.teamSiteUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#F36F20] transition-colors">
                  {locale === 'es' ? 'Sitio del equipo' : 'Team Website'}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">{locale === 'es' ? 'Contacto' : 'Contact'}</h4>
            <ul className="space-y-2 text-sm">
              <li>{COMPANY_INFO.location}</li>
              <li>{COMPANY_INFO.directPhone} | {COMPANY_INFO.mobilePhone}</li>
              <li>{COMPANY_INFO.corporatePhone} (Corporate)</li>
              <li>{COMPANY_INFO.email}</li>
              <li className="pt-2 text-[#F36F20]">NMLS# {COMPANY_INFO.nmls}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">{locale === 'es' ? 'Legal' : 'Legal'}</h4>
            <ul className="space-y-2 text-sm">
              <li><LocaleLink to="/legal" className="hover:text-[#F36F20] transition-colors">{locale === 'es' ? 'Avisos legales' : 'Legal Notices'}</LocaleLink></li>
              <li><LocaleLink to="/privacy" className="hover:text-[#F36F20] transition-colors">{locale === 'es' ? 'Privacidad' : 'Privacy'}</LocaleLink></li>
              <li>{locale === 'es' ? 'Igualdad de Oportunidades de Vivienda' : 'Equal Housing Opportunity'}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Home className="w-8 h-8 text-gray-500" />
            <span className="text-xs">{locale === 'es' ? 'Igualdad de Oportunidades de Vivienda' : 'Equal Housing Opportunity'}</span>
          </div>
          <div className="text-sm text-center md:text-right leading-relaxed">
            <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.leader}. NMLS {COMPANY_INFO.nmls}. Powered by Loan Factory NMLS {COMPANY_INFO.companyNmls}.</p>
            <p className="mt-1">Equal Housing Lender. All loans subject to credit approval. Rates subject to change without notice.</p>
            <p className="mt-1">NMLS Consumer Access: <a href="https://www.nmlsconsumeraccess.org/" target="_blank" rel="noreferrer" className="underline hover:text-white">nmlsconsumeraccess.org</a></p>
            <p className="mt-2">
              <a href={enPath} className="underline hover:text-white">EN</a>
              <span className="mx-2">|</span>
              <a href={esPath} className="underline hover:text-white">ES</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
