import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categories } from '../data/products';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function CategoriesPage() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <main className="pt-24 lg:pt-28 pb-20 lg:pb-28">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <p className="text-accent text-sm font-medium uppercase tracking-widest mb-3">Our Collections</p>
          <h1 className="font-heading text-4xl lg:text-5xl font-semibold text-primary mb-4">
            Explore Our Range
          </h1>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            From boardroom to gym, from toddler to gift-giving — discover socks crafted with purpose and precision.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((cat, i) => (
            <Link
              key={cat.slug}
              to={`/categories/${cat.slug}`}
              className="group bg-surface border border-border rounded overflow-hidden transition-all duration-150 hover:-translate-y-1 hover:shadow-lg"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6 lg:p-8">
                <h2 className="font-heading text-xl font-semibold text-primary mb-2">{cat.name}</h2>
                <p className="text-sm text-text-muted leading-relaxed mb-4">{cat.description}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-accent group-hover:gap-2 transition-all duration-150">
                  Explore <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
