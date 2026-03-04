import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Car as CarIcon, 
  Calendar, 
  MapPin, 
  Search, 
  Globe, 
  ChevronDown, 
  Users, 
  Settings, 
  Fuel,
  ArrowRight,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Star,
  ShieldCheck,
  Clock,
  CreditCard,
  MessageCircle
} from 'lucide-react';
import { Language } from './types';
import { translations } from './translations';
import { cars, reviews } from './data';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: '#f09433' }} />
        <stop offset="25%" style={{ stopColor: '#e6683c' }} />
        <stop offset="50%" style={{ stopColor: '#dc2743' }} />
        <stop offset="75%" style={{ stopColor: '#cc2366' }} />
        <stop offset="100%" style={{ stopColor: '#bc1888' }} />
      </linearGradient>
    </defs>
    <path fill="url(#ig-grad)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
    <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'ms', label: 'Bahasa Melayu' },
    { code: 'zh', label: '中文' },
  ];

  const handleWhatsApp = () => {
    const phoneNumber = '60123456789';
    const message = encodeURIComponent('Hello EZ Car Rental, I would like to inquire about renting a car.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleBookNow = (carName: string) => {
    const phoneNumber = '60123456789';
    const message = encodeURIComponent(`Hello EZ Car Rental, I would like to book the ${carName} for [Date]. Please let me know the availability.`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] font-sans text-[#1A1A1A]">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <CarIcon className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tight">EZ CAR RENTAL</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm font-medium hover:text-black/60 transition-colors uppercase tracking-wider">{t.nav.home}</a>
            <a href="#cars" className="text-sm font-medium hover:text-black/60 transition-colors uppercase tracking-wider">{t.nav.cars}</a>
            <a href="#reviews" className="text-sm font-medium hover:text-black/60 transition-colors uppercase tracking-wider">{t.nav.reviews}</a>
            <a href="#location" className="text-sm font-medium hover:text-black/60 transition-colors uppercase tracking-wider">{t.nav.location}</a>
            <a href="#contact" className="text-sm font-medium hover:text-black/60 transition-colors uppercase tracking-wider">{t.nav.contact}</a>
          </div>

          <div className="relative flex items-center gap-4">
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 hover:bg-black/5 transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-widest">
                {languages.find(l => l.code === lang)?.label}
              </span>
              <ChevronDown className={`w-3 h-3 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isLangOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 top-full mt-2 w-48 bg-white rounded-2xl shadow-xl border border-black/5 overflow-hidden"
                >
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code);
                        setIsLangOpen(false);
                      }}
                      className={`w-full text-left px-6 py-3 text-sm hover:bg-black/5 transition-colors ${
                        lang === l.code ? 'font-bold bg-black/5' : 'font-medium'
                      }`}
                    >
                      {l.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.pinimg.com/1200x/a3/1a/43/a31a4308b4bcff8e4cf09e8a94a5819d.jpg" 
            alt="EZ Car Rental" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white leading-[0.9] tracking-tighter mb-8">
              {t.hero.title}
            </h1>
            <p className="text-xl text-white/80 mb-10 leading-relaxed max-w-lg whitespace-pre-line">
              {t.hero.subtitle}
            </p>
            <button 
              onClick={handleWhatsApp}
              className="group flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-[#25D366] hover:text-white transition-all duration-300"
            >
              <WhatsAppIcon className="w-6 h-6" />
              {t.hero.cta}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Fleet Section */}
      <section id="cars" className="py-32 max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-16">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-black/40 mb-4 block">
              Reliable Selection
            </span>
            <h2 className="text-5xl font-bold tracking-tighter">
              {t.cars.title}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <motion.div 
              key={car.id}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-[2rem] overflow-hidden border border-black/5 hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={car.image} 
                  alt={car.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-sm">
                  <span className="text-sm font-bold">RM {car.price}</span>
                  <span className="text-[10px] text-black/40 uppercase ml-1">{t.cars.perDay}</span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold tracking-tight">{car.name}</h3>
                </div>

                <button 
                  onClick={() => handleBookNow(car.name)}
                  className="w-full py-4 rounded-2xl border border-black font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300"
                >
                  {t.cars.bookNow}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-5xl font-bold tracking-tighter">
              {t.reviews.title}
            </h2>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {reviews.map((review, index) => (
              <motion.div 
                key={review.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.2, zIndex: 50 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.05,
                  scale: { type: "spring", stiffness: 400, damping: 25 }
                }}
                className="break-inside-avoid p-8 rounded-3xl border border-white/20 bg-white/90 backdrop-blur-xl text-black transition-all duration-300 hover:shadow-2xl hover:shadow-white/30 hover:bg-white relative cursor-default"
              >
                <p className={`leading-relaxed ${
                  review.text.length > 150 ? 'text-lg font-medium' : 'text-base'
                }`}>
                  {review.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 italic">
              {t.nav.location}
            </h2>
            <p className="text-xl text-black/40 max-w-2xl leading-relaxed">
              Find us at our main office in Kuala Lumpur. We are conveniently located to serve you better.
            </p>
          </div>

          <div className="rounded-[2rem] overflow-hidden border border-black/5 shadow-2xl h-[500px] relative group">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127482.6559310217!2d101.616949!3d3.139003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc362abd08e7d3%3A0x232e1ff00b9d22bb!2sKuala%20Lumpur%2C%20Federal%20Territory%20of%20Kuala%20Lumpur!5e0!3m2!1sen!2smy!4v1709548000000!5m2!1sen!2smy" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-700"
            ></iframe>
            <div className="absolute bottom-8 left-8 right-8 md:right-auto md:w-80 p-8 bg-white/80 backdrop-blur-md rounded-3xl border border-white/20 shadow-xl">
              <h3 className="text-lg font-bold mb-2">Main Office</h3>
              <p className="text-sm text-black/60 leading-relaxed">
                Kuala Lumpur City Centre,<br />
                50088 Kuala Lumpur,<br />
                Malaysia
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="relative bg-black text-white pt-32 pb-24 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <CarIcon className="text-black w-6 h-6" />
                </div>
                <span className="text-xl font-bold tracking-tight">EZ CAR RENTAL</span>
              </div>
              <p className="text-white/40 max-w-sm mb-4 leading-relaxed">
                Reliable and affordable car rental service in Malaysia. 
                Excellent condition, transparent pricing, and friendly service.
              </p>
              <p className="text-[10px] uppercase tracking-widest font-bold text-white/20 mb-8">
                {t.footer.rights}
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all">
                  <InstagramIcon className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all">
                  <FacebookIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-8">Quick Links</h4>
              <ul className="space-y-4">
                <li>
                  <button 
                    onClick={() => setIsTermsOpen(true)}
                    className="text-white/40 hover:text-white transition-colors text-sm"
                  >
                    {t.nav.terms}
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setIsPrivacyOpen(true)}
                    className="text-white/40 hover:text-white transition-colors text-sm"
                  >
                    {t.footer.privacy}
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setIsServiceOpen(true)}
                    className="text-white/40 hover:text-white transition-colors text-sm"
                  >
                    {t.footer.service}
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-8">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-white/40 text-sm">
                  <Phone className="w-4 h-4" /> 0123456789
                </li>
                <li className="flex items-center gap-3 text-white/40 text-sm">
                  <Mail className="w-4 h-4" /> ezcarrental@gmail.com
                </li>
                <li className="flex items-center gap-3 text-white/40 text-sm">
                  <MapPin className="w-4 h-4" /> Malaysia
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Terms Modal */}
      <AnimatePresence>
        {isTermsOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsTermsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl max-h-[80vh] bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col"
            >
              <div className="p-8 md:p-12 border-b border-black/5 flex items-center justify-between bg-white sticky top-0 z-10">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-black/40 mb-2 block">
                    Legal
                  </span>
                  <h2 className="text-4xl font-bold tracking-tighter">
                    {t.terms.title}
                  </h2>
                </div>
                <button 
                  onClick={() => setIsTermsOpen(false)}
                  className="w-12 h-12 rounded-full bg-black/5 hover:bg-black hover:text-white transition-all flex items-center justify-center group"
                >
                  <ArrowRight className="w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-8 md:p-12 space-y-6">
                <p className="text-black/60 leading-relaxed mb-8">
                  Please read our rental terms and conditions carefully before booking. We prioritize transparency and safety for all our customers.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {t.terms.content.map((term, index) => (
                    <div key={index} className="flex gap-6 p-6 rounded-3xl bg-[#F9F9F9] border border-black/5 hover:border-black/20 transition-colors">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs">
                        {index + 1}
                      </div>
                      <p className="text-sm text-black/80 leading-relaxed pt-2">
                        {term}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 md:p-12 border-t border-black/5 bg-[#F9F9F9] flex justify-end">
                <button 
                  onClick={() => setIsTermsOpen(false)}
                  className="px-8 py-4 bg-black text-white rounded-full font-bold uppercase tracking-widest hover:bg-black/80 transition-all"
                >
                  I Understand
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Privacy Modal */}
      <AnimatePresence>
        {isPrivacyOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPrivacyOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl max-h-[80vh] bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col"
            >
              <div className="p-8 md:p-12 border-b border-black/5 flex items-center justify-between bg-white sticky top-0 z-10">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-black/40 mb-2 block">
                    Legal
                  </span>
                  <h2 className="text-4xl font-bold tracking-tighter">
                    {t.privacy.title}
                  </h2>
                </div>
                <button 
                  onClick={() => setIsPrivacyOpen(false)}
                  className="w-12 h-12 rounded-full bg-black/5 hover:bg-black hover:text-white transition-all flex items-center justify-center group"
                >
                  <ArrowRight className="w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-8 md:p-12 space-y-8">
                {t.privacy.content.map((paragraph, index) => (
                  <p key={index} className="text-black/70 leading-relaxed text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="p-8 md:p-12 border-t border-black/5 bg-[#F9F9F9] flex justify-end">
                <button 
                  onClick={() => setIsPrivacyOpen(false)}
                  className="px-8 py-4 bg-black text-white rounded-full font-bold uppercase tracking-widest hover:bg-black/80 transition-all"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Service Modal */}
      <AnimatePresence>
        {isServiceOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsServiceOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl max-h-[80vh] bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col"
            >
              <div className="p-8 md:p-12 border-b border-black/5 flex items-center justify-between bg-white sticky top-0 z-10">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-black/40 mb-2 block">
                    Legal
                  </span>
                  <h2 className="text-4xl font-bold tracking-tighter">
                    {t.service.title}
                  </h2>
                </div>
                <button 
                  onClick={() => setIsServiceOpen(false)}
                  className="w-12 h-12 rounded-full bg-black/5 hover:bg-black hover:text-white transition-all flex items-center justify-center group"
                >
                  <ArrowRight className="w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-8 md:p-12 space-y-8">
                {t.service.content.map((paragraph, index) => (
                  <p key={index} className="text-black/70 leading-relaxed text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="p-8 md:p-12 border-t border-black/5 bg-[#F9F9F9] flex justify-end">
                <button 
                  onClick={() => setIsServiceOpen(false)}
                  className="px-8 py-4 bg-black text-white rounded-full font-bold uppercase tracking-widest hover:bg-black/80 transition-all"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
