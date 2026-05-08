import { motion } from 'framer-motion';
import { Target, GraduationCap, Users, ShieldCheck } from 'lucide-react';

const cards = [
  {
    title: "Proven Strategies",
    desc: "Structured approaches backed by real market experience.",
    icon: <Target className="w-8 h-8" />
  },
  {
    title: "Expert Mentorship",
    desc: "Learn directly from profitable traders who've done it.",
    icon: <GraduationCap className="w-8 h-8" />
  },
  {
    title: "Private Community",
    desc: "Connect, grow, and succeed with like-minded traders.",
    icon: <Users className="w-8 h-8" />
  },
  {
    title: "Discipline For Freedom",
    desc: "Build the mindset and habits that create true freedom.",
    icon: <ShieldCheck className="w-8 h-8" />
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-matte-black" id="program">
      <div className="container mx-auto px-5 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 md:p-10 flex flex-col items-center text-center group border-gold-metallic/10"
            >
              <div className="w-14 h-14 rounded-full flex items-center justify-center text-gold-metallic mb-6">
                {card.icon}
              </div>
              <h3 className="font-heading text-xs md:text-sm font-bold uppercase tracking-[0.15em] mb-4 text-white">
                {card.title}
              </h3>
              <div className="w-8 h-[2px] bg-gold-metallic mb-6" />
              <p className="text-[#B8B8B8] text-[10px] md:text-xs leading-relaxed max-w-[180px]">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
