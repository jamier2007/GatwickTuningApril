import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-primary text-white safe-bottom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo and Copyright */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center">
              <Logo className="h-8 brightness-0 invert" />
            </Link>
            <span className="text-sm text-gray-400">
              © {new Date().getFullYear()} Gatwick Tuning
            </span>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link to="/about" className="text-sm text-gray-400 hover:text-white transition-colors">
              About
            </Link>
            <Link to="/services" className="text-sm text-gray-400 hover:text-white transition-colors">
              Services
            </Link>
            <Link to="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">
              Contact
            </Link>
            <a href="tel:01342621241" className="text-sm text-gray-400 hover:text-white transition-colors">
              01342 621241
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
