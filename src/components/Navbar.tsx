import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const WHATSAPP_NUMBER = '94771234567';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi, I\'m interested in your premium socks collection. Could you share more details?')}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-[1280px] mx-auto px-6 lg:px-8 h-16 lg:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="font-heading text-xl lg:text-2xl font-semibold text-primary tracking-tight">
            Ceylon Threads
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <Link to="/categories" className="text-sm font-medium text-text-muted hover:text-primary transition-colors duration-150">
            Collections
          </Link>
          <Link to="/about" className="text-sm font-medium text-text-muted hover:text-primary transition-colors duration-150">
            Our Story
          </Link>
          <Link to="/contact" className="text-sm font-medium text-text-muted hover:text-primary transition-colors duration-150">
            Contact
          </Link>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white text-sm font-medium px-5 py-2.5 rounded transition-all duration-150 active:scale-[0.98]"
          >
            <MessageCircle size={16} />
            WhatsApp Us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="lg:hidden p-2 text-primary"
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-b border-border overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              <Link to="/categories" className="text-base font-medium text-primary py-2">
                Collections
              </Link>
              <Link to="/about" className="text-base font-medium text-primary py-2">
                Our Story
              </Link>
              <Link to="/contact" className="text-base font-medium text-primary py-2">
                Contact
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-accent text-white font-medium px-5 py-3 rounded mt-2"
              >
                <MessageCircle size={16} />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
