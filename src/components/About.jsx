import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#0C0D0D] overflow-hidden">
      <div className="container mx-auto px-6">
        {/* SECTION 1 */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                className="w-full h-full object-cover"
                alt="Team collaborating in a modern workspace"
                src="https://horizons-cdn.hostinger.com/2ec1b63c-413d-4920-8651-9e095efacb1d/charlesdeluvio-lks7vei-eag-unsplash-7Or6F.jpg"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white uppercase">
              Years of <span className="text-accent-purple">Experience</span> That Drive Innovation
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Built on Real-World Expertise</h3>
                <p className="text-lg text-gray-400">
                  With years of experience across marketing, design, web development, and operations,
                  we’ve transformed creative ideas into high-performing digital solutions.
                  Our background ensures that every product we build — from automation tools to e-commerce platforms —
                  is rooted in practical business insight.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Guided by Measurable Impact</h3>
                <p className="text-lg text-gray-400">
                  We believe in outcomes that matter. Every service we offer is designed to deliver clear, data-driven growth —
                  whether that’s through smarter marketing, seamless logistics tools, or scalable online stores.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* SECTION 2 */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mt-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:order-last"
          >
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                className="w-full h-full object-cover"
                alt="Creative professionals discussing blockchain-driven financial solutions"
                src="https://horizons-cdn.hostinger.com/2ec1b63c-413d-4920-8651-9e095efacb1d/michael-t-rxri-ho62y4-unsplash-2-tvxRc.jpg"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white uppercase">
              A Vision Aligned with the <span className="text-accent-purple">Future</span> of Finance
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Crypto-Friendly Outlook</h3>
                <p className="text-lg text-gray-400">
                  Our financial vision embraces the evolution of blockchain technology.
                  We recognize that the future of digital assets, payments, and ownership
                  will be powered by tokenized systems — and we’re building solutions with that in mind.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Connected to Our Core Services</h3>
                <p className="text-lg text-gray-400">
                  From logistics applications to marketing automation and e-commerce integration,
                  our expertise bridges traditional business needs with forward-thinking,
                  crypto-friendly innovation — ensuring our clients stay ahead of the curve.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
