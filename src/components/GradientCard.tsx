'use client';

import { motion } from 'framer-motion';
import { ReactNode, memo } from 'react';

interface GradientCardProps {
  children: ReactNode;
  className?: string;
  variant?: 'green' | 'blue' | 'purple' | 'pink' | 'yellow' | 'cyan';
}

const GradientCard = memo(function GradientCard({
  children,
  className = '',
  variant = 'green'
}: GradientCardProps) {
  
  const gradientVariants = {
    green: 'linear-gradient(163deg, #00ff75 0%, #3700ff 100%)',
    blue: 'linear-gradient(163deg, #00d4ff 0%, #5b00ff 100%)',
    purple: 'linear-gradient(163deg, #8b5cf6 0%, #ec4899 100%)',
    pink: 'linear-gradient(163deg, #ec4899 0%, #8b5cf6 100%)',
    yellow: 'linear-gradient(163deg, #fbbf24 0%, #f59e0b 100%)',
    cyan: 'linear-gradient(163deg, #06b6d4 0%, #3b82f6 100%)'
  };

  const glowColors = {
    green: 'rgba(0, 255, 117, 0.30)',
    blue: 'rgba(0, 212, 255, 0.30)',
    purple: 'rgba(139, 92, 246, 0.30)',
    pink: 'rgba(236, 72, 153, 0.30)',
    yellow: 'rgba(251, 191, 36, 0.30)',
    cyan: 'rgba(6, 182, 212, 0.30)'
  };

  return (
    <motion.div
      className={`gradient-card-outer ${className}`}
      style={{
        backgroundImage: gradientVariants[variant]
      }}
      whileHover={{
        boxShadow: `0px 0px 30px 1px ${glowColors[variant]}`,
        transition: { duration: 0.3 }
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="gradient-card-inner"
        whileHover={{
          scale: 0.98,
          transition: { duration: 0.2 }
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
});

export default GradientCard; 