/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { translations, Language } from './translations';
import { 
  MapPin, 
  ChevronRight, 
  Wheat, 
  Sprout, 
  Truck, 
  ShieldCheck, 
  BarChart3, 
  Mail, 
  Phone, 
  Globe, 
  Menu, 
  X,
  ArrowRight
} from 'lucide-react';

// --- Components ---

const Navbar = ({ lang, setLang }: { lang: Language, setLang: (l: Language) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = translations[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.home, href: '#' },
    { name: t.about, href: '#about' },
    { name: t.farms, href: '#farms' },
    { name: t.products, href: '#products' },
    { name: t.services, href: '#services' },
    { name: t.contact, href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="h-10 w-10 sm:h-12 sm:w-12 overflow-hidden rounded-sm">
            <img 
              src="https://image2url.com/r2/default/images/1774091331633-f0f105cc-b8b8-4d0d-8a37-14697e9e78de.jpeg" 
              alt="Guten Logo" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col">
            <span className={`font-display font-bold text-base sm:text-lg leading-none ${isScrolled ? 'text-primary' : 'text-white'}`}>GUTEN</span>
            <span className={`font-display text-[8px] sm:text-[10px] tracking-[0.2em] ${isScrolled ? 'text-charcoal/60' : 'text-white/70'}`}>AGRI-TRADING</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`font-display text-sm font-medium tracking-wider hover:text-accent transition-colors ${isScrolled ? 'text-charcoal' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
          
          {/* Language Switcher */}
          <div className="flex items-center gap-2 ml-4">
            <button 
              onClick={() => setLang('en')}
              className={`text-xs font-display font-bold px-2 py-1 rounded-sm transition-colors ${lang === 'en' ? 'bg-accent text-primary' : (isScrolled ? 'text-charcoal hover:text-accent' : 'text-white hover:text-accent')}`}
            >
              EN
            </button>
            <button 
              onClick={() => setLang('am')}
              className={`text-xs font-display font-bold px-2 py-1 rounded-sm transition-colors ${lang === 'am' ? 'bg-accent text-primary' : (isScrolled ? 'text-charcoal hover:text-accent' : 'text-white hover:text-accent')}`}
            >
              አማ
            </button>
          </div>

          <a href="#contact" className="btn-primary text-xs py-3 px-6">{t.partner}</a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          <div className="flex items-center gap-1 sm:gap-2">
            <button 
              onClick={() => setLang('en')}
              className={`text-[10px] sm:text-xs font-display font-bold px-1.5 py-1 rounded-sm ${lang === 'en' ? 'bg-accent text-primary' : (isScrolled ? 'text-charcoal' : 'text-white')}`}
            >
              EN
            </button>
            <button 
              onClick={() => setLang('am')}
              className={`text-[10px] sm:text-xs font-display font-bold px-1.5 py-1 rounded-sm ${lang === 'am' ? 'bg-accent text-primary' : (isScrolled ? 'text-charcoal' : 'text-white')}`}
            >
              አማ
            </button>
          </div>
          <button 
            className="text-white p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className={isScrolled ? 'text-primary' : 'text-white'} /> : <Menu className={isScrolled ? 'text-primary' : 'text-white'} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-2xl lg:hidden border-t border-gray-100"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="font-display text-xl font-bold text-primary border-b border-gray-50 pb-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a href="#contact" className="btn-primary text-center py-5" onClick={() => setIsMobileMenuOpen(false)}>{t.contact}</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ lang }: { lang: Language }) => {
  const t = translations[lang].hero;
  return (
    <section className="relative min-h-[600px] h-screen w-full flex items-center overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop" 
          alt="Ethiopian wheat field" 
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="inline-block text-accent font-display font-semibold tracking-[0.3em] text-sm mb-4 uppercase">
            {t.subtitle}
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white font-display font-bold leading-[1.1] mb-8">
            {lang === 'en' ? (
              <>Modern Agriculture Rooted in <span className="text-accent italic font-light">{t.italicTitle}</span></>
            ) : (
              t.title
            )}
          </h1>
          <p className="text-base md:text-xl text-white/80 font-light leading-relaxed mb-10 max-w-2xl">
            {t.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#farms" className="btn-primary flex items-center justify-center gap-2 group">
              {t.explore} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="btn-outline flex items-center justify-center">
              {t.contact}
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-white/30 relative">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-accent"></div>
        </div>
      </motion.div>
    </section>
  );
};

const About = ({ lang }: { lang: Language }) => {
  const t = translations[lang].about;
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-accent font-display font-semibold tracking-widest text-sm uppercase mb-4 block">{t.subtitle}</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-8 leading-tight">
            {t.title}
          </h2>
          <div className="space-y-6 text-charcoal/80 leading-relaxed text-lg max-w-3xl mx-auto">
            <p>{t.p1}</p>
            <p>{t.p2}</p>
            <p>{t.p3}</p>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 border-t border-gray-100 pt-12">
            <div>
              <p className="font-display font-bold text-primary text-3xl mb-2">20+</p>
              <p className="text-xs font-display font-bold tracking-widest text-accent uppercase">{t.stats.experience}</p>
            </div>
            <div>
              <p className="font-display font-bold text-primary text-3xl mb-2">{t.stats.modern}</p>
              <p className="text-xs font-display font-bold tracking-widest text-accent uppercase">{t.stats.farming}</p>
            </div>
            <div>
              <p className="font-display font-bold text-primary text-3xl mb-2">{t.stats.global}</p>
              <p className="text-xs font-display font-bold tracking-widest text-accent uppercase">{t.stats.standards}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const FarmLocations = ({ lang }: { lang: Language }) => {
  const t = translations[lang].farms;
  const locations = [
    {
      name: t.locations[0].name,
      type: t.locations[0].type,
      image: "https://image2url.com/r2/default/images/1774091763864-4694ea4a-6753-46e5-8d8a-57626372d613.jpg",
      description: t.locations[0].description
    },
    {
      name: t.locations[1].name,
      type: t.locations[1].type,
      image: "https://image2url.com/r2/default/images/1774091612467-a79fe599-9566-4db9-b073-761874c64aa5.jpg",
      description: t.locations[1].description
    },
    {
      name: t.locations[2].name,
      type: t.locations[2].type,
      image: "https://image2url.com/r2/default/images/1774091691867-9ee0385a-abae-4012-9169-3c37768b0c51.jpg",
      description: t.locations[2].description
    }
  ];

  return (
    <section id="farms" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-accent font-display font-semibold tracking-widest text-sm uppercase mb-4 block">{t.subtitle}</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">{t.title}</h2>
          </div>
          <p className="text-charcoal/60 max-w-md">
            {t.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {locations.map((loc, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="premium-card group"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={loc.image} 
                  alt={loc.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 text-accent mb-3">
                  <MapPin className="w-4 h-4" />
                  <span className="text-xs font-display font-bold tracking-widest uppercase">{loc.type}</span>
                </div>
                <h3 className="text-2xl font-display font-bold text-primary mb-4">{loc.name}</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">{loc.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Products = ({ lang }: { lang: Language }) => {
  const t = translations[lang].products;
  return (
    <section id="products" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-accent font-display font-semibold tracking-widest text-sm uppercase mb-4 block">{t.subtitle}</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">{t.title}</h2>
          <p className="text-charcoal/60">
            {t.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row bg-gray-50 rounded-sm overflow-hidden border border-gray-100"
          >
            <div className="md:w-1/2 h-80 md:h-auto">
              <img 
                src="https://image2url.com/r2/default/images/1774092240442-a09ed89e-f0c2-4273-9434-f0058fa2637c.jpg" 
                alt="Wheat" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="md:w-1/2 p-10 flex flex-col justify-center">
              <Wheat className="w-10 h-10 text-accent mb-6" />
              <h3 className="text-3xl font-display font-bold text-primary mb-4">{t.wheat.title}</h3>
              <p className="text-charcoal/70 mb-8 leading-relaxed">
                {t.wheat.description}
              </p>
              <a href="https://wa.me/251911224995" target="_blank" rel="noopener noreferrer" className="text-primary font-display font-bold text-sm tracking-widest flex items-center gap-2 hover:text-accent transition-colors">
                {t.inquire} <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row bg-gray-50 rounded-sm overflow-hidden border border-gray-100"
          >
            <div className="md:w-1/2 h-80 md:h-auto">
              <img 
                src="https://image2url.com/r2/default/images/1774092185819-b870ea2c-0889-4985-844d-e0e155677bef.jpg" 
                alt="Corn" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="md:w-1/2 p-10 flex flex-col justify-center">
              <Sprout className="w-10 h-10 text-accent mb-6" />
              <h3 className="text-3xl font-display font-bold text-primary mb-4">{t.corn.title}</h3>
              <p className="text-charcoal/70 mb-8 leading-relaxed">
                {t.corn.description}
              </p>
              <a href="https://wa.me/251911224995" target="_blank" rel="noopener noreferrer" className="text-primary font-display font-bold text-sm tracking-widest flex items-center gap-2 hover:text-accent transition-colors">
                {t.inquire} <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Equipment = ({ lang }: { lang: Language }) => {
  const t = translations[lang].equipment;
  return (
    <section className="section-padding bg-primary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-accent font-display font-semibold tracking-widest text-sm uppercase mb-4 block">{t.subtitle}</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
            {t.title}
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-10">
            {t.description}
          </p>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/10 flex items-center justify-center rounded-sm shrink-0">
                <ShieldCheck className="text-accent" />
              </div>
              <div>
                <h4 className="font-display font-bold text-xl mb-1">{t.precision.title}</h4>
                <p className="text-white/60 text-sm">{t.precision.description}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/10 flex items-center justify-center rounded-sm shrink-0">
                <Truck className="text-accent" />
              </div>
              <div>
                <h4 className="font-display font-bold text-xl mb-1">{t.logistics.title}</h4>
                <p className="text-white/60 text-sm">{t.logistics.description}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4 pt-12">
              <img src="https://image2url.com/r2/default/images/1774092599144-5a69a64e-7813-47fd-9052-3ba22e8f9c3e.jpg" alt="Modern Tractor" className="rounded-sm w-full aspect-square object-cover" referrerPolicy="no-referrer" />
              <img src="https://image2url.com/r2/default/images/1774092637727-4a5a3f6e-f456-4b62-9369-74ae892790f1.jpg" alt="Agricultural Equipment" className="rounded-sm w-full aspect-[3/4] object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="space-y-4">
              <img src="https://image2url.com/r2/default/images/1774092675340-dbae1ad7-0ffb-400d-ae2e-723571be4014.jpg" alt="Harvesting Machinery" className="rounded-sm w-full aspect-[3/4] object-cover" referrerPolicy="no-referrer" />
              <img src="https://image2url.com/r2/default/images/1774093032970-c669600a-2bda-4841-93cb-c9af8fddb9d4.jpg" alt="Field Machinery" className="rounded-sm w-full aspect-square object-cover" referrerPolicy="no-referrer" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = ({ lang }: { lang: Language }) => {
  const t = translations[lang].services;
  const services = [
    {
      title: t.land.title,
      description: t.land.description,
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: t.tractors.title,
      description: t.tractors.description,
      icon: <Truck className="w-8 h-8" />
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-accent font-display font-semibold tracking-widest text-sm uppercase mb-4 block">{t.subtitle}</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">{t.title}</h2>
          </div>
          <p className="text-charcoal/60 max-w-md">
            {t.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-12 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-500 flex flex-col items-start"
            >
              <div className="text-accent mb-8">{service.icon}</div>
              <h3 className="text-3xl font-display font-bold text-primary mb-4">{service.title}</h3>
              <p className="text-charcoal/70 mb-8 leading-relaxed">
                {service.description}
              </p>
              <a href="https://wa.me/251911224995" target="_blank" rel="noopener noreferrer" className="btn-primary py-3 px-6 text-xs">{t.inquire}</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = ({ lang }: { lang: Language }) => {
  const t = translations[lang].why;
  const cards = [
    {
      title: t.items[0].title,
      description: t.items[0].description,
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: t.items[1].title,
      description: t.items[1].description,
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: t.items[2].title,
      description: t.items[2].description,
      icon: <Truck className="w-6 h-6" />
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-accent font-display font-semibold tracking-widest text-sm uppercase mb-4 block">{t.subtitle}</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">{t.title}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-xl transition-all duration-500 rounded-sm"
            >
              <div className="w-12 h-12 bg-primary text-accent flex items-center justify-center rounded-sm mb-8">
                {card.icon}
              </div>
              <h4 className="text-2xl font-display font-bold text-primary mb-4">{card.title}</h4>
              <p className="text-charcoal/70 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Vision = ({ lang }: { lang: Language }) => {
  const t = translations[lang].vision;
  return (
    <section className="py-32 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop" alt="Background" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
      </div>
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <span className="text-accent font-display font-semibold tracking-[0.4em] text-xs uppercase mb-8 block">{t.subtitle}</span>
        <h2 className="text-2xl md:text-5xl lg:text-6xl text-white font-display font-light leading-tight italic">
          {lang === 'en' ? (
            <>"{t.text.replace('modern farming', '')}<span className="text-accent font-bold not-italic">{t.modern}</span>{t.text.split('modern farming')[1]}"</>
          ) : (
            t.text
          )}
        </h2>
      </div>
    </section>
  );
};

const Gallery = ({ lang }: { lang: Language }) => {
  const t = translations[lang].gallery;
  const images = [
    "https://image2url.com/r2/default/images/1774093825562-ede75d93-983a-43c9-a3da-e49b06475ac7.jpg",
    "https://image2url.com/r2/default/images/1774093849527-ed62e895-25bd-4a0d-be2a-3e0a81bc5103.jpg",
    "https://image2url.com/r2/default/images/1774093885554-5fd72f2c-dbf6-49d4-9e4d-020ba1fbafd3.jpg",
    "https://image2url.com/r2/default/images/1774093911466-5467f969-9ff5-4fb1-a2a1-e73ea0e85361.jpg",
    "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/017cd9ad-23ef-46c9-a203-7b5c088d4ee5.jpg",
    "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/4e120382-4c1a-4ed5-973b-1f86cfc0c6bb.jpg"
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent font-display font-semibold tracking-widest text-sm uppercase mb-4 block">{t.subtitle}</span>
          <h2 className="text-4xl font-display font-bold text-primary">{t.title}</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 0.98 }}
              className="aspect-square overflow-hidden rounded-sm bg-gray-100"
            >
              <img 
                src={img} 
                alt={`Gallery ${idx}`} 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = ({ lang }: { lang: Language }) => {
  const t = translations[lang].contact;
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const email = formData.get('email');
    const message = formData.get('message');

    const text = encodeURIComponent(
      `Business Inquiry from ${name}\n\n` +
      `Phone: ${phone}\n` +
      `Email: ${email}\n\n` +
      `Message:\n${message}`
    );

    window.open(`https://wa.me/251911224995?text=${text}`, '_blank');
    
    // Reset the form after triggering the email client
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <span className="text-accent font-display font-semibold tracking-widest text-sm uppercase mb-4 block">{t.subtitle}</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-8">{t.title}</h2>
            <p className="text-charcoal/70 text-lg leading-relaxed mb-12">
              {t.description}
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-primary text-accent flex items-center justify-center rounded-sm shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-display font-bold tracking-widest text-charcoal/40 uppercase mb-1">{t.email}</p>
                  <p className="text-lg font-display font-bold text-primary">gutneresha@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-primary text-accent flex items-center justify-center rounded-sm shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-display font-bold tracking-widest text-charcoal/40 uppercase mb-1">{t.call}</p>
                  <p className="text-lg font-display font-bold text-primary">+251 911224995</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-primary text-accent flex items-center justify-center rounded-sm shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-display font-bold tracking-widest text-charcoal/40 uppercase mb-1">{t.office}</p>
                  <p className="text-lg font-display font-bold text-primary">Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-10 md:p-12 shadow-2xl rounded-sm border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-display font-bold tracking-widest text-charcoal/60 uppercase">{t.form.name}</label>
                  <input name="name" required type="text" className="w-full bg-gray-50 border border-gray-200 px-4 py-3 focus:outline-none focus:border-accent transition-colors" placeholder={t.form.placeholderName} />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-display font-bold tracking-widest text-charcoal/60 uppercase">{t.form.phone}</label>
                  <input name="phone" type="tel" className="w-full bg-gray-50 border border-gray-200 px-4 py-3 focus:outline-none focus:border-accent transition-colors" placeholder={t.form.placeholderPhone} />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-display font-bold tracking-widest text-charcoal/60 uppercase">{t.form.email}</label>
                <input name="email" required type="email" className="w-full bg-gray-50 border border-gray-200 px-4 py-3 focus:outline-none focus:border-accent transition-colors" placeholder={t.form.placeholderEmail} />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-display font-bold tracking-widest text-charcoal/60 uppercase">{t.form.message}</label>
                <textarea name="message" required rows={5} className="w-full bg-gray-50 border border-gray-200 px-4 py-3 focus:outline-none focus:border-accent transition-colors" placeholder={t.form.placeholderMessage}></textarea>
              </div>
              <button 
                type="submit" 
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                {t.form.send}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ lang }: { lang: Language }) => {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const t = translations[lang].footer;

  const Modal = ({ isOpen, onClose, title, children }: { isOpen: boolean, onClose: () => void, title: string, children: React.ReactNode }) => {
    if (!isOpen) return null;
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-sm p-8 md:p-12 relative"
        >
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-charcoal/40 hover:text-charcoal transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <h3 className="text-2xl font-display font-bold text-primary mb-6 uppercase tracking-widest">{title}</h3>
          <div className="prose prose-sm max-w-none text-charcoal/70 leading-relaxed space-y-4">
            {children}
          </div>
          <button 
            onClick={onClose}
            className="btn-primary mt-8 w-full"
          >
            {t.close}
          </button>
        </motion.div>
      </div>
    );
  };

  return (
    <footer className="bg-charcoal text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-14 w-14 overflow-hidden rounded-sm">
                <img 
                  src="https://image2url.com/r2/default/images/1774091331633-f0f105cc-b8b8-4d0d-8a37-14697e9e78de.jpeg" 
                  alt="Guten Logo" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg leading-none text-white">GUTEN</span>
                <span className="font-display text-[10px] tracking-[0.2em] text-white/70 uppercase">AGRI-TRADING</span>
              </div>
            </div>
            <p className="text-white/50 max-w-sm leading-relaxed mb-8">
              {t.description}
            </p>
          </div>
          
          <div>
            <h5 className="font-display font-bold text-sm tracking-widest uppercase mb-8 text-accent">{t.quickLinks}</h5>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">{translations[lang].nav.home}</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">{translations[lang].nav.about}</a></li>
              <li><a href="#farms" className="hover:text-white transition-colors">{translations[lang].nav.farms}</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">{translations[lang].nav.products}</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">{translations[lang].nav.services}</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-display font-bold text-sm tracking-widest uppercase mb-8 text-accent">{t.contact}</h5>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent shrink-0" />
                <span>Addis Ababa, Ethiopia</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <span>gutneresha@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <span>+251 911224995</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-white/40 tracking-widest uppercase">
            © {new Date().getFullYear()} Guten Agricultural Farm and Trading. {t.rights}
          </p>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            <button 
              onClick={() => setShowPrivacy(true)}
              className="text-xs text-white/40 hover:text-white transition-colors uppercase tracking-widest"
            >
              {t.privacy}
            </button>
            <button 
              onClick={() => setShowTerms(true)}
              className="text-xs text-white/40 hover:text-white transition-colors uppercase tracking-widest"
            >
              {t.terms}
            </button>
          </div>
        </div>
      </div>

      <Modal 
        isOpen={showPrivacy} 
        onClose={() => setShowPrivacy(false)} 
        title={t.privacyContent.title}
      >
        {t.privacyContent.sections.map((section, idx) => (
          <div key={idx}>
            <h4 className="font-bold text-primary mt-4">{section.title}</h4>
            <p>{section.content}</p>
          </div>
        ))}
      </Modal>

      <Modal 
        isOpen={showTerms} 
        onClose={() => setShowTerms(false)} 
        title={t.termsContent.title}
      >
        {t.termsContent.sections.map((section, idx) => (
          <div key={idx}>
            <h4 className="font-bold text-primary mt-4">{section.title}</h4>
            <p>{section.content}</p>
          </div>
        ))}
      </Modal>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const [lang, setLang] = useState<Language>('en');

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <About lang={lang} />
      <FarmLocations lang={lang} />
      <Products lang={lang} />
      <Equipment lang={lang} />
      <Services lang={lang} />
      <WhyChooseUs lang={lang} />
      <Vision lang={lang} />
      <Gallery lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}
