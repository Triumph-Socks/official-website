import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Shield, Globe, Leaf } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { products, categories, testimonials } from '../data/products';

const WHATSAPP_NUMBER = '94771234567';

function Section({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} ${className}`}
    >
      {children}
    </div>
  );
}

export default function HomePage() {
  const featuredProducts = products.filter(p => p.featured);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi, I\'m interested in your premium socks collection.')}`;

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-primary overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img
            src="https://image.qwenlm.ai/generated-images/92811f63-0691-4976-82a2-e054fe468478/_result.png"
            alt=""
            className="w-full h-full object-cover opacity-20"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(184,134,11,0.3) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(184,134,11,0.2) 0%, transparent 50%)`
          }} />
        </div>
        
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-20 lg:py-0 relative z-10">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-accent text-sm font-medium uppercase tracking-widest mb-6"
            >
              Sri Lanka's Premier Sock Manufacturer
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="font-heading text-4xl md:text-5xl lg:text-7xl text-white font-semibold leading-tight mb-6"
            >
              Crafted in Sri Lanka.<br />
              <span className="text-accent-light">Worn Worldwide.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="text-gray-400 text-lg lg:text-xl leading-relaxed mb-10 max-w-xl"
            >
              Heritage craftsmanship meets modern precision. Premium socks for those who appreciate the considered details.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/categories"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-white font-medium px-8 py-4 rounded transition-all duration-150 active:scale-[0.98]"
              >
                Shop Collection
                <ArrowRight size={18} />
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-gray-600 hover:border-gray-400 text-white font-medium px-8 py-4 rounded transition-all duration-150 active:scale-[0.98]"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <Section>
            <div className="text-center mb-14">
              <p className="text-accent text-sm font-medium uppercase tracking-widest mb-3">Collections</p>
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-primary">
                Curated for Every Occasion
              </h2>
            </div>
          </Section>
          <Section>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.slice(0, 6).map((cat) => (
                <Link
                  key={cat.slug}
                  to={`/categories/${cat.slug}`}
                  className="group relative bg-surface border border-border rounded overflow-hidden transition-all duration-150 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-lg font-semibold text-primary mb-2">{cat.name}</h3>
                    <p className="text-sm text-text-muted leading-relaxed">{cat.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <Section>
            <div className="text-center mb-14">
              <p className="text-accent text-sm font-medium uppercase tracking-widest mb-3">Our Promise</p>
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-primary">
                Why Choose Ceylon Threads
              </h2>
            </div>
          </Section>
          <Section>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
              <div className="text-center">
                <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-primary/5 flex items-center justify-center">
                  <Shield size={24} className="text-accent" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">Uncompromising Quality</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  Every pair undergoes 12-point quality inspection. Premium materials sourced from trusted mills worldwide, 
                  finished with precision in our Sri Lankan facility.
                </p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-primary/5 flex items-center justify-center">
                  <Globe size={24} className="text-accent" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">25 Years of Heritage</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  Since 1998, we've refined our craft. Three generations of expertise in textile manufacturing, 
                  serving clients across 30+ countries with consistent excellence.
                </p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-primary/5 flex items-center justify-center">
                  <Leaf size={24} className="text-accent" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">Ethical Manufacturing</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  OEKO-TEX certified. Fair wages, safe conditions, and sustainable practices. 
                  We believe exceptional products come from respecting both people and planet.
                </p>
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <Section>
            <div className="flex justify-between items-end mb-14">
              <div>
                <p className="text-accent text-sm font-medium uppercase tracking-widest mb-3">Best Sellers</p>
                <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-primary">
                  Most Loved Styles
                </h2>
              </div>
              <Link to="/categories" className="hidden md:inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-light transition-colors duration-150">
                View All <ArrowRight size={16} />
              </Link>
            </div>
          </Section>
          <Section>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProducts.slice(0, 3).map((product) => (
                <Link
                  key={product.id}
                  to={`/products/${product.slug}`}
                  className="group bg-surface border border-border rounded overflow-hidden transition-all duration-150 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="aspect-square overflow-hidden bg-gray-50">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-text-muted uppercase tracking-wider mb-1">{product.category}</p>
                    <h3 className="font-heading text-base font-semibold text-primary mb-2">{product.name}</h3>
                    <p className="text-sm text-text-muted mb-3 line-clamp-2">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-primary">${product.price}</span>
                      <span className="text-xs text-accent font-medium">View Details →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Section>
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src="https://image.qwenlm.ai/generated-images/3fbea1f1-5370-4720-86a5-4f78e49988ef/_result.png"
                  alt="Ceylon Threads manufacturing facility in Colombo, Sri Lanka"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </Section>
            <Section>
              <p className="text-accent text-sm font-medium uppercase tracking-widest mb-3">Our Heritage</p>
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-primary mb-6">
                Born from the Pearl of the Indian Ocean
              </h2>
              <p className="text-text-muted leading-relaxed mb-4">
                In 1998, a small workshop in Colombo began crafting socks with an uncompromising commitment to quality. 
                What started as a family enterprise has grown into one of Sri Lanka's most respected textile manufacturers — 
                without ever losing sight of what made us different.
              </p>
              <p className="text-text-muted leading-relaxed mb-8">
                Today, our state-of-the-art facility combines time-honored craftsmanship with modern precision. 
                Every pair that leaves our factory carries the warmth of Sri Lankan hospitality and the precision 
                of generations of expertise.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-accent font-medium hover:text-accent-light transition-colors duration-150"
              >
                Read Our Full Story <ArrowRight size={16} />
              </Link>
            </Section>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <Section>
            <div className="text-center mb-14">
              <p className="text-accent text-sm font-medium uppercase tracking-widest mb-3">Testimonials</p>
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-primary">
                Trusted by Discerning Clients
              </h2>
            </div>
          </Section>
          <Section>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-surface border border-border rounded p-8">
                  <div className="mb-4">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className="text-accent text-sm">★</span>
                    ))}
                  </div>
                  <p className="text-text-primary text-sm leading-relaxed mb-6 italic">
                    "{t.text}"
                  </p>
                  <div>
                    <p className="font-medium text-sm text-primary">{t.name}</p>
                    <p className="text-xs text-text-muted">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* Newsletter / CTA Band */}
      <section className="py-20 lg:py-24 bg-primary">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
          <Section>
            <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-white mb-4">
              Stay Connected
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
              Join our list for new collections, exclusive offers, and stories from our workshop.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-5 py-3.5 bg-white/10 border border-gray-600 rounded text-white placeholder-gray-400 text-sm focus:outline-none focus:border-accent transition-colors duration-150"
              />
              <button className="bg-accent hover:bg-accent-light text-white font-medium px-6 py-3.5 rounded transition-all duration-150 active:scale-[0.98]">
                Subscribe
              </button>
            </div>
            <div className="mt-8">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent text-sm font-medium hover:text-accent-light transition-colors duration-150"
              >
                <MessageCircle size={16} />
                Or reach us directly on WhatsApp
              </a>
            </div>
          </Section>
        </div>
      </section>
    </main>
  );
}
