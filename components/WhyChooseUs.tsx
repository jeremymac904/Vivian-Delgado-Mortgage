import React from 'react';
import { FEATURES } from '../constants';
import heroHomeowners from '../src/assets/home/hero-homeowners.jpg';

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Why Work With Me
            </h2>
            <p className="text-gray-300 text-lg mb-10">
              Banks push their menu. I shop the market and give you the best-fit strategy.
            </p>

            <div className="space-y-8">
              {FEATURES.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-[#FFF4EC] flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-[#F36F20]" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual/Image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-[radial-gradient(circle_at_center,rgba(243,111,32,0.18),transparent_60%)] blur-2xl pointer-events-none"></div>
            <div className="relative noir-panel rounded-2xl overflow-hidden shadow-2xl p-2">
              <img
                src={heroHomeowners}
                alt="Happy couple holding keys to their new home"
                className="w-full h-full object-cover min-h-[500px] rounded-xl brightness-90"
              />
              <div className="absolute inset-2 rounded-xl pointer-events-none bg-gradient-to-t from-[#080d15]/55 via-[#0f1724]/20 to-transparent"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
