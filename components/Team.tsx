import React from 'react';
import { TEAM_MEMBERS, TEAM_HEADSHOT_PLACEHOLDER } from '../constants';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLocale } from '../i18n/locale';

const Team: React.FC = () => {
  const locale = useLocale();

  return (
    <section className="py-20 bg-[#1C2530]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            {locale === 'es' ? 'Conozca al equipo' : 'Meet Our Team'}
          </h1>
          <div className="w-20 h-1 bg-[#F36F20] mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            {locale === 'es'
              ? 'Profesionales con experiencia y trato claro, enfocados en acompañarle hacia su meta.'
              : 'Experienced professionals focused on your homeownership goals.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="p-8 flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-4 border-4 border-white shadow-md overflow-hidden relative">
                  <img
                    src={member.image || TEAM_HEADSHOT_PLACEHOLDER}
                    alt={`${member.name}, ${member.title} at Legends Mortgage Team`}
                    className="w-full h-full object-cover object-center"
                    onError={(event) => {
                      event.currentTarget.src = TEAM_HEADSHOT_PLACEHOLDER;
                    }}
                  />
                </div>

                <h3 className="text-xl font-bold text-[#1C2530] mb-1">{member.name}</h3>
                <p className="text-[#F36F20] font-bold text-xs uppercase tracking-widest mb-4">{member.title}</p>

                <div className="w-full border-t border-gray-100 my-4"></div>

                <div className="text-sm text-gray-600 space-y-2 w-full">
                  <div className="flex justify-between">
                    <span className="font-semibold">NMLS#</span>
                    <span>{member.nmls}</span>
                  </div>
                  <div className="flex justify-between text-left">
                    <span className="font-semibold whitespace-nowrap mr-2">{locale === 'es' ? 'Licencias' : 'License(s)'}:</span>
                    <span className="text-right">{member.licenses}</span>
                  </div>

                  {member.rating && (
                    <div className="flex justify-center items-center gap-1 pt-3">
                      {[...Array(member.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                      {member.ratingCount && (
                        <span className="text-xs text-gray-400 ml-1">({member.ratingCount} ratings)</span>
                      )}
                    </div>
                  )}
                </div>

                <div className="mt-6">
                  <Link to={`/${locale}/apply`} className="inline-block bg-[#1C2530] text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-[#F36F20] transition-colors">
                    {locale === 'es' ? 'Comenzar mi aprobación' : 'Get Connected'}
                  </Link>
                </div>
                {member.slug && (
                  <div className="mt-3">
                    <Link to={`/${locale}/team/${member.slug}`} className="text-xs font-bold text-[#F36F20] hover:text-[#1C2530] transition-colors">
                      {locale === 'es' ? 'Ver tarjeta digital' : 'View Digital Business Card'}
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
