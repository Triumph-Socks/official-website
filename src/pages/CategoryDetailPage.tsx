import { useParams, Link } from 'react-router-dom';
import { MessageCircle, ChevronRight } from 'lucide-react';
import { categories, products } from '../data/products';
import { useScrollReveal } from '../hooks/useScrollReveal';

const WHATSAPP_NUMBER = '94771234567';

export default function CategoryDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const category = categories.find(c => c.slug === slug);
  const categoryProducts = products.filter(p => p.categorySlug === slug);
  const { ref, isVisible } = useScrollReveal();

  if (!category) {
    return (
      <main className="pt-32 pb-20 text-center">
        <div className="max-w-[1280px] mx-auto px-6">
          <h1 className="font-heading text-3xl font-semibold text-primary mb-4">Category Not Found</h1>
          <Link to="/categories" className="text-accent hover:text-accent-light">← Back to Collections</Link>
        </div>
      </main>
    );
  }

  const getWhatsAppLink = (productName: string) => {
    const msg = `Hi, I'm interested in ${productName}. Could you share pricing and availability?`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <main className="pt-24 lg:pt-28 pb-20 lg:pb-28">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-text-muted mb-8">
          <Link to="/" className="hover:text-primary transition-colors duration-150">Home</Link>
          <ChevronRight size={14} />
          <Link to="/categories" className="hover:text-primary transition-colors duration-150">Collections</Link>
          <ChevronRight size={14} />
          <span className="text-primary font-medium">{category.name}</span>
        </nav>

        {/* Category Header */}
        <div
          ref={ref}
          className={`mb-12 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <h1 className="font-heading text-3xl lg:text-4xl font-semibold text-primary mb-3">
            {category.name}
          </h1>
          <p className="text-text-muted text-lg max-w-2xl">{category.description}</p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-3 mb-10 pb-6 border-b border-border">
          <select className="px-4 py-2.5 bg-surface border border-border rounded text-sm text-text-primary focus:outline-none focus:border-accent transition-colors duration-150">
            <option>All Sizes</option>
            <option>S (5-7)</option>
            <option>M (8-10)</option>
            <option>L (11-13)</option>
            <option>XL (14-16)</option>
          </select>
          <select className="px-4 py-2.5 bg-surface border border-border rounded text-sm text-text-primary focus:outline-none focus:border-accent transition-colors duration-150">
            <option>All Colors</option>
            <option>Navy</option>
            <option>Black</option>
            <option>Grey</option>
            <option>White</option>
          </select>
          <select className="px-4 py-2.5 bg-surface border border-border rounded text-sm text-text-primary focus:outline-none focus:border-accent transition-colors duration-150">
            <option>All Materials</option>
            <option>Cotton</option>
            <option>Merino Wool</option>
            <option>Linen</option>
            <option>Bamboo</option>
          </select>
          <select className="px-4 py-2.5 bg-surface border border-border rounded text-sm text-text-primary focus:outline-none focus:border-accent transition-colors duration-150">
            <option>Sort: Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest</option>
          </select>
        </div>

        {/* Product Grid */}
        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryProducts.map((product) => (
              <article
                key={product.id}
                className="group bg-surface border border-border rounded overflow-hidden transition-all duration-150 hover:-translate-y-1 hover:shadow-lg"
              >
                <Link to={`/products/${product.slug}`}>
                  <div className="aspect-square overflow-hidden bg-gray-50">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </Link>
                <div className="p-5">
                  <p className="text-xs text-text-muted uppercase tracking-wider mb-1">{product.category}</p>
                  <Link to={`/products/${product.slug}`}>
                    <h3 className="font-heading text-base font-semibold text-primary mb-2 hover:text-accent transition-colors duration-150">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-sm text-text-muted mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-primary">${product.price}</span>
                    <a
                      href={getWhatsAppLink(product.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-medium px-3 py-2 rounded transition-all duration-150 active:scale-[0.98]"
                    >
                      <MessageCircle size={12} />
                      Order
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-text-muted text-lg mb-4">No products found in this category yet.</p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi, I'm interested in your ${category.name}. Could you share available options?`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-white font-medium px-6 py-3 rounded transition-all duration-150 active:scale-[0.98]"
            >
              <MessageCircle size={16} />
              Inquire on WhatsApp
            </a>
          </div>
        )}
      </div>
    </main>
  );
}
