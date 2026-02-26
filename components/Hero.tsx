import React, { useEffect, useState } from 'react';
import { COMPANY_INFO, SITE_LINKS } from '../constants';
import { Star, CheckCircle } from 'lucide-react';
import { useLocale } from '../i18n/locale';

const Hero: React.FC = () => {
  const locale = useLocale();
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);
    updatePreference();
    mediaQuery.addEventListener('change', updatePreference);
    return () => mediaQuery.removeEventListener('change', updatePreference);
  }, []);

  const shouldShowVideo = !prefersReducedMotion && !videoFailed;

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {shouldShowVideo && (
        <video
          src="/video/home-hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
          aria-hidden="true"
          onError={() => setVideoFailed(true)}
        />
      )}
      <div className="absolute inset-0 z-10 pointer-events-none bg-[linear-gradient(to_bottom,rgba(0,0,0,0.65),rgba(0,0,0,0.85))]" />
      <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="absolute -top-24 -left-20 w-[34rem] h-[34rem] rounded-full bg-[#f36f20]/12 blur-[90px] pointer-events-none z-10" />
      <div className="absolute -bottom-24 -right-20 w-[28rem] h-[28rem] rounded-full bg-[#6d8db8]/16 blur-[90px] pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24 relative z-20 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Profile Card (Left on Desktop, Top on Mobile) */}
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
            <div className="noir-panel p-6 rounded-lg max-w-sm w-full">
              <div className="relative mb-6">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border border-white/20 shadow-inner">
                  <img 
                    src={COMPANY_INFO.profileImage} 
                    alt={`${COMPANY_INFO.leader}, Loan Officer at Legends Mortgage Team`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 right-1/2 translate-x-1/2 btn-glass px-4 py-1 rounded-full text-xs font-bold shadow-lg whitespace-nowrap">
                  NMLS# {COMPANY_INFO.nmls}
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-serif font-bold">{COMPANY_INFO.leader}</h3>
                <p className="micro-label mb-2 text-[#F36F20]">{COMPANY_INFO.role}</p>
                <p className="text-gray-300 text-sm mb-4">{COMPANY_INFO.name}<br/>Powered by Loan Factory</p>
                
                <div className="flex justify-center items-center gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                  <span className="text-xs text-gray-300 ml-2">(150+ Reviews)</span>
                </div>

                <div className="space-y-3">
                   <a href={`tel:${COMPANY_INFO.phone.replace(/\D/g,'')}`} className="block w-full btn-metal py-3 rounded font-bold transition-colors">
                      Call {COMPANY_INFO.phone}
                   </a>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content (Right) */}
          <div className="w-full lg:w-2/3 text-center lg:text-left text-white">
            <div className="inline-block px-3 py-1 btn-glass rounded-full text-[#F36F20] font-bold text-sm mb-6 border border-[#F36F20]/30">
              {COMPANY_INFO.slogan}
            </div>
            
            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6 hero-logo-glow">
              {locale === 'es'
                ? 'Hipotecas para compradores primerizos, familias militares, primeros respondedores, inversionistas y extranjeros'
                : 'Mortgage strategy for first-time buyers, military families, first responders, investors, and foreign nationals'}
            </h1>
            
            <p className="text-gray-200 text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {locale === 'es'
                ? 'Vivian está dedicada a servir con eficiencia, conocimiento, honestidad y pasión, con comunicación clara en cada etapa.'
                : 'Vivian is dedicated to being efficient, knowledgeable, honest, and passionate, with strong service and communication at every step.'}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href={SITE_LINKS.applyNowUrl} target="_blank" rel="noreferrer" className="btn-metal btn-metal--primary px-8 py-4 rounded font-bold text-center">
                {locale === 'es' ? 'Aplicar ahora' : 'Apply Now'}
              </a>
              <a
                href={`tel:${COMPANY_INFO.mobilePhone.replace(/\D/g, '')}`}
                className="btn-metal px-8 py-4 rounded font-bold text-center"
              >
                {locale === 'es' ? 'Llamar o enviar texto' : 'Call or Text'}
              </a>
              <a
                href={SITE_LINKS.teamSiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-metal px-8 py-4 rounded font-bold text-center"
              >
                {locale === 'es' ? 'Sitio del equipo' : 'Team Website'}
              </a>
            </div>

            <div className="mt-6 noir-panel rounded-lg p-4 max-w-2xl mx-auto lg:mx-0">
              <p className="text-sm text-gray-200">
                {locale === 'es' ? 'Confianza y cumplimiento:' : 'Trust and compliance:'} {COMPANY_INFO.leader} | NMLS {COMPANY_INFO.nmls} | {COMPANY_INFO.mobilePhone}
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-400">
               <div className="flex items-center justify-center lg:justify-start gap-2">
                 <CheckCircle className="text-[#F36F20] w-5 h-5" /> Fast Closing
               </div>
               <div className="flex items-center justify-center lg:justify-start gap-2">
                 <CheckCircle className="text-[#F36F20] w-5 h-5" /> Low Rates
               </div>
               <div className="flex items-center justify-center lg:justify-start gap-2">
                 <CheckCircle className="text-[#F36F20] w-5 h-5" /> Expert Advice
               </div>
               <div className="flex items-center justify-center lg:justify-start gap-2">
                 <CheckCircle className="text-[#F36F20] w-5 h-5" /> 24/7 Support
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
