import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';

const DesktopNav = ({ navItems, closeAll }) => {
  return (
    <nav className="hidden lg:block py-3">
      <ul className="flex flex-wrap justify-center gap-4 xl:gap-6">
        {navItems.map((item) => (
          <li key={item.id} className="relative group">
            <div className="flex items-center">
              <RouterLink
                to={item.path}
                className="flex items-center space-x-1 text-gray-700 hover:text-red-600 py-2 cursor-pointer font-medium transition duration-300 relative text-sm xl:text-[15px] whitespace-nowrap"
                onClick={closeAll}
              >
                <span>{item.label}</span>
                {item.hasDropdown && (
                  <FaChevronDown className="text-xs ml-1 transition-transform duration-300 group-hover:rotate-180" />
                )}
              </RouterLink>
            </div>
            {item.hasDropdown && (
              <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-1 w-64 bg-white shadow-2xl rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border">
                {item.dropdownItems.map((dropdownItem, index) => (
                  <div key={index}>
                    {dropdownItem.subItems ? (
                      <div className="relative group/sub">
                        <RouterLink
                          to={dropdownItem.path}
                          className="flex items-center justify-between px-6 py-3 text-gray-600 hover:text-red-600 hover:bg-gray-50 transition duration-200 cursor-pointer text-sm"
                        >
                          {dropdownItem.label}
                          <FaChevronDown className="text-xs" />
                        </RouterLink>
                        <div className="absolute left-full top-0 ml-1 w-56 bg-white shadow-xl rounded-lg py-2 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 border">
                          {dropdownItem.subItems.map((subItem, subIndex) => (
                            <RouterLink
                              key={subIndex}
                              to={subItem.path}
                              className="block px-6 py-2.5 text-gray-600 hover:text-red-600 hover:bg-gray-50 transition duration-200 text-sm"
                              onClick={closeAll}
                            >
                              {subItem.label}
                            </RouterLink>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <RouterLink
                        to={dropdownItem.path}
                        className="block px-6 py-3 text-gray-600 hover:text-red-600 hover:bg-gray-50 transition duration-200 text-sm"
                        onClick={closeAll}
                      >
                        {dropdownItem.label}
                      </RouterLink>
                    )}
                  </div>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopNav;