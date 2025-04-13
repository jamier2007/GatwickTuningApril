import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showLocationsDropdown, setShowLocationsDropdown] = useState(false);
  const location = useLocation();
  const servicesDropdownRef = useRef(null);
  const locationsDropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setShowServicesDropdown(false);
    setShowLocationsDropdown(false);
  }, [location]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target)) {
        setShowServicesDropdown(false);
      }
      if (locationsDropdownRef.current && !locationsDropdownRef.current.contains(event.target)) {
        setShowLocationsDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { to: '/', text: 'Home' },
    { 
      text: 'Services',
      dropdown: true,
      items: [
        { to: '/services', text: 'All Services' },
        { to: '/services/stage-1-tuning', text: 'Stage 1 Tuning' },
        { to: '/services/stage-2-tuning', text: 'Stage 2 Tuning' },
        { to: '/services/dpf-solutions', text: 'DPF Solutions' },
        { to: '/services/egr-solutions', text: 'EGR Solutions' },
        { to: '/services/adblue-solutions', text: 'AdBlue Solutions' }
      ]
    },
    { 
      text: 'Locations',
      dropdown: true,
      items: [
        { to: '/locations/crawley-tuning', text: 'Crawley' },
        { to: '/locations/horsham-tuning', text: 'Horsham' },
        { to: '/locations/reigate-tuning', text: 'Reigate' },
        { to: '/locations/gatwick-tuning', text: 'Gatwick Airport' },
        { to: '/locations/sussex-tuning', text: 'Sussex' },
        { to: '/locations/surrey-tuning', text: 'Surrey' }
      ]
    },
    { to: '/about', text: 'About' },
    { to: '/pricing', text: 'Pricing' },
    { to: '/blog', text: 'Blog' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300
        ${isScrolled 
          ? 'bg-primary shadow-lg py-2' 
          : 'bg-primary py-4'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-accent focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 md:flex md:items-center">
            <Link 
              to="/" 
              className="flex items-center"
              aria-label="Home"
            >
              <Logo className="h-10 w-auto brightness-0 invert" />
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:justify-center flex-1 mx-4">
            <div className="flex space-x-6 items-center">
              {navLinks.map((link, index) => (
                link.dropdown ? (
                  <div key={index} className="relative inline-flex items-center" ref={link.text === 'Services' ? servicesDropdownRef : locationsDropdownRef}>
                    <button
                      type="button"
                      className="px-4 py-2 text-sm font-medium text-white hover:text-accent focus:outline-none flex items-center"
                      onClick={() => {
                        if (link.text === 'Services') {
                          setShowServicesDropdown(!showServicesDropdown);
                          setShowLocationsDropdown(false);
                        } else {
                          setShowLocationsDropdown(!showLocationsDropdown);
                          setShowServicesDropdown(false);
                        }
                      }}
                      aria-expanded={link.text === 'Services' ? showServicesDropdown : showLocationsDropdown}
                    >
                      {link.text}
                      <svg
                        className="ml-1 h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    
                    {/* Dropdown menu */}
                    {((link.text === 'Services' && showServicesDropdown) || 
                       (link.text === 'Locations' && showLocationsDropdown)) && (
                      <div
                        className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 top-full"
                        role="menu"
                        aria-orientation="vertical"
                      >
                        <div className="py-1">
                          {link.items.map((item, itemIndex) => (
                            <Link
                              key={itemIndex}
                              to={item.to}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              role="menuitem"
                            >
                              {item.text}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={index}
                    to={link.to}
                    className={`px-4 py-2 text-sm font-medium transition-all duration-200
                      ${isActive(link.to)
                        ? 'text-accent'
                        : 'text-white hover:text-accent'
                      }`}
                  >
                    {link.text}
                  </Link>
                )
              ))}
              <Link
                to="/contact"
                className="ml-4 px-5 py-2 rounded-md text-sm font-medium bg-accent text-white 
                  transition-all duration-200 hover:bg-accent/90"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
            ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link, index) => (
              link.dropdown ? (
                <div key={index} className="space-y-1">
                  <button
                    onClick={() => {
                      if (link.text === 'Services') {
                        setShowServicesDropdown(!showServicesDropdown);
                        setShowLocationsDropdown(false);
                      } else {
                        setShowLocationsDropdown(!showLocationsDropdown);
                        setShowServicesDropdown(false);
                      }
                    }}
                    className="flex justify-between w-full px-4 py-2 text-base font-medium text-white hover:text-accent"
                  >
                    {link.text}
                    <svg
                      className={`h-5 w-5 transform transition-transform duration-200 ${
                        (link.text === 'Services' && showServicesDropdown) || 
                        (link.text === 'Locations' && showLocationsDropdown) ? 'rotate-180' : ''
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  
                  {/* Mobile dropdown items */}
                  <div
                    className={`pl-4 space-y-1 transition-all duration-300 ${
                      (link.text === 'Services' && showServicesDropdown) || 
                      (link.text === 'Locations' && showLocationsDropdown) 
                        ? 'max-h-96 opacity-100' 
                        : 'max-h-0 opacity-0 overflow-hidden'
                    }`}
                  >
                    {link.items.map((item, itemIndex) => (
                      <Link
                        key={itemIndex}
                        to={item.to}
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-accent"
                      >
                        {item.text}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={index}
                  to={link.to}
                  className={`block px-4 py-2 text-base font-medium transition-all duration-200
                    ${isActive(link.to)
                      ? 'text-accent'
                      : 'text-white hover:text-accent'
                    }`}
                >
                  {link.text}
                </Link>
              )
            ))}
            <Link
              to="/contact"
              className="block w-full px-4 py-2 rounded-md text-base font-medium bg-accent text-white 
                transition-all duration-200 hover:bg-accent/90 text-center mt-2"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
