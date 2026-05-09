import { motion } from 'framer-motion';
import { Mail, Send, MessageSquare } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [query, setQuery] = useState({ name: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'contact', ...query }),
      });
      if (!res.ok) throw new Error('Failed');
      setSent(true);
      setQuery({ name: '', message: '' });
      setTimeout(() => setSent(false), 4000);
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-matte-black" id="contact">
      <div className="container mx-auto px-5 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="font-heading text-4xl md:text-5xl font-extrabold uppercase mb-4"
            >
              Get In <span className="text-gradient">Touch</span>
            </motion.h2>
            <p className="text-white/60">Connect with us for inquiries and support.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="glass-card p-8 flex items-center gap-6 border-gold-metallic/10 hover:border-gold-metallic/30 transition-all">
                <div className="w-14 h-14 rounded-full bg-gold-metallic/10 flex items-center justify-center text-gold-metallic">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-gold-metallic font-bold mb-1">Email Us</h4>
                  <a href="mailto:theelitetraderx@gmail.com" className="text-lg md:text-xl font-bold text-white hover:text-gold-metallic transition-colors">
                    theelitetraderx@gmail.com
                  </a>
                </div>
              </div>

              <div className="glass-card p-8 flex items-center gap-6 border-gold-metallic/10 hover:border-gold-metallic/30 transition-all">
                <div className="w-14 h-14 rounded-full bg-[#0088cc]/10 flex items-center justify-center text-[#0088cc]">
                  <Send size={28} />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-gold-metallic font-bold mb-1">Telegram</h4>
                  <a href="https://t.me/Elitefuturestrade" target="_blank" rel="noopener noreferrer" className="text-lg md:text-xl font-bold text-white hover:text-[#0088cc] transition-colors">
                    @Elitefuturestrade
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Queries Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="glass-card p-8 md:p-10 border-gold-metallic/20"
            >
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="text-gold-metallic" size={24} />
                <h3 className="font-heading text-xl font-bold uppercase">Have a Query?</h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  required
                  type="text"
                  placeholder="Your Name"
                  value={query.name}
                  onChange={(e) => setQuery({ ...query, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-metallic/50 transition-colors"
                />
                <textarea
                  required
                  rows={4}
                  placeholder="How can we help you?"
                  value={query.message}
                  onChange={(e) => setQuery({ ...query, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-metallic/50 transition-colors resize-none"
                />
                {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
                <button 
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'SENDING...' : sent ? '✓ SENT SUCCESSFULLY' : 'SEND QUERY'} {!loading && <Send size={18} />}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
