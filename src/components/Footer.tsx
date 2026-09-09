import { Link } from 'react-router-dom';
import { MessageCircle, Mail, MapPin } from 'lucide-react';

const WHATSAPP_NUMBER = '94771234567';

export default function Footer() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi, I\'m interested in your products.')}`;

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-heading text-2xl font-semibold mb-4">Ceylon Threads</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Premium socks crafted in Sri Lanka. Heritage quality, modern precision, ethical manufacturing since 1998.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-accent transition-colors duration-150">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-accent transition-colors duration-150">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-accent transition-colors duration-150">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-300">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/categories/formal" className="text-sm text-gray-400 hover:text-white transition-colors duration-150">Formal Socks</Link></li>
              <li><Link to="/categories/casual" className="text-sm text-gray-400 hover:text-white transition-colors duration-150">Casual Socks</Link></li>
              <li><Link to="/categories/athletic" className="text-sm text-gray-400 hover:text-white transition-colors duration-150">Athletic Socks</Link></li>
              <li><Link to="/categories/kids" className="text-sm text-gray-400 hover:text-white transition-colors duration-150">Kids Collection</Link></li>
              <li><Link to="/categories/gifts" className="text-sm text-gray-400 hover:text-white transition-colors duration-150">Gift Sets</Link></li>
              <li><Link to="/categories/custom" className="text-sm text-gray-400 hover:text-white transition-colors duration-150">Bulk Orders</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-300">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-gray-400 hover:text-white transition-colors duration-150">Our Story</Link></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-150">Sustainability</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-150">Certifications</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-150">Careers</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-300">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <MessageCircle size={14} className="text-accent" />
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors duration-150">
                  +94 77 123 4567
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-accent" />
                <a href="mailto:orders@ceylonthreads.com" className="text-sm text-gray-400 hover:text-white transition-colors duration-150">
                  orders@ceylonthreads.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-accent mt-0.5" />
                <span className="text-sm text-gray-400">
                  No. 42, Galle Road,<br />Colombo 03, Sri Lanka
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © 2024 Ceylon Threads. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors duration-150">Privacy Policy</a>
            <a href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors duration-150">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
