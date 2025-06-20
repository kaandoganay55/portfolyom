'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface MicroInteractionProps {
  children: ReactNode;
  type?: 'bounce' | 'shake' | 'float' | 'glow' | 'scale' | 'rotate';
  intensity?: 'light' | 'medium' | 'strong';
  className?: string;
  delay?: number;
}

export default function MicroInteraction({
  children,
  type = 'bounce',
  intensity = 'medium',
  className = '',
  delay = 0
}: MicroInteractionProps) {
  const getHoverAnimation = () => {
    const intensityValues = {
      bounce: {
        light: { y: -5, transition: { type: "spring" as const, stiffness: 400, damping: 10 } },
        medium: { y: -8, transition: { type: "spring" as const, stiffness: 400, damping: 10 } },
        strong: { y: -12, transition: { type: "spring" as const, stiffness: 400, damping: 10 } }
      },
      shake: {
        light: { x: [-2, 2, -2, 2, 0], transition: { duration: 0.4 } },
        medium: { x: [-4, 4, -4, 4, 0], transition: { duration: 0.4 } },
        strong: { x: [-6, 6, -6, 6, 0], transition: { duration: 0.4 } }
      },
      float: {
        light: { y: [-2, -4, -2], transition: { duration: 2, repeat: Infinity } },
        medium: { y: [-4, -8, -4], transition: { duration: 2, repeat: Infinity } },
        strong: { y: [-6, -12, -6], transition: { duration: 2, repeat: Infinity } }
      },
      glow: {
        light: { 
          boxShadow: "0 0 15px rgba(59, 130, 246, 0.3)",
          transition: { duration: 0.3 }
        },
        medium: { 
          boxShadow: "0 0 25px rgba(59, 130, 246, 0.5)",
          transition: { duration: 0.3 }
        },
        strong: { 
          boxShadow: "0 0 35px rgba(59, 130, 246, 0.7)",
          transition: { duration: 0.3 }
        }
      },
      scale: {
        light: { scale: 1.02, transition: { type: "spring" as const, stiffness: 300 } },
        medium: { scale: 1.05, transition: { type: "spring" as const, stiffness: 300 } },
        strong: { scale: 1.08, transition: { type: "spring" as const, stiffness: 300 } }
      },
      rotate: {
        light: { rotate: 2, transition: { type: "spring" as const, stiffness: 300 } },
        medium: { rotate: 5, transition: { type: "spring" as const, stiffness: 300 } },
        strong: { rotate: 8, transition: { type: "spring" as const, stiffness: 300 } }
      }
    };

    return intensityValues[type][intensity];
  };

  const getTapAnimation = () => {
    return { scale: 0.95, transition: { duration: 0.1 } };
  };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={getHoverAnimation()}
      whileTap={getTapAnimation()}
    >
      {children}
    </motion.div>
  );
} 