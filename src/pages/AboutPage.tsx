import { Shield, Globe, Leaf, Award } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

function RevealSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
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

export default function AboutPage() {
  return (
    <main className="pt-24 lg:pt-28 pb-20 lg:pb-28">
      {/* Hero */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 mb-20 lg:mb-28">
        <RevealSection>
          <div className="max-w-3xl">
            <p className="text-accent text-sm font-medium uppercase tracking-widest mb-4">Our Story</p>
            <h1 className="font-heading text-4xl lg:text-5xl font-semibold text-primary mb-6 leading-tight">
              Three Generations of<br />Craftsmanship
            </h1>
            <p className="text-text-muted text-lg leading-relaxed">
              What began in 1998 as a small family workshop in Colombo has grown into one of Sri Lanka's most 
              respected textile manufacturers. Through every change, our commitment has remained constant: 
              craft socks that people trust, with integrity they can feel.
            </p>
          </div>
        </RevealSection>
      </section>

      {/* Story Section */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <RevealSection>
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src="https://image.qwenlm.ai/generated-images/3fbea1f1-5370-4720-86a5-4f78e49988ef/_result.png"
                  alt="Ceylon Threads manufacturing facility in Colombo, Sri Lanka"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </RevealSection>
            <RevealSection>
              <h2 className="font-heading text-3xl font-semibold text-primary mb-6">From Workshop to World Stage</h2>
              <p className="text-text-muted leading-relaxed mb-4">
                Our founder, with just twelve knitting machines and a vision for quality that defied the 
                era's mass-production mentality, began crafting socks that would set a new standard for 
                the industry.
              </p>
              <p className="text-text-muted leading-relaxed mb-4">
                Today, our 45,000 sq ft facility houses over 200 advanced knitting machines, a dedicated 
                dye house, and a quality lab that tests every batch against international standards. We 
                export to 30+ countries, serving boutique retailers, department stores, and private-label brands.
              </p>
              <p className="text-text-muted leading-relaxed">
                But scale hasn't changed our philosophy. Every pair still passes through human hands. 
                Every material is still selected with intention. Every client relationship is still 
                built on trust.
              </p>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <RevealSection>
            <div className="text-center mb-14">
              <p className="text-accent text-sm font-medium uppercase tracking-widest mb-3">Our Values</p>
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-primary">
                What Guides Every Decision
              </h2>
            </div>
          </RevealSection>
          <RevealSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6">
                <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-primary/5 flex items-center justify-center">
                  <Shield size={24} className="text-accent" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">Quality First</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  12-point inspection on every pair. If it doesn't meet our standard, it doesn't leave our factory.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-primary/5 flex items-center justify-center">
                  <Globe size={24} className="text-accent" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">Global Standards</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Materials sourced from the world's finest mills. Processes benchmarked against international best practice.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-primary/5 flex items-center justify-center">
                  <Leaf size={24} className="text-accent" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">Sustainability</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  OEKO-TEX certified. Organic cotton options. Water recycling systems. Carbon-conscious logistics.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-primary/5 flex items-center justify-center">
                  <Award size={24} className="text-accent" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">Fair Practice</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Living wages, safe conditions, healthcare benefits. Our team is family — and we treat them as such.
                </p>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <RevealSection>
            <div className="text-center mb-14">
              <p className="text-accent text-sm font-medium uppercase tracking-widest mb-3">Certifications</p>
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-primary">
                Trusted & Verified
              </h2>
            </div>
          </RevealSection>
          <RevealSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'OEKO-TEX® Standard 100', desc: 'Tested for harmful substances' },
                { name: 'ISO 9001:2015', desc: 'Quality management certified' },
                { name: 'BSCI Compliant', desc: 'Ethical business standards' },
                { name: 'GOTS Certified', desc: 'Global organic textile standard' },
              ].map((cert, i) => (
                <div key={i} className="bg-background border border-border rounded p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-accent/10 flex items-center justify-center">
                    <Award size={20} className="text-accent" />
                  </div>
                  <h4 className="text-sm font-semibold text-primary mb-1">{cert.name}</h4>
                  <p className="text-xs text-text-muted">{cert.desc}</p>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <RevealSection>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { value: '25+', label: 'Years of Heritage' },
                { value: '30+', label: 'Countries Served' },
                { value: '5M+', label: 'Pairs Annually' },
                { value: '200+', label: 'Team Members' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="font-heading text-3xl lg:text-4xl font-semibold text-accent mb-2">{stat.value}</p>
                  <p className="text-sm text-text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>
    </main>
  );
}
