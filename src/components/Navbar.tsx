import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight &&
        sectionId
      ) {
        setActiveSection(sectionId);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      setIsOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-3'}`}>
      <div className="container mx-auto px-4 md:px-8">
        <nav className="flex items-center justify-between">
          <a href="#home" className="flex items-center" onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}>
            <img 
              src="https://i.imgur.com/5cW9zf2.png" 
              alt="Ennoble Technology LLC Logo" 
              className="h-12 md:h-16 max-w-[150px] md:max-w-[200px] transition-all duration-300"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <ul className="flex flex-wrap justify-end space-x-2 lg:space-x-5">
              <li>
                <a 
                  href="#home" 
                  className={`nav-link text-sm lg:text-base px-2 py-1 ${scrolled ? 'nav-link-scrolled' : ''} ${activeSection === 'home' ? 'nav-link-active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('home');
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#what-we-do" 
                  className={`nav-link text-sm lg:text-base px-2 py-1 ${scrolled ? 'nav-link-scrolled' : ''} ${activeSection === 'what-we-do' ? 'nav-link-active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('what-we-do');
                  }}
                >
                  What We Do
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className={`nav-link text-sm lg:text-base px-2 py-1 ${scrolled ? 'nav-link-scrolled' : ''} ${activeSection === 'services' ? 'nav-link-active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('services');
                  }}
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#pricing" 
                  className={`nav-link text-sm lg:text-base px-2 py-1 ${scrolled ? 'nav-link-scrolled' : ''} ${activeSection === 'pricing' ? 'nav-link-active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('pricing');
                  }}
                >
                  Pricing
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className={`nav-link text-sm lg:text-base px-2 py-1 ${scrolled ? 'nav-link-scrolled' : ''} ${activeSection === 'contact' ? 'nav-link-active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
            <a 
              href="tel:9015016177" 
              className="btn-primary flex items-center gap-1 transform transition-all duration-300 hover:scale-105 text-xs lg:text-sm px-3 lg:px-4 py-1.5 lg:py-2 ml-3 lg:ml-5"
            >
              <Phone size={14} className="hidden sm:block" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-2xl focus:outline-none z-20"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={`h-6 w-6 ${scrolled ? 'text-gray-800' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${scrolled ? 'text-gray-800' : 'text-white'}`} />
            )}
          </button>

          {/* Mobile Navigation */}
          <div className={`fixed inset-0 bg-white z-10 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex flex-col h-full justify-center items-center space-y-6 p-8">
              <a href="#home" className="mb-6">
                <img 
                  src="https://i.imgur.com/VnER8XE.png" 
                  alt="Ennoble Technology LLC Logo" 
                  className="h-12 max-w-[150px]"
                />
              </a>
              <ul className="flex flex-col space-y-5 text-center">
                <li>
                  <a 
                    href="#home" 
                    className="text-lg font-medium hover:text-[#3A7CA5] transition-colors duration-300"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('home');
                    }}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a 
                    href="#what-we-do" 
                    className="text-lg font-medium hover:text-[#3A7CA5] transition-colors duration-300"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('what-we-do');
                    }}
                  >
                    What We Do
                  </a>
                </li>
                <li>
                  <a 
                    href="#services" 
                    className="text-lg font-medium hover:text-[#3A7CA5] transition-colors duration-300"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('services');
                    }}
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a 
                    href="#pricing" 
                    className="text-lg font-medium hover:text-[#3A7CA5] transition-colors duration-300"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('pricing');
                    }}
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    className="text-lg font-medium hover:text-[#3A7CA5] transition-colors duration-300"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('contact');
                    }}
                  >
                    Contact
                  </a>
                </li>
              </ul>
              <a 
                href="tel:9015016177" 
                className="btn-primary flex items-center gap-2 mt-6"
              >
                <Phone size={18} />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;