'use client';

import { motion } from 'framer-motion';
import { ReactNode, memo } from 'react';

interface AnimatedButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'glow';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
}

const AnimatedButton = memo(function AnimatedButton({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false
}: AnimatedButtonProps) {
  const baseClasses = "relative font-semibold rounded-full transition-all duration-300 cursor-pointer touch-target overflow-hidden";
  
  const sizeClasses = {
    sm: "py-2 px-4 text-sm",
    md: "py-3 px-6 text-base",
    lg: "py-4 px-8 text-lg"
  };

  const variantClasses = {
    primary: "bg-gradient-to-r from-pink-500 to-orange-500 text-white shadow-lg",
    secondary: "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg",
    outline: "border-2 border-yellow-400/50 text-yellow-300 backdrop-blur-sm",
    glow: "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg"
  };

  const hoverEffects = {
    primary: "hover:from-pink-600 hover:to-orange-600 hover:shadow-xl hover:shadow-pink-500/25",
    secondary: "hover:from-purple-600 hover:to-blue-600 hover:shadow-xl hover:shadow-purple-500/25",
    outline: "hover:border-yellow-400/80 hover:bg-yellow-400/10 hover:shadow-lg hover:shadow-yellow-400/20",
    glow: "hover:from-cyan-600 hover:to-purple-600 hover:shadow-xl hover:shadow-cyan-500/25"
  };

  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${hoverEffects[variant]} ${className} gpu-accelerated`;

  const ButtonContent = () => (
    <motion.div
      className={buttonClasses}
      whileHover={{ 
        scale: 1.05, 
        y: -2,
        transition: { 
          type: "spring", 
          stiffness: 400, 
          damping: 25,
          duration: 0.3
        }
      }}
      whileTap={{ 
        scale: 0.98,
        transition: { duration: 0.1, ease: "easeOut" }
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0"
        whileHover={{ 
          opacity: 1,
          x: ['-100%', '100%'],
          transition: { 
            x: { duration: 0.6, ease: "easeInOut" },
            opacity: { duration: 0.2 }
          }
        }}
      />
      
      {/* Glow effect for glow variant */}
      {variant === 'glow' && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 blur-xl opacity-50"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}
      
      {/* Pulse effect for outline variant */}
      {variant === 'outline' && (
        <motion.div
          className="absolute inset-0 border-2 border-yellow-400/30 rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}
      
      <span className="relative z-10">{children}</span>
    </motion.div>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
      >
        <ButtonContent />
      </motion.a>
    );
  }

  return (
    <motion.button onClick={onClick} disabled={disabled}>
      <ButtonContent />
    </motion.button>
  );
});

export default AnimatedButton; 