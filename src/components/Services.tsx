import React, { useState } from 'react';
import { Home, Wifi, Shield, Video, Music, Tv, Network, Building, Lock, Layers, Monitor, PenTool as Tool } from 'lucide-react';

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState('residential');

  const residentialServices = [
    {
      title: 'Smart Home Setup',
      description: 'Comprehensive smart home installation with voice assistants, lighting, thermostats, and integrated controls for a seamless connected experience.',
      icon: <Home size={24} />
    },
    {
      title: 'WiFi Solutions',
      description: 'Professional WiFi network design with mesh systems and optimized configurations for complete coverage and maximum performance.',
      icon: <Wifi size={24} />
    },
    {
      title: 'Security Systems',
      description: 'Advanced home security with smart locks, doorbell cameras, and motion sensors for complete peace of mind.',
      icon: <Shield size={24} />
    },
    {
      title: 'Surveillance',
      description: 'High-definition camera systems with remote viewing and motion detection to keep your property secure 24/7.',
      icon: <Video size={24} />
    },
    {
      title: 'Audio Systems',
      description: 'Custom multi-room audio with high-fidelity speakers and wireless streaming for the perfect sound experience.',
      icon: <Music size={24} />
    },
    {
      title: 'Home Entertainment',
      description: 'Premium home theater installations with 4K/8K displays and surround sound for an immersive entertainment experience.',
      icon: <Tv size={24} />
    }
  ];

  const commercialServices = [
    {
      title: 'Network Infrastructure',
      description: 'Enterprise-grade network design with structured cabling and access points for reliable, high-performance connectivity.',
      icon: <Network size={24} />
    },
    {
      title: 'Office Automation',
      description: 'Comprehensive office automation with smart lighting and climate control for improved efficiency and reduced energy costs.',
      icon: <Building size={24} />
    },
    {
      title: 'Security Solutions',
      description: 'Commercial-grade security with access control, surveillance, and intrusion detection for complete facility protection.',
      icon: <Lock size={24} />
    },
    {
      title: 'System Integration',
      description: 'Seamless integration of security, HVAC, lighting, and audio/visual equipment for centralized control.',
      icon: <Layers size={24} />
    },
    {
      title: 'Digital Displays',
      description: 'Professional installation of digital signage and video walls with content management for effective communication.',
      icon: <Monitor size={24} />
    },
    {
      title: 'Maintenance',
      description: 'Proactive maintenance plans with regular system checks and priority support to ensure optimal performance.',
      icon: <Tool size={24} />
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Automation Services</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Smart solutions for both residential and commercial clients.
          </p>
        </div>

        <div className="mb-8 flex justify-center" data-aos="fade-up">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              className={`px-6 py-3 text-sm font-medium rounded-l-lg transition-all duration-300 ${
                activeTab === 'residential'
                  ? 'bg-[#3A7CA5] text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('residential')}
            >
              <span className="flex items-center gap-2">
                <Home size={18} />
                Residential Services
              </span>
            </button>
            <button
              type="button"
              className={`px-6 py-3 text-sm font-medium rounded-r-lg transition-all duration-300 ${
                activeTab === 'commercial'
                  ? 'bg-[#3A7CA5] text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('commercial')}
            >
              <span className="flex items-center gap-2">
                <Building size={18} />
                Commercial Services
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(activeTab === 'residential' ? residentialServices : commercialServices).map((service, index) => (
            <div
              key={index}
              className="service-card"
              data-aos="fade-up"
              data-aos-delay={100 + index * 50}
            >
              <div className="text-[#3A7CA5] mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;