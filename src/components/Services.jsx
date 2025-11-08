import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const services = [
  {
    title: 'Web & App Solutions',
    description:
      'Custom websites and operational apps that help businesses automate, manage logistics, and grow efficiently. Perfect for owners seeking digital transformation.',
    link: '/demo/web-app',
    cta: 'Request a Demo',
  },
  {
    title: 'Marketing Automation',
    description:
      'AI-powered campaigns, social management, and analytics to boost your brand visibility and maximize conversions across digital channels.',
    link: '/learn/marketing',
    cta: 'Learn More',
  },
  {
    title: 'E-Commerce & Product Store',
    description:
      'Launch your online store and sell products directly through engaging digital content. Seamlessly integrate your brand with a beautiful storefront.',
    link: '/store',
    cta: 'Visit Store',
  },
  {
    title: 'Investment Network',
    description:
      'Explore investment opportunities, share strategies, and connect with other investors in our growing community. (Coming soon.)',
    link: '/invest',
    cta: 'Coming Soon',
  },
  {
    title: 'Real Estate & Smart Living',
    description:
      'Discover smart, token-ready properties available for sale through our connected real estate network. Integrate lifestyle, investment, and technology — all within one ecosystem.',
    link: '/real-estate',
    cta: 'Explore Properties',
  },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleServiceClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="services" className="py-24 bg-[#0C0D0D]">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-white uppercase">
            OUR <span className="text-accent-purple">SERVICES</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mt-4">
            Discover solutions tailored to your business, lifestyle, and investment goals. Select a service below to learn more or request a demo.
          </p>
        </div>

        {/* Services Accordion */}
        <div className="border-t border-gray-800">
          {services.map((service, index) => (
            <div key={service.title} className="border-b border-gray-800">
              <div
                className="flex justify-between items-center cursor-pointer py-8 group"
                onClick={() => handleServiceClick(index)}
              >
                <div className="flex items-center gap-4">
                  <h3
                    className={`text-3xl md:text-5xl font-bold transition-colors duration-300 ${
                      activeIndex === index
                        ? 'text-white'
                        : 'text-gray-600 group-hover:text-gray-400'
                    }`}
                  >
                    {service.title}
                  </h3>
                  {activeIndex === index && (
                    <motion.div
                      className="w-4 h-4 bg-accent-purple rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                    />
                  )}
                </div>

                <motion.div
                  className="text-accent-purple"
                  animate={{ rotate: activeIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Plus
                    size={40}
                    className={`${
                      activeIndex === index
                        ? 'text-accent-purple'
                        : 'text-gray-600 group-hover:text-gray-400'
                    } transition-colors`}
                  />
                </motion.div>
              </div>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, y: -20 }}
                    animate={{ opacity: 1, height: 'auto', y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 pr-16">
                      <p className="text-lg text-gray-400 max-w-2xl">
                        {service.description}
                      </p>
                      <a
                        href={service.link}
                        className={`inline-block mt-5 px-5 py-2 rounded-full transition font-medium ${
                          service.cta === 'Coming Soon'
                            ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                            : 'bg-accent-purple text-white hover:bg-accent-purple/80'
                        }`}
                      >
                        {service.cta}
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
