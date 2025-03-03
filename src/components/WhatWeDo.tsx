import React from 'react';

const WhatWeDo: React.FC = () => {
  return (
    <section id="what-we-do" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Help You Live (and Work) Better</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore Our Services
          </p>
        </div>

        {/* Water Purification */}
        <div className="mb-16" data-aos="fade-up">
          <div className="flex flex-wrap items-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-[#3A7CA5] mr-4">Water Purification</h3>
            <span className="text-sm md:text-base text-gray-600">Water Purification – Plans start from 300$</span>
          </div>
          
          {/* First row */}
          <div className="flex flex-col lg:flex-row gap-8 items-center mb-10">
            <div className="w-full lg:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-md" data-aos="fade-up">
                <img 
                  src="https://i.imgur.com/73aZnKX.jpeg" 
                  alt="Water Purification System" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            <div className="w-full lg:w-1/2" data-aos="fade-up" data-aos-delay="100">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Enjoy clean, pure water throughout your home with our advanced filtration systems that remove contaminants and impurities. From sediment and chlorine to heavy metals and harmful bacteria, our state-of-the-art solutions provide peace of mind with every sip. Designed for both taste and safety, our filtration systems improve the quality of your drinking water, enhance cooking, and even promote healthier skin and hair by eliminating harsh chemicals from your water supply.
              </p>
            </div>
          </div>
          
          {/* Second row */}
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="w-full lg:w-1/2 order-2 lg:order-1" data-aos="fade-up" data-aos-delay="100">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Our reverse osmosis systems deliver crystal-clear water directly to your tap, eliminating bottled water while protecting appliances from scale buildup. Say goodbye to plastic waste and the hassle of purchasing bottled water—our systems provide a sustainable, cost-effective alternative. By reducing mineral deposits, they also help extend the lifespan of dishwashers, coffee makers, and other water-dependent appliances, saving you money on repairs and maintenance while ensuring your household runs more efficiently.
              </p>
            </div>
            
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <div className="rounded-lg overflow-hidden shadow-md" data-aos="fade-up">
                <img 
                  src="https://i.imgur.com/k4KIemQ.png" 
                  alt="Water Purification Installation" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Home Theatre & TV Mounting */}
        <div data-aos="fade-up">
          <div className="flex flex-wrap items-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-[#3A7CA5]">Home Theatre Set-Up & TV Mounting</h3>
          </div>
          
          {/* First row */}
          <div className="flex flex-col lg:flex-row gap-8 items-center mb-10">
            <div className="w-full lg:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-md" data-aos="fade-up">
                <img 
                  src="https://i.imgur.com/R2xK2ck.jpeg" 
                  alt="Home Theatre Setup" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            <div className="w-full lg:w-1/2" data-aos="fade-up" data-aos-delay="100">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Transform your living space with professional TV mounting and custom home theatre installations for optimal viewing and sound quality. Whether it's a sleek, wall-mounted setup or a fully immersive cinematic experience, we ensure every detail is meticulously handled. Our expert team considers room acoustics, lighting conditions, and seating arrangements to create a setup that feels like a personal theatre.
              </p>
            </div>
          </div>
          
          {/* Second row */}
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="w-full lg:w-1/2 order-2 lg:order-1" data-aos="fade-up" data-aos-delay="100">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                From concealing cables to calibrating audio systems, we deliver cinema-quality entertainment that complements your home's aesthetic. Say goodbye to tangled wires and bulky setups—our discreet solutions keep everything clean and streamlined. We fine-tune every speaker and optimize sound distribution, ensuring every scene and soundtrack is experienced exactly as the director intended. Whether you're hosting a movie night or catching the big game, your system will be ready.
              </p>
            </div>
            
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <div className="rounded-lg overflow-hidden shadow-md" data-aos="fade-up">
                <img 
                  src="https://i.imgur.com/vPTKfjI.jpeg" 
                  alt="TV Mounting Service" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;