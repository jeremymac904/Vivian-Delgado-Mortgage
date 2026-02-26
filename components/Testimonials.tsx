import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-[#F1F3F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1C2530] mb-4">
            Stories from Happy Homeowners
          </h2>
          <div className="w-20 h-1 bg-[#F36F20] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-xl shadow-md relative mt-6">
              <div className="absolute -top-6 left-8 bg-[#F36F20] text-white p-3 rounded-full shadow-lg">
                <Quote size={20} fill="currentColor" />
              </div>
              <div className="mt-4 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-600 italic mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="border-t border-gray-100 pt-4">
                <p className="font-bold text-[#1C2530]">{testimonial.name}</p>
                <p className="text-xs text-[#F36F20] font-bold uppercase tracking-wider">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
