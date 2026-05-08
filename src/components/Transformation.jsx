import { motion } from 'framer-motion';

const Transformation = () => {
  return (
    <section className="py-20 bg-matte-black overflow-hidden" id="about">
      <div className="container mx-auto px-5 md:px-12">
        <div className="glass-card overflow-hidden border-gold-metallic/10 bg-matte-black/40">
          <div className="flex flex-col lg:flex-row items-stretch min-h-[550px]">
            
            {/* Content Left */}
            <div className="w-full lg:w-1/2 p-8 md:p-16 lg:p-20 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
                className="mb-8"
              >
                <div className="text-gold-metallic text-[10px] md:text-xs font-black tracking-[0.2em] mb-2 uppercase">
                  THIS ISN'T JUST TRADING.
                </div>
                <div className="w-12 h-[2px] bg-gold-metallic" />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="font-heading text-[42px] md:text-[56px] font-extrabold leading-[1.1] mb-10 uppercase text-white"
              >
                THIS IS A <br />
                <span className="text-gradient italic" style={{ fontFamily: 'Caveat, cursive', textTransform: 'none', fontSize: '1.2em' }}>Transformation.</span>
              </motion.h2>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-3 mb-12"
              >
                <p className="text-[#B8B8B8] text-base md:text-lg lg:text-xl font-medium">
                  We don't teach luck. We teach process.
                </p>
                <p className="text-[#B8B8B8] text-base md:text-lg lg:text-xl font-medium">
                  We don't sell dreams. We build traders.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-[34px] md:text-[48px] text-gold-metallic leading-[1.1] italic font-bold"
                style={{ fontFamily: 'Caveat, cursive' }}
              >
                Your future.<br />Your rules.
              </motion.div>
            </div>

            {/* Image Right */}
            <div className="w-full lg:w-1/2 relative min-h-[450px] lg:min-h-auto overflow-hidden">
              <img 
                src="/assets/image copy.png" 
                alt="Transformation Visual" 
                className="w-full h-full object-cover object-right lg:object-right"
              />
              {/* Fade gradient to blend with left content */}
              <div className="absolute inset-0 bg-gradient-to-r from-matte-black/60 via-transparent to-transparent z-10 hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-matte-black/60 via-transparent to-transparent z-10 lg:hidden" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Transformation;
