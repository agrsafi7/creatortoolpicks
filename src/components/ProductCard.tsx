import React from 'react';
import { Product } from '../data/products';
import { Link } from '../context/RouterContext';
import {
  Layers,
  Mic,
  Video,
  Sparkles,
  Server,
  Mail,
  Film,
  Sun,
  Maximize2,
  Camera,
  Lightbulb,
  Monitor,
  BookOpen,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, featured = false }) => {
  // Render appropriate domain icon for product image/logo placeholder area
  const renderIcon = () => {
    const props = { className: 'w-7 h-7 text-[#2563EB]' };
    switch (product.iconName) {
      case 'Layers':
        return <Layers {...props} />;
      case 'Mic':
        return <Mic {...props} />;
      case 'Mic2':
        return <Mic {...props} />;
      case 'Video':
        return <Video {...props} />;
      case 'Sparkles':
        return <Sparkles {...props} />;
      case 'Server':
        return <Server {...props} />;
      case 'Mail':
        return <Mail {...props} />;
      case 'Film':
        return <Film {...props} />;
      case 'Sun':
        return <Sun {...props} />;
      case 'Maximize2':
        return <Maximize2 {...props} />;
      case 'Camera':
        return <Camera {...props} />;
      case 'Lightbulb':
        return <Lightbulb {...props} />;
      case 'Monitor':
        return <Monitor {...props} />;
      case 'BookOpen':
        return <BookOpen {...props} />;
      default:
        return <Layers {...props} />;
    }
  };

  const handleExternalClick = (e: React.MouseEvent) => {
    if (product.isExternal && product.ctaUrl === '#') {
      // Affiliate link not live yet — placeholder only, do not navigate anywhere.
      // TODO: Replace ctaUrl '#' in products.ts with the real affiliate link when live.
      e.preventDefault();
    }
  };

  return (
    <div
      className={`group relative flex flex-col justify-between bg-white border ${
        featured ? 'border-[#2563EB] shadow-md ring-1 ring-[#2563EB]/20' : 'border-gray-200 shadow-sm'
      } rounded-xl p-6 transition-all duration-150 hover:shadow-md hover:border-gray-300`}
    >
      <div>
        {/* Top bar: Image/logo placeholder area & Category Tag & Trust Badge */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="w-12 h-12 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
            {renderIcon()}
          </div>

          <div className="flex flex-col items-end gap-1">
            {/* Trust badge (ONLY rendered when explicitly defined in product specifications) */}
            {product.badge && (
              <span className="inline-flex items-center gap-1 bg-[#F59E0B] text-[#0B1F3A] font-bold text-xs uppercase tracking-wider px-2.5 py-1 rounded">
                <ShieldCheck className="w-3.5 h-3.5" />
                {product.badge}
              </span>
            )}
            {/* Category tag */}
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              {product.category}
            </span>
          </div>
        </div>

        {/* Product Name */}
        <h3 className="text-xl font-bold text-[#111827] group-hover:text-[#2563EB] transition-colors mb-2">
          {product.name}
        </h3>

        {/* One-line verdict */}
        <p className="text-sm text-gray-700 leading-relaxed mb-4">
          {product.verdict}
        </p>

        {/* Best for line */}
        <div className="pt-3 pb-3 border-t border-gray-100 text-xs text-gray-600">
          <span className="font-semibold text-gray-900">Best for: </span>
          <span>{product.bestFor}</span>
        </div>

        {/* Price line ONLY where strictly allowed (Systeme.io and Faceless Playbook) */}
        {product.pricing && (
          <div className="pt-2 pb-3 text-xs text-gray-900 border-t border-gray-100">
            <span className="font-semibold text-gray-700">Pricing: </span>
            <span className="font-bold text-[#0B1F3A]">{product.pricing.primary}</span>
            {product.pricing.secondary && (
              <span className="text-gray-500 ml-1">({product.pricing.secondary})</span>
            )}
          </div>
        )}
      </div>

      {/* CTA Button */}
      <div className="pt-4 mt-2">
        {product.isExternal ? (
          <a
            href={product.ctaUrl}
            onClick={handleExternalClick}
            target="_blank"
            rel="sponsored nofollow noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-[#0B1F3A] bg-[#F59E0B] hover:bg-[#D97706] transition-colors shadow-sm text-center"
          >
            <span>{product.ctaText}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        ) : (
          <Link
            href={product.ctaUrl}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] transition-colors shadow-sm text-center"
          >
            <span>{product.ctaText}</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        )}

        {/* Subtle note for editorial review link when it's Systeme.io */}
        {product.id === 'systeme-io' && (
          <p className="text-[11px] text-center text-gray-500 mt-2">
            Detailed independent breakdown &amp; evaluation
          </p>
        )}
      </div>
    </div>
  );
};
