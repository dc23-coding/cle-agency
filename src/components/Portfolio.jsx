import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const caseStudies = [
  {
    id: 1,
    slug: 'web-app-solution',
    title: 'Operational App Success',
    description:
      'A logistics app that improved business operations and reduced manual workload by 60%.',
    img: 'https://horizons-cdn.hostinger.com/2ec1b63c-413d-4920-8651-9e095efacb1d/tech-daily-lkyv7faumza-unsplash-2-FOBCl.jpg',
    service: 'Web & App Solutions',
    result: '60% more efficiency',
  },
  {
    id: 2,
    slug: 'marketing-automation',
    title: 'Growth Through Smart Campaigns',
    description:
      'Our marketing automation platform helped a client triple engagement and double conversion rates.',
    img: 'https://horizons-cdn.hostinger.com/2ec1b63c-413d-4920-8651-9e095efacb1d/gemini_generated_image_n6u5epn6u5epn6u5-5abrf-2-W2Hon.jpg',
    service: 'Marketing Automation',
    result: '3x engagement',
  },
  {
    id: 3,
    slug: 'ecommerce-integration',
    title: 'E-Commerce Brand Expansion',
    description:
      'We built an integrated storefront and content strategy that boosted online sales within weeks.',
    img: 'https://horizons-cdn.hostinger.com/2ec1b63c-413d-4920-8651-9e095efacb1d/sumup-vsyr_mbh7q4-unsplash-2-Hxitr.jpg',
    service: 'E-Commerce & Product Store',
    result: '45% revenue growth',
  },
];

const realEstate = [
  {
    id: 1,
    slug: 'modern-villa',
    title: 'Modern Smart Villa',
    description: '4-bedroom luxury villa with smart home integration and open-concept living.',
    price: '$1,250,000',
    location: 'Austin, TX',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
    status: 'For Sale',
  },
  {
    id: 2,
    slug: 'downtown-loft',
    title: 'Downtown Loft Apartment',
    description: 'Minimalist 2-bedroom loft in the heart of the city with skyline views.',
    price: '$650,000',
    location: 'Atlanta, GA',
    img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=900&q=80',
    status: 'For Sale',
  },
  {
    id: 3,
    slug: 'beach-condo',
    title: 'Coastal Smart Condo',
    description: 'Smart-living beachfront condo featuring automation and NFT property access.',
    price: '$890,000',
    location: 'Miami, FL',
    img: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=900&q=80',
    status: 'Coming Soon',
  },
];

const Portfolio = () => {
  const navigate = useNavigate();

  const handleClick = (slug, type) => {
    navigate(`/${type}/${slug}`);
  };

  return (
    <section id="portfolio" className="py-24 bg-[#0C0D0D]">
      <div className="container mx-auto px-6">
        {/* --- RESULTS SECTION --- */}
        <div className="flex flex-wrap justify-between items-end gap-8 mb-16">
          <div className="w-full lg:w-1/2">
            <div className="inline-block px-4 py-1.5 border border-white/20 rounded-full text-sm mb-4 uppercase">
              Results
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight uppercase">
              Real <span className="text-accent-purple">Results</span> from Real Work
            </h2>
          </div>
          <div className="w-full lg:w-1/3">
            <p className="text-lg text-gray-400">
              Explore measurable results and creative solutions that define our digital transformation projects.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((item) => (
            <motion.div
              key={item.id}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => handleClick(item.slug, 'project')}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <img
                src={item.img}
                alt={item.description}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

              <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-300">{item.service}</p>
                    <p className="text-accent-purple text-sm font-semibold mt-1">{item.result}</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- REAL ESTATE SECTION --- */}
        <div className="flex flex-wrap justify-between items-end gap-8 mt-24 mb-16">
          <div className="w-full lg:w-1/2">
            <div className="inline-block px-4 py-1.5 border border-white/20 rounded-full text-sm mb-4 uppercase">
              Real Estate
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight uppercase">
              Connected <span className="text-accent-purple">Living</span> and Smart Properties
            </h2>
          </div>
          <div className="w-full lg:w-1/3">
            <p className="text-lg text-gray-400">
              Browse properties available through our digital platform — where real estate meets innovation.
              Future-ready listings for the tokenized world of ownership.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {realEstate.map((home) => (
            <motion.div
              key={home.id}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => handleClick(home.slug, 'real-estate')}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <img
                src={home.img}
                alt={home.description}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

              <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{home.title}</h3>
                    <p className="text-gray-300 text-sm">{home.location}</p>
                    <p className="text-accent-purple text-sm font-semibold mt-1">{home.price}</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full">
                    <Home className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Build, Invest, and Grow with Us
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            From digital success stories to real-world properties — our portfolio connects innovation, lifestyle, and opportunity.
          </p>
          <a
            href="/real-estate"
            className="inline-block px-8 py-3 bg-accent-purple text-white rounded-full font-medium hover:bg-accent-purple/80 transition"
          >
            Explore Properties
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
