import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const Hero = ({ onJoin }) => {
  return (
    <section className="relative min-h-screen pt-32 md:pt-40 pb-20 overflow-hidden bg-matte-black flex flex-col justify-center" id="about">
      {/* Background Layer: Bull & Chart */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none z-0">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute top-1/2 -translate-y-1/2 right-[-10%] md:right-0 w-[130%] md:w-[90%] lg:w-[70%] h-full"
        >
          {/* Gold Glow behind bull */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gold-metallic/15 blur-[120px] rounded-full" />
          
          <img 
            src="/assets/image.png" 
            alt="Hero Visual" 
            className="w-full h-full object-contain object-right"
          />
        </motion.div>
      </div>

      <div className="container mx-auto px-5 md:px-12 relative z-10">
        <div className="max-w-[750px] text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-block border border-gold-metallic/40 px-3 py-1 bg-gold-metallic/5 text-gold-metallic text-[10px] md:text-xs font-black tracking-[0.2em] mb-10"
          >
            DISCIPLINE. STRATEGY. FREEDOM.
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading leading-[0.9] md:leading-[0.95] mb-8"
          >
            <h1 className="text-[54px] md:text-[76px] lg:text-[94px] font-extrabold uppercase text-white">
              MASTER THE <br /> MARKETS.
            </h1>
            <h1 className="text-[54px] md:text-[76px] lg:text-[94px] font-extrabold uppercase text-gradient">
              BUILD YOUR <br /> FREEDOM.
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-[#B8B8B8] text-base md:text-lg lg:text-xl max-w-[480px] mb-12 leading-relaxed font-medium"
          >
            Elite mentorship, proven strategies, and a private community for traders who are ready to level up.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <button 
              onClick={onJoin}
              className="btn-primary w-full sm:w-auto px-10 py-4 flex items-center justify-center gap-3"
            >
              JOIN THE WAITLIST <ArrowRight size={18} />
            </button>
            <button className="btn-secondary w-full sm:w-auto px-10 py-4 flex items-center justify-center gap-3 bg-transparent border-gold-metallic/40 hover:bg-gold-metallic/10">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gold-metallic/20 border border-gold-metallic text-gold-metallic">
                <Play size={14} fill="currentColor" />
              </span>
              WATCH INTRO
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
