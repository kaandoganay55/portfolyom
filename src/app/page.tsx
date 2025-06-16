'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ShinyText from '@/components/ShinyText';
import PixelCard from '@/components/PixelCard';
import LiquidChrome from '@/components/LiquidChrome';
import GooeyNav from '@/components/GooeyNav';
import Waves from '@/components/Waves';

// Dynamically import Dither component to avoid SSR issues with Three.js
const Dither = dynamic(() => import('@/components/Dither'), { ssr: false });

// Page Components
const HomePage = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              Merhaba Ben [İsminiz]
            </div>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <ShinyText text="Full Stack Developer & UI/UX Tasarımcı" speed={5} className="gold-theme" />
          </motion.p>
          <motion.p 
            className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Modern web teknolojileri ile kullanıcı dostu ve performanslı uygulamalar geliştiriyorum.
            React, Next.js, TypeScript ve diğer modern teknolojiler ile projeler üretiyorum.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <button 
              onClick={() => onNavigate('projects')}
              className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl"
            >
              <ShinyText text="Projelerimi Görün" speed={3} className="dark-theme" />
            </button>
            <button 
              onClick={() => onNavigate('contact')}
              className="border border-yellow-400/50 hover:border-yellow-400/80 text-yellow-300 hover:text-yellow-200 font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:bg-yellow-400/10 cursor-pointer hover:shadow-lg shadow-yellow-400/20"
            >
              <ShinyText text="İletişime Geçin" speed={4} className="gold-theme" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* What I Do Section */}
      <motion.section 
        className="py-20 px-6 md:px-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ShinyText text="Neler Yapıyorum?" speed={4} className="blue-theme" />
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
                         {[
               {
                 icon: '🎨',
                 title: 'UI/UX Tasarım',
                 description: 'Kullanıcı dostu ve etkileyici arayüzler tasarlıyorum',
                 color: 'pink'
               },
               {
                 icon: '⚡',
                 title: 'Frontend Geliştirme',
                 description: 'Modern JavaScript framework\'leri ile hızlı web uygulamaları',
                 color: 'yellow'
               },
               {
                 icon: '🚀',
                 title: 'Full Stack Çözümler',
                 description: 'Baştan sona tüm teknik süreçleri yönetebiliyorum',
                 color: 'default'
               }
             ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <PixelCard variant={service.color as any} className="h-64">
                  <div className="absolute inset-0 p-6 flex flex-col items-center text-center">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                      <ShinyText text={service.title} speed={3} className="gold-theme" />
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </PixelCard>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Statistics Section */}
      <motion.section 
        className="py-20 px-6 md:px-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ShinyText text="Rakamlarla Ben" speed={4} className="purple-theme" />
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '3+', label: 'Yıl Deneyim', icon: '📅' },
              { number: '15+', label: 'Tamamlanan Proje', icon: '🎯' },
              { number: '50+', label: 'Mutlu Müşteri', icon: '😊' },
              { number: '24/7', label: 'Destek', icon: '🛠️' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                                 <PixelCard variant={index % 2 === 0 ? 'pink' : 'yellow'} className="h-32">
                  <div className="absolute inset-0 p-4 flex flex-col items-center justify-center text-center">
                    <div className="text-2xl mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-white mb-1">
                      <ShinyText text={stat.number} speed={2} className="gold-theme" />
                    </div>
                    <div className="text-xs text-gray-300">{stat.label}</div>
                  </div>
                </PixelCard>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section 
        className="py-20 px-6 md:px-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ShinyText text="Bir Proje Fikriniz Mi Var?" speed={4} className="gold-theme" />
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Hayal ettiğiniz dijital çözümü birlikte gerçeğe dönüştürelim!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-semibold py-4 px-12 rounded-full transition-all duration-300 transform hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl shadow-yellow-500/30"
            >
              <ShinyText text="Hemen Başlayalım!" speed={3} className="dark-theme" />
            </button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

const AboutPage = () => (
  <section className="min-h-screen flex items-center justify-center px-6 md:px-8 relative">
    {/* LiquidChrome Background */}
    <div className="absolute inset-0 z-0">
      <LiquidChrome
        baseColor={[0.1, 0.1, 0.1]}
        speed={1}
        amplitude={0.6}
        interactive={true}
      />
    </div>
    {/* Dark overlay for better text readability */}
    <div className="absolute inset-0 bg-black/60 z-10"></div>
    
    <div className="max-w-6xl mx-auto relative z-20">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
        <ShinyText text="Hakkımda" speed={4} className="purple-theme" />
      </h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-2xl font-semibold text-white mb-6">
            Merhaba! 👋
          </h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Ben [İsminiz], tutkulu bir yazılım geliştiricisiyim. Web teknolojileri ile 
            kullanıcı deneyimini ön planda tutan, modern ve performanslı uygulamalar 
            geliştirmeyi seviyorum.
          </p>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Frontend geliştirmede React, Next.js, TypeScript ve modern CSS framework'leri 
            kullanırken, backend tarafında Node.js, Python ve veritabanı teknolojileri 
            ile çalışıyorum.
          </p>
        </div>
        <PixelCard variant="blue" className="h-full">
          <div className="absolute inset-0 p-8 flex flex-col">
            <h4 className="text-xl font-semibold text-white mb-6">
              <ShinyText text="Deneyim Alanlarım" speed={3} className="gold-theme" />
            </h4>
            <ul className="space-y-4 text-gray-300 flex-1">
              <li className="flex items-center">
                <span className="w-3 h-3 bg-blue-400 rounded-full mr-4 animate-pulse"></span>
                <ShinyText text="Frontend Development" speed={4} className="blue-theme" />
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-purple-400 rounded-full mr-4 animate-pulse"></span>
                <ShinyText text="Backend Development" speed={4} className="purple-theme" />
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-green-400 rounded-full mr-4 animate-pulse"></span>
                <ShinyText text="UI/UX Design" speed={4} className="text-green-300" />
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-yellow-400 rounded-full mr-4 animate-pulse"></span>
                <ShinyText text="Mobile Development" speed={4} className="gold-theme" />
              </li>
            </ul>
          </div>
        </PixelCard>
      </div>
    </div>
  </section>
);

const SkillsPage = () => (
  <section className="min-h-screen flex items-center justify-center px-6 md:px-8 relative">
    {/* LiquidChrome Background */}
    <div className="absolute inset-0 z-0">
      <LiquidChrome
        baseColor={[0.2, 0.1, 0.3]}
        speed={0.8}
        amplitude={0.4}
        interactive={true}
      />
    </div>
    {/* Dark overlay for better text readability */}
    <div className="absolute inset-0 bg-black/50 z-10"></div>
    
    <div className="max-w-6xl mx-auto relative z-20">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
        <ShinyText text="Teknoloji Yığınım" speed={4} className="blue-theme" />
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {[
          { name: 'React', variant: 'blue' },
          { name: 'Next.js', variant: 'default' },
          { name: 'TypeScript', variant: 'blue' },
          { name: 'Tailwind CSS', variant: 'yellow' }, 
          { name: 'Node.js', variant: 'pink' },
          { name: 'Python', variant: 'yellow' },
          { name: 'MongoDB', variant: 'pink' },
          { name: 'PostgreSQL', variant: 'blue' },
          { name: 'Git', variant: 'default' },
          { name: 'Docker', variant: 'blue' },
          { name: 'AWS', variant: 'yellow' },
          { name: 'Figma', variant: 'pink' }
        ].map((skill, index) => (
          <PixelCard 
            key={skill.name}
            variant={skill.variant as any}
            className="h-20"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <ShinyText text={skill.name} speed={3} className="text-sm font-semibold text-white" />
            </div>
          </PixelCard>
        ))}
      </div>
    </div>
  </section>
);

const ProjectsPage = () => (
  <section className="min-h-screen flex items-center justify-center px-6 md:px-8 relative">
    {/* Waves Background */}
    <div className="absolute inset-0 z-0">
      <Waves
        lineColor="#fff"
        backgroundColor="rgba(255, 255, 255, 0.2)"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
      />
    </div>
    {/* Dark overlay for better text readability */}
    <div className="absolute inset-0 bg-black/30 z-10"></div>
    
    <div className="max-w-6xl mx-auto relative z-20">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
        <ShinyText text="Projelerim" speed={4} className="gold-theme" />
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { id: 1, variant: "blue", title: "E-Ticaret Platformu", tech: ["React", "Next.js", "TypeScript"] },
          { id: 2, variant: "pink", title: "Sosyal Medya Uygulaması", tech: ["React Native", "Node.js", "MongoDB"] },
          { id: 3, variant: "yellow", title: "Portfolyo Websitesi", tech: ["Next.js", "Three.js", "Tailwind"] }
        ].map((project) => (
          <PixelCard key={project.id} variant={project.variant as any} className="h-96">
            <div className="absolute inset-0 p-6 flex flex-col">
              <div className="h-48 bg-gradient-to-br from-white/5 to-white/10 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm">
                <ShinyText text={`Proje ${project.id}`} speed={4} className="text-2xl font-bold" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-3">
                  <ShinyText text={project.title} speed={3} className="blue-theme" />
                </h3>
                <p className="text-gray-300 mb-4 text-sm">
                  Bu projede modern web teknolojileri kullanarak kullanıcı dostu ve performanslı bir uygulama geliştirdim.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span key={tech} className="px-3 py-1 bg-white/10 text-white rounded-full text-xs backdrop-blur-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <button className="text-blue-300 hover:text-blue-400 transition-colors text-sm font-semibold cursor-pointer">
                    <ShinyText text="Demo" speed={2} className="blue-theme" />
                  </button>
                  <button className="text-gray-300 hover:text-white transition-colors text-sm font-semibold cursor-pointer">
                    <ShinyText text="GitHub" speed={2} className="purple-theme" />
                  </button>
                </div>
              </div>
            </div>
          </PixelCard>
        ))}
      </div>
    </div>
  </section>
);

const ContactPage = () => (
  <section className="min-h-screen flex items-center justify-center px-6 md:px-8 relative">
    {/* LiquidChrome Background */}
    <div className="absolute inset-0 z-0">
      <LiquidChrome
        baseColor={[0.1, 0.2, 0.3]}
        speed={0.6}
        amplitude={0.3}
        interactive={true}
      />
    </div>
    {/* Dark overlay for better text readability */}
    <div className="absolute inset-0 bg-black/50 z-10"></div>
    
    <div className="max-w-4xl mx-auto text-center relative z-20">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
        <ShinyText text="İletişime Geçin" speed={4} className="purple-theme" />
      </h2>
      <p className="text-xl text-gray-300 mb-12">
        Yeni projeler için işbirliği yapmak ister misiniz?
      </p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <a 
          href="mailto:email@example.com"
          className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl"
        >
          <ShinyText text="Email Gönder" speed={3} className="dark-theme" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-yellow-400/50 hover:border-yellow-400/80 text-yellow-300 hover:text-yellow-200 font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:bg-yellow-400/10 cursor-pointer hover:shadow-lg shadow-yellow-400/20"
        >
          <ShinyText text="LinkedIn" speed={4} className="gold-theme" />
        </a>
      </div>
    </div>
  </section>
);

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    setMounted(true);
  }, []);

  const navigateToPage = (page: string) => {
    setCurrentPage(page);
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-white text-xl">Yükleniyor...</div>
        </div>
      </div>
    );
  }

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage />;
      case 'skills':
        return <SkillsPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={navigateToPage} />;
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Dither Background */}
      <div className="absolute inset-0 z-0">
        <Dither
          waveSpeed={0.02}
          waveFrequency={2.5}
          waveAmplitude={0.4}
          waveColor={[0.3, 0.3, 0.3]}
          colorNum={6}
          pixelSize={3}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.8}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-800/20 to-gray-900/90 z-10"></div>

      {/* Content */}
      <div className="relative z-20 min-h-screen flex flex-col">
        {/* Navigation */}
        <motion.nav 
          className="fixed top-0 left-0 right-0 z-50 w-full p-4 md:p-6 backdrop-blur-xl bg-black/30 border-b border-white/10"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <motion.button 
              onClick={() => navigateToPage('home')}
              className="text-white font-bold text-xl md:text-2xl hover:text-blue-300 transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">P</span>
                </div>
                <ShinyText text="Portfolio" speed={4} className="purple-theme" />
              </div>
            </motion.button>

            {/* Desktop Navigation with GooeyNav */}
            <div className="hidden md:flex">
              <GooeyNav
                items={[
                  { label: 'Ana Sayfa', href: '#home' },
                  { label: 'Hakkımda', href: '#about' },
                  { label: 'Yetenekler', href: '#skills' },
                  { label: 'Projeler', href: '#projects' },
                  { label: 'İletişim', href: '#contact' }
                ]}
                particleCount={15}
                particleDistances={[90, 10]}
                particleR={100}
                initialActiveIndex={['home', 'about', 'skills', 'projects', 'contact'].indexOf(currentPage)}
                animationTime={600}
                timeVariance={300}
                colors={[1, 2, 3, 1, 2, 3, 1, 4]}
                onItemClick={(index: number) => {
                  const pages = ['home', 'about', 'skills', 'projects', 'contact'];
                  navigateToPage(pages[index]);
                }}
              />
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white p-2">
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div className="w-full h-0.5 bg-white rounded"></div>
                <div className="w-full h-0.5 bg-white rounded"></div>
                <div className="w-full h-0.5 bg-white rounded"></div>
              </div>
            </button>
          </div>
        </motion.nav>

        {/* Current Page Content */}
        <div className="pt-20 md:pt-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 100, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -100, scale: 0.95 }}
              transition={{ 
                duration: 0.6, 
                ease: [0.25, 0.46, 0.45, 0.94],
                scale: { duration: 0.4 }
              }}
              className="flex-1 flex flex-col min-h-screen"
            >
              {renderCurrentPage()}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Scroll Indicator - only on home page */}
        {currentPage === 'home' && (
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="flex flex-col items-center">
              <span className="text-sm mb-2">Menüyü keşfedin</span>
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <motion.div 
                  className="w-1 h-3 bg-white/60 rounded-full mt-2"
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Footer */}
      <footer className="relative z-20 bg-black/90 py-8">
        <div className="max-w-6xl mx-auto px-6 md:px-8 text-center">
          <p className="text-gray-400">
            © 2024 [İsminiz]. Tüm hakları saklıdır.
          </p>
        </div>
      </footer>
    </div>
  );
}