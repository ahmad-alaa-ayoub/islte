import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { partnerLogos } from './data/productLogos';

export default function ProductsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <section className="pt-32 pb-24 px-6 bg-white border-t border-slate-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h1 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900 mb-4">Our Products</h1>
          <p className="max-w-3xl mx-auto text-slate-500 text-sm md:text-base leading-relaxed">
            Browse the brands we represent. Click any logo to open its product detail page.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {partnerLogos.map((logo) => (
            <Link
              key={logo.id}
              to={`/product/${logo.id}`}
              className="group relative bg-white border border-slate-100 rounded-3xl overflow-hidden hover:shadow-2xl hover:border-slate-300 transition-all flex flex-col items-center text-center"
            >
              <div className="aspect-square w-full flex items-center justify-center bg-slate-50 px-4 py-4">
                <img
                  src={logo.url}
                  alt={logo.name}
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="px-4 py-4 w-full">
                <div className="text-sm font-black uppercase tracking-[0.18em] text-slate-900">{logo.name}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
