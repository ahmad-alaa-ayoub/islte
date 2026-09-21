//app.tsx
import React, { useState, useEffect, useLayoutEffect } from 'react';
import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useNavigationType,
} from 'react-router-dom';
import {
  X, Linkedin, Mail, Phone, ChevronRight, ChevronLeft
} from 'lucide-react';

import { useDocumentTitle } from './useDocumentTitle';
import { partnerLogos } from './data/productLogos';

const ProductDetail = React.lazy(() => import('./ProductDetail'));
const ProductsPage = React.lazy(() => import('./ProductsPage'));


function ScrollManager() {
  const { pathname, hash, key } = useLocation();
  const navigationType = useNavigationType();

  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const targetId = decodeURIComponent(hash.slice(1));
    const target = targetId ? document.getElementById(targetId) : null;

    if (target) {
      target.scrollIntoView({ block: 'start' });
    } else if (navigationType === 'POP') {
      const saved = sessionStorage.getItem(`scroll:${key}`);
      window.scrollTo(0, saved ? parseInt(saved, 10) : 0);
    } else {
      window.scrollTo(0, 0);
    }

    return () => {
      sessionStorage.setItem(`scroll:${key}`, String(window.scrollY));
    };
  }, [pathname, hash, key, navigationType]);

  return null;
}

const ndtPhoto = new URL('./product/E3 NDT/DR Panels/EXT1036BW.png', import.meta.url).href;
const logos = new URL('./public/fullProduct.png', import.meta.url).href;
const calib = new URL('./public/calibration.jpeg', import.meta.url).href;

const HERO_BG = new URL('./public/unnamed.jpg', import.meta.url).href;
const BACKGROUND_IMAGES = [
  HERO_BG,
  new URL('./public/sunset.jpg', import.meta.url).href,
  new URL('./public/IMG_20230916_142015-scaled.jpg', import.meta.url).href,
];
const ISL_LOGO_NEW = new URL('./public/logo-removebg-preview.png', import.meta.url).href;
const TECHCAL_LOGO = new URL('./public/techcal-logo-high-resolution.png', import.meta.url).href;
const ABOUT_IMAGE = new URL('./public/IMG_20230916_142015-scaled.jpg', import.meta.url).href;
const OFFICE_IMAGES = [
  new URL('./public/office Pictures/IMG_20200630_123749.jpg', import.meta.url).href,
  new URL('./public/office Pictures/IMG_20200630_123842.jpg', import.meta.url).href,
  new URL('./public/office Pictures/IMG_20200630_123848.jpg', import.meta.url).href,
  new URL('./public/office Pictures/IMG_20200630_123944.jpg', import.meta.url).href,
  new URL('./public/office Pictures/IMG_20200630_124008.jpg', import.meta.url).href,
  new URL('./public/office Pictures/IMG_20200630_124058.jpg', import.meta.url).href,
  new URL('./public/office Pictures/IMG_20200630_124121.jpg', import.meta.url).href,
  new URL('./public/office Pictures/IMG_20200630_124620.jpg', import.meta.url).href,
  new URL('./public/office Pictures/IMG_20201028_155951.jpg', import.meta.url).href,
  new URL('./public/office Pictures/IMG_20210318_110716.jpg', import.meta.url).href,
];

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'After Sale Services', href: '/after-sale-services' },
  { label: 'News', href: '/#news' },
  { label: 'About Us', href: '/about' },
  { label: 'Career', href: '/career' },
  { label: 'Contact Us', href: '/contact' }

];

const productMenu = [
  { id: 'trm_0_7_mhz.jpg', label: 'Spectro', href: '/product/spectro', subcategories: ['Radiometers', 'Aerospace', 'NDT Supplies'] },
  { id: 'fuji', label: 'FujiFilm', href: '/product/fuji', subcategories: ['IX-Film', 'Chemicals'] },
  { id: 'jireh', label: 'JIREH', href: '/product/jireh', subcategories: ['Manual Weld & Corrosion Scanning', 'Automated Crawlers'] },
  { id: '3e-ndt', label: '3E NDT', href: '/product/3e-ndt', subcategories: [] },
  { id: 'durr-ndt', label: 'DURR NDT', href: '/product/durr-ndt', subcategories: ['Computed Radiography', 'Direct Digital Radiography', 'NDT Software', 'Conventional Radiography'] },
  { id: 'drtech', label: 'DRTECH', href: '/product/drtech', subcategories: ['Bendable & Curved panel', 'Static series', 'High Resolution & Frame Rate'] },
  { id: 'iris', label: 'IRIS', href: '/product/iris', subcategories: ['IRIS 9000 PLUS', 'Software', 'Probes', 'Accessories'] },
  { id: 'TPAC', label: 'TPAC', href: '/product/TPAC.jpg', subcategories: ['Instrument', 'Software', 'Accessories'] },
  { id: 'vallen-systeme', label: 'VALLEN SYSTEME', href: '/product/vallen-systeme', subcategories: [] },
  { id: 'rohmann', label: 'ROHMANN', href: '/product/rohmann', subcategories: ['Inspection Systems', 'Accessories'] },
  { id: 'mitcorp', label: 'MITCORP', href: '/product/mitcorp', subcategories: ['X-SERIES INDUSTRIAL VIDEOSCOPES', 'PR-SERIES PIPE INSPECTION VIDEOSCOPES'] },
  { id: 'gb-inspection', label: 'GB INSPECTION', href: '/product/gb-inspection', subcategories: [] },
  { id: 'wohler', label: 'WOHLER', href: '/product/wohler', subcategories: ['Measuring Instruments', 'Inspection Systems', 'Cleaning Tools'] },
  { id: 'johnson-allen', label: 'JOHNSON & ALLEN', href: '/product/johnson-allen', subcategories: [] },
  { id: 'echo', label: 'ECHO Ultrasonics', href: '/product/echo', subcategories: ['High Temperature', 'Intermediate & Low Temp', 'Specialty Application'] },
  { id: 'danatronics', label: 'DANATRONICS', href: '/product/danatronics', subcategories: ['Flaw Detectors', 'Corrosion Thickness Gage', 'Precision Thickness Gage', 'Hall Effect Gage', 'Transducers'] },
  { id: 'dolphitech', label: 'Dolphitech', href: '/product/dolphitech', subcategories: ['MAUT Core Units', 'MAUT Transducers (TRMs)', 'Accessories', 'Scanning Tools'] },
  { id: 'ekoscan', label: 'Ekoscan', href: '/product/ekoscan', subcategories: [] },
  { id: 'balteau', label: 'BALTEAU NDT', href: '/product/balteau', subcategories: ['BALTOSPOT', 'BALTOGRAPH', 'BALTOMATIC', 'BALTOSCOPE', 'ACCESSORIES'] },
  { id: 'proceq', label: 'proceq', href: '/product/proceq', subcategories: ['Flaw Detectors', 'Portable Hardness Tester'] },
  { id: 'coatmaster', label: 'Coatmaster', href: '/product/coatmaster', subcategories: ['coatmaster 3D', 'Flex', 'Inline', 'Atline'] }


];

const offices = [
  { name: 'Main office (Dubai)', company: 'Integrity Scientific Laboratory Equipment LLC', address: 'Offices 12 & 13 Al Jaber Building, Nad Al Hamar, Dubai, UAE', extra: 'P.O.Box : 392998', phoneLabel: 'Phone', phone: '+971 4 4323551', mapQuery: 'Integrity Scientific Laboratory Equipment LLC, Al Jaber Building, Nad Al Hamar, Dubai, UAE' },
  {
    name: 'Abu Dhabi Office', company: 'Integrity Scientific Laboratory Equipment LLC', address: 'Office 8, Floor 9, Tower 3, Mazyad Mall, Zone 1, Mohammed Bin Zayed City, Abu Dhabi, UAE', phoneLabel: 'Phone', phone: '+971 2 6273561', mapQuery: '24.3731249,54.5379408', mapZoom: 17
  },
  { name: 'Oman Office', company: 'Integrity Scientific & Laboratory Equipment LLC', address: 'Office No: 14, DRC Building, Ruwi, Muscat, Oman', phoneLabel: 'Mob', phone: '+968 93500515', mapQuery: '23.5924877,58.5520255', mapLink: 'https://maps.app.goo.gl/QEYs1DWv7aQ9qos18' },
  { name: 'Saudi Arabia Office', company: 'Integrity Scientific & Laboratory Equipment LLC', address: '15th street, building 3149, Office 310, Dammam Saihat', extra: 'Short address: EMJC3149', phoneLabel: 'Tel', phone: '0138303573', mapQuery: '26.466508,50.019625', mapLink: 'https://maps.app.goo.gl/GAkHJea6dc9Eba7s7' },
];

const slugify = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

function CounterItem({ target, label, dark = false }: { target: number; label: string; dark?: boolean }) {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="flex flex-col items-center">
      <div className={`text-6xl md:text-7xl font-black mb-2 ${dark ? 'text-sky-400' : 'text-blue-600'}`}>
        {count}
      </div>
      <div className={`font-bold uppercase tracking-[0.2em] text-sm text-center ${dark ? 'text-slate-300' : 'text-slate-500'}`}>
        {label}
      </div>
      <div className={`h-1 w-12 mt-4 rounded-full ${dark ? 'bg-white/20' : 'bg-slate-200'}`}></div>
    </div>
  );
}
function HeroBackground() {
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setBackgroundIndex((currentIndex) => (currentIndex + 1) % BACKGROUND_IMAGES.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, []);

  const currentBackground = BACKGROUND_IMAGES[backgroundIndex];

  return (
    <header
      id="home"
      className="hero-section relative pt-40 pb-16 px-6 overflow-hidden min-h-[70vh] bg-[#0F172A]"
      style={{
        backgroundColor: '#0F172A',
        backgroundImage: 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'scroll'
      }}
    >
      <div className="absolute inset-0 bg-[#0F172A]"></div>
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#0F172A]"></div>
      <div className="relative z-10 w-full max-w-[96%] mx-auto pt-[10vh]">
        <WhatWeDoCarousel />
      </div>
    </header>
  )
}

const WHAT_WE_DO_SLIDES = [
  {
    image: ndtPhoto,
    title: 'Your Trusted NDT Partner Since 2014',
    description: 'ISL Equipment Trading LLC was established to support the growing demands of Quality Control across Oil & Gas, Energy, Aviation and Laboratory industries, backed by over 20 years of team experience.',
  },
  {
    image: logos,
    title: 'A Global Network of Trusted Manufacturers',
    description: 'As the authorized regional representative for a wide range of world-class NDT and inspection manufacturers, we connect our clients across the Gulf with cutting-edge technology backed by proven engineering pedigrees — from ultrasonic and radiography systems to specialized inspection tools.',
  },
  {
    image: calib,
    title: 'Certified Calibration & After-Sale Support',
    description: 'Our service team delivers premium calibration, repair and certification services, accredited by the Emirates International Accreditation Center (EIAC) to ISO/IEC 17025, traceable to NPL, NIST, PTB and EMI standards.',
  },
  {
    image: OFFICE_IMAGES[0],
    title: 'Regional Presence Across the Gulf',
    description: 'With offices in Dubai, Abu Dhabi, Oman and Saudi Arabia, we bring local, responsive support to clients across the region, backed by decades of combined technical expertise.',
  },
  {
    image: BACKGROUND_IMAGES[1],
    title: 'Precision & Quality in Every Measurement',
    description: 'From understanding customer needs to training manpower and providing after-sale support, we partner with our clients at every step of their inspection and quality assurance journey.',
  },
];

function WhatWeDoCarousel() {
  const [index, setIndex] = React.useState(0);
  const navigate = useNavigate();

  React.useEffect(() => {
    WHAT_WE_DO_SLIDES.forEach(({ image }) => {
      const preloadedImage = new Image();
      preloadedImage.src = image;
    });
  }, []);

  React.useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((currentIndex) => (currentIndex + 1) % WHAT_WE_DO_SLIDES.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const goTo = (next: number) => {
    setIndex((next + WHAT_WE_DO_SLIDES.length) % WHAT_WE_DO_SLIDES.length);
  };

  const isProductsSlide = index === 1;
  const slide = WHAT_WE_DO_SLIDES[index];

  const handleSlideClick = () => {
    if (isProductsSlide) {
      navigate('/products');
    }
  };

  return (
    <div
      className={`relative bg-[rgba(15,23,42,0.85)] backdrop-blur-md rounded-[2.5rem] shadow-2xl border border-white/10 mb-16 z-10 overflow-hidden min-h-[420px] w-full ${isProductsSlide ? 'cursor-pointer' : ''}`}
      onClick={handleSlideClick}
      role={isProductsSlide ? 'button' : undefined}
      tabIndex={isProductsSlide ? 0 : -1}
      onKeyDown={(event) => {
        if (isProductsSlide && (event.key === 'Enter' || event.key === ' ')) {
          event.preventDefault();
          navigate('/products');
        }
      }}
    >
      <div className="grid md:grid-cols-2 items-stretch min-h-[420px]">
        <div className="p-8 md:p-10 flex flex-col justify-center text-left">
          <h3 className="text-xl md:text-2xl font-black text-white mb-3 leading-tight">{slide.title}</h3>
          <p className="text-sm md:text-base text-slate-300 leading-relaxed">{slide.description}</p>
          <div className="flex gap-2 mt-4">
            {WHAT_WE_DO_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={(event) => {
                  event.stopPropagation();
                  goTo(i);
                }}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${i === index ? 'w-8 bg-sky-500' : 'w-1.5 bg-white/20 hover:bg-white/40'}`}
              />
            ))}
          </div>
        </div>
        <div className="relative h-56 md:h-[420px] bg-slate-950 flex items-center justify-center">
          <img
            key={slide.image}
            src={slide.image}
            alt={slide.title}
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="w-full h-full object-contain p-4"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/40 md:from-[#0F172A]/60 to-transparent pointer-events-none"></div>
        </div>
      </div>

      <button
        onClick={(event) => {
          event.stopPropagation();
          goTo(index - 1);
        }}
        aria-label="Previous"
        className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 flex items-center justify-center rounded-full bg-slate-950/70 border border-white/10 text-white hover:bg-slate-900 transition-all"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={(event) => {
          event.stopPropagation();
          goTo(index + 1);
        }}
        aria-label="Next"
        className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 flex items-center justify-center rounded-full bg-slate-950/70 border border-white/10 text-white hover:bg-slate-900 transition-all"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}


function LandingPage({ activeProductTab, setActiveProductTab }: { activeProductTab: 'products' | 'news'; setActiveProductTab: (tab: 'products' | 'news') => void }) {
  useDocumentTitle('Integrity Scientific & Laboratory Equipment Trading LLC | NDT Equipment Supplier');

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">

      <HeroBackground />
      <section id="news" className="pt-0 pb-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-6 mt-16 pt-6 border-t border-white/80">
            <div className="inline-flex p-1.5 bg-[rgba(15,23,42,0.85)] backdrop-blur-md rounded-2xl border border-white/10">
              {['news', 'products'].map((tab) => (
                tab === 'news' ? (
                  <button
                    key={tab}
                    onClick={() => setActiveProductTab('news')}
                    className={`px-10 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${activeProductTab === tab ? 'bg-sky-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'}`}
                  >
                    {tab}
                  </button>
                ) : (
                  <Link
                    key={tab}
                    to="/products"
                    onClick={() => setActiveProductTab('products')}
                    className={`px-10 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${activeProductTab === tab ? 'bg-sky-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'}`}
                  >
                    {tab}
                  </Link>
                )
              ))}
            </div>
          </div>

          {activeProductTab === 'products' ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
              {partnerLogos.map((logo) => {
                const shouldFillLogo = logo.id === '3e-ndt' || logo.id === 'tpac' || logo.id === 'drtech';

                return (
                  <Link
                    to={`/product/${logo.id}`}
                    key={logo.id}
                    className={`group relative bg-[rgba(15,23,42,0.72)] border border-[rgba(15,23,42,0.72)] rounded-3xl overflow-hidden hover:shadow-2xl hover:border-sky-700 transition-all flex flex-col items-center text-center ${logo.id === 'drtech' ? 'drtech-logo-card' : ''}`}
                  >
                    <div className={`aspect-square w-full flex items-center justify-center px-4 py-4 ${logo.id === '3e-ndt' ? 'e3-logo-card' : ''} ${logo.id === 'tpac' ? 'tpac-logo-card' : ''} ${logo.id === 'drtech' ? 'drtech-logo-container' : 'logo-white-background'}`}>
                      <img
                        src={logo.url}
                        alt={logo.name}
                        loading="lazy"
                        decoding="async"
                        className={`h-full w-full object-contain transition-transform duration-500 group-hover:scale-105 ${logo.id === 'drtech' ? 'drtech-logo-image' : ''} ${shouldFillLogo ? 'logo-fill-image' : ''}`}
                      />
                    </div>
                    <div className="px-4 py-4 w-full">
                      <div className="text-lg font-black uppercase tracking-[0.18em] text-white">{logo.name || ''}</div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="py-20 text-slate-300 font-black uppercase tracking-[0.5em] text-sm italic">Updates Coming Soon</div>
          )}
        </div>
      </section>
    </div>
  );
}


export default function App() {
  const navRef = React.useRef<HTMLElement>(null);
  const productMenuHoverRef = React.useRef(false);
  const [activeProductTab, setActiveProductTab] = useState<'products' | 'news'>('products');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [desktopProductsOpen, setDesktopProductsOpen] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const [mobileProductOpenId, setMobileProductOpenId] = useState<string | null>(null);
  const [navHidden, setNavHidden] = useState(false);

  // --- BRAND COLORS ---
  const ISL_GRAY = '#A3A3A3';
  const NAV_DARK = 'rgba(15, 23, 42, 0.56)';
  const TEXT_PRIMARY = '#1E293B';
  const TEXT_MUTED = '#64748B';




  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    let frameId = 0;
    let lastScrolledState = false;

    const updateNavigation = () => {
      frameId = 0;
      const currentScrollY = window.scrollY;
      const nav = navRef.current;
      if (nav) {
        const pageIsScrolled = currentScrollY > 20;
        if (pageIsScrolled !== lastScrolledState) {
          lastScrolledState = pageIsScrolled;
          setNavHidden(pageIsScrolled);
        }
        nav.classList.toggle('shadow-2xl', pageIsScrolled);
        nav.classList.toggle('bg-slate-900/98', pageIsScrolled);
        nav.classList.toggle('bg-[#0F172A]', !pageIsScrolled);
      }
    };

    const handleScroll = () => {
      if (frameId === 0) frameId = window.requestAnimationFrame(updateNavigation);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frameId !== 0) window.cancelAnimationFrame(frameId);
    };
  }, []);




  const AfterSaleServicesPage = () => {
    useDocumentTitle('After Sale Services | Integrity Scientific');
    return (
      <section className="after-sale-page min-h-screen pt-64 pb-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center gap-10 text-center mb-24 mt-16">
            <img src={TECHCAL_LOGO} alt="Technical Logo" loading="lazy" decoding="async" className="h-32 md:h-40 object-contain" />
          </div>

          <div className="site-theme-panel rounded-3xl border p-10 shadow-sm">
            <p className="text-base md:text-lg leading-relaxed text-slate-700">
              Our service team is committed to deliver the premium quality of calibration, repair and certification services through the accredited with Emirates International Accreditation Center (EIAC, formerly DAC) to meet ISO/IEC/17025 in order to ensure a high level of calibration and quality standards. Calibration is traceable through NPL, NIST, PTB, EMI or other international/ national standards institutes to the International Systems of Units (SI) or to accepted intrinsic standards of measurement.
            </p>
          </div>
        </div>
      </section>
    );
  };

  const CareerSection = React.useMemo(() => () => {
    useDocumentTitle('Careers | Integrity Scientific');
    return (
      <div className="min-h-screen bg-[#0a0f1a] pt-64 pb-20 px-6 flex items-center justify-center">
        <div className="max-w-2xl w-full bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md shadow-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-3 tracking-tight">Join Our Team</h2>
            <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full mb-4"></div>
            <p className="text-white/50 italic text-sm">Send your details to info@islte.ae</p>
          </div>

          <form
            action="https://formsubmit.co/info@islte.ae"
            method="POST"
            className="space-y-5"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value={window.location.href} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-white/70 text-[12px] uppercase font-bold tracking-wider ml-1">Your Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-3.5 text-white focus:border-blue-500/50 focus:bg-white/10 outline-none transition-all placeholder:text-white/20"
                />
              </div>

              <div className="space-y-2">
                <label className="text-white/70 text-[12px] uppercase font-bold tracking-wider ml-1">Your Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="email@example.com"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-3.5 text-white focus:border-blue-500/50 focus:bg-white/10 outline-none transition-all placeholder:text-white/20"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-white/70 text-[12px] uppercase font-bold tracking-wider ml-1">Subject</label>
              <input
                type="text"
                name="_subject"
                placeholder="Application for..."
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl p-3.5 text-white focus:border-blue-500/50 focus:bg-white/10 outline-none transition-all placeholder:text-white/20"
              />
            </div>

            <div className="space-y-2">
              <label className="text-white/70 text-[12px] uppercase font-bold tracking-wider ml-1">Your message</label>
              <textarea
                name="message"
                rows={5}
                placeholder="Tell us about your experience..."
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl p-3.5 text-white focus:border-blue-500/50 focus:bg-white/10 outline-none transition-all resize-none placeholder:text-white/20"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black uppercase tracking-[0.2em] text-xs py-5 rounded-xl flex items-center justify-center gap-3 transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] group mt-4"
            >
              Send Application
              <svg
                className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    );
  }, []);

  const ContactUsPage = React.useMemo(() => () => {
    useDocumentTitle('Contact Us | Integrity Scientific');
    const [selectedOffice, setSelectedOffice] = useState(() => {
      const savedOfficeName = sessionStorage.getItem('selectedOfficeName');
      return offices.find((office) => office.name === savedOfficeName) ?? offices[0];
    });
    const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(selectedOffice.mapQuery)}&output=embed${selectedOffice.mapZoom ? `&z=${selectedOffice.mapZoom}` : ''}`;

    useEffect(() => {
      sessionStorage.setItem('selectedOfficeName', selectedOffice.name);
    }, [selectedOffice.name]);

    return (
      <section className="contact-page min-h-screen pt-64 pb-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto px-10">

          <p className="text-sm text-white font-black uppercase tracking-[0.2em] mb-6">
            Send us a message
          </p>
        </div>

        <div className="grid gap-16 items-start mb-20">

          <div className="contact-form-card site-theme-panel rounded-[2.5rem] p-10 shadow-2xl border w-full max-w-5xl mx-auto">
            <form action="https://formsubmit.co/info@islte.ae" method="POST" className="space-y-6">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={window.location.href} />

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[11px] font-black uppercase tracking-wider text-slate-400 ml-2">Your Name</label>
                  <input type="text" name="name" placeholder="Name" required className="site-theme-input w-full rounded-2xl p-4 focus:ring-2 focus:ring-sky-500 transition-all outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-black uppercase tracking-wider text-slate-400 ml-2">Your Email</label>
                  <input type="email" name="email" placeholder="Email" required className="site-theme-input w-full rounded-2xl p-4 focus:ring-2 focus:ring-sky-500 transition-all outline-none" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-black uppercase tracking-wider text-slate-400 ml-2">Subject</label>
                <input type="text" name="_subject" placeholder="Subject" required className="site-theme-input w-full rounded-2xl p-4 focus:ring-2 focus:ring-sky-500 transition-all outline-none" />
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-black uppercase tracking-wider text-slate-400 ml-2">Your Message</label>
                <textarea name="message" rows={6} placeholder="How can we help you?" required className="site-theme-input w-full rounded-2xl p-4 focus:ring-2 focus:ring-sky-500 transition-all resize-none outline-none"></textarea>
              </div>

              <button type="submit" className="w-full bg-sky-700 hover:bg-sky-600 text-white font-black uppercase tracking-[0.2em] py-5 rounded-2xl shadow-lg transition-all transform hover:-translate-y-1">
                Send a Message
              </button>
            </form>
          </div>

          <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.72fr)] gap-8 lg:gap-10 items-start">
            <div className="grid gap-8">
              <div onClick={() => setSelectedOffice(offices[0])} role="button" tabIndex={0} className={`site-theme-panel cursor-pointer p-8 rounded-[2rem] border-l-8 shadow-sm transition-all ${selectedOffice.name === offices[0].name ? 'border-sky-700 ring-2 ring-sky-500/50' : 'border-slate-500 hover:border-sky-400'}`}>
                <h3 className="text-xl font-black text-sky-700 mb-4 uppercase tracking-tighter">Main office (Dubai)</h3>
                <div className="text-slate-600 space-y-1 font-medium text-sm">
                  <p className="font-bold text-slate-900">Integrity Scientific Laboratory Equipment LLC</p>
                  <p>Offices 12 & 13 Al Jaber Building, Nad Al Hamar, Dubai, UAE</p>
                  <p>P.O.Box : 392998</p>
                  <p className="pt-2"><span className="font-bold text-sky-700">Phone:</span> +971 4 4323551</p>
                  <p><span className="font-bold text-sky-700">Email:</span> info@islte.ae</p>
                </div>
              </div>

              <div onClick={() => setSelectedOffice(offices[1])} role="button" tabIndex={0} className={`site-theme-panel cursor-pointer p-8 rounded-[2rem] border-l-8 shadow-sm transition-all ${selectedOffice.name === offices[1].name ? 'border-sky-700 ring-2 ring-sky-500/50' : 'border-slate-500 hover:border-sky-400'}`}>
                <h3 className="text-xl font-black text-slate-800 mb-4 uppercase tracking-tighter">Abu Dhabi Office</h3>
                <div className="text-slate-600 space-y-1 font-medium text-sm">
                  <p className="font-bold text-slate-900">Integrity Scientific Laboratory Equipment LLC</p>
                  <p>Office number 8, floor 9, tower 3, Mazyad mall, zone 1, Mohammed Bin Zayed city, Abu Dhabi, UAE</p>
                  <p className="pt-2"><span className="font-bold text-slate-800">Phone:</span> +971 2 6273561</p>
                  <p><span className="font-bold text-slate-800">Email:</span> info@islte.ae</p>
                </div>
              </div>

              <div onClick={() => setSelectedOffice(offices[2])} role="button" tabIndex={0} className={`site-theme-panel cursor-pointer p-8 rounded-[2rem] border-l-8 shadow-sm transition-all ${selectedOffice.name === offices[2].name ? 'border-sky-700 ring-2 ring-sky-500/50' : 'border-slate-500 hover:border-sky-400'}`}>
                <h3 className="text-xl font-black text-slate-800 mb-4 uppercase tracking-tighter">Oman Office</h3>
                <div className="text-slate-600 space-y-1 font-medium text-sm">
                  <p className="font-bold text-slate-900">Integrity Scientific & Laboratory Equipment LLC</p>
                  <p>Office No: 14, DRC Building, Ruwi, Muscat, Oman</p>
                  <p className="pt-2"><span className="font-bold text-slate-800">Mob:</span> +968 93500515</p>
                  <p><span className="font-bold text-slate-800">Email:</span> info@islte.ae</p>
                </div>
              </div>
              <div onClick={() => setSelectedOffice(offices[3])} role="button" tabIndex={0} className={`site-theme-panel cursor-pointer p-8 rounded-[2rem] border-l-8 shadow-sm transition-all ${selectedOffice.name === offices[3].name ? 'border-sky-700 ring-2 ring-sky-500/50' : 'border-slate-500 hover:border-sky-400'}`}>
                <h3 className="text-xl font-black text-slate-800 mb-4 uppercase tracking-tighter">Saudi Arabia Office</h3>
                <div className="text-slate-600 space-y-1 font-medium text-sm">
                  <p className="font-bold text-slate-900">Integrity Scientific & Laboratory Equipment LLC</p>
                  <p>15th street, building 3149, Office 310, Dammam Saihat </p>
                  <p>Short address: EMJC3149</p>
                  <p className="pt-2"><span className="font-bold text-slate-800">Tel:</span> 0138303573</p>
                  <p><span className="font-bold text-slate-800">Email:</span> info@islte.ae</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 lg:sticky lg:top-28">
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white h-[520px] w-full">
                <iframe
                  src={mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <a
                href={selectedOffice.mapLink ?? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedOffice.mapQuery)}`}
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-center rounded-2xl bg-slate-800 px-6 py-4 text-xs font-black uppercase tracking-[0.2em] text-white transition hover:bg-slate-700"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }, []);



  const AboutUsPage = () => {
    useDocumentTitle('About Us | Integrity Scientific');
    return (
      <section className="about-page min-h-screen pt-64 pb-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-[1.05fr_0.95fr] items-center mb-24">
          <div className="site-theme-panel overflow-hidden rounded-[2rem] shadow-2xl">
            <img src={ABOUT_IMAGE} alt="Integrity Scientific Office" loading="lazy" decoding="async" className="w-full h-full object-cover" />
          </div>

          <div className="space-y-6">
            <div className="text-left">
              <h2 className="text-4xl font-black tracking-tight text-slate-400">Who we are</h2>
              <p className="mt-4 text-base md:text-lg leading-8 text-slate-500">
                Integrity Scientific & Laboratory Equipment Trading LLC. was established in 2014 to support the increasing needs and demands of Quality Control in the fields of Oil & Gas, Energy, Aviation and Laboratories industries. Integrity Scientific & Laboratory relies on the extensive 20 Years experience of its team. It has enabled us to better understand the needs of our clients for high quality Products and constant customer support.
              </p>
            </div>

            <div className="site-theme-panel rounded-3xl border p-8 shadow-sm">
              <p className="text-base md:text-lg leading-8 text-slate-500 mb-6">
                Integrity Scientific & Lab is a representative of prominent and highly professional companies which provide state-of-the-art equipment and technology in the following fields:
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  'Oil & Gas',
                  'Power Generation',
                  'Petrochemicals.',
                  'Aviation',
                  'Fabrication',
                  'Research (R&D) and Educations',
                  'Manufacturing',
                  'Security',
                  'Laboratory and environment.'
                ].map((item) => (
                  <span key={item} className="inline-flex rounded-2xl bg-[#0F172A] px-4 py-3 text-slate-300 font-semibold text-xs">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="site-theme-panel rounded-3xl border p-8 shadow-sm">
              <h3 className="text-2xl font-black tracking-tight text-slate-400 mb-6">What We Do</h3>
              <ul className="space-y-5 text-sm font-bold text-slate-500">
                {[
                  'Understand our customer needs',
                  'Discuss challenges and limitations',
                  'Suggest best available technology and solutions',
                  'Supply state-of-the-art equipment',
                  'Educate and train customer manpower',
                  'Provide after- sales Support'
                ].map(text => (
                  <li key={text} className="flex items-start gap-4">
                    <ChevronRight size={16} className="mt-0.5 text-sky-600 shrink-0" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="site-theme-panel max-w-7xl mx-auto py-20 mb-24 rounded-[3rem] shadow-sm border">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 px-6">
            <CounterItem target={35} label="Countries" />
            <CounterItem target={56} label="Products" />
            <CounterItem target={89} label="Projects" />
            <CounterItem target={20} label="Years of Experience" />
          </div>
        </div>

        <section className="site-theme-panel py-24 px-6 rounded-[3rem]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-black tracking-tight text-slate-400 text-center mb-12">Office Pictures</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {OFFICE_IMAGES.map((src, index) => (
                <div key={index} className="overflow-hidden rounded-3xl shadow-2xl bg-slate-100 group">
                  <img
                    src={src}
                    alt={`Office picture ${index + 1}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    );
  };

  return (
    <div
      className="site-shell min-h-screen bg-[#0F172A] font-sans selection:bg-slate-200"
      style={{ backgroundColor: '#0F172A', backgroundImage: 'none' } as React.CSSProperties}
    >

      <ScrollManager />

      <nav ref={navRef} className={`fixed top-0 left-0 right-0 w-full z-50 block py-5 bg-[rgba(15,23,42,0.52)] border-b border-white/80 transition-all duration-500 ${navHidden ? '-translate-y-[110%] pointer-events-none' : 'translate-y-0'}`}>
        <div className="max-w-7xl mx-auto px-6 flex flex-nowrap justify-between items-center gap-6">
          <Link to="/" className="flex items-center gap-0 shrink-0">
            <img src={ISL_LOGO_NEW} alt="Integrity Scientific" className="h-16 md:h-20 transition-all shrink-0" />
            <div className="hidden xl:flex flex-col border-l border-white/10 pl-5 shrink-0">
              <span className="text-[13px] md:text-[15px] font-black uppercase tracking-[0.12em] text-slate-300 flex flex-col whitespace-nowrap">
                <span>Integrity Scientific</span>
                <span>Laboratory</span>
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-6 text-sm font-black uppercase tracking-[0.15em] text-white/60">
            <Link key="Home" to="/" className="flex h-full items-center whitespace-nowrap text-sm font-black uppercase tracking-[0.15em] leading-none text-white/70 hover:text-white transition-all">
              Home
            </Link>

            <div
              className="relative h-full flex items-center overflow-visible"
              onMouseEnter={() => {
                productMenuHoverRef.current = true;
                setDesktopProductsOpen(true);
              }}
              onMouseLeave={() => {
                productMenuHoverRef.current = false;
                setDesktopProductsOpen(false);
                setHoveredProduct(null);
              }}
            >
              <Link to="/products" onClick={() => setDesktopProductsOpen(false)} className="flex h-full items-center gap-1 text-sm font-black uppercase tracking-[0.15em] leading-none text-white/70 hover:text-white transition-all">
                Products
              </Link>

              <div className={`${desktopProductsOpen ? 'block' : 'hidden'} absolute right-0 top-full mt-0 pt-3 min-w-[260px] max-h-[calc(100vh-7rem)] overflow-y-auto rounded-3xl bg-slate-950/95 border border-slate-800 p-4 shadow-2xl`}>
                <div className="space-y-2">
                  {productMenu.map((item) => (
                    <div
                      key={item.label}
                      className="relative"
                      onMouseEnter={() => setHoveredProduct(item.label)}
                    >
                      <Link to={item.href} className="block rounded-2xl px-3 py-2 text-sm font-black text-white hover:bg-slate-900 hover:text-white transition-all">{item.label}</Link>
                      {hoveredProduct === item.label && (
                        <div className="absolute left-full top-0 ml-2 min-w-[200px] rounded-3xl bg-slate-950/95 border border-slate-800 p-3 shadow-2xl">
                          <div className="space-y-2">
                            {item.subcategories.map((sub) => (
                              <Link key={sub} to={`${item.href}#${slugify(sub)}`} className="block rounded-2xl px-3 py-2 text-[11px] text-slate-400 hover:bg-slate-900 hover:text-white transition-all">{sub}</Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {navItems.slice(1).map((item) => (
              item.href.startsWith('/') ? (
                <Link key={item.label} to={item.href} onClick={() => item.label === 'News' && setActiveProductTab('news')} className="flex h-full items-center whitespace-nowrap text-sm font-black uppercase tracking-[0.15em] leading-none text-white/70 hover:text-white transition-all">
                  {item.label}
                </Link>
              ) : (
                <Link key={item.label} to={item.href} onClick={() => item.label === 'News' && setActiveProductTab('news')} className="flex h-full items-center whitespace-nowrap text-sm font-black uppercase tracking-[0.15em] leading-none text-white/70 hover:text-white transition-all">
                  {item.label}
                </Link>
              )
            ))}
          </div>

          <button
            className="lg:hidden flex flex-col h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-slate-950/90 text-white/80 hover:text-white focus:outline-none gap-1.5"
            type="button"
            onClick={() => setMobileNavOpen((open) => !open)}
            aria-label="Toggle mobile menu"
          >
            {mobileNavOpen ? (
              <X size={24} />
            ) : (
              <>
                <span className="block h-0.5 w-6 bg-current transition-all"></span>
                <span className="block h-0.5 w-6 bg-current transition-all"></span>
                <span className="block h-0.5 w-6 bg-current transition-all"></span>
              </>
            )}
          </button>
        </div>

        <div className={`${mobileNavOpen ? 'block' : 'hidden'} lg:hidden border-t border-slate-800 bg-slate-950/70`}>
          <div className="px-6 py-5 space-y-4 text-[12px] font-black uppercase tracking-[0.2em] text-slate-200">
            <Link key="Home" to="/" onClick={() => setMobileNavOpen(false)} className="block text-white/80 hover:text-white transition-all">Home</Link>

            <div className="flex w-full items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/90 px-4 py-3 text-white/80">
              <Link to="/products" onClick={() => setMobileNavOpen(false)} className="flex-1 text-left hover:text-white transition-all">
                Products
              </Link>
              <button
                type="button"
                aria-label="Toggle product categories"
                onClick={() => setMobileProductsOpen((open) => !open)}
                className="px-2 text-sm hover:text-white transition-all"
              >
                {mobileProductsOpen ? '-' : '+'}
              </button>
            </div>

            {mobileProductsOpen && (
              <div className="space-y-3 rounded-3xl border border-slate-800 bg-slate-900/95 p-4">
                {productMenu.map((item) => (
                  <div key={item.label}>
                    <div className="flex w-full items-center justify-between text-left text-sm font-black text-white">
                      <Link to={item.href} onClick={() => setMobileNavOpen(false)} className="block hover:text-white transition-all">{item.label}</Link>
                      {item.subcategories.length > 0 && (
                        <button
                          type="button"
                          onClick={() => setMobileProductOpenId((current) => current === item.label ? null : item.label)}
                          className="text-xs font-black text-slate-400 hover:text-white transition-all"
                        >
                          {mobileProductOpenId === item.label ? '-' : '+'}
                        </button>
                      )}
                    </div>

                    {mobileProductOpenId === item.label && item.subcategories.length > 0 && (
                      <div className="mt-2 space-y-2 pl-4 text-[11px] text-slate-400">
                        {item.subcategories.map((sub) => (
                          <Link key={sub} to={`${item.href}#${slugify(sub)}`} onClick={() => setMobileNavOpen(false)} className="block hover:text-white">{sub}</Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {navItems.slice(1).map((item) => (
              item.href.startsWith('/') ? (
                <Link key={item.label} to={item.href} onClick={() => { setMobileNavOpen(false); if (item.label === 'News') setActiveProductTab('news'); }} className="block text-white/80 hover:text-white transition-all">{item.label}</Link>
              ) : (
                <a key={item.label} href={item.href} onClick={() => setMobileNavOpen(false)} className="block text-white/80 hover:text-white transition-all">{item.label}</a>
              )
            ))}
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<LandingPage activeProductTab={activeProductTab} setActiveProductTab={setActiveProductTab} />} />
        <Route path="/product/:productId" element={<React.Suspense fallback={<div className="min-h-screen pt-64 flex items-center justify-center text-white">Loading product...</div>}><ProductDetail /></React.Suspense>} />
        <Route path="/products" element={<React.Suspense fallback={<div className="min-h-screen pt-64 flex items-center justify-center text-white">Loading products...</div>}><ProductsPage /></React.Suspense>} />
        <Route path="/after-sale-services" element={<AfterSaleServicesPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/career" element={<CareerSection />} />
        <Route path="/contact" element={<ContactUsPage />} />
      </Routes>

      <footer className="bg-[rgba(15,23,42,0.78)] text-white pt-24 relative">
        <div className="max-w-4xl mx-auto px-8 pb-16 grid grid-cols-1 sm:grid-cols-2 gap-16 sm:gap-24">
          <div className="text-left">
            <h3 className="text-x3 font-black uppercase tracking-[0.15em] mb-10 text-slate-500">Sectors</h3>
            <div className="grid grid-cols-1 gap-5 text-sm font-black uppercase tracking-[0.15em] text-slate-400">
              {[
                'Oil & Gas',
                'Power Generation',
                'Petrochemicals',
                'Aviation',
                'Fabrication',
                'Research (R&D) and Educations',
                'Manufacturing',
                'Security',
                'Laboratory and environment'
              ].map(text => (
                <span key={text} className="hover:text-white transition-colors cursor-default">{text}</span>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start">
            <h3 className="text-x1 font-black uppercase tracking-[0.12em] mb-10 text-slate-500">Stay in touch</h3>
            <div className="space-y-4 w-full flex flex-col items-start">
              <a href="#" className="flex items-center gap-3 w-56 px-5 py-3 bg-[#0077B5] rounded-lg hover:brightness-110 transition-all">
                <Linkedin size={20} className="text-white" />
                <span className="text-sm font-black text-white">ISLTE</span>
              </a>
              <a href="mailto:info@islte.ae" className="flex items-center gap-3 w-56 px-5 py-3 bg-[#D93025] rounded-lg hover:brightness-110 transition-all">
                <Mail size={20} className="text-white" />
                <span className="text-sm font-black text-white">info@islte.ae</span>
              </a>
              <a href="tel:0097144323551" className="flex items-center gap-3 w-56 px-5 py-3 bg-[#00695C] rounded-lg hover:brightness-110 transition-all">
                <Phone size={20} className="text-white" />
                <span className="text-sm font-black text-white">+97144323551</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 py-10 text-center text-[9px] tracking-[0.5em] font-black text-slate-600 uppercase">
          2026 &copy; INTEGRITY SCIENTIFIC LABORATORY EQUIPMENT TRADING LLC
        </div>
      </footer>
    </div>
  );
}