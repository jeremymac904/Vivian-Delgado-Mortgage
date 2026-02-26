import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import LocaleLink from './LocaleLink';
import { useLocation } from 'react-router-dom';
import { NAV_ITEMS, COMPANY_INFO, SITE_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoSrc, setLogoSrc] = useState('/branding/legends-logo-transparent.png');
  const { pathname } = useLocation();
  const locale = pathname.startsWith('/es') ? 'es' : 'en';
  const switchLocale = locale === 'en' ? 'es' : 'en';
  const currentPathWithoutLocale = pathname.replace(/^\/(en|es)/, '') || '';
  const localeSwitchMap: Record<string, string> = {
    '/property-search': '/buscar-propiedades',
    '/buscar-propiedades': '/property-search',
    '/home-value': '/valor-de-casa',
    '/valor-de-casa': '/home-value',
    '/open-houses': '/casas-abiertas',
    '/casas-abiertas': '/open-houses',
    '/market-report': '/informe-del-mercado',
    '/informe-del-mercado': '/market-report'
  };
  const switchPathSuffix =
    localeSwitchMap[currentPathWithoutLocale] || currentPathWithoutLocale;
  const switchPath = `/${switchLocale}${switchPathSuffix || ''}`;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        const isHome = pathname === "/" || pathname === "/en" || pathname === "/es";
        setIsScrolled(!isHome);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  useEffect(() => {
    const isHome = pathname === "/" || pathname === "/en" || pathname === "/es";
    setIsScrolled(!isHome);
  }, [pathname]);

  const navLabel = (label: string) => {
    if (locale !== 'es') return label;
    const map: Record<string, string> = {
      "Home": "Inicio",
      "Loan Options": "Opciones de Préstamo",
      "About": "Sobre Nosotros",
      "Calculator": "Calculadoras",
      "Reviews": "Opiniones",
      "Blog": "Blog",
      "Property Search": "Buscar propiedades",
      "Open Houses": "Casas Abiertas",
      "Home Value": "Valor de casa",
      "Market Report": "Informe del mercado",
      "Apply": "Aplicar"
    };
    return map[label] || label;
  };

  const navHref = (href: string) => {
    if (locale === 'es') {
      if (href === '/property-search') return '/buscar-propiedades';
      if (href === '/home-value') return '/valor-de-casa';
      if (href === '/open-houses') return '/casas-abiertas';
      if (href === '/market-report') return '/informe-del-mercado';
    }
    return href;
  };

  const isActive = (href: string) => {
    const current = pathname.replace(/^\/(en|es)/, '') || '/';
    if (href === '/property-search') {
      return (
        current === '/property-search' ||
        current.startsWith('/property-search') ||
        current === '/buscar-propiedades' ||
        current.startsWith('/buscar-propiedades')
      );
    }
    if (href === '/home-value') {
      return (
        current === '/home-value' ||
        current.startsWith('/home-value') ||
        current === '/valor-de-casa' ||
        current.startsWith('/valor-de-casa')
      );
    }
    if (href === '/open-houses') {
      return (
        current === '/open-houses' ||
        current.startsWith('/open-houses') ||
        current === '/casas-abiertas' ||
        current.startsWith('/casas-abiertas')
      );
    }
    if (href === '/market-report') {
      return (
        current === '/market-report' ||
        current.startsWith('/market-report') ||
        current === '/informe-del-mercado' ||
        current.startsWith('/informe-del-mercado')
      );
    }
    const localizedHref = navHref(href);
    return current === localizedHref || (localizedHref !== '/' && current.startsWith(localizedHref));
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 py-2`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="noir-panel rounded-xl px-4 sm:px-5 h-16 flex justify-between items-center">

          <div className="flex-shrink-0 flex items-center">
            <LocaleLink to="/" className="flex items-center group" aria-label={locale === 'es' ? 'Inicio Legends Mortgage Team' : 'Legends Mortgage Team home'}>
              <img
                src={logoSrc}
                alt="Legends Mortgage Team powered by Loan Factory"
                className="h-10 sm:h-11 lg:h-12 w-auto object-contain"
                onError={() => setLogoSrc('/legends-logo.png')}
              />
            </LocaleLink>
          </div>

          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {NAV_ITEMS.map((item) => (
              <LocaleLink
                key={item.label}
                to={navHref(item.href)}
                className={`text-sm font-medium transition-colors hover:text-[#F36F20] relative pb-1 ${isActive(item.href) ? 'text-white' : 'text-gray-300'}`}
              >
                {navLabel(item.label)}
                <span className={`absolute left-0 right-0 -bottom-1 h-px bg-gradient-to-r from-transparent via-[#f36f20] to-transparent transition-opacity ${isActive(item.href) ? 'opacity-100' : 'opacity-0'}`}></span>
              </LocaleLink>
            ))}
            <a
              href={SITE_LINKS.teamSiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium transition-colors hover:text-[#F36F20] text-gray-300"
            >
              {locale === 'es' ? 'Sitio del equipo' : 'Team Website'}
            </a>
            <a
              href={switchPath}
              className="text-sm font-bold px-3 py-1 rounded border border-white/20 text-gray-200 hover:text-white"
            >
              {switchLocale.toUpperCase()}
            </a>
            <a
              href={SITE_LINKS.applyNowUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-metal btn-metal--primary px-5 py-2.5 text-sm"
            >
              {locale === 'es' ? 'Comenzar mi aprobación' : 'Apply'}
            </a>
          </div>

          <div className="lg:hidden flex items-center">
             <a href={`tel:${COMPANY_INFO.phone.replace(/\D/g,'')}`} className="mr-4 text-white">
                <Phone className="h-5 w-5" />
             </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#F36F20] focus:outline-none"
              aria-label={isOpen ? (locale === 'es' ? 'Cerrar navegación' : 'Close navigation') : (locale === 'es' ? 'Abrir navegación' : 'Open navigation')}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden noir-panel absolute w-full top-full left-0 mt-2 border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <LocaleLink
                key={item.label}
                to={navHref(item.href)}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-[#F36F20] hover:bg-white/10"
              >
                {navLabel(item.label)}
              </LocaleLink>
            ))}
            <a
              href={SITE_LINKS.teamSiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-[#F36F20] hover:bg-white/10"
            >
              {locale === 'es' ? 'Sitio del equipo' : 'Team Website'}
            </a>
            <a
              href={switchPath}
              className="block px-3 py-2 rounded-md text-base font-bold text-gray-200 hover:text-[#F36F20] hover:bg-white/10"
            >
              {switchLocale.toUpperCase()}
            </a>
            <a
              href={SITE_LINKS.applyNowUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 btn-metal btn-metal--primary px-5 py-3"
            >
              {locale === 'es' ? 'Comenzar mi aprobación' : 'Apply'}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
