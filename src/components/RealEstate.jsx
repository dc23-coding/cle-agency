import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Home, ArrowUpRight } from 'lucide-react';

const properties = [
  {
    id: 1,
    title: 'Modern Smart Villa',
    description: '4-bedroom luxury villa with smart home integration and open-concept living.',
    price: '$1,250,000',
    location: 'Austin, TX',
    status: 'For Sale',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
    type: 'Villa',
  },
  {
    id: 2,
    title: 'Downtown Loft Apartment',
    description: 'Minimalist 2-bedroom loft in the heart of the city with skyline views.',
    price: '$650,000',
    location: 'Atlanta, GA',
    status: 'For Sale',
    img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=900&q=80',
    type: 'Apartment',
  },
  {
    id: 3,
    title: 'Coastal Smart Condo',
    description: 'Smart-living beachfront condo featuring automation and NFT-based property access.',
    price: '$890,000',
    location: 'Miami, FL',
    status: 'Coming Soon',
    img: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=900&q=80',
    type: 'Condo',
  },
];

const RealEstate = () => {
  const [search, setSearch] = useState('');

  const filteredProperties = properties.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="real-estate" className="py-24 bg-[#0C0D0D]">
      <div className="container mx-auto px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 border border-white/20 rounded-full text-sm mb-4 uppercase">
            Real Estate
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white uppercase mb-4">
            Smart <span className="text-accent-purple">Living</span> & Tokenized Properties
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Discover properties designed for the connected future — from luxury homes to blockchain-enabled ownership opportunities.
          </p>
        </motion.div>

        {/* SEARCH BAR */}
        <div className="flex justify-center mb-12">
          <div className="relative w-full max-w-lg">
            <Search className="absolute left-4 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search by city or property type..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#1A1A1A] border border-gray-700 rounded-full py-3 pl-12 pr-4 text-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-purple transition"
            />
          </div>
        </div>

        {/* PROPERTY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProperties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-[#111111] shadow-lg cursor-pointer"
            >
              <img
                src={property.img}
                alt={property.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              <div className="absolute bottom-0 left-0 p-6 w-full">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {property.title}
                    </h3>
                    <p className="text-sm text-gray-300 flex items-center gap-1">
                      <MapPin size={14} /> {property.location}
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full">
                    <Home className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-6 pt-4 bg-[#111111]">
                <p className="text-gray-400 text-sm mb-3">{property.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-accent-purple font-semibold">{property.price}</span>
                  <span
                    className={`text-xs font-medium px-3 py-1 rounded-full ${
                      property.status === 'For Sale'
                        ? 'bg-accent-purple/20 text-accent-purple'
                        : 'bg-gray-700 text-gray-400'
                    }`}
                  >
                    {property.status}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Join Our Real Estate Network?
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Partner with us to list your properties, explore investment opportunities,
            or integrate blockchain-based ownership into your next real estate project.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-accent-purple text-white rounded-full font-medium hover:bg-accent-purple/80 transition"
          >
            Join the Network
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default RealEstate;
