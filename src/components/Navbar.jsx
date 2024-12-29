import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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
  }, [location]);

  const navLinks = [
    { to: '/', text: 'Home' },
    { to: '/services', text: 'Services' },
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
        <div className="flex items-center h-16">
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
          <div className="absolute left-1/2 transform -translate-x-1/2 sm:static sm:translate-x-0">
            <Link 
              to="/" 
              className="flex items-center"
              aria-label="Home"
            >
              <Logo className="h-10 w-auto brightness-0 invert" />
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-6 ml-auto">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 text-sm font-medium transition-all duration-200
                  ${isActive(link.to)
                    ? 'text-accent'
                    : 'text-white hover:text-accent'
                  }`}
              >
                {link.text}
              </Link>
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

        {/* Mobile menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
            ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block px-4 py-2 text-base font-medium transition-all duration-200
                  ${isActive(link.to)
                    ? 'text-accent'
                    : 'text-white hover:text-accent'
                  }`}
              >
                {link.text}
              </Link>
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
