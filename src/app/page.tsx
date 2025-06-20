'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ShinyText from '@/components/ShinyText';
import PixelCard from '@/components/PixelCard';
import LiquidChrome from '@/components/LiquidChrome';
import GooeyNav from '@/components/GooeyNav';
import Waves from '@/components/Waves';
import AnimatedButton from '@/components/AnimatedButton';
import AnimatedSection from '@/components/AnimatedSection';
import HoverCard from '@/components/HoverCard';


// Dynamically import Dither component to avoid SSR issues with Three.js
const Dither = dynamic(() => import('@/components/Dither'), { ssr: false });

// Enhanced animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12
    }
  }
};

// Page Components
const HomePage = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  return (
    <motion.div 
      className="min-h-screen"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20"></div>
        
        <motion.div 
          className="container max-w-6xl mx-auto text-center relative z-10"
          variants={itemVariants}
        >
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            variants={itemVariants}
          >
            <motion.div 
              className="mb-2 sm:mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Kaan Doğanay
            </motion.div>
          </motion.h1>
          
          <motion.div 
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto px-4"
            variants={itemVariants}
          >
            <ShinyText text="Bilgisayar Mühendisi & Full Stack Developer" speed={5} className="gold-theme" />
          </motion.div>
          
          <motion.p 
            className="text-sm sm:text-base md:text-lg text-gray-400 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4"
            variants={itemVariants}
          >
            Balıkesir Üniversitesi Bilgisayar Mühendisliği mezunu. React, Next.js, MongoDB, Firebase 
            ve Python ile modern web uygulamaları geliştiriyorum. Yapay zeka öğrenmesi alanında kendimi 
            geliştirmeye devam ediyorum.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center px-4"
            variants={itemVariants}
          >
            <AnimatedButton 
              onClick={() => onNavigate('projects')}
              variant="primary"
              size="lg"
            >
              <ShinyText text="Projelerimi Görün" speed={3} className="dark-theme" />
            </AnimatedButton>
            
            <AnimatedButton 
              onClick={() => onNavigate('contact')}
              variant="outline"
              size="lg"
            >
              <ShinyText text="İletişime Geçin" speed={4} className="gold-theme" />
            </AnimatedButton>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-white/30 rounded-full p-1"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-white rounded-full mx-auto"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* What I Do Section */}
      <AnimatedSection 
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8"
        direction="up"
        delay={0.2}
      >
        <div className="container max-w-6xl mx-auto">
          <AnimatedSection 
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 sm:mb-12 text-center"
            direction="scale"
            delay={0.1}
          >
            <ShinyText text="Uzmanlık Alanlarım" speed={4} className="blue-theme" />
          </AnimatedSection>
          
          <AnimatedSection 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
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
                  className="h-48 sm:h-56 md:h-64 p-4 sm:p-6 shadow-2xl shadow-black/40 hover:shadow-3xl hover:shadow-purple-500/20 transition-all duration-500"
                  hoverEffect={service.hoverEffect}
                  borderGradient={true}
                >
                  <div className="w-full h-full flex flex-col items-center text-center">
                    <motion.div 
                      className="text-3xl sm:text-4xl mb-3 sm:mb-4"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {service.icon}
                    </motion.div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">
                      <ShinyText text={service.title} speed={3} className="gold-theme" />
                    </h3>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </HoverCard>
              </motion.div>
            ))}
          </AnimatedSection>
        </div>
      </AnimatedSection>

      {/* Call to Action Section */}
      <motion.section 
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ShinyText text="İletişime Geçin" speed={3} className="pink-theme" />
          </motion.h2>
          
          <motion.p 
            className="text-sm sm:text-base md:text-lg text-gray-400 mb-6 sm:mb-8 leading-relaxed px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Yeni projeler ve işbirlikleri için benimle iletişime geçebilirsiniz.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <AnimatedButton 
              onClick={() => onNavigate('contact')}
              variant="glow"
              size="lg"
            >
              <ShinyText text="Hemen Başlayalım" speed={4} className="dark-theme" />
            </AnimatedButton>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

const AboutPage = () => (
  <motion.section 
    className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 relative"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
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
    
    <div className="container max-w-6xl mx-auto relative z-20">
      <motion.h2 
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 sm:mb-12 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <ShinyText text="Hakkımda" speed={4} className="purple-theme" />
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
                     <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">
             Kaan Doğanay
           </h3>
           <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed">
             Balıkesir Üniversitesi Bilgisayar Mühendisliği mezunuyum. Modern web teknolojileri 
             ile kullanıcı deneyimini ön planda tutan uygulamalar geliştirmeye odaklanıyorum.
           </p>
           <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed">
             React, Next.js, MongoDB, Firebase gibi teknolojilerle frontend ve backend geliştirme 
             yapıyorum. Aynı zamanda Python ile yapay zeka alanında kendimi geliştirmeye devam ediyorum.
           </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ y: -5 }}
        >
                     <PixelCard variant="blue" className="h-64 sm:h-72 md:h-full hover-effect cursor-pointer shadow-2xl shadow-blue-500/20 hover:shadow-3xl hover:shadow-blue-500/30 transition-all duration-300" disablePixels={true}>
             <div className="w-full h-full p-4 sm:p-6 md:p-8 flex flex-col">
              <h4 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">
                <ShinyText text="Deneyim Alanlarım" speed={3} className="gold-theme" />
              </h4>
              <ul className="space-y-3 sm:space-y-4 text-gray-300 flex-1">
                <motion.li 
                  className="flex items-center"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-400 rounded-full mr-3 sm:mr-4 animate-pulse"></span>
                                     <ShinyText text="React & Next.js" speed={4} className="blue-theme" />
                 </motion.li>
                 <motion.li 
                   className="flex items-center"
                   whileHover={{ x: 5 }}
                   transition={{ type: "spring", stiffness: 300 }}
                 >
                   <span className="w-2 h-2 sm:w-3 sm:h-3 bg-purple-400 rounded-full mr-3 sm:mr-4 animate-pulse"></span>
                   <ShinyText text="MongoDB & Firebase" speed={4} className="purple-theme" />
                 </motion.li>
                 <motion.li 
                   className="flex items-center"
                   whileHover={{ x: 5 }}
                   transition={{ type: "spring", stiffness: 300 }}
                 >
                   <span className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full mr-3 sm:mr-4 animate-pulse"></span>
                   <ShinyText text="Python & AI" speed={4} className="text-green-300" />
                 </motion.li>
                 <motion.li 
                   className="flex items-center"
                   whileHover={{ x: 5 }}
                   transition={{ type: "spring", stiffness: 300 }}
                 >
                   <span className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full mr-3 sm:mr-4 animate-pulse"></span>
                   <ShinyText text="TailwindCSS" speed={4} className="gold-theme" />
                </motion.li>
              </ul>
            </div>
          </PixelCard>
        </motion.div>
      </div>
    </div>
  </motion.section>
);

const SkillsPage = () => (
  <motion.section 
    className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 relative"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
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
    
    <div className="container max-w-6xl mx-auto relative z-20">
      <motion.h2 
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 sm:mb-12 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <ShinyText text="Teknolojiler" speed={4} className="blue-theme" />
      </motion.h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
        {[
          { name: 'React', variant: 'blue' },
          { name: 'Next.js', variant: 'blue' },
          { name: 'MongoDB', variant: 'yellow' },
          { name: 'Firebase', variant: 'yellow' }, 
          { name: 'TailwindCSS', variant: 'pink' },
          { name: 'Node.js', variant: 'pink' },
          { name: 'Express.js', variant: 'default' },
          { name: 'Python', variant: 'blue' },
          { name: 'JavaScript', variant: 'yellow' },
          { name: 'HTML/CSS', variant: 'pink' },
          { name: 'Git', variant: 'default' },
          { name: 'AI/ML', variant: 'blue' }
        ].map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.1,
              type: "spring",
              stiffness: 200 
            }}
            whileHover={{ 
              scale: 1.1, 
              y: -5,
              transition: { type: "spring", stiffness: 300 }
            }}
            whileTap={{ scale: 0.95 }}
          >
                          <PixelCard 
                variant={skill.variant as 'blue' | 'yellow' | 'pink' | 'default'}
                className="h-16 sm:h-18 md:h-20 hover-effect touch-target cursor-pointer shadow-xl shadow-black/30 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
                disablePixels={true}
              >
                <div className="w-full h-full flex items-center justify-center">
                <ShinyText 
                  text={skill.name} 
                  speed={3} 
                  className="text-xs sm:text-sm font-semibold text-white text-center" 
                />
              </div>
            </PixelCard>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

const ProjectsPage = () => (
  <motion.section 
    className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 relative"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
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
    
    <div className="container max-w-6xl mx-auto relative z-20">
      <motion.h2 
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 sm:mb-12 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <ShinyText text="Projelerim" speed={4} className="gold-theme" />
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {[
          { id: 1, variant: "blue", title: "E-Ticaret Platformu", tech: ["React", "Next.js", "TypeScript"] },
          { id: 2, variant: "pink", title: "Sosyal Medya Uygulaması", tech: ["React Native", "Node.js", "MongoDB"] },
          { id: 3, variant: "yellow", title: "Portfolyo Websitesi", tech: ["Next.js", "Three.js", "Tailwind"] }
        ].map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ y: -10, scale: 1.02 }}
          >
            <PixelCard variant={project.variant as 'blue' | 'yellow' | 'pink' | 'default'} className="h-80 sm:h-88 md:h-96 hover-effect cursor-pointer shadow-2xl shadow-black/40 hover:shadow-4xl hover:shadow-purple-500/20 transition-all duration-500 premium-card" disablePixels={true}>
              <div className="w-full h-full p-4 sm:p-6 flex flex-col">
                <motion.div 
                  className="h-32 sm:h-40 md:h-48 bg-gradient-to-br from-white/5 to-white/10 rounded-xl flex items-center justify-center mb-4 sm:mb-6 backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <ShinyText text={`Proje ${project.id}`} speed={4} className="text-lg sm:text-xl md:text-2xl font-bold" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
                    <ShinyText text={project.title} speed={3} className="blue-theme" />
                  </h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">
                    Bu projede modern web teknolojileri kullanarak kullanıcı dostu ve performanslı bir uygulama geliştirdim.
                  </p>
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span 
                        key={tech} 
                        className="px-2 sm:px-3 py-1 bg-white/10 text-white rounded-full text-xs backdrop-blur-sm"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: (index * 0.2) + (techIndex * 0.1) + 0.5 }}
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  <div className="flex gap-3 sm:gap-4">
                    <motion.button 
                      className="text-blue-300 hover:text-blue-400 transition-colors text-xs sm:text-sm font-semibold cursor-pointer touch-target"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ShinyText text="Demo" speed={2} className="blue-theme" />
                    </motion.button>
                    <motion.button 
                      className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm font-semibold cursor-pointer touch-target"
                      whileHover={{ scale: 1.1 }}
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
  </motion.section>
);

const ContactPage = () => (
  <motion.section 
    className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 relative"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
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
    
    <div className="container max-w-4xl mx-auto text-center relative z-20">
      <motion.h2 
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 sm:mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <ShinyText text="İletişime Geçin" speed={4} className="purple-theme" />
      </motion.h2>
      
             <motion.p 
         className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-12 px-4 leading-relaxed"
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.6, delay: 0.2 }}
       >
         Benimle iletişime geçmek için aşağıdaki bağlantıları kullanabilirsiniz.
       </motion.p>
      
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
        <motion.a 
          href="mailto:email@example.com"
          className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl touch-target"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <ShinyText text="Email Gönder" speed={3} className="dark-theme" />
        </motion.a>
        
        <motion.a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-yellow-400/50 hover:border-yellow-400/80 text-yellow-300 hover:text-yellow-200 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 hover:bg-yellow-400/10 cursor-pointer hover:shadow-lg shadow-yellow-400/20 touch-target"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <ShinyText text="LinkedIn" speed={4} className="gold-theme" />
        </motion.a>
      </div>
      
    </div>
  </motion.section>
);

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navigateToPage = (page: string) => {
    setCurrentPage(page);
    setMobileMenuOpen(false); // Close mobile menu when navigating
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
              <ShinyText text="Kaan Doğanay" speed={4} className="purple-theme" />
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
            <motion.button 
              className="md:hidden text-white p-2 touch-target"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
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
                className="fixed top-20 right-4 w-64 bg-black/90 backdrop-blur-xl border border-white/20 rounded-2xl p-6 z-50 md:hidden"
                initial={{ opacity: 0, scale: 0.9, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
              >
                <div className="space-y-4">
                  {[
                    { label: 'Ana Sayfa', page: 'home', icon: '🏠' },
                    { label: 'Hakkımda', page: 'about', icon: '👨‍💻' },
                    { label: 'Yetenekler', page: 'skills', icon: '⚡' },
                    { label: 'Projeler', page: 'projects', icon: '🚀' },
                    { label: 'İletişim', page: 'contact', icon: '📞' }
                  ].map((item, index) => (
                    <motion.button
                      key={item.page}
                      onClick={() => navigateToPage(item.page)}
                      className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 touch-target ${
                        currentPage === item.page 
                          ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30' 
                          : 'hover:bg-white/10'
                      }`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="text-xl">{item.icon}</span>
                      <span className="text-white font-medium">{item.label}</span>
                      {currentPage === item.page && (
                        <motion.div
                          className="ml-auto w-2 h-2 bg-blue-400 rounded-full"
                          layoutId="activeDot"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </motion.button>
                  ))}
                </div>
                
                {/* Social Links */}
                <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="flex justify-center space-x-4">
                    <motion.a
                      href="https://www.linkedin.com/in/kaan-do%C4%9Fanay-389428359/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center hover:from-blue-600 hover:to-blue-700 transition-all duration-300 touch-target shadow-lg"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </motion.a>
                    <motion.a
                      href="https://github.com/kaandoganay55"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full flex items-center justify-center hover:from-gray-600 hover:to-gray-700 transition-all duration-300 touch-target shadow-lg"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

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
      <footer className="relative z-20 bg-black/90 py-6 sm:py-8">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                         <p className="text-gray-400 text-sm sm:text-base text-center sm:text-left">
               © 2024 Kaan Doğanay. Tüm hakları saklıdır.
             </p>
            
            <div className="flex space-x-4 sm:space-x-6">
              <motion.a
                href="https://www.linkedin.com/in/kaan-do%C4%9Fanay-389428359/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors text-sm sm:text-base touch-target flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>LinkedIn</span>
              </motion.a>
              <motion.a
                href="https://github.com/kaandoganay55"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base touch-target flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>GitHub</span>
              </motion.a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}