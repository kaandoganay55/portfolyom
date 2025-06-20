'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ShinyText from '@/components/ShinyText';
import PixelCard from '@/components/PixelCard';
import AnimatedSection from '@/components/AnimatedSection';
import HoverCard from '@/components/HoverCard';

import ModernParticles from '@/components/ModernParticles';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setMobileMenuOpen(false);
  };

  // Scroll spy to track active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-modern-gradient">
      {/* Modern Vibrant Background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        {/* Primary gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0b1e] via-[#151629] to-[#1e1f3a]"></div>
        
        {/* Vibrant color overlays */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-purple-600/5 to-pink-600/10"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-cyan-600/5 via-transparent to-emerald-600/5"></div>
        
        {/* Modern grid pattern with glow */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
        
        {/* Animated floating orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/5 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/5 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, -40, 0],
            y: [0, 20, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-radial from-cyan-400/10 to-transparent rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Modern Particles */}
        <ModernParticles count={15} />
      </div>

      {/* Modern Navigation */}
      <motion.nav 
        className="navbar-modern fixed top-0 left-0 right-0 z-50 w-full p-3 sm:p-4 md:p-6"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.button 
            onClick={() => scrollToSection('home')}
            className="cursor-pointer group touch-target"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <div className="nav-title text-gradient-crisp text-xl sm:text-2xl md:text-3xl text-crisp font-heading">
                Kaan Doğanay
              </div>
              <motion.div 
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 w-0 group-hover:w-full transition-all duration-500"
                whileHover={{ boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)" }}
              />
            </div>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2">
            {[
              { label: 'Ana Sayfa', id: 'home' },
              { label: 'Hakkımda', id: 'about' },
              { label: 'Yetenekler', id: 'skills' },
              { label: 'Projeler', id: 'projects' },
              { label: 'İletişim', id: 'contact' }
            ].map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`nav-link-modern cursor-pointer touch-target ${
                  activeSection === item.id ? 'active' : ''
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 font-medium text-white text-sm lg:text-base">{item.label}</span>
                
                {/* Active indicator */}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-blue-400 rounded-full glow-effect"
                    layoutId="activeNavDot"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button 
            className="md:hidden text-white p-3 cursor-pointer rounded-xl hover:bg-slate-800/50 transition-all duration-300 glow-effect touch-target"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div 
              className="w-6 h-6 flex flex-col justify-center space-y-1"
              animate={mobileMenuOpen ? "open" : "closed"}
            >
              <motion.div 
                className="w-full h-0.5 bg-white rounded origin-center"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 6 }
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.div 
                className="w-full h-0.5 bg-white rounded"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 }
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.div 
                className="w-full h-0.5 bg-white rounded origin-center"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -6 }
                }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Menu */}
            <motion.div
              className="fixed top-16 sm:top-20 right-2 sm:right-4 w-[calc(100vw-1rem)] max-w-80 bg-slate-800/95 backdrop-blur-2xl border border-slate-600/30 rounded-2xl p-4 sm:p-6 z-50 md:hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.9, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
            >
              <div className="space-y-2 sm:space-y-3">
                {[
                  { label: 'Ana Sayfa', id: 'home', icon: '🏠' },
                  { label: 'Hakkımda', id: 'about', icon: '👨‍💻' },
                  { label: 'Yetenekler', id: 'skills', icon: '⚡' },
                  { label: 'Projeler', id: 'projects', icon: '🚀' },
                  { label: 'İletişim', id: 'contact', icon: '📞' }
                ].map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => {
                      scrollToSection(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl transition-all duration-300 touch-target cursor-pointer group ${
                      activeSection === item.id 
                        ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 shadow-lg' 
                        : 'hover:bg-slate-700/50'
                    }`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="text-xl sm:text-2xl group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                    <span className="text-white font-medium text-sm sm:text-base">{item.label}</span>
                    {activeSection === item.id && (
                      <motion.div
                        className="ml-auto w-2 h-2 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"
                        layoutId="activeDot"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
              
              {/* Social Links */}
              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-slate-600/30">
                <div className="flex justify-center space-x-3 sm:space-x-4">
                  <motion.a
                    href="https://www.linkedin.com/in/kaan-do%C4%9Fanay-389428359/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center hover:from-blue-600 hover:to-blue-700 transition-all duration-300 touch-target shadow-lg hover:shadow-blue-500/50 cursor-pointer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </motion.a>
                  <motion.a
                    href="https://github.com/kaandoganay55"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-slate-700 to-slate-800 rounded-xl flex items-center justify-center hover:from-slate-600 hover:to-slate-700 transition-all duration-300 touch-target shadow-lg hover:shadow-slate-500/50 cursor-pointer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="relative z-20">
        {/* Modern Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 pt-20 relative overflow-hidden">
          {/* Hero background effects */}
          <div className="absolute inset-0 z-0">
            <motion.div 
              className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute bottom-20 right-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </div>

          <motion.div 
            className="container max-w-7xl mx-auto text-center relative z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Animated Main Title - CRISP & CLEAR */}
            <motion.div 
              className="mb-6 sm:mb-8 px-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h1 className="text-gradient-modern text-crisp font-heading leading-tight">
                Kaan Doğanay
              </h1>
            </motion.div>
            
            {/* Animated Subtitle */}
            <motion.div 
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-8 md:mb-10 max-w-4xl mx-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="subtitle-clean font-heading font-semibold text-crisp leading-relaxed">
                Bilgisayar Mühendisi & Full Stack Developer
              </div>
            </motion.div>
            
            {/* Animated Description */}
          <motion.p 
              className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 mb-8 sm:mb-10 md:mb-14 max-w-4xl mx-auto leading-relaxed px-4 sm:px-6 font-clean text-crisp"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
          >
              Balıkesir Üniversitesi Bilgisayar Mühendisliği mezunu. React, Next.js, MongoDB, Firebase 
              ve Python ile modern web uygulamaları geliştiriyorum. Yapay zeka öğrenmesi alanında kendimi 
              geliştirmeye devam ediyorum.
          </motion.p>
            
            {/* Modern Action Buttons */}
          <motion.div 
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4 sm:px-6"
            initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              <motion.button
                onClick={() => scrollToSection('projects')}
                className="btn-modern btn-modern-primary cursor-pointer glow-effect text-sm sm:text-base font-semibold px-6 sm:px-8 py-3 sm:py-4 touch-target"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                Projelerimi Görün
              </motion.button>
              
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="btn-modern btn-modern-outline cursor-pointer text-sm sm:text-base font-semibold px-6 sm:px-8 py-3 sm:py-4 touch-target"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                İletişime Geçin
              </motion.button>
            </motion.div>

            {/* Floating Elements */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(6)].map((_, i) => {
                const positions = [
                  { left: 15, top: 20 },
                  { left: 80, top: 15 },
                  { left: 25, top: 70 },
                  { left: 75, top: 80 },
                  { left: 10, top: 50 },
                  { left: 90, top: 40 }
                ];
                return (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
                    style={{
                      left: `${positions[i].left}%`,
                      top: `${positions[i].top}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.2, 0.8, 0.2],
                      scale: [1, 1.5, 1]
                    }}
                    transition={{
                      duration: 3 + (i * 0.5),
                      repeat: Infinity,
                      delay: i * 0.3
                    }}
                  />
                );
              })}
            </div>
          </motion.div>

          {/* Enhanced Modern Scroll indicator */}
          <motion.div
            className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.8 }}
          >
            <motion.div
              className="w-6 h-10 sm:w-8 sm:h-12 border-2 border-blue-400/50 rounded-full p-1 backdrop-blur-sm glow-effect cursor-pointer touch-target"
              animate={{ 
                opacity: [0.4, 1, 0.4],
                boxShadow: [
                  "0 0 10px rgba(59, 130, 246, 0.3)",
                  "0 0 20px rgba(59, 130, 246, 0.6)",
                  "0 0 10px rgba(59, 130, 246, 0.3)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => scrollToSection('about')}
            >
              <motion.div
                className="w-1 h-3 sm:w-1.5 sm:h-4 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mx-auto"
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
      </section>

      {/* What I Do Section */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 relative">
          {/* Section background */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-800/20 to-transparent"></div>
          
          <AnimatedSection 
            className="container max-w-7xl mx-auto relative z-10"
            direction="up"
            delay={0.2}
          >
            <AnimatedSection 
              className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-12 sm:mb-16 text-center"
              direction="scale"
              delay={0.1}
            >
              <ShinyText text="Uzmanlık Alanlarım" speed={4} className="blue-theme" />
            </AnimatedSection>
            
            <AnimatedSection 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10"
              stagger={true}
            >
              {[
                {
                  icon: '⚛️',
                  title: 'Frontend Development',
                  description: 'React, Next.js ve modern JavaScript teknolojileri ile responsive web uygulamaları',
                  color: 'blue',
                  hoverEffect: 'lift' as const
                },
                {
                  icon: '🔧',
                  title: 'Backend Development',
                  description: 'Node.js, Express.js ve MongoDB ile güçlü backend sistemleri',
                  color: 'yellow',
                  hoverEffect: 'glow' as const
                },
                {
                  icon: '🤖',
                  title: 'Yapay Zeka',
                  description: 'Python kullanarak makine öğrenmesi ve AI projeleri geliştiriyorum',
                  color: 'pink',
                  hoverEffect: 'tilt' as const
                }
              ].map((service) => (
                <motion.div
                  key={service.title}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  <HoverCard 
                    className="h-60 sm:h-64 md:h-72 p-6 sm:p-8 shadow-2xl shadow-black/40 hover:shadow-4xl hover:shadow-purple-500/30 transition-all duration-500 border border-slate-700/30 cursor-pointer"
                    hoverEffect={service.hoverEffect}
                    borderGradient={true}
                  >
                    <div className="w-full h-full flex flex-col items-center text-center">
                      <motion.div 
                        className="text-4xl sm:text-5xl mb-4 sm:mb-6"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {service.icon}
                      </motion.div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                        <ShinyText text={service.title} speed={3} className="gold-theme" />
                      </h3>
                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </HoverCard>
                </motion.div>
              ))}
            </AnimatedSection>
          </AnimatedSection>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 relative">
          {/* Section background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/10 via-transparent to-purple-950/10"></div>
          
          <div className="container max-w-7xl mx-auto relative z-10">
          <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-12 sm:mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
              <ShinyText text="Hakkımda" speed={4} className="purple-theme" />
          </motion.h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                  Kaan Doğanay
                    </h3>
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                  Balıkesir Üniversitesi Bilgisayar Mühendisliği mezunuyum. Modern web teknolojileri 
                  ile kullanıcı deneyimini ön planda tutan uygulamalar geliştirmeye odaklanıyorum.
                </p>
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                  React, Next.js, MongoDB, Firebase gibi teknolojilerle frontend ve backend geliştirme 
                  yapıyorum. Aynı zamanda Python ile yapay zeka alanında kendimi geliştirmeye devam ediyorum.
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">3+</div>
                    <div className="text-slate-400 text-sm">Yıl Deneyim</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">10+</div>
                    <div className="text-slate-400 text-sm">Proje</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <PixelCard variant="blue" className="h-80 sm:h-96 hover-effect cursor-pointer shadow-2xl shadow-blue-500/20 hover:shadow-4xl hover:shadow-blue-500/40 transition-all duration-500 border border-slate-700/30" disablePixels={true}>
                  <div className="w-full h-full p-6 sm:p-8 flex flex-col">
                    <h4 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">
                      <ShinyText text="Deneyim Alanlarım" speed={3} className="gold-theme" />
                    </h4>
                    <ul className="space-y-4 sm:space-y-6 text-slate-300 flex-1">
                      <motion.li 
                        className="flex items-center group cursor-pointer"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <span className="w-3 h-3 bg-blue-400 rounded-full mr-4 animate-pulse group-hover:scale-125 transition-transform duration-300"></span>
                        <ShinyText text="React & Next.js" speed={4} className="blue-theme" />
                      </motion.li>
                      <motion.li 
                        className="flex items-center group cursor-pointer"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <span className="w-3 h-3 bg-purple-400 rounded-full mr-4 animate-pulse group-hover:scale-125 transition-transform duration-300"></span>
                        <ShinyText text="MongoDB & Firebase" speed={4} className="purple-theme" />
                      </motion.li>
                      <motion.li 
                        className="flex items-center group cursor-pointer"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <span className="w-3 h-3 bg-green-400 rounded-full mr-4 animate-pulse group-hover:scale-125 transition-transform duration-300"></span>
                        <ShinyText text="Python & AI" speed={4} className="text-green-300" />
                      </motion.li>
                      <motion.li 
                        className="flex items-center group cursor-pointer"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <span className="w-3 h-3 bg-yellow-400 rounded-full mr-4 animate-pulse group-hover:scale-125 transition-transform duration-300"></span>
                        <ShinyText text="TailwindCSS" speed={4} className="gold-theme" />
                      </motion.li>
                    </ul>
                  </div>
                </PixelCard>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 relative">
          {/* Section background */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-800/20 to-transparent"></div>
          
          <div className="container max-w-7xl mx-auto text-center relative z-10">
          <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
              <ShinyText text="Teknolojiler" speed={4} className="blue-theme" />
          </motion.h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8">
              {[
                { name: "React", variant: "blue" },
                { name: "Next.js", variant: "default" },
                { name: "TypeScript", variant: "blue" },
                { name: "JavaScript", variant: "yellow" },
                { name: "Python", variant: "blue" },
                { name: "Node.js", variant: "pink" },
                { name: "MongoDB", variant: "pink" },
                { name: "Firebase", variant: "yellow" },
                { name: "TailwindCSS", variant: "blue" },
                { name: "Express.js", variant: "default" },
                { name: "Git", variant: "pink" },
                { name: "AI/ML", variant: "yellow" }
              ].map((skill, index) => (
              <motion.div
                  key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                  whileHover={{
                    y: -8,
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <PixelCard 
                    variant={skill.variant as 'blue' | 'yellow' | 'pink' | 'default'}
                    className="h-20 sm:h-24 md:h-28 hover-effect touch-target cursor-pointer shadow-xl shadow-black/30 hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-300 border border-slate-700/30"
                    disablePixels={true}
                  >
                    <div className="w-full h-full flex items-center justify-center p-2">
                      <ShinyText 
                        text={skill.name} 
                        speed={3} 
                        className="text-xs sm:text-sm md:text-base font-bold text-white text-center" 
                      />
                  </div>
                </PixelCard>
              </motion.div>
            ))}
          </div>
        </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 relative">
          {/* Section background */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-950/10 via-transparent to-blue-950/10"></div>
          
          <div className="container max-w-7xl mx-auto relative z-10">
          <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-12 sm:mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
              <ShinyText text="Projelerim" speed={4} className="gold-theme" />
          </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {[
          { id: 1, variant: "blue", title: "E-Ticaret Platformu", tech: ["React", "Next.js", "TypeScript"] },
          { id: 2, variant: "pink", title: "Sosyal Medya Uygulaması", tech: ["React Native", "Node.js", "MongoDB"] },
          { id: 3, variant: "yellow", title: "Portfolyo Websitesi", tech: ["Next.js", "Three.js", "Tailwind"] }
              ].map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -15, scale: 1.02 }}
                  className="group"
                >
                  <PixelCard variant={project.variant as 'blue' | 'yellow' | 'pink' | 'default'} className="h-96 sm:h-[26rem] md:h-[28rem] hover-effect cursor-pointer shadow-2xl shadow-black/40 hover:shadow-4xl hover:shadow-purple-500/30 transition-all duration-500 border border-slate-700/30" disablePixels={true}>
                    <div className="w-full h-full p-6 sm:p-8 flex flex-col">
                      <motion.div 
                        className="h-40 sm:h-48 md:h-52 bg-gradient-to-br from-slate-700/20 to-slate-800/20 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm border border-slate-600/30 group-hover:border-slate-500/50 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <ShinyText text={`Proje ${project.id}`} speed={4} className="text-xl sm:text-2xl md:text-3xl font-bold" />
                      </motion.div>
                      <div className="flex-1 flex flex-col">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                  <ShinyText text={project.title} speed={3} className="blue-theme" />
                </h3>
                        <p className="text-slate-300 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed flex-1">
                  Bu projede modern web teknolojileri kullanarak kullanıcı dostu ve performanslı bir uygulama geliştirdim.
                </p>
                        <div className="flex flex-wrap gap-2 sm:gap-3 mb-6">
                          {project.tech.map((tech, techIndex) => (
                            <motion.span 
                              key={tech} 
                              className="px-3 sm:px-4 py-1.5 bg-slate-700/50 text-white rounded-lg text-xs sm:text-sm backdrop-blur-sm border border-slate-600/30 cursor-pointer"
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: (index * 0.2) + (techIndex * 0.1) + 0.5 }}
                              viewport={{ once: true }}
                              whileHover={{ scale: 1.1, backgroundColor: "rgba(71, 85, 105, 0.7)" }}
                            >
                      {tech}
                            </motion.span>
                  ))}
                </div>
                        <div className="flex gap-4 sm:gap-6">
                          <motion.button 
                            className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-blue-500/50"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ShinyText text="Demo" speed={2} className="dark-theme" />
                          </motion.button>
                          <motion.button 
                            className="flex-1 border border-slate-600 text-slate-300 py-3 px-4 rounded-xl font-semibold hover:bg-slate-700/50 hover:border-slate-500 transition-all duration-300 cursor-pointer"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                          >
                    <ShinyText text="GitHub" speed={2} className="purple-theme" />
                          </motion.button>
                </div>
              </div>
            </div>
          </PixelCard>
                </motion.div>
        ))}
      </div>
    </div>
  </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 relative">
          {/* Section background */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-800/20 to-transparent"></div>
          
          <div className="container max-w-5xl mx-auto text-center relative z-10">
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-8 sm:mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
        <ShinyText text="İletişime Geçin" speed={4} className="purple-theme" />
            </motion.h2>
            
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-12 sm:mb-16 px-4 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Benimle iletişime geçmek için aşağıdaki bağlantıları kullanabilirsiniz.
            </motion.p>
            
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center mb-16">
              <motion.a
                href="https://www.linkedin.com/in/kaan-do%C4%9Fanay-389428359/"
          target="_blank"
          rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 sm:py-5 px-8 sm:px-10 rounded-2xl transition-all duration-300 cursor-pointer shadow-2xl hover:shadow-blue-500/50 group"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center justify-center space-x-3">
                  <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <ShinyText text="LinkedIn" speed={4} className="dark-theme" />
      </div>
              </motion.a>
              
              <motion.a
                href="https://github.com/kaandoganay55"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white font-bold py-4 sm:py-5 px-8 sm:px-10 rounded-2xl transition-all duration-300 hover:bg-slate-700/50 cursor-pointer shadow-2xl hover:shadow-slate-500/50 group"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
                <div className="flex items-center justify-center space-x-3">
                  <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <ShinyText text="GitHub" speed={4} className="gold-theme" />
                </div>
              </motion.a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 sm:px-6 md:px-8 border-t border-slate-700/30 bg-slate-900/20 backdrop-blur-sm">
          <div className="container max-w-7xl mx-auto text-center">
            <motion.p 
              className="text-slate-400 text-sm sm:text-base"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              © 2024 Kaan Doğanay. Tüm hakları saklıdır.
            </motion.p>
        </div>
        </footer>
      </div>
    </div>
  );
}