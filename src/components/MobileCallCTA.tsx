import React from 'react';
import { Phone } from 'lucide-react';

const MobileCallCTA: React.FC = () => {
  return (
    <a 
      href="tel:9015016177" 
      className="fixed bottom-6 left-6 z-50 bg-[#3A7CA5] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-[#2c6184] transition-colors duration-300 md:hidden"
      aria-label="Call Now"
    >
      <Phone size={24} />
    </a>
  );
};

export default MobileCallCTA;