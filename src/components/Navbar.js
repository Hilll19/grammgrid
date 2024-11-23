"use client"; 
import React, { useState, useEffect, useRef } from 'react';
import GrammGridLogo from '@/img/GrammGrid';

const Navbar = () => {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isFeatureDropdownOpen, setIsFeatureDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const megaMenuRef = useRef(null);
  const featureDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target)) {
        setIsMegaMenuOpen(false);
      }
      if (featureDropdownRef.current && !featureDropdownRef.current.contains(event.target)) {
        setIsFeatureDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMegaMenu = () => setIsMegaMenuOpen(!isMegaMenuOpen);
  const toggleFeatureDropdown = () => setIsFeatureDropdownOpen(!isFeatureDropdownOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="border-b-default border-solid border-gray-700 z-10 w-full bg-white lg:fixed" id="topnav">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="w-full flex flex-col lg:flex-row">
          {/* Mobile menu button */}
          <div className="flex justify-between lg:hidden px-4">
            <a href="https://pagedone.io/" className="flex items-center">
              {/* Logo SVG */}
            </a>
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-default"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon SVG */}
            </button>
          </div>

          {/* Navigation menu */}
          <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} w-full lg:flex justify-between max-lg:bg-white py-5 max-lg:mt-1 max-lg:px-4 max-lg:shadow-lg max-lg:shadow-gray-200 max-lg:h-auto max-lg:overflow-auto transition-all duration-500 delay-200`} id="navbar">
            <ul className="flex lg:items-center max-lg:gap-4 max-lg:mb-4 flex-col mt-4 lg:flex-1 md:mt-0 lg:flex-row">
              {/* Menu items */}
              <li>
                <a href="#" className="text-gray-500 text-sm font-medium hover:text-prime-blue-700 transition-all duration-500 mb-2 block lg:mr-6 lg:text-base md:mb-0 md:mr-3 hover:text-gray-900">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 text-sm font-medium hover:text-prime-blue-700 transition-all duration-500 mb-2 block lg:mr-6 lg:text-base md:mb-0 md:mr-3 hover:text-gray-900">
                  About us
                </a>
              </li>

              {/* Products dropdown */}
              <li className="relative" ref={megaMenuRef}>
                <button
                  onClick={toggleMegaMenu}
                  className="dropdown-toggle flex items-center justify-between text-gray-500 text-sm lg:text-base font-medium hover:text-prime-blue-700 transition-all duration-500 lg:mr-6 lg:mb-0 mr-auto lg:text-left lg:m-0 hover:text-gray-900"
                >
                  Products
                  <svg className={`w-3 h-2 ml-1.5 transition-transform duration-200 ${isMegaMenuOpen ? 'rotate-180' : ''}`} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L3.58579 3.58579C4.25245 4.25245 4.58579 4.58579 5 4.58579C5.41421 4.58579 5.74755 4.25245 6.41421 3.58579L9 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </button>
                {isMegaMenuOpen && (
                 <div className="dropdown-menu rounded-xl shadow-lg lg:bg-white absolute top-full left-0 lg:w-72 mt-2">
                 <ul className="py-2">
                   <li>
                     <a className="block px-6 py-2 hover:bg-gray-100 text-gray-900 font-medium" href="#">
                       Grammar
                     </a>
                   </li>
                   <li>
                     <a className="block px-6 py-2 hover:bg-gray-100 text-gray-900 font-medium" href="#">
                       Toefl
                     </a>
                   </li>
                   <li>
                     <a className="block px-6 py-2 hover:bg-gray-100 text-gray-900 font-medium" href="#">
                       Ielts
                     </a>
                   </li>
                 </ul>
               </div>
                )}
                
              </li>
              

              {/* Features dropdown */}
              <li className="relative" ref={featureDropdownRef}>
                <button
                  onClick={toggleFeatureDropdown}
                  className="dropdown-toggle flex items-center justify-between text-gray-500 text-sm max-lg:h-max text-center lg:text-base font-medium hover:text-prime-blue-700 transition-all duration-500 mb-2 lg:mr-6 lg:mb-0 mr-auto lg:text-left lg:m-0 hover:text-gray-900"
                >
                  Features
                  <svg className={`w-3 h-2 ml-1.5 transition-transform duration-200 ${isFeatureDropdownOpen ? 'rotate-180' : ''}`} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L3.58579 3.58579C4.25245 4.25245 4.58579 4.58579 5 4.58579C5.41421 4.58579 5.74755 4.25245 6.41421 3.58579L9 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </button>
                {isFeatureDropdownOpen && (
                  <div className="dropdown-menu rounded-xl shadow-lg lg:bg-white absolute top-full left-0 lg:w-72 mt-2">
                    <ul className="py-2">
                      <li>
                        <a className="block px-6 py-2 hover:bg-gray-100 text-gray-900 font-medium" href="#">
                          Downloads
                        </a>
                      </li>
                      <li>
                        <a className="block px-6 py-2 hover:bg-gray-100 text-gray-900 font-medium" href="#">
                          Saved Files
                        </a>
                      </li>
                      <li>
                        <a className="block px-6 py-2 hover:bg-gray-100 text-gray-900 font-medium" href="#">
                          Notifications
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
            </ul>

            {/* Logo */}
            <a
              href="https://pagedone.io/"
              className="hidden lg:flex items-center"
            >
              <GrammGridLogo />
              <h2 className="text-black text-2xl">GrammGrid</h2>
            </a>

            {/* Login and Sign up buttons */}
            <div className="flex lg:items-center justify-start flex-col lg:flex-row max-lg:gap-4 lg:flex-1 lg:justify-end">
              <button className="bg-indigo-50 text-[#a69a94] rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm hover:bg-indigo-100">
                Login
              </button>
              <button className="bg-[#3A312A] text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm lg:ml-5 hover:bg-[#514639]">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;