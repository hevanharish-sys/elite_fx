import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const Header = ({ onJoin }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Program', href: '#program' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-matte-black/90 backdrop-blur-lg border-b border-gold-metallic/20 py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-5 md:px-12">
        <nav className="flex items-center justify-between h-[52px] md:h-[64px]">
          
          {/* Logo Container */}
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-3 group">
            {/* Circle Icon */}
            <div className="w-12 h-12 overflow-hidden rounded-full border border-gold-metallic/20 flex items-center justify-center bg-matte-black/50">
              <img 
                src="/assets/image copy 3.png" 
                alt="Logo Icon" 
                className="w-full h-full object-contain mix-blend-screen"
              />
            </div>
            
            {/* Text Logo - Styled Text for perfect clarity */}
            <div className="flex flex-col items-start leading-[1.1] transition-transform duration-300 group-hover:translate-x-1">
              <span className="text-[10px] md:text-[11px] font-bold text-white/70 uppercase tracking-[0.3em]">The Elite</span>
              <span className="text-[14px] md:text-[16px] font-black text-white uppercase tracking-[0.1em]">Trader</span>
            </div>
          </button>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-white/80 hover:text-gold-metallic transition-colors font-bold uppercase text-[11px] tracking-widest">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Action */}
          <div className="flex items-center gap-4">
            <button 
              onClick={onJoin}
              className="flex btn-secondary !px-4 !py-2 !text-[10px] !rounded-lg border-gold-metallic/50 hover:bg-gold-metallic hover:text-black"
            >
              JOIN ELITE <ArrowRight size={12} />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-matte-black z-[60] transition-transform duration-500 lg:hidden flex flex-col items-center justify-center gap-8 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button className="absolute top-6 right-6 text-gold-metallic" onClick={() => setIsOpen(false)}>
          <X size={32} />
        </button>
        {navLinks.map((link) => (
          <a key={link.name} href={link.href} className="text-2xl font-heading font-bold text-white hover:text-gold-metallic uppercase tracking-widest" onClick={() => setIsOpen(false)}>
            {link.name}
          </a>
        ))}
        <button 
          onClick={() => { setIsOpen(false); onJoin(); }}
          className="btn-primary mt-4"
        >
          JOIN ELITE <ArrowRight size={20} />
        </button>
      </div>
    </header>
  );
};

export default Header;
