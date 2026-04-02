import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { FaChevronDown, FaXmark } from 'react-icons/fa6';
import { socialLinks } from '../../data/socialLinks';

const MobileMenu = ({
  isMenuOpen,
  closeAll,
  activeDropdown,
  toggleDropdown,
  navItems
}) => {
  const getMobileBgColor = (label) => {
    switch (label) {
      case 'Facebook': return 'bg-blue-600 hover:bg-blue-700';
      case 'X': return 'bg-black hover:bg-gray-800';
      case 'LinkedIn': return 'bg-blue-700 hover:bg-blue-800';
      case 'Instagram': return 'bg-pink-600 hover:bg-pink-700';
      case 'YouTube': return 'bg-red-600 hover:bg-red-700';
      case 'Telegram': return 'bg-blue-500 hover:bg-blue-600';
      default: return 'bg-gray-500';
    }
  };

  if (!isMenuOpen) return null;

  return (
    <>
      <div className="lg:hidden fixed inset-0 top-16 bg-black/30 z-40 animate-fadeIn" onClick={closeAll} />
      <div className="lg:hidden fixed top-16 left-0 right-0 bg-white z-50 overflow-y-auto max-h-[calc(100vh-4rem)] animate-slideInRight shadow-xl">
        <div className="container mx-auto px-4 py-4">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.id} className="border-b border-gray-100 last:border-b-0">
                <div className="flex flex-col">
                  <div className="flex justify-between items-center py-3">
                    <RouterLink
                      to={item.path}
                      onClick={closeAll}
                      className="text-gray-700 hover:text-red-600 font-medium text-base"
                    >
                      {item.label}
                    </RouterLink>
                    {item.hasDropdown && (
                      <button
                        onClick={() => toggleDropdown(item.id)}
                        className="p-2 text-gray-500 hover:text-red-600"
                        aria-label={`Toggle ${item.label} menu`}
                      >
                        <FaChevronDown
                          className={`transition-transform duration-300 ${activeDropdown === item.id ? 'rotate-180' : ''}`}
                        />
                      </button>
                    )}
                  </div>
                  {item.hasDropdown && activeDropdown === item.id && (
                    <div className="ml-3 mb-3 space-y-1 animate-fadeInUp border-l-2 border-gray-200 pl-3">
                      {item.dropdownItems.map((dropdownItem, index) => (
                        <div key={index}>
                          {dropdownItem.subItems ? (
                            <div className="space-y-2">
                              <div className="font-medium text-gray-700 py-2">{dropdownItem.label}</div>
                              <div className="ml-3 space-y-1 border-l-2 border-gray-100 pl-3">
                                {dropdownItem.subItems.map((subItem, subIndex) => (
                                  <RouterLink
                                    key={subIndex}
                                    to={subItem.path}
                                    onClick={closeAll}
                                    className="block py-2 text-gray-600 hover:text-red-600 text-sm"
                                  >
                                    {subItem.label}
                                  </RouterLink>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <RouterLink
                              to={dropdownItem.path}
                              onClick={closeAll}
                              className="block py-2 text-gray-600 hover:text-red-600 text-sm"
                            >
                              {dropdownItem.label}
                            </RouterLink>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex items-center justify-center space-x-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${getMobileBgColor(social.label)} p-3 rounded-full transition duration-300`}
                >
                  <social.icon className="text-white text-sm" size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;