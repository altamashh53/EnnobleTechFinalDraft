import React from 'react';
import { Phone } from 'lucide-react';

const CustomSolution: React.FC = () => {
  return (
    <section className="py-16 bg-[#3A7CA5]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center text-white" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-gray-100 mb-8 text-lg">
            Our team of experts is ready to design a tailored smart home or commercial solution that perfectly fits your needs and budget.
          </p>
          <a 
            href="tel:9015016177" 
            className="inline-flex items-center gap-2 bg-white text-[#3A7CA5] font-medium py-3 px-8 rounded-md transition-all duration-300 hover:bg-opacity-90 hover:shadow-lg transform hover:-translate-y-1"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <Phone size={20} />
            <span>Call Now: 901-501-6177</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CustomSolution;