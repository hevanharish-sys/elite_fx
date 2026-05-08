import { motion } from 'framer-motion';
import { Quote, ChevronDown } from 'lucide-react';

const QuoteSection = () => {
  return (
    <section className="pb-20 md:pb-32 bg-matte-black">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative h-[400px] md:h-[500px] rounded-[32px] overflow-hidden flex items-center justify-center text-center p-8 border border-gold-metallic/10"
        >
          {/* Background Image */}
          <img src="/assets/mountain.png" alt="Quote Background" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-matte-black/60 backdrop-blur-[2px]" />

          <div className="relative z-10 max-w-3xl">
            <Quote className="w-12 h-12 md:w-16 md:h-16 text-gold-metallic mx-auto mb-8 opacity-50" />
            <p className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-12">
              We believe in traders who <br className="hidden md:block" /> refuse to settle. <br />
              <span className="text-gradient">Are you one of them?</span>
            </p>
            
            {/* Pagination Dots */}
            <div className="flex justify-center gap-3">
              <span className="w-2 h-2 rounded-full bg-gold-metallic" />
              <span className="w-2 h-2 rounded-full border border-gold-metallic" />
              <span className="w-2 h-2 rounded-full border border-gold-metallic" />
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center mt-12 text-gold-metallic"
        >
          <ChevronDown size={40} strokeWidth={1} />
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteSection;
