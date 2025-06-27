'use client';

import { motion } from 'framer-motion';
import { ReactNode, memo } from 'react';

interface HoverCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  borderGradient?: boolean;
  hoverEffect?: 'lift' | 'glow' | 'scale' | 'border' | 'tilt';
}

const HoverCard = memo(function HoverCard({
  children,
  className = '',
  borderGradient = false,
  hoverEffect = 'lift'
}: HoverCardProps) {
  const baseClasses = "relative rounded-2xl bg-black/30 backdrop-blur-sm border border-white/20 transition-all duration-300 gpu-accelerated cursor-pointer";

  const hoverVariants = {
    lift: {
      y: -8,
      scale: 1.02,
      boxShadow: `0 20px 40px rgba(0,0,0,0.3)`,
      transition: { type: "spring" as const, stiffness: 300, damping: 30 }
    },
    glow: {
      scale: 1.02,
      boxShadow: `0 0 30px rgba(59, 130, 246, 0.4)`,
      transition: { duration: 0.3 }
    },
    scale: {
      scale: 1.05,
      transition: { type: "spring" as const, stiffness: 300, damping: 30 }
    },
    border: {
      borderColor: "rgba(59, 130, 246, 0.6)",
      transition: { duration: 0.3 }
    },
    tilt: {
      rotateX: 5,
      rotateY: 5,
      scale: 1.02,
      transition: { type: "spring" as const, stiffness: 300, damping: 30 }
    }
  };

  return (
    <motion.div
      className={`${baseClasses} ${className}`}
      whileHover={hoverVariants[hoverEffect]}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Border gradient effect */}
      {borderGradient && (
        <motion.div
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 blur-sm"
          whileHover={{
            opacity: 0.3,
            transition: { duration: 0.3 }
          }}
        />
      )}
      
      {/* Animated background glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0"
        whileHover={{
          opacity: 1,
          transition: { duration: 0.3 }
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Corner accent */}
      <motion.div
        className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
});

export default HoverCard; 