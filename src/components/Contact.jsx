import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaTelegramPlane } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Contact = () => {
  const socialLinks = [
    { icon: FaFacebookF, label: 'Facebook', href: 'https://www.facebook.com/gadaabanksc', color: 'bg-[#3b5998] hover:bg-[#2d4373]' },
    { icon: FaXTwitter, label: 'X', href: 'https://x.com/gadaabanksc', color: 'bg-black hover:bg-gray-800' },
    { icon: FaLinkedinIn, label: 'LinkedIn', href: 'https://www.linkedin.com/company/gadaa-bank-sc', color: 'bg-[#0077b5] hover:bg-[#005582]' },
    { icon: FaInstagram, label: 'Instagram', href: 'https://www.instagram.com/gadaabanksc/', color: 'bg-gradient-to-r from-[#405de6] via-[#833ab4] to-[#fd1d1d] hover:opacity-90' },
    { icon: FaYoutube, label: 'YouTube', href: 'https://www.youtube.com/@Gadaa-Bank', color: 'bg-[#ff0000] hover:bg-[#cc0000]' },
    { icon: FaTelegramPlane, label: 'Telegram', href: 'https://t.me/GadaaBankOfficial', color: 'bg-[#0088cc] hover:bg-[#006699]' }
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Follow Us</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
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