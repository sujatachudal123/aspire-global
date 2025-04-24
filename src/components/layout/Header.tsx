import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaPhone, FaEnvelope, FaMapMarkerAlt, FaSearch } from 'react-icons/fa';
import { RiMenu2Line } from 'react-icons/ri'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      {/* Topbar */}
      <div className="bg-aspire-blue text-white py-4"> {/* Increased from py-2 to py-4 */}
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center md:space-x-6 space-y-2 md:space-y-0 mb-2 md:mb-0">
              <a href="https://goo.gl/maps/yourlink" className="flex items-center text-sm hover:text-aspire-orange" target="_blank" rel="noopener noreferrer">
                <FaMapMarkerAlt className="mr-2" />
                <span>Maitidevi, Kathmandu</span>
              </a>
              <a href="tel:+11234567890" className="flex items-center text-sm hover:text-aspire-orange">
                <FaPhone className="mr-2" />
                <span>+1 (123) 456-7890</span>
              </a>
              <a href="mailto:info@aspireglobal.com" className="flex items-center text-sm hover:text-aspire-orange">
                <FaEnvelope className="mr-2" />
                <span>info@aspireglobal.com</span>
              </a>
            </div>
            <div className="hidden md:flex items-center justify-end w-full md:w-auto">
              <Link to="/study-abroad" className="text-sm hover:text-aspire-orange font-medium flex items-center">
                Study Abroad
                <RiMenu2Line className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Main Header */}
      <div className="bg-white shadow-sm">
        <div className="container py-3">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <img
                src="/asplogo.jpg"
                alt="Aspire Global Logo"
                className="h-28 w-auto" // Increased from h-20 to h-28 (112px)
              />
            </Link>

            {/* Desktop Navigation with Search */}
            <div className="hidden md:flex items-center space-x-8">
              <nav className="flex items-center space-x-8">
                <Link to="/" className="text-lg text-black hover:text-aspire-orange font-medium">
                  Home
                </Link>
                <Link to="/about" className="text-lg text-black hover:text-aspire-orange font-medium">
                  About Us
                </Link>
                <Link to="/services" className="text-lg text-black hover:text-aspire-orange font-medium">
                  Services
                </Link>
                <Link to="/preparation class" className="text-lg text-black hover:text-aspire-orange font-medium">
                   Preparation class
                </Link>
                <Link to="/blog" className="text-lg text-black hover:text-aspire-orange font-medium">
                  Blog
                </Link>
                <Link to="/gallery" className="text-lg text-black hover:text-aspire-orange font-medium">
                  Gallery
                </Link>
                <Link to="/success-stories" className="text-lg text-black hover:text-aspire-orange font-medium">
                  Success Stories
                </Link>
                <Link to="/contact-us" className="text-lg text-black hover:text-aspire-orange font-medium">
                  Contact Us
                </Link>
              </nav>

              {/* Search Icon */}
              <button
                className="text-aspire-orange hover:text-aspire-dark-orange transition-colors duration-200"
                aria-label="Search"
              >
                <FaSearch size={20} />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                className="text-aspire-orange"
                aria-label="Search"
              >
                <FaSearch size={20} />
              </button>
              <button
                className="text-aspire-blue"
                onClick={toggleMenu}
                aria-label="Toggle Menu"
              >
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden mt-4 pb-4"> {/* Reduced spacing */}
              <nav className="flex flex-col space-y-3"> {/* Reduced spacing */}
                <Link
                  to="/"
                  className="text-lg text-aspire-blue hover:text-aspire-orange font-medium"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-lg text-aspire-blue hover:text-aspire-orange font-medium"
                  onClick={toggleMenu}
                >
                  About Us
                </Link>
                <Link
                  to="/services"
                  className="text-lg text-aspire-blue hover:text-aspire-orange font-medium"
                  onClick={toggleMenu}
                >
                  Services
                </Link>
                <Link
                  to="/test-preparation"
                  className="text-lg text-aspire-blue hover:text-aspire-orange font-medium"
                  onClick={toggleMenu}
                >
                  Test Preparation
                </Link>
                <Link
                  to="/study-abroad"
                  className="text-lg text-aspire-blue hover:text-aspire-orange font-medium flex items-center justify-between"
                  onClick={toggleMenu}
                >
                  Study Abroad
                  <RiMenu2Line className="w-4 h-4" />
                </Link>
                <Link
                  to="/blog"
                  className="text-lg text-aspire-blue hover:text-aspire-orange font-medium"
                  onClick={toggleMenu}
                >
                  Blog
                </Link>
                <Link
                  to="/gallery"
                  className="text-lg text-aspire-blue hover:text-aspire-orange font-medium"
                  onClick={toggleMenu}
                >
                  Gallery
                </Link>
                <Link
                  to="/success-stories"
                  className="text-lg text-aspire-blue hover:text-aspire-orange font-medium"
                  onClick={toggleMenu}
                >
                  Success Stories
                </Link>
                <Link
                  to="/contact-us"
                  className="text-lg text-aspire-blue hover:text-aspire-orange font-medium"
                  onClick={toggleMenu}
                >
                  Contact Us
                </Link>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;



















