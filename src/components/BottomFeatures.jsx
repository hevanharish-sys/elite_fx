import { motion } from 'framer-motion';
import { Users2, BookOpen, TrendingUp } from 'lucide-react';

const bFeatures = [
  {
    title: "A Community You Can Trust",
    desc: "Built on transparency, respect, and results.",
    icon: <Users2 className="w-10 h-10" />
  },
  {
    title: "Real Education. Real Results.",
    desc: "No hype. Just practical knowledge that works.",
    icon: <BookOpen className="w-10 h-10" />
  },
  {
    title: "Built For Your Freedom",
    desc: "Trade on your terms. Live on your terms.",
    icon: <TrendingUp className="w-10 h-10" />
  }
];

const BottomFeatures = () => {
  return (
    <section className="py-20 md:py-32 bg-matte-black">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {bFeatures.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="text-gold-metallic flex justify-center mb-6 transition-transform duration-500 group-hover:scale-110">
                {f.icon}
              </div>
              <h3 className="font-heading text-lg md:text-xl font-bold uppercase tracking-wider mb-4">
                {f.title}
              </h3>
              <p className="text-[#B5B5B5] text-sm md:text-base max-w-xs mx-auto">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BottomFeatures;
