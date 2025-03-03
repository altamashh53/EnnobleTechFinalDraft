import React from 'react';
import { Phone, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToServices = () => {
    const whatWeDoSection = document.getElementById('what-we-do');
    if (whatWeDoSection) {
      window.scrollTo({
        top: whatWeDoSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-gradient min-h-[90vh] flex items-center justify-center relative">
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center py-16">
        <div className="max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight">
            Water Purification • Home Theatre & TV Mounting<br />
            Smart Home Automation
          </h1>
          <h2 className="text-base md:text-lg text-gray-200 mb-2">
            Upgrade Your Home to be Comfortable without the Hassle
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            <a 
              href="tel:9015016177" 
              className="btn-primary flex items-center gap-2 text-base px-6 py-2 animate-pulse"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Phone size={18} />
              <span>Free Consultation - Call Now</span>
            </a>
            <button 
              onClick={scrollToServices}
              className="flex items-center gap-2 text-white hover:text-[#3A7CA5] transition-colors duration-300"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <span>Explore Our Services</span>
              <ChevronDown size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;