
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CheckCircle, Zap, Gem, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from "@/components/ui/use-toast";
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

const tiers = [
  {
    name: 'Innovator',
    price: '$49',
    period: '/month',
    description: 'Essential access for emerging creators.',
    features: [
      'Access to Community Discord',
      'Weekly Creative Prompts',
      'Monthly Member-only Newsletter',
      'Discounts on Store Products',
    ],
    icon: <Zap className="w-8 h-8 text-accent-purple" />,
    cta: 'Choose Innovator',
    isPopular: false,
  },
  {
    name: 'Visionary',
    price: '$99',
    period: '/month',
    description: 'For entrepreneurs ready to scale.',
    features: [
      'All Innovator benefits',
      'Access to The Vault resource library',
      'Bi-weekly Group Masterminds',
      'Priority Support',
      'Early access to new services',
    ],
    icon: <Gem className="w-8 h-8 text-accent-purple" />,
    cta: 'Choose Visionary',
    isPopular: true,
  },
  {
    name: 'Architect',
    price: '$249',
    period: '/month',
    description: 'The ultimate toolkit for industry leaders.',
    features: [
      'All Visionary benefits',
      'Monthly 1-on-1 Strategy Call',
      'Direct access to Cle`Agency founders',
      'Featured in Member Spotlight',
      'Free access to one workshop per quarter',
    ],
    icon: <Rocket className="w-8 h-8 text-accent-purple" />,
    cta: 'Choose Architect',
    isPopular: false,
  },
];

const Membership = () => {
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
        <title>Membership Tiers - Cle`Agency</title>
        <meta name="description" content="Explore membership tiers at Cle`Agency. Choose the perfect plan for your creative and entrepreneurial journey." />
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
                Join The <span className="text-accent-purple">Network</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-gray-300 max-w-3xl mx-auto"
              >
                Unlock your potential. Choose the plan that aligns with your ambition and start building your legacy.
              </motion.p>
            </div>
          </SectionAnimator>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <SectionAnimator key={tier.name} delay={0.2 * index}>
                <Card className={`flex flex-col h-full bg-gray-900/40 border-gray-700/50 rounded-2xl overflow-hidden transition-all duration-300 hover:border-accent-purple/50 hover:shadow-2xl hover:shadow-accent-purple/10 ${tier.isPopular ? 'border-accent-purple shadow-lg shadow-accent-purple/20' : ''}`}>
                  {tier.isPopular && (
                    <div className="bg-accent-purple text-center py-1.5 text-sm font-bold text-white uppercase tracking-wider">Most Popular</div>
                  )}
                  <CardHeader className="items-center text-center p-8">
                    <div className="p-4 bg-accent-purple/10 rounded-full mb-4">{tier.icon}</div>
                    <CardTitle className="text-3xl font-bold">{tier.name}</CardTitle>
                    <CardDescription className="text-gray-400">{tier.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow p-8 pt-0">
                    <div className="text-center mb-6">
                      <span className="text-5xl font-bold">{tier.price}</span>
                      <span className="text-gray-400">{tier.period}</span>
                    </div>
                    <ul className="space-y-4">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="p-8">
                    <Button onClick={handlePayment} size="lg" className={`w-full font-bold text-lg rounded-full py-6 ${tier.isPopular ? 'bg-accent-purple hover:bg-accent-purple/90 text-white' : 'bg-white/10 hover:bg-white/20 text-white'}`}>
                      {tier.cta}
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

export default Membership;
