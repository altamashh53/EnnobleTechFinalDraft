import React from 'react';
import { Phone, Mail, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-black text-white">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img 
              src="https://i.imgur.com/5cW9zf2.png" 
              alt="Ennoble Technology LLC Logo" 
              className="h-12 mb-4"
            />
            <p className="text-gray-400 mb-4">
              Smart home automation & low voltage solutions in Nashville. Upgrade your home for a modern & seamless experience.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/EnnobleTechnologyLLC/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#3A7CA5] transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="https://www.instagram.com/ennoble.tech" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#3A7CA5] transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-[#3A7CA5]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#home" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
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
                  className="text-gray-400 hover:text-white transition-colors duration-300"
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
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('services');
                  }}
                >
                  Automation Services
                </a>
              </li>
              <li>
                <a 
                  href="#pricing" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
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
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-[#3A7CA5]">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Smart Home Setup
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  TV Mounting
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Home Theater Installation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Security Systems
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Water Purification
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-[#3A7CA5]">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-[#3A7CA5] mt-1" />
                <div>
                  <p className="font-medium">Phone</p>
                  <a 
                    href="tel:9015016177" 
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    901-501-6177
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-[#3A7CA5] mt-1" />
                <div>
                  <p className="font-medium">Email</p>
                  <a 
                    href="mailto:the.ennobletech@gmail.com" 
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    the.ennobletech@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Ennoble Technology LLC. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Schema.org structured data for Local Business */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Ennoble Technology LLC",
          "image": "https://i.imgur.com/VnER8XE.png",
          "telephone": "901-501-6177",
          "email": "the.ennobletech@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Nashville",
            "addressRegion": "TN",
            "addressCountry": "US"
          },
          "priceRange": "$$$",
          "sameAs": [
            "https://www.facebook.com/EnnobleTechnologyLLC/",
            "https://www.instagram.com/ennoble.tech"
          ],
          "description": "Smart home automation & low voltage solutions in Nashville. Upgrade your home for a modern & seamless experience.",
          "openingHours": "Mo-Fr 09:00-17:00",
          "url": "https://ennobletechnology.com"
        })
      }} />
    </footer>
  );
};

export default Footer;