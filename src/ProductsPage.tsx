import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { partnerLogos } from './data/productLogos';

export default function ProductsPage() {
  return (
    <section className="pt-64 pb-24 px-6 bg-white border-t border-slate-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h1 className="text-5xl md:text-6xl font-black tracking-tight text-slate-400 mb-4">Our Products</h1>
          <p className="max-w-3xl mx-auto text-slate-500 text-sm md:text-base leading-relaxed">
            Browse the brands we represent. Click any logo to open its product detail page.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {partnerLogos.map((logo) => (
            <div
              key={logo.id}
              className="group relative bg-[#0F172A] border border-[#0F172A] rounded-3xl overflow-hidden hover:shadow-2xl hover:border-sky-700 transition-all flex flex-col items-center text-center"
            >
              <Link to={`/product/${logo.id}`} className="block w-full">
                <div className="product-logo-frame bg-slate-50 px-4 py-4">
                  <img
                    src={logo.url}
                    alt={logo.name}
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </Link>
              <div className="px-4 py-4 w-full">
                <div className="text-sm font-black uppercase tracking-[0.18em] text-white">{logo.name}</div>
                <Link
                  to={`/product/${logo.id}`}
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#0F172A] px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-white transition hover:bg-sky-700"
                >
                  View Product
                  <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
