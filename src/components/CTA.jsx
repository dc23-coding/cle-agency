
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AnimatedCtaBackground from '@/components/AnimatedCtaBackground';

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section id="cta" className="relative py-20 sm:py-32 overflow-hidden bg-[#0C0D0D]">
      <AnimatedCtaBackground />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center bg-gray-900/40 border border-accent-purple/20 backdrop-blur-lg p-8 sm:p-16 rounded-3xl shadow-2xl shadow-accent-purple/10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-purple/10 border border-accent-purple/20 rounded-full mb-6">
              <Sparkles className="w-5 h-5 text-accent-purple" />
              <span className="text-sm text-[#c5b8ff] uppercase font-semibold">Unlock Your Potential</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight text-white uppercase">
              Ready to Join the <span className="text-accent-purple">Network</span>?
            </h2>

            <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Become part of an elite community of creators and entrepreneurs. Get the tools, mentorship, and network you need to thrive.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate('/membership')}
                size="lg"
                className="bg-accent-purple hover:bg-accent-purple/90 text-white font-bold px-8 py-6 text-lg rounded-full group"
              >
                View Membership Tiers
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => navigate('/contact')}
                size="lg"
                variant="outline"
                className="border-2 border-accent-purple/40 hover:bg-accent-purple/10 text-white px-8 py-6 text-lg rounded-full"
              >
                Ask a Question
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
