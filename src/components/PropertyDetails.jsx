import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Home, DollarSign, Wifi, Shield, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Example data (replace later with API or CMS fetch)
const propertyData = {
  'modern-villa': {
    title: 'Modern Smart Villa',
    location: 'Austin, TX',
    price: '$1,250,000',
    description:
      'A luxury 4-bedroom villa designed for modern living. Featuring full smart home integration, sustainable materials, and open-concept architecture perfect for entertainment and comfort.',
    features: [
      'Smart lighting and climate control',
      'Voice-activated security system',
      'Solar-powered energy network',
      'Spacious pool and outdoor living area',
    ],
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    status: 'For Sale',
  },
  'downtown-loft': {
    title: 'Downtown Loft Apartment',
    location: 'Atlanta, GA',
    price: '$650,000',
    description:
      'Minimalist 2-bedroom loft in the heart of downtown. Smart access control, eco-friendly materials, and panoramic city skyline views.',
    features: [
      'Automated blinds and lighting',
      'Integrated digital concierge system',
      'Energy-efficient appliances',
      'Rooftop lounge access',
    ],
    image:
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
    status: 'For Sale',
  },
  'beach-condo': {
    title: 'Coastal Smart Condo',
    location: 'Miami, FL',
    price: '$890,000',
    description:
      'Smart-living beachfront condo featuring automation, advanced climate systems, and upcoming NFT-based property tokenization.',
    features: [
      'Beachfront access',
      'NFT-based ownership access (coming soon)',
      'Smart climate and lighting',
      'Modern interior with ocean views',
    ],
    image:
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80',
    status: 'Coming Soon',
  },
};

const PropertyDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const property = propertyData[slug];

  if (!property) {
    return (
      <section className="py-24 bg-[#0C0D0D] text-center text-gray-400">
        <h2 className="text-2xl font-semibold text-white mb-4">Property Not Found</h2>
        <button
          onClick={() => navigate('/real-estate')}
          className="px-6 py-2 bg-accent-purple text-white rounded-full hover:bg-accent-purple/80 transition"
        >
          Back to Listings
        </button>
      </section>
    );
  }

  return (
    <section className="py-24 bg-[#0C0D0D]">
      <div className="container mx-auto px-6">
        {/* Back button */}
        <button
          onClick={() => navigate('/real-estate')}
          className="flex items-center text-gray-400 hover:text-accent-purple mb-6"
        >
          <ArrowLeft size={18} className="mr-2" /> Back to Listings
        </button>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl overflow-hidden shadow-lg mb-12"
        >
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-[500px] object-cover"
          />
        </motion.div>

        {/* Property Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-16 items-start"
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {property.title}
            </h1>
            <p className="text-gray-400 text-lg mb-4 flex items-center gap-2">
              <MapPin size={18} /> {property.location}
            </p>
            <p className="text-accent-purple text-2xl font-semibold mb-6">
              {property.price}
            </p>
            <p className="text-gray-400 text-lg mb-6">{property.description}</p>

            <div className="space-y-3">
              <h3 className="text-xl text-white font-semibold mb-3">
                Key Features
              </h3>
              <ul className="list-disc pl-5 text-gray-400 space-y-2">
                {property.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Smart Living / Token Info */}
          <div className="bg-[#111111] rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Wifi size={22} /> Smart & Connected Living
            </h3>
            <p className="text-gray-400 mb-6">
              This property integrates modern technology to enhance comfort and
              efficiency. Manage security, climate, and energy from your
              smartphone — and prepare for the future of blockchain-based real
              estate ownership.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 rounded-full bg-accent-purple/20 text-accent-purple text-sm font-semibold flex items-center gap-2">
                <Shield size={14} /> NFT Ownership Ready
              </span>
              <span className="px-4 py-2 rounded-full bg-accent-purple/20 text-accent-purple text-sm font-semibold flex items-center gap-2">
                <DollarSign size={14} /> Crypto-Friendly Transactions
              </span>
            </div>

            <div className="text-center">
              <a
                href="/contact"
                className="inline-block px-8 py-3 bg-accent-purple text-white rounded-full font-medium hover:bg-accent-purple/80 transition"
              >
                Schedule a Virtual Tour
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PropertyDetails;
