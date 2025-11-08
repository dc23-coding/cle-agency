
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from "@/components/ui/use-toast";
import { ShoppingBag, ArrowRight } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import SectionAnimator from '@/components/SectionAnimator';
import AnimatedHeroBackground from '@/components/AnimatedHeroBackground';

const products = [
  {
    id: 1,
    name: 'Brand Strategy Masterclass',
    price: '$299',
    description: 'A comprehensive video course on building an unforgettable brand identity.',
    image: 'A sleek and modern laptop displaying a branding presentation'
  },
  {
    id: 2,
    name: 'The Creator\'s Legal Kit',
    price: '$149',
    description: 'Essential contract templates and legal guides for creative professionals.',
    image: 'A stack of professional legal documents with a fountain pen'
  },
  {
    id: 3,
    name: '1-on-1 Mentorship Session',
    price: '$500',
    description: 'A 60-minute intensive coaching session to accelerate your growth.',
    image: 'Two people in a focused and productive meeting in a modern office'
  },
  {
    id: 4,
    name: 'Digital Product Launchpad',
    price: '$199',
    description: 'An ebook and checklist bundle for successfully launching your first digital product.',
    image: 'A rocket launching from a laptop screen, symbolizing a product launch'
  },
  {
    id: 5,
    name: 'Social Media Content System',
    price: '$99',
    description: '30+ templates and a strategy guide to streamline your content creation.',
    image: 'A grid of social media posts on a phone screen'
  },
  {
    id: 6,
    name: 'Cle`Agency Exclusive Merch',
    price: '$79',
    description: 'High-quality, branded apparel and accessories for our members.',
    image: 'A stylish black hoodie with a minimalist logo design'
  }
];

const Store = () => {
  const { toast } = useToast();

  const handlePayment = () => {
    toast({
      title: "🚧 Feature in Progress",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <>
      <Helmet>
        <title>Store - Services & Products - Cle`Agency</title>
        <meta name="description" content="Purchase exclusive workshops, courses, and products from the Cle`Agency store." />
      </Helmet>
      <div className="relative min-h-screen bg-[#0C0D0D] text-white pt-24 pb-12 overflow-hidden">
        <AnimatedHeroBackground />
        <div className="container mx-auto px-6 relative z-10">
          <SectionAnimator>
            <div className="text-center mb-16">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold uppercase mb-4"
              >
                The <span className="text-accent-purple">Vault</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-gray-300 max-w-3xl mx-auto"
              >
                Exclusive tools, resources, and services curated to fuel your creative and entrepreneurial fire.
              </motion.p>
            </div>
          </SectionAnimator>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <SectionAnimator key={product.id} delay={0.1 * index}>
                <Card className="flex flex-col h-full bg-gray-900/40 border-gray-700/50 rounded-2xl overflow-hidden group transition-all duration-300 hover:border-accent-purple/50 hover:shadow-2xl hover:shadow-accent-purple/10">
                  <div className="overflow-hidden aspect-video">
                    <img 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                     src="https://images.unsplash.com/photo-1635865165118-917ed9e20936" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-white">{product.name}</CardTitle>
                    <CardDescription className="text-gray-400 pt-1">{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-3xl font-bold text-accent-purple">{product.price}</p>
                  </CardContent>
                  <CardFooter>
                    <Button onClick={handlePayment} className="w-full bg-accent-purple/10 text-accent-purple hover:bg-accent-purple hover:text-white transition-colors duration-300 font-bold py-6 rounded-lg group/btn">
                      Add to Cart <ShoppingBag className="ml-2 w-5 h-5" />
                    </Button>
                  </CardFooter>
                </Card>
              </SectionAnimator>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Store;
