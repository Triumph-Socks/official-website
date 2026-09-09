import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { MessageCircle, Mail, ChevronRight, Minus, Plus } from 'lucide-react';
import { products } from '../data/products';

const WHATSAPP_NUMBER = '94771234567';

export default function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find(p => p.slug === slug);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  if (!product) {
    return (
      <main className="pt-32 pb-20 text-center">
        <div className="max-w-[1280px] mx-auto px-6">
          <h1 className="font-heading text-3xl font-semibold text-primary mb-4">Product Not Found</h1>
          <Link to="/categories" className="text-accent hover:text-accent-light">← Back to Collections</Link>
        </div>
      </main>
    );
  }

  const getWhatsAppLink = () => {
    const msg = `Hi, I'm interested in ${product.name}.\nSize: ${selectedSize || 'Not selected'}\nColor: ${selectedColor || 'Not selected'}\nQty: ${quantity}\nPlease share pricing and availability.`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  };

  const getEmailLink = () => {
    const subject = `Inquiry: ${product.name}`;
    const body = `Hi,\n\nI'm interested in ${product.name}.\nSize: ${selectedSize || 'Not selected'}\nColor: ${selectedColor || 'Not selected'}\nQuantity: ${quantity}\n\nPlease share pricing and availability.\n\nThank you.`;
    return `mailto:orders@ceylonthreads.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main className="pt-24 lg:pt-28 pb-20 lg:pb-28">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-text-muted mb-8 flex-wrap">
          <Link to="/" className="hover:text-primary transition-colors duration-150">Home</Link>
          <ChevronRight size={14} />
          <Link to="/categories" className="hover:text-primary transition-colors duration-150">Collections</Link>
          <ChevronRight size={14} />
          <Link to={`/categories/${product.categorySlug}`} className="hover:text-primary transition-colors duration-150">
            {product.category}
          </Link>
          <ChevronRight size={14} />
          <span className="text-primary font-medium truncate">{product.name}</span>
        </nav>

        {/* Product Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-square rounded-lg overflow-hidden mb-4 bg-gray-50">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((img, i) => (
                <div key={i} className="aspect-square rounded border border-border overflow-hidden cursor-pointer hover:border-accent transition-colors duration-150">
                  <img src={img} alt={`${product.name} view ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
                </div>
              ))}
              {product.images.length < 4 && Array.from({ length: 4 - product.images.length }).map((_, i) => (
                <div key={`empty-${i}`} className="aspect-square rounded border border-border bg-gray-50 flex items-center justify-center">
                  <span className="text-xs text-text-muted">More views</span>
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <p className="text-xs text-text-muted uppercase tracking-wider mb-2">{product.category}</p>
            <h1 className="font-heading text-3xl lg:text-4xl font-semibold text-primary mb-3">{product.name}</h1>
            <p className="text-2xl font-semibold text-primary mb-6">${product.price}</p>
            <p className="text-text-muted leading-relaxed mb-8">{product.description}</p>

            {/* Size Selector */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-primary mb-3">Size</label>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2.5 border rounded text-sm font-medium transition-all duration-150 active:scale-[0.98] ${
                      selectedSize === size
                        ? 'border-accent bg-accent/5 text-accent'
                        : 'border-border text-text-muted hover:border-primary'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selector */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-primary mb-3">
                Color {selectedColor && <span className="text-text-muted font-normal">— {selectedColor}</span>}
              </label>
              <div className="flex gap-3">
                {product.colors.map(color => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-10 h-10 rounded-full border-2 transition-all duration-150 ${
                      selectedColor === color.name ? 'border-accent scale-110' : 'border-border hover:scale-105'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    aria-label={color.name}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-primary mb-3">Quantity</label>
              <div className="inline-flex items-center border border-border rounded">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-gray-50 transition-colors duration-150"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="px-5 py-3 text-sm font-medium border-x border-border min-w-[60px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-gray-50 transition-colors duration-150"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-medium px-8 py-4 rounded transition-all duration-150 active:scale-[0.98] flex-1"
              >
                <MessageCircle size={18} />
                Order on WhatsApp
              </a>
              <a
                href={getEmailLink()}
                className="inline-flex items-center justify-center gap-2 border border-border hover:border-primary text-primary font-medium px-8 py-4 rounded transition-all duration-150 active:scale-[0.98] flex-1"
              >
                <Mail size={18} />
                Email Inquiry
              </a>
            </div>

            {/* Tabs */}
            <div className="border-t border-border pt-8">
              <div className="flex gap-6 mb-6 border-b border-border">
                {['description', 'materials', 'care', 'shipping'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-3 text-sm font-medium capitalize transition-colors duration-150 ${
                      activeTab === tab ? 'text-accent border-b-2 border-accent' : 'text-text-muted hover:text-primary'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div className="text-sm text-text-muted leading-relaxed">
                {activeTab === 'description' && <p>{product.description}</p>}
                {activeTab === 'materials' && <p>{product.materials}</p>}
                {activeTab === 'care' && <p>{product.care}</p>}
                {activeTab === 'shipping' && <p>{product.shipping}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": product.name,
            "description": product.description,
            "brand": { "@type": "Brand", "name": "Ceylon Threads" },
            "offers": {
              "@type": "Offer",
              "price": product.price,
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            }
          })
        }}
      />
    </main>
  );
}
