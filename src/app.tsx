import React, { useState, useEffect, useLayoutEffect } from 'react';
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation
} from 'react-router-dom';

import {
  X, Linkedin, Mail, Phone, ChevronRight
} from 'lucide-react';

import ProductDetail from './ProductDetail';
import ProductsPage from './ProductsPage';
import { partnerLogos } from './data/productLogos';
import { useNavigationType } from 'react-router-dom';


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
  { id: 'fuji', label: 'FujiFilm', href: '/product/fuji', subcategories: ['Flaw Detectors', 'Portable Hardness Tester'] },
  { id: 'jireh', label: 'JIREH', href: '/product/jireh', subcategories: ['Manual Weld & Corrosion Scanning', 'Automated Crawlers'] },
  { id: '3e-ndt', label: '3E NDT', href: '/product/3e-ndt', subcategories: [] },
  { id: 'durr-ndt', label: 'DURR NDT', href: '/product/durr-ndt', subcategories: ['Computed Radiography', 'Direct Digital Radiography', 'NDT Software', 'Conventional Radiography'] },
  { id: 'vallen-systeme', label: 'VALLEN SYSTEME', href: '/product/vallen-systeme', subcategories: [] },
  { id: 'rohmann', label: 'ROHMANN', href: '/product/rohmann', subcategories: ['Inspection Systems', 'Accessories'] },
  { id: 'mitcorp', label: 'MITCORP', href: '/product/mitcorp', subcategories: ['X-SERIES INDUSTRIAL VIDEOSCOPES', 'PR-SERIES PIPE INSPECTION VIDEOSCOPES'] },
  { id: 'gb-inspection', label: 'GB INSPECTION', href: '/product/gb-inspection', subcategories: [] },
  { id: 'wohler', label: 'WOHLER', href: '/product/wohler', subcategories: ['Measuring Instruments', 'Inspection Systems', 'Cleaning Tools'] },
  { id: 'johnson-allen', label: 'JOHNSON & ALLEN', href: '/product/johnson-allen', subcategories: [] },
  { id: 'echo', label: 'ECHO Ultrasonics', href: '/product/echo', subcategories: ['High Temperature', 'Intermediate & Low Temp', 'Specialty Application'] },
  { id: 'danatronics', label: 'DANATRONICS', href: '/product/danatronics', subcategories: ['Flaw Detectors', 'Corrosion Thickness Gage', 'Precision Thickness Gage', 'Hall Effect Gage', 'Transducers'] },
  { id: 'dolphitech', label: 'Dolphitech', href: '/product/dolphitech', subcategories: ['MAUT Core Units', 'MAUT Transducers (TRMs)', 'Accessories', 'Scanning Tools'] },
  { id: 'Ekoscan', label: 'Ekoscan', href: '/product/ekoscan', subcategories: [] },
  { id: 'balteau', label: 'BALTEAU NDT', href: '/product/balteau', subcategories: ['BALTOSPOT', 'BALTOGRAPH', 'BALTOMATIC', 'BALTOSCOPE', 'ACCESSORIES'] },
  { id: 'proceq', label: 'proceq', href: '/product/proceq', subcategories: ['Flaw Detectors', 'Portable Hardness Tester'] }


];

const offices = [
  { name: 'Main office (Dubai)', company: 'Integrity Scientific Laboratory Equipment LLC', address: 'Offices 12 & 13 Al Jaber Building, Nad Al Hamar, Dubai, UAE', extra: 'P.O.Box : 392998', phoneLabel: 'Phone', phone: '+971 4 4323551', mapQuery: 'Integrity Scientific Laboratory Equipment LLC, Al Jaber Building, Nad Al Hamar, Dubai, UAE' },
  { name: 'Abu Dhabi Office', company: 'Integrity Scientific Laboratory Equipment LLC', address: 'Muziad Mall, Abu Dhabi, UAE', phoneLabel: 'Phone', phone: '+971 2 6273561', mapQuery: 'Muziad Mall, Abu Dhabi, UAE' },
  { name: 'Oman Office', company: 'Integrity Scientific & Laboratory Equipment LLC', address: 'Office No: 14, DRC Building, Ruwi, Muscat, Oman', phoneLabel: 'Mob', phone: '+968 93500515', mapQuery: 'DRC Building, Ruwi, Muscat, Oman', mapLink: 'https://maps.app.goo.gl/QEYs1DWv7aQ9qos18' },
  { name: 'Saudi Arabia Office', company: 'Integrity Scientific & Laboratory Equipment LLC', address: '15th street, building 3149, Office 310, Dammam Saihat', extra: 'Short address: EMJC3149', phoneLabel: 'Tel', phone: '0138303573', mapQuery: '15th street, building 3149, Office 310, Dammam Saihat, Saudi Arabia', mapLink: 'https://maps.app.goo.gl/GAkHJea6dc9Eba7s7' },
];

const slugify = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

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
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const navigate = useNavigate();

  // --- BRAND COLORS ---
  const ISL_GRAY = '#A3A3A3';
  const NAV_DARK = '#0F172A';
  const TEXT_PRIMARY = '#1E293B';
  const TEXT_MUTED = '#64748B';

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

  useEffect(() => {
    // ??? ?????? "??????" ???? ?????? ??????? ??? ??? ?????? ???
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const nav = navRef.current;
      if (nav) {
        const pageIsScrolled = currentScrollY > 20;
        setNavHidden(pageIsScrolled);
        nav.classList.toggle('py-4', currentScrollY > 20);
        nav.classList.toggle('py-8', currentScrollY <= 20);
        nav.classList.toggle('shadow-2xl', pageIsScrolled);
        nav.classList.toggle('bg-slate-900/98', pageIsScrolled);
        nav.classList.toggle('bg-[#0F172A]', currentScrollY <= 20);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const backgroundTimer = window.setInterval(() => {
      setBackgroundIndex((currentIndex) => (currentIndex + 1) % BACKGROUND_IMAGES.length);
    }, 20000);

    return () => window.clearInterval(backgroundTimer);
  }, []);

  const LandingPage = () => {
    // ????? ???? ?????? (???? ?? ???? ?????? ?? ???? public)
    const currentBackground = BACKGROUND_IMAGES[backgroundIndex];

    return (
      <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">

        {/* ????? ?????? ???????? ??????? ??????? */}
        <header

          id="home"
          className="relative pt-64 pb-32 px-6 overflow-hidden flex items-center justify-center min-h-[80vh]"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.92), rgba(15, 23, 42, 0.86)), url(${currentBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed' // ???? ????? Parallax ???????
          }}
        >
          {/* ???? ?????? ????? ??????? */}
          <div className="absolute inset-0 bg-slate-900/10 backdrop-blur-[1px]"></div>

          <div className="max-w-6xl mx-auto text-center relative z-10">
            {/* ?? ????? ??????? ??? ??? ?????? (text-white) ?????? ??????? ??????? */}
            <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-8 leading-[1.1] text-white">
              Welcome To <span className="text-sky-400">Integrity Scientific</span> Laboratory
            </h1>
            <p className="text-xl text-slate-200 font-medium max-w-2xl mx-auto uppercase tracking-widest">
              Precision & Quality in Every Measurement
            </p>
          </div>
        </header>

        <section id="news" className="py-24 px-6 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center mb-16">
              <div className="inline-flex p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
                {['news', 'products'].map((tab) => (
                  tab === 'news' ? (
                    <button
                      key={tab}
                      onClick={() => setActiveProductTab('news')}
                      className={`px-10 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${activeProductTab === tab ? 'bg-white shadow-md' : 'text-slate-400 hover:text-slate-600'}`}
                      style={activeProductTab === tab ? { color: TEXT_PRIMARY } : {}}
                    >
                      {tab}
                    </button>
                  ) : (
                    <Link
                      key={tab}
                      to="/products"
                      onClick={() => setActiveProductTab('products')}
                      className={`px-10 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${activeProductTab === tab ? 'bg-white shadow-md' : 'text-slate-400 hover:text-slate-600'}`}
                      style={activeProductTab === tab ? { color: TEXT_PRIMARY } : {}}
                    >
                      {tab}
                    </Link>
                  )
                ))}
              </div>
            </div>

            {activeProductTab === 'products' ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
                {partnerLogos.map((logo) => (
                  <Link to={`/product/${logo.id}`} key={logo.id} className="group relative bg-[#0F172A] border border-[#0F172A] rounded-3xl overflow-hidden hover:shadow-2xl hover:border-sky-700 transition-all flex flex-col items-center text-center">
                    <div className="aspect-square w-full flex items-center justify-center bg-slate-50 px-4 py-4">
                      <img src={logo.url} alt={logo.name} className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="px-4 py-4 w-full">
                      <div className="text-sm font-black uppercase tracking-[0.18em] text-white">{logo.name || ''}</div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="py-20 text-slate-300 font-black uppercase tracking-[0.5em] text-sm italic">Updates Coming Soon</div>
            )}
          </div>
        </section>
      </div>
    );
  };

  const AfterSaleServicesPage = () => (
    <section className="min-h-screen pt-64 pb-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-10 text-center mb-24 mt-16">
          <img src={TECHCAL_LOGO} alt="Technical Logo" className="h-32 md:h-40 object-contain" />
        </div>

        <div className="bg-slate-50 rounded-3xl border border-slate-200 p-10 shadow-sm">
          <p className="text-base md:text-lg leading-relaxed text-slate-700">
            Our service team is committed to deliver the premium quality of calibration, repair and certification services through the accredited with Emirates International Accreditation Center (EIAC, formerly DAC) to meet ISO/IEC/17025 in order to ensure a high level of calibration and quality standards. Calibration is traceable through NPL, NIST, PTB, EMI or other international/ national standards institutes to the International Systems of Units (SI) or to accepted intrinsic standards of measurement.
          </p>
        </div>
      </div>
    </section>
  );
  const CareerSection = React.useMemo(() => () => {
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
            {/* ??????? ?????? ????? ??????? */}
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
    const [selectedOffice, setSelectedOffice] = useState(() => {
      const savedOfficeName = sessionStorage.getItem('selectedOfficeName');
      return offices.find((office) => office.name === savedOfficeName) ?? offices[0];
    });
    const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(selectedOffice.mapQuery)}&output=embed`;
    const directionsUrl = selectedOffice.mapLink ?? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedOffice.mapQuery)}`;

    useEffect(() => {
      sessionStorage.setItem('selectedOfficeName', selectedOffice.name);
    }, [selectedOffice.name]);

    return (
      <section className="min-h-screen pt-64 pb-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">

          <p className="text-xl text-slate-500 font-bold uppercase tracking-widest">
            Send us a message
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">

          {/* ????? ???????? */}
          <div className="bg-white rounded-[2.5rem] p-10 shadow-2xl border border-slate-100">
            <form action="https://formsubmit.co/info@islte.ae" method="POST" className="space-y-6">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={window.location.href} />

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[11px] font-black uppercase tracking-wider text-slate-400 ml-2">Your Name</label>
                  <input type="text" name="name" placeholder="Name" required className="w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-sky-500 transition-all outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-black uppercase tracking-wider text-slate-400 ml-2">Your Email</label>
                  <input type="email" name="email" placeholder="Email" required className="w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-sky-500 transition-all outline-none" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-black uppercase tracking-wider text-slate-400 ml-2">Subject</label>
                <input type="text" name="_subject" placeholder="Subject" required className="w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-sky-500 transition-all outline-none" />
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-black uppercase tracking-wider text-slate-400 ml-2">Your Message</label>
                <textarea name="message" rows={6} placeholder="How can we help you?" required className="w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-sky-500 transition-all resize-none outline-none"></textarea>
              </div>

              <button type="submit" className="w-full bg-sky-700 hover:bg-sky-600 text-white font-black uppercase tracking-[0.2em] py-5 rounded-2xl shadow-lg transition-all transform hover:-translate-y-1">
                Send a Message
              </button>
            </form>
          </div>

          {/* ??????? ??????? */}
          <div className="grid gap-8">
            {/* //////////////////////////DUBAI */}
            <div onClick={() => setSelectedOffice(offices[0])} role="button" tabIndex={0} className={`cursor-pointer bg-white p-8 rounded-[2rem] border-l-8 shadow-sm transition-all ${selectedOffice.name === offices[0].name ? 'border-sky-700 ring-2 ring-sky-100' : 'border-slate-300 hover:border-sky-400'}`}>
              <h3 className="text-xl font-black text-sky-700 mb-4 uppercase tracking-tighter">Main office (Dubai)</h3>
              <div className="text-slate-600 space-y-1 font-medium text-sm">
                <p className="font-bold text-slate-900">Integrity Scientific Laboratory Equipment LLC</p>
                <p>Offices 12 & 13 Al Jaber Building, Nad Al Hamar, Dubai, UAE</p>
                <p>P.O.Box : 392998</p>
                <p className="pt-2"><span className="font-bold text-sky-700">Phone:</span> +971 4 4323551</p>
                <p><span className="font-bold text-sky-700">Email:</span> info@islte.ae</p>
              </div>
            </div>

            {/* ////////////////////////////////////////////ABU DHABI */}
            <div onClick={() => setSelectedOffice(offices[1])} role="button" tabIndex={0} className={`cursor-pointer bg-white p-8 rounded-[2rem] border-l-8 shadow-sm transition-all ${selectedOffice.name === offices[1].name ? 'border-sky-700 ring-2 ring-sky-100' : 'border-slate-300 hover:border-sky-400'}`}>
              <h3 className="text-xl font-black text-slate-800 mb-4 uppercase tracking-tighter">Abu Dhabi Office</h3>
              <div className="text-slate-600 space-y-1 font-medium text-sm">
                <p className="font-bold text-slate-900">Integrity Scientific Laboratory Equipment LLC</p>
                <p>Office number 8, floor 9, tower 3, Mazyad mall, zone 1, Mohammed Bin Zayed city, Abu Dhabi, UAE</p>
                <p className="pt-2"><span className="font-bold text-slate-800">Phone:</span> +971 2 6273561</p>
                <p><span className="font-bold text-slate-800">Email:</span> info@islte.ae</p>
              </div>
            </div>

            {/* ///////////////////////////oman office */}
            <div onClick={() => setSelectedOffice(offices[2])} role="button" tabIndex={0} className={`cursor-pointer bg-white p-8 rounded-[2rem] border-l-8 shadow-sm transition-all ${selectedOffice.name === offices[2].name ? 'border-sky-700 ring-2 ring-sky-100' : 'border-slate-300 hover:border-sky-400'}`}>
              <h3 className="text-xl font-black text-slate-800 mb-4 uppercase tracking-tighter">Oman Office</h3>
              <div className="text-slate-600 space-y-1 font-medium text-sm">
                <p className="font-bold text-slate-900">Integrity Scientific & Laboratory Equipment LLC</p>
                <p>Office No: 14, DRC Building, Ruwi, Muscat, Oman</p>
                <p className="pt-2"><span className="font-bold text-slate-800">Mob:</span> +968 93500515</p>
                <p><span className="font-bold text-slate-800">Email:</span> info@islte.ae</p>
              </div>
            </div>
            {/* /////////////////////////////KSA */}
            <div onClick={() => setSelectedOffice(offices[3])} role="button" tabIndex={0} className={`cursor-pointer bg-white p-8 rounded-[2rem] border-l-8 shadow-sm transition-all ${selectedOffice.name === offices[3].name ? 'border-sky-700 ring-2 ring-sky-100' : 'border-slate-300 hover:border-sky-400'}`}>
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
        </div>

        {/* ??? ??????? ?????? ???????? ?????????? ??????? ????? ?????? */}
        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white h-[600px] w-full">
          <iframe
            src={mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* ????? ????????? ??????? */}
          <div className="absolute top-10 left-10 z-10 bg-white/95 backdrop-blur-md p-8 rounded-[2.5rem] shadow-2xl max-w-sm border border-white/20 hidden md:block">
            <div className="flex items-start gap-4">
              <div className="bg-sky-700 p-3 rounded-2xl shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-black text-slate-900 leading-none mb-2">Our Location</h4>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  {selectedOffice.address}
                </p>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-4 text-sky-700 font-bold text-xs uppercase tracking-widest hover:text-sky-800 transition-colors"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section >
    );
  }, []);
  const CounterItem = ({ target, label }: { target: number; label: string }) => {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
      let start = 0;
      const duration = 2000; // ??? ???????? ?????? ?????
      const increment = target / (duration / 16); // ????? ????? ??? 60 ???? ?? ???????

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
        <div className="text-6xl md:text-7xl font-black text-blue-600 mb-2">
          {count}
        </div>
        <div className="text-slate-500 font-bold uppercase tracking-[0.2em] text-sm text-center">
          {label}
        </div>
        <div className="h-1 w-12 bg-slate-200 mt-4 rounded-full"></div>
      </div>
    );
  };

  const AboutUsPage = () => (
    <section className="min-h-screen pt-64 pb-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-[1.05fr_0.95fr] items-center mb-24">
        <div className="overflow-hidden rounded-[2rem] shadow-2xl bg-white">
          <img src={ABOUT_IMAGE} alt="Integrity Scientific Office" className="w-full h-full object-cover" />
        </div>

        <div className="space-y-6">
          <div className="text-left">
            <h2 className="text-4xl font-black tracking-tight text-slate-400">Who we are</h2>
            <p className="mt-4 text-base md:text-lg leading-8 text-slate-500">
              Integrity Scientific & Laboratory Equipment Trading LLC. was established in 2014 to support the increasing needs and demands of Quality Control in the fields of Oil & Gas, Energy, Aviation and Laboratories industries. Integrity Scientific & Laboratory relies on the extensive 20 Years experience of its team. It has enabled us to better understand the needs of our clients for high quality Products and constant customer support.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
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
        </div>
      </div>


      {/* ??? ??????? ??????????? ?????? */}
      <div className="max-w-7xl mx-auto py-20 mb-24 bg-white rounded-[3rem] shadow-sm border border-slate-100">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 px-6">
          <CounterItem target={35} label="Countries" />
          <CounterItem target={56} label="Products" />
          <CounterItem target={89} label="Projects" />
          <CounterItem target={20} label="Years of Experience" />
        </div>
      </div>

      <section className="py-24 px-6 bg-white rounded-[3rem]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black tracking-tight text-slate-400 text-center mb-12">Office Pictures</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {OFFICE_IMAGES.map((src, index) => (
              <div key={index} className="overflow-hidden rounded-3xl shadow-2xl bg-slate-100 group">
                <img
                  src={src}
                  alt={`Office picture ${index + 1}`}
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );

  return (
    <div
      className="site-shell min-h-screen bg-white font-sans selection:bg-slate-200"
      style={{ '--site-background-image': `linear-gradient(rgba(15, 23, 42, 0.84), rgba(15, 23, 42, 0.84)), url(${BACKGROUND_IMAGES[backgroundIndex]})` } as React.CSSProperties}
    >

      <ScrollManager />

      <nav ref={navRef} className={`fixed top-0 left-0 right-0 w-full z-50 block py-8 bg-[#0F172A] transition-all duration-500 ${navHidden ? '-translate-y-[110%] pointer-events-none' : 'translate-y-0'}`}>
        <div className="max-w-7xl mx-auto px-0 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-0 -translate-x-20 md:-translate-x-8">
            <img src={ISL_LOGO_NEW} alt="Integrity Scientific" className="h-28 md:h-40 transition-all" />
            <div className="flex flex-col border-l border-white/10 pl-5">
              <span className="text-[13px] md:text-[15px] font-black uppercase tracking-[0.12em] text-slate-300 flex flex-col">
                <span>Integrity Scientific</span>
                <span>Laboratory</span>
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-white/60">
            <Link key="Home" to="/" className="flex h-full items-center whitespace-nowrap text-[11px] font-black uppercase tracking-[0.2em] leading-none text-white/70 hover:text-white transition-all">
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
              <Link to="/products" onClick={() => setDesktopProductsOpen(false)} className="flex h-full items-center gap-1 text-[11px] font-black uppercase tracking-[0.2em] leading-none text-white/70 hover:text-white transition-all">
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
                <Link key={item.label} to={item.href} onClick={() => item.label === 'News' && setActiveProductTab('news')} className="flex h-full items-center whitespace-nowrap text-[11px] font-black uppercase tracking-[0.2em] leading-none text-white/70 hover:text-white transition-all">
                  {item.label}
                </Link>
              ) : (
                <Link key={item.label} to={item.href} onClick={() => item.label === 'News' && setActiveProductTab('news')} className="flex h-full items-center whitespace-nowrap text-[11px] font-black uppercase tracking-[0.2em] leading-none text-white/70 hover:text-white transition-all">
                  {item.label}
                </Link>
              )
            ))}
          </div>

          <button
            className="lg:hidden flex flex-col h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-slate-950/90 text-white/80 hover:text-white focus:outline-none gap-1.5"
            type="button"
            onClick={() => setMobileNavOpen((open) => !open)}
            aria-label="Toggle mobile menu"
          >
            {/* ??? ???? ??????? ?????? ???? ????? X? ???? ???? ????? ???? ??? 3 ???? */}
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

        <div className={`${mobileNavOpen ? 'block' : 'hidden'} lg:hidden border-t border-slate-800 bg-slate-950/98`}>
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
        <Route path="/" element={<LandingPage />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/after-sale-services" element={<AfterSaleServicesPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/career" element={<CareerSection />} />
        <Route path="/contact" element={<ContactUsPage />} />
      </Routes>

      <footer className="bg-[#0F172A] text-white pt-24 relative">
        <div className="max-w-7xl mx-auto px-8 pb-16 grid grid-cols-1 md:grid-cols-3 gap-20">
          {/* RESTORED: What We Do Section */}
          <div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] mb-10 text-slate-500">What we do</h3>
            <ul className="space-y-5 text-[13px] font-bold text-slate-400">
              {[
                'Understand our customer needs',
                'Discuss challenges and limitations',
                'Suggest best available technology and solutions',
                'Supply state-of-the-art equipment',
                'Educate and train customer manpower',
                'Provide after- sales Support'
              ].map(text => (
                <li key={text} className="flex items-start gap-4 group cursor-default">
                  <ChevronRight size={16} className="mt-0.5 text-slate-700 group-hover:text-white transition-colors" />
                  <span className="group-hover:text-white transition-colors">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* RESTORED: Sectors Section */}
          <div className="border-x border-white/5 px-10 text-left">
            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] mb-10 text-slate-500">Sectors</h3>
            <div className="grid grid-cols-1 gap-5 text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">
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
            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] mb-10 text-slate-500">Stay in touch</h3>
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
          2026 � INTEGRITY SCIENTIFIC LABORATORY EQUIPMENT TRADING LLC
        </div>
      </footer>
    </div>
  );
}


