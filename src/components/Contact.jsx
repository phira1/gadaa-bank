import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube, FaTelegram } from 'react-icons/fa';

const Contact = () => {
  const exchangeRates = [
    { currency: 'USD', buy: '57.50', sell: '58.20' },
    { currency: 'EUR', buy: '61.80', sell: '62.50' },
    { currency: 'GBP', buy: '72.30', sell: '73.10' },
    { currency: 'AED', buy: '15.65', sell: '15.85' }
  ];

  const socialLinks = [
    { icon: FaFacebookF, label: 'Facebook', href: '#', color: 'bg-[#3b5998] hover:bg-[#2d4373]' },
    { icon: FaTwitter, label: 'Twitter', href: '#', color: 'bg-[#1da1f2] hover:bg-[#0d8bd9]' },
    { icon: FaLinkedinIn, label: 'LinkedIn', href: '#', color: 'bg-[#0077b5] hover:bg-[#005582]' },
    { icon: FaInstagram, label: 'Instagram', href: '#', color: 'bg-gradient-to-r from-[#405de6] via-[#833ab4] to-[#fd1d1d] hover:opacity-90' },
    { icon: FaYoutube, label: 'YouTube', href: '#', color: 'bg-[#ff0000] hover:bg-[#cc0000]' },
    { icon: FaTelegram, label: 'Telegram', href: '#', color: 'bg-[#0088cc] hover:bg-[#006699]' }
  ];

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: 'Head Office',
      details: 'Gotera, Kirkos Subcity, Woreda 03, House No. 745'
    },
    {
      icon: FaPhoneAlt,
      title: 'Hotline',
      details: '641'
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      details: 'info@gadaabank.com.et'
    }
  ];

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-8 animate-fadeInUp">Get in Touch</h2>
        <p className="section-subtitle animate-fadeInUp animate-delay-100">We Will Respond to You Shortly</p>
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div>
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4 animate-fadeInUp" style={{animationDelay: `${index * 100}ms`}}>
                  <div className="bg-red-600 w-12 h-12 rounded-full flex items-center justify-center text-white flex-shrink-0">
                    <info.icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{info.title}</h3>
                    <p className="text-gray-600">{info.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="animate-fadeInUp animate-delay-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Exchange Rates</h3>
              <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
                <div className="grid grid-cols-3 bg-red-600 text-white font-semibold py-3 px-4">
                  <div>Currency</div>
                  <div>Buy</div>
                  <div>Sell</div>
                </div>
                {exchangeRates.map((rate, index) => (
                  <div 
                    key={index}
                    className={`grid grid-cols-3 py-3 px-4 ${index < exchangeRates.length - 1 ? 'border-b border-gray-200' : ''}`}
                  >
                    <div className="font-medium text-gray-900">{rate.currency}</div>
                    <div className="text-green-600 font-medium">{rate.buy}</div>
                    <div className="text-red-600 font-medium">{rate.sell}</div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-3 text-center">Last Updated: Today, 10:30 AM</p>
            </div>

            <div className="animate-fadeInUp animate-delay-400">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Follow Us</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`${social.color} w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg`}
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;