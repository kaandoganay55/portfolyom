'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  SiReact, 
  SiNextdotjs, 
  SiMongodb, 
  SiFirebase, 
  SiPython, 
  SiTailwindcss
} from 'react-icons/si';
import { GiBrain } from 'react-icons/gi';
import ShinyText from '@/components/ShinyText';
import AnimatedSection from '@/components/AnimatedSection';
import GradientCard from '@/components/GradientCard';
import TerminalCard from '@/components/TerminalCard';
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
  const [openCards, setOpenCards] = useState<{[key: number]: boolean}>({});
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  const animatedTexts = [
    { text: "DOĞANAY", color: "from-blue-400 to-blue-600" },
    { text: "DEVELOPER", color: "from-purple-400 to-purple-600" },
    { text: "ENGINEER", color: "from-green-400 to-green-600" },
    { text: "CODER", color: "from-yellow-400 to-yellow-600" },
    { text: "DESIGNER", color: "from-pink-400 to-pink-600" }
  ];

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

  // Text animation for hero section
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => 
        (prevIndex + 1) % animatedTexts.length
      );
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [animatedTexts.length]);

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
    <div className="relative min-h-screen">
      {/* Hexagonal Pattern Background with Enhancements */}
      <div className="fixed inset-0 z-0 overflow-hidden hexagonal-background">
        {/* Vibrant color overlays to enhance the hexagonal pattern */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/8 via-purple-600/4 to-pink-600/8"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-cyan-600/4 via-transparent to-emerald-600/4"></div>
        
        {/* Subtle glow overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent"></div>
        
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
                className={`btn-23 ${activeSection === item.id ? 'active' : ''}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text">{item.label}</span>
                <span aria-hidden className="marquee">{item.label}</span>
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
            {/* Animated Main Title with Text Animation */}
            <motion.div 
              className="mb-6 sm:mb-8 px-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="text-gradient-modern text-crisp font-heading leading-tight flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
                <span className="text-white">KAAN</span>
                <div className="relative h-[1.2em] flex items-center justify-center min-w-[300px] sm:min-w-[400px]">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentTextIndex}
                      className={`absolute bg-gradient-to-r ${animatedTexts[currentTextIndex].color} bg-clip-text text-transparent font-black`}
                      style={{
                        textShadow: '0 0 7px rgba(255,255,255,.3), 0 0 3px rgba(255,255,255,.3)'
                      }}
                      initial={{ 
                        y: 50,
                        opacity: 0,
                        scale: 0.8
                      }}
                      animate={{ 
                        y: 0,
                        opacity: 1,
                        scale: 1
                      }}
                      exit={{ 
                        y: -50,
                        opacity: 0,
                        scale: 0.8
                      }}
                      transition={{
                        duration: 0.5,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                    >
                      {animatedTexts[currentTextIndex].text}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>
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
            
            {/* Terminal Card */}
            <motion.div 
              className="mt-8 sm:mt-12 px-4 sm:px-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              <TerminalCard 
                commands={[
                  'echo "KAAN DOĞANAY"',
                  'echo "FULL STACK DEVELOPER"',
                  'whoami',
                  'git config user.name "Kaan Doğanay"',
                  'echo "Welcome to my Portfolio 🚀"',
                  'npm whoami'
                ]}
                className="max-w-md mx-auto"
              />
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
              className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 justify-items-center"
              stagger={true}
            >
              {[
                {
                  icon: '⚛️',
                  title: 'Frontend Development',
                  description: 'React, Next.js ve modern JavaScript teknolojileri ile responsive web uygulamaları geliştiriyorum. Kullanıcı deneyimini ön planda tutarak modern ve etkileyici arayüzler tasarlıyorum.',
                  coverColor: 'linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)', // Dark slate
                  textColor: '#e2e8f0'
                },
                {
                  icon: '🔧',
                  title: 'Backend Development',
                  description: 'Node.js, Express.js ve MongoDB ile güçlü backend sistemleri geliştiriyorum. API tasarımı, veritabanı yönetimi ve sunucu tarafı programlama konularında deneyimliyim.',
                  coverColor: 'linear-gradient(135deg, #374151 0%, #4b5563 50%, #6b7280 100%)', // Dark gray
                  textColor: '#f3f4f6'
                },
                {
                  icon: '🤖',
                  title: 'Yapay Zeka',
                  description: 'Python kullanarak makine öğrenmesi ve AI projeleri geliştiriyorum. Veri analizi, model eğitimi ve yapay zeka algoritmalarıyla çalışmayı seviyorum.',
                  coverColor: 'linear-gradient(135deg, #1f2937 0%, #374151 50%, #4b5563 100%)', // Dark blue-gray
                  textColor: '#e5e7eb'
                }
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="w-full max-w-[280px]"
                >
                  {/* 3D Book Card */}
                  <div 
                    className="relative rounded-xl w-full h-[350px] flex items-center justify-center text-black cursor-pointer group"
                    style={{
                      backgroundColor: 'whitesmoke',
                      boxShadow: '1px 1px 12px #000',
                      transform: 'preserve-3d',
                      perspective: '2000px'
                    }}
                  >
                    {/* Book Content (Back) */}
                    <div className="p-8 flex flex-col items-center justify-center text-center h-full">
                      <motion.div 
                        className="text-5xl mb-6"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ 
                          delay: 0.5 + index * 0.2, 
                          type: "spring",
                          stiffness: 300,
                          damping: 20
                        }}
                      >
                        {service.icon}
                      </motion.div>
                      <motion.h3 
                        className="text-xl font-bold text-gray-800 mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 + index * 0.2, duration: 0.6 }}
                      >
                        <ShinyText text={service.title} speed={3} className="gold-theme" />
                      </motion.h3>
                      <motion.p 
                        className="text-gray-700 text-sm leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 + index * 0.2, duration: 0.8 }}
                      >
                        {service.description.split(' ').map((word, wordIndex) => (
                          <motion.span
                            key={wordIndex}
                            className="inline-block mr-1"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ 
                              delay: 1.1 + index * 0.2 + wordIndex * 0.05,
                              duration: 0.3
                            }}
                          >
                            {word}
                          </motion.span>
                        ))}
                      </motion.p>
                    </div>
                    
                    {/* Book Cover (Front) */}
                    <motion.div 
                      className="absolute top-0 w-full h-full rounded-xl cursor-pointer flex items-center justify-center touch-target"
                      style={{
                        background: service.coverColor,
                        boxShadow: '1px 1px 12px #000',
                        transformOrigin: '0 50%',
                        backfaceVisibility: 'hidden'
                      }}
                      animate={{
                        rotateY: openCards[index] ? -80 : 0
                      }}
                      whileHover={{
                        rotateY: -80,
                        transition: { duration: 0.5, ease: "easeInOut" }
                      }}
                      onClick={() => {
                        setOpenCards(prev => ({
                          ...prev,
                          [index]: !prev[index]
                        }));
                      }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      initial={{ rotateY: 0 }}
                    >
                                            <div className="flex flex-col items-center text-center p-6">
                        <motion.div 
                          className="text-6xl mb-4"
                          initial={{ scale: 0, rotate: 360 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ 
                            delay: 0.3 + index * 0.1,
                            type: "spring",
                            stiffness: 400,
                            damping: 25
                          }}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          {service.icon}
                        </motion.div>
                        <motion.h3 
                          className="text-xl font-bold mb-4"
                          style={{ color: service.textColor }}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                        >
                          {service.title.split('').map((char, charIndex) => (
                            <motion.span
                              key={charIndex}
                              className="inline-block"
                              initial={{ opacity: 0, y: -20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ 
                                delay: 0.7 + index * 0.1 + charIndex * 0.03,
                                duration: 0.2
                              }}
                            >
                              {char === ' ' ? '\u00A0' : char}
                            </motion.span>
                          ))}
                        </motion.h3>
                        <motion.div 
                          className="flex flex-col items-center"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.2 + index * 0.1, duration: 0.4 }}
                        >
                          <motion.p 
                            className="text-sm opacity-90 mb-2"
                            style={{ color: service.textColor }}
                            animate={{
                              opacity: [0.7, 1, 0.7]
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            <span className="hidden md:inline">Detayları Görmek İçin Hover Yapın</span>
                            <span className="md:hidden">Detayları Görmek İçin Dokunun</span>
                          </motion.p>
                          {/* Touch indicator for mobile */}
                          <motion.div
                            className="md:hidden text-2xl opacity-60"
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.6, 1, 0.6],
                              rotate: [0, 10, -10, 0]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            👆
                          </motion.div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
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
                className="space-y-8"
              >
                {/* Enhanced Name Title */}
                <motion.h3 
                  className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-purple-200 mb-8 tracking-tight leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  Kaan Doğanay
                </motion.h3>

                {/* Enhanced Description Paragraphs */}
                <motion.div className="space-y-6">
                  <motion.p 
                    className="text-lg sm:text-xl md:text-2xl text-slate-200 leading-relaxed font-light tracking-wide"
                    style={{
                      fontFamily: "'Inter', 'system-ui', sans-serif",
                      lineHeight: "1.7"
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <span className="font-medium text-white">Balıkesir Üniversitesi Bilgisayar Mühendisliği</span> mezunuyum. 
                    Modern web teknolojileri ile <span className="text-blue-300 font-medium">kullanıcı deneyimini ön planda tutan</span> uygulamalar 
                    geliştirmeye odaklanıyorum.
                  </motion.p>
                  
                  <motion.p 
                    className="text-lg sm:text-xl md:text-2xl text-slate-200 leading-relaxed font-light tracking-wide"
                    style={{
                      fontFamily: "'Inter', 'system-ui', sans-serif",
                      lineHeight: "1.7"
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-purple-300 font-medium">React, Next.js, MongoDB, Firebase</span> gibi teknolojilerle 
                    frontend ve backend geliştirme yapıyorum. Aynı zamanda <span className="text-green-300 font-medium">Python ile yapay zeka</span> alanında 
                    kendimi geliştirmeye devam ediyorum.
                  </motion.p>
                </motion.div>
                
                {/* Enhanced Stats */}
                <motion.div 
                  className="grid grid-cols-2 gap-8 mt-12"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="text-center group cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div 
                      className="text-4xl sm:text-5xl md:text-6xl font-black mb-3 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      1+
                    </motion.div>
                    <div className="text-slate-300 text-sm sm:text-base md:text-lg font-medium tracking-wider uppercase">
                      Yıl Deneyim
                  </div>
                  </motion.div>
                  
                  <motion.div 
                    className="text-center group cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div 
                      className="text-4xl sm:text-5xl md:text-6xl font-black mb-3 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      10+
                    </motion.div>
                    <div className="text-slate-300 text-sm sm:text-base md:text-lg font-medium tracking-wider uppercase">
                      Proje
                </div>
                  </motion.div>
                </motion.div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="w-full"
              >
                {/* Modern Card with same style as projects */}
                <motion.div
                  className="relative flex flex-col justify-center w-full h-80 sm:h-96 bg-[#212121] border-2 border-[#313131] rounded-xl p-6 sm:p-8 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-[0_10px_20px_rgba(0,0,0,0.2)] cursor-pointer group"
                  style={{
                    boxShadow: `0 10px 20px rgba(0,0,0,0.2)`,
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    y: -5,
                    boxShadow: `0 0 20px rgba(59, 130, 246, 0.8)`,
                    borderColor: "#3b82f6"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex flex-col items-start gap-5 text-[#e8e8e8] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] h-full">
                    {/* Card Title */}
                    <motion.h4 
                      className="font-bold text-xl sm:text-2xl text-white transition-colors duration-300"
                      style={{ color: 'white' }}
                      whileHover={{ 
                        scale: 1.05,
                        color: "#3b82f6"
                      }}
                    >
                      <ShinyText text="Deneyim Alanlarım" speed={3} className="gold-theme" />
                    </motion.h4>
                    
                                         {/* Experience List */}
                     <ul className="space-y-4 sm:space-y-6 text-slate-300 flex-1 w-full">
                      <motion.li 
                        className="flex items-center group cursor-pointer"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                         <div className="flex items-center mr-4 space-x-2">
                           <motion.div
                             whileHover={{ scale: 1.2, rotate: 360 }}
                             transition={{ duration: 0.5 }}
                           >
                             <SiReact className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
                           </motion.div>
                           <motion.div
                             whileHover={{ scale: 1.2, rotate: -360 }}
                             transition={{ duration: 0.5, delay: 0.1 }}
                           >
                             <SiNextdotjs className="w-5 h-5 text-white group-hover:text-gray-300" />
                           </motion.div>
                         </div>
                        <ShinyText text="React & Next.js" speed={4} className="blue-theme" />
                      </motion.li>
                       
                      <motion.li 
                        className="flex items-center group cursor-pointer"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                         <div className="flex items-center mr-4 space-x-2">
                           <motion.div
                             whileHover={{ scale: 1.2, rotate: 360 }}
                             transition={{ duration: 0.5 }}
                           >
                             <SiMongodb className="w-5 h-5 text-green-400 group-hover:text-green-300" />
                           </motion.div>
                           <motion.div
                             whileHover={{ scale: 1.2, rotate: -360 }}
                             transition={{ duration: 0.5, delay: 0.1 }}
                           >
                             <SiFirebase className="w-5 h-5 text-yellow-400 group-hover:text-yellow-300" />
                           </motion.div>
                         </div>
                        <ShinyText text="MongoDB & Firebase" speed={4} className="purple-theme" />
                      </motion.li>
                       
                      <motion.li 
                        className="flex items-center group cursor-pointer"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                         <div className="flex items-center mr-4 space-x-2">
                           <motion.div
                             whileHover={{ scale: 1.2, rotate: 360 }}
                             transition={{ duration: 0.5 }}
                           >
                             <SiPython className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
                           </motion.div>
                           <motion.div
                             whileHover={{ scale: 1.2, rotate: -360 }}
                             transition={{ duration: 0.5, delay: 0.1 }}
                           >
                             <GiBrain className="w-5 h-5 text-purple-400 group-hover:text-purple-300" />
                           </motion.div>
                         </div>
                        <ShinyText text="Python & AI" speed={4} className="text-green-300" />
                      </motion.li>
                       
                      <motion.li 
                        className="flex items-center group cursor-pointer"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                         <div className="flex items-center mr-4">
                           <motion.div
                             whileHover={{ scale: 1.2, rotate: 360 }}
                             transition={{ duration: 0.5 }}
                           >
                             <SiTailwindcss className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
                           </motion.div>
                         </div>
                        <ShinyText text="TailwindCSS" speed={4} className="gold-theme" />
                      </motion.li>
                    </ul>
                  </div>
                  
                  {/* Floating animation elements - Blue theme */}
                  <motion.div
                    className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  <motion.div
                    className="absolute bottom-4 left-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 0.8, 0.3]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  />
                </motion.div>
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
              <ShinyText text="Yetenekler" speed={4} className="blue-theme" />
          </motion.h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8">
              {[
                { name: "React", variant: "green" },
                { name: "Next.js", variant: "blue" },
                { name: "TypeScript", variant: "cyan" },
                { name: "JavaScript", variant: "yellow" },
                { name: "Python", variant: "purple" },
                { name: "Node.js", variant: "pink" },
                { name: "MongoDB", variant: "green" },
                { name: "Firebase", variant: "yellow" },
                { name: "TailwindCSS", variant: "cyan" },
                { name: "Express.js", variant: "blue" },
                { name: "Git", variant: "pink" },
                { name: "AI/ML", variant: "purple" }
              ].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <GradientCard 
                    variant={skill.variant as 'green' | 'blue' | 'purple' | 'pink' | 'yellow' | 'cyan'}
                    className="touch-target"
                  >
                    <div className="gradient-card-content">
                      <ShinyText 
                        text={skill.name} 
                        speed={3} 
                        className="text-xs sm:text-sm md:text-base font-bold text-white text-center" 
                      />
                    </div>
                  </GradientCard>
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 justify-items-center">
              {[
                { 
                  id: 1, 
                  title: "E-Ticaret Platformu", 
                  description: "Modern e-ticaret platformu. React, Next.js ve TypeScript kullanarak geliştirilen tam fonksiyonlu bir online mağaza uygulaması. Responsive tasarım ve kullanıcı dostu arayüz ile optimize edilmiştir.",
                  tech: ["React", "Next.js", "TypeScript"],
                  demoUrl: "#",
                  githubUrl: "#",
                  glowColor: "rgba(34, 197, 94, 0.8)", // Green glow
                  hoverGlow: "rgba(34, 197, 94, 0.3)",
                  borderColor: "#22c55e"
                },
                { 
                  id: 2, 
                  title: "Sosyal Medya Uygulaması", 
                  description: "React Native ile geliştirilmiş sosyal medya platformu. Real-time mesajlaşma, post paylaşımı ve kullanıcı etkileşimi özellikleri içeren modern mobil uygulama.",
                  tech: ["React Native", "Node.js", "MongoDB"],
                  demoUrl: "#",
                  githubUrl: "#",
                  glowColor: "rgba(9, 117, 241, 0.8)", // Blue glow (original)
                  hoverGlow: "rgba(9, 117, 241, 0.3)",
                  borderColor: "#0974f1"
                },
                { 
                  id: 3, 
                  title: "Portfolyo Websitesi", 
                  description: "Modern ve interaktif kişisel portfolyo sitesi. Three.js ile 3D animasyonlar, smooth scroll efektleri ve responsive tasarım özellikleri içerir.",
                  tech: ["Next.js", "Three.js", "Tailwind"],
                  demoUrl: "#",
                  githubUrl: "#",
                  glowColor: "rgba(168, 85, 247, 0.8)", // Purple glow
                  hoverGlow: "rgba(168, 85, 247, 0.3)",
                  borderColor: "#a855f7"
                }
              ].map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="w-full max-w-80"
                >
                  {/* Modern Card */}
                  <motion.div
                    className="relative flex flex-col justify-center w-full min-h-[480px] bg-[#212121] border-2 border-[#313131] rounded-xl p-8 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-[0_10px_20px_rgba(0,0,0,0.2)] cursor-pointer group"
                    style={{
                      boxShadow: `0 10px 20px rgba(0,0,0,0.2)`,
                    }}
                    whileHover={{ 
                      scale: 1.02,
                      y: -5,
                      boxShadow: `0 0 20px ${project.glowColor}`,
                      borderColor: project.borderColor
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex flex-col items-start gap-5 text-[#e8e8e8] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]">
                                             {/* Project Title */}
                       <motion.h3 
                         className="font-bold text-2xl sm:text-3xl text-white transition-colors duration-300"
                         style={{ color: 'white' }}
                         whileHover={{ 
                           scale: 1.05,
                           color: project.borderColor
                         }}
                       >
                  <ShinyText text={project.title} speed={3} className="blue-theme" />
                       </motion.h3>
                      
                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-2">
                                                 {project.tech.map((tech, techIndex) => (
                           <motion.span 
                              key={tech} 
                             className="px-3 py-1 bg-slate-700/50 text-white rounded-md text-xs font-medium backdrop-blur-sm border border-slate-600/30"
                             initial={{ opacity: 0, scale: 0.8 }}
                             whileInView={{ opacity: 1, scale: 1 }}
                             transition={{ delay: index * 0.2 + techIndex * 0.1 }}
                             whileHover={{ 
                               scale: 1.1, 
                               backgroundColor: project.hoverGlow,
                               borderColor: project.borderColor
                             }}
                            >
                      {tech}
                           </motion.span>
                  ))}
                </div>
                      
                      {/* Project Description */}
                      <p className="leading-relaxed text-sm sm:text-base text-slate-300 mb-4">
                        {project.description}
                      </p>
                      
                                             {/* Action Button */}
                       <div className="flex justify-center w-full">
                         <motion.a
                           href={project.githubUrl}
                           className="w-full text-center text-[#e8e8e8] no-underline py-3 px-6 font-semibold border-2 border-[#313131] cursor-pointer bg-transparent rounded-md transition-all duration-300"
                           style={{
                             borderColor: '#313131'
                           }}
                           whileHover={{ 
                             scale: 1.05,
                             borderColor: project.borderColor,
                             color: project.borderColor,
                             boxShadow: `0 0 10px ${project.hoverGlow}`
                           }}
                           whileTap={{ scale: 0.95 }}
                          >
                    <ShinyText text="GitHub" speed={2} className="purple-theme" />
                         </motion.a>
                </div>
              </div>
                    
                                         {/* Floating animation elements */}
                     <motion.div
                       className="absolute top-4 right-4 w-3 h-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                       style={{ backgroundColor: project.borderColor }}
                       animate={{
                         scale: [1, 1.2, 1],
                         opacity: [0.5, 1, 0.5]
                       }}
                       transition={{
                         duration: 2,
                         repeat: Infinity,
                         ease: "easeInOut"
                       }}
                     />
                     
                     <motion.div
                       className="absolute bottom-4 left-4 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                       style={{ backgroundColor: project.borderColor, opacity: 0.7 }}
                       animate={{
                         scale: [1, 1.5, 1],
                         opacity: [0.3, 0.8, 0.3]
                       }}
                       transition={{
                         duration: 3,
                         repeat: Infinity,
                         ease: "easeInOut",
                         delay: 0.5
                       }}
                     />
                  </motion.div>
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