import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { COMPANY_INFO, SITE_LINKS, SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  return (
    <section className="relative bg-[#1C2530] py-20 text-white">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#151c24] hidden lg:block"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Contact Vivian</h2>
            <p className="text-gray-400 mb-10 text-lg">
              Clear options, quick answers, and straight talk. Call, text, or message me anytime.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#F36F20] p-3 rounded-full">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Phone Numbers</h4>
                  <p className="text-gray-300">Direct: {COMPANY_INFO.directPhone}</p>
                  <p className="text-gray-300">Mobile: {COMPANY_INFO.mobilePhone}</p>
                  <p className="text-gray-300">Corporate: {COMPANY_INFO.corporatePhone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#F36F20] p-3 rounded-full">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Email</h4>
                  <p className="text-gray-300">{COMPANY_INFO.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#F36F20] p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Office Address</h4>
                  <p className="text-gray-300">{COMPANY_INFO.address}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noreferrer" className="btn-glass rounded px-3 py-2">WhatsApp</a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" className="btn-glass rounded px-3 py-2">Instagram</a>
              <a href={SOCIAL_LINKS.facebookPersonal} target="_blank" rel="noreferrer" className="btn-glass rounded px-3 py-2">Facebook</a>
              <a href={SOCIAL_LINKS.linkedIn} target="_blank" rel="noreferrer" className="btn-glass rounded px-3 py-2">LinkedIn</a>
              <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noreferrer" className="btn-glass rounded px-3 py-2">TikTok</a>
              <a href={SITE_LINKS.creditRequestUrl} target="_blank" rel="noreferrer" className="btn-glass rounded px-3 py-2">Credit Request</a>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-2xl text-[#1C2530]">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactForm: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const subject = encodeURIComponent('Vivian Delgado Mortgage - Contact Request');
    const body = encodeURIComponent(
      [
        `First Name: ${firstName}`,
        `Last Name: ${lastName}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Message: ${message}`
      ].join('\n')
    );
    window.location.href = `mailto:${COMPANY_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">First Name</label>
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="w-full bg-gray-50 border border-gray-300 rounded p-3 focus:border-[#F36F20] focus:ring-1 focus:ring-[#F36F20] outline-none transition-colors" placeholder="John" required />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">Last Name</label>
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className="w-full bg-gray-50 border border-gray-300 rounded p-3 focus:border-[#F36F20] focus:ring-1 focus:ring-[#F36F20] outline-none transition-colors" placeholder="Doe" required />
        </div>
      </div>

      <div>
        <label className="block text-sm font-bold text-gray-700 mb-1">Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-gray-50 border border-gray-300 rounded p-3 focus:border-[#F36F20] focus:ring-1 focus:ring-[#F36F20] outline-none transition-colors" placeholder="john@example.com" required />
      </div>

      <div>
        <label className="block text-sm font-bold text-gray-700 mb-1">Phone</label>
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full bg-gray-50 border border-gray-300 rounded p-3 focus:border-[#F36F20] focus:ring-1 focus:ring-[#F36F20] outline-none transition-colors" placeholder="(555) 123-4567" />
      </div>

      <div>
        <label className="block text-sm font-bold text-gray-700 mb-1">Message</label>
        <textarea rows={4} value={message} onChange={(e) => setMessage(e.target.value)} className="w-full bg-gray-50 border border-gray-300 rounded p-3 focus:border-[#F36F20] focus:ring-1 focus:ring-[#F36F20] outline-none transition-colors" placeholder="I want to buy a home in Florida." required />
      </div>

      <button type="submit" className="w-full bg-[#F36F20] text-white font-bold py-4 rounded hover:bg-orange-600 transition-colors shadow-lg">
        SEND MESSAGE
      </button>
    </form>
  );
};

export default Contact;
