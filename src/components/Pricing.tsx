import React from 'react';
import { Tv, Home, Cog, Network, PenTool as Tool, HeadphonesIcon, Droplet, Speaker } from 'lucide-react';

interface PricingItem {
  title: string;
  price: number;
  icon: React.ReactNode;
  description: string;
}

const Pricing: React.FC = () => {
  const pricingItems: PricingItem[] = [
    {
      title: 'TV Mounting',
      price: 105,
      icon: <Tv size={24} />,
      description: 'Professional TV mounting with bracket installation and cable management.'
    },
    {
      title: 'Smart Home Consultation',
      price: 15,
      icon: <Home size={24} />,
      description: 'Assessment of your home to identify the best smart solutions for your needs.'
    },
    {
      title: 'Home Automation Installation',
      price: 125,
      icon: <Cog size={24} />,
      description: 'Expert installation of smart home devices with setup and configuration.'
    },
    {
      title: 'Home Network Setup',
      price: 125,
      icon: <Network size={24} />,
      description: 'Complete network installation with router configuration and WiFi optimization.'
    },
    {
      title: 'Smart Home Maintenance',
      price: 75,
      icon: <Tool size={24} />,
      description: 'Regular maintenance to ensure all smart devices function optimally.'
    },
    {
      title: '24/7 Customer Support',
      price: 20,
      icon: <HeadphonesIcon size={24} />,
      description: 'Round-the-clock technical support with priority response times.'
    },
    {
      title: 'Reverse Osmosis Installation',
      price: 625,
      icon: <Droplet size={24} />,
      description: 'Professional installation of reverse osmosis water filtration systems.'
    },
    {
      title: 'Speaker Installation',
      price: 120,
      icon: <Speaker size={24} />,
      description: 'Expert speaker installation with mounting and acoustic optimization.'
    }
  ];

  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Pricing</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Transparent pricing for all our services. Contact us for custom solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingItems.map((item, index) => (
            <div 
              key={index} 
              className="pricing-card"
              data-aos="fade-up"
              data-aos-delay={100 + index * 50}
            >
              <div className="flex justify-between items-start mb-5">
                <div className="text-[#3A7CA5]">{item.icon}</div>
                <div className="text-2xl font-bold">${item.price}</div>
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-600 mb-5 text-sm">{item.description}</p>
              <a 
                href="tel:9015016177" 
                className="w-full btn-outline inline-block text-center"
              >
                Book Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;