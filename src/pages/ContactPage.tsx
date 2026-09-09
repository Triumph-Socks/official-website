import { useState } from 'react';
import { MessageCircle, Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const WHATSAPP_NUMBER = '94771234567';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { ref, isVisible } = useScrollReveal();

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi, I\'d like to get in touch regarding your products.')}`;

  return (
    <main className="pt-24 lg:pt-28 pb-20 lg:pb-28">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <p className="text-accent text-sm font-medium uppercase tracking-widest mb-3">Get in Touch</p>
          <h1 className="font-heading text-4xl lg:text-5xl font-semibold text-primary mb-4">
            We'd Love to Hear From You
          </h1>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Whether you're a boutique retailer, a brand seeking a manufacturing partner, or simply someone who 
            appreciates quality — reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {/* WhatsApp */}
              <div className="bg-surface border border-border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center">
                    <MessageCircle size={18} className="text-[#25D366]" />
                  </div>
                  <h3 className="font-semibold text-primary">WhatsApp</h3>
                </div>
                <p className="text-sm text-text-muted mb-4">Fastest response. Typically within 2 hours during business hours.</p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white text-sm font-medium px-5 py-2.5 rounded transition-all duration-150 active:scale-[0.98]"
                >
                  <MessageCircle size={14} />
                  Chat Now
                </a>
              </div>

              {/* Email */}
              <div className="bg-surface border border-border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <Mail size={18} className="text-accent" />
                  </div>
                  <h3 className="font-semibold text-primary">Email</h3>
                </div>
                <p className="text-sm text-text-muted mb-1">orders@ceylonthreads.com</p>
                <p className="text-sm text-text-muted">Response within 24 hours</p>
              </div>

              {/* Location */}
              <div className="bg-surface border border-border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center">
                    <MapPin size={18} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-primary">Visit Us</h3>
                </div>
                <p className="text-sm text-text-muted">
                  No. 42, Galle Road,<br />
                  Colombo 03, Sri Lanka<br /><br />
                  Mon – Fri: 8:30 AM – 5:30 PM<br />
                  Sat: 9:00 AM – 1:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-surface border border-border rounded-lg p-8 lg:p-10">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-50 flex items-center justify-center">
                    <CheckCircle size={32} className="text-green-600" />
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-primary mb-3">Message Sent</h3>
                  <p className="text-text-muted">
                    Thank you for reaching out. We'll respond within 24 hours.
                  </p>
                  <button
                    onClick={() => { setIsSubmitted(false); setFormData({ name: '', email: '', company: '', interest: '', message: '' }); }}
                    className="mt-6 text-accent text-sm font-medium hover:text-accent-light transition-colors duration-150"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">Name *</label>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-4 py-3 border rounded text-sm focus:outline-none focus:border-accent transition-colors duration-150 ${
                          errors.name ? 'border-red-400' : 'border-border'
                        }`}
                        placeholder="Your full name"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">Email *</label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-3 border rounded text-sm focus:outline-none focus:border-accent transition-colors duration-150 ${
                          errors.email ? 'border-red-400' : 'border-border'
                        }`}
                        placeholder="you@company.com"
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-primary mb-2">Company</label>
                      <input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={e => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 border border-border rounded text-sm focus:outline-none focus:border-accent transition-colors duration-150"
                        placeholder="Company name (optional)"
                      />
                    </div>
                    <div>
                      <label htmlFor="interest" className="block text-sm font-medium text-primary mb-2">Product Interest</label>
                      <select
                        id="interest"
                        value={formData.interest}
                        onChange={e => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full px-4 py-3 border border-border rounded text-sm focus:outline-none focus:border-accent transition-colors duration-150"
                      >
                        <option value="">Select a category</option>
                        <option value="formal">Formal & Dress Socks</option>
                        <option value="casual">Casual & Everyday</option>
                        <option value="athletic">Athletic & Sports</option>
                        <option value="kids">Kids Collection</option>
                        <option value="gifts">Gift Sets</option>
                        <option value="custom">Custom / Bulk Orders</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">Message *</label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-4 py-3 border rounded text-sm focus:outline-none focus:border-accent transition-colors duration-150 resize-none ${
                        errors.message ? 'border-red-400' : 'border-border'
                      }`}
                      placeholder="Tell us about your requirements, quantities, or any questions..."
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white font-medium px-8 py-3.5 rounded transition-all duration-150 active:scale-[0.98]"
                  >
                    <Send size={16} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Map / Location */}
        <div className="mt-16 lg:mt-20">
          <div className="aspect-[21/9] rounded-lg overflow-hidden border border-border relative">
            <img
              src="https://image.qwenlm.ai/generated-images/3fbea1f1-5370-4720-86a5-4f78e49988ef/_result.png"
              alt="Ceylon Threads factory location in Colombo, Sri Lanka"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-primary/60 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={32} className="text-accent mx-auto mb-3" />
                <p className="text-white text-lg font-heading font-semibold">Colombo, Sri Lanka</p>
                <p className="text-gray-300 text-sm mt-1">No. 42, Galle Road, Colombo 03</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
