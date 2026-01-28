import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube, FaTelegram } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: 'home' },
    { label: 'About Us', href: 'about' },
    { label: 'Products & Services', href: 'services' },
    { label: 'Digital', href: 'digital' },
    { label: 'Resources', href: 'resources' }
  ];

  const socialLinks = [
    { icon: FaFacebookF, label: 'Facebook', href: '#', color: 'bg-[#3b5998] hover:bg-[#2d4373]' },
    { icon: FaTwitter, label: 'Twitter', href: '#', color: 'bg-[#1da1f2] hover:bg-[#0d8bd9]' },
    { icon: FaLinkedinIn, label: 'LinkedIn', href: '#', color: 'bg-[#0077b5] hover:bg-[#005582]' },
    { icon: FaInstagram, label: 'Instagram', href: '#', color: 'bg-gradient-to-r from-[#405de6] via-[#833ab4] to-[#fd1d1d] hover:opacity-90' },
    { icon: FaYoutube, label: 'YouTube', href: '#', color: 'bg-[#ff0000] hover:bg-[#cc0000]' },
    { icon: FaTelegram, label: 'Telegram', href: '#', color: 'bg-[#0088cc] hover:bg-[#006699]' }
  ];

  return (
    <footer id="contact-footer" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4 animate-fadeInUp">
            <img 
              src="/images/download2.jpg" 
              alt="Gadaa Bank Logo" 
              className="h-12 w-auto"
            />
            <p className="text-lg font-semibold text-red-500">New Generations Bank</p>
            <p className="text-gray-300 text-sm">
              Building futures together with innovative financial solutions for generations.
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-fadeInUp animate-delay-100">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="text-gray-300 hover:text-red-500 transition duration-300 cursor-pointer text-sm block py-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fadeInUp animate-delay-200">
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <address className="text-gray-300 not-italic mb-4 text-sm">
              Gotera, Kirkos Subcity, Woreda 03, House No. 745
            </address>
            <p className="text-gray-300 mb-2 text-sm">Hotline: <span className="font-semibold">641</span></p>
            <p className="text-gray-300 mb-6 text-sm">Email: info@gadaabank.com.et</p>
            
            {/* Social Media with Hover Effects */}
            <div>
              <h5 className="text-lg font-semibold mb-3">Follow Us</h5>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`${social.color} w-9 h-9 rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg`}
                    aria-label={social.label}
                    style={{animationDelay: `${index * 100}ms`}}
                  >
                    <social.icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Gadaa Bank. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition duration-300 hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition duration-300 hover:underline">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition duration-300 hover:underline">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;