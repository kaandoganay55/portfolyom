'use client';

import { useState, useEffect, useCallback } from 'react';

interface UsePerformantScrollReturn {
  scrollY: number;
  scrollDirection: 'up' | 'down' | null;
  isScrolling: boolean;
}

export function usePerformantScroll(): UsePerformantScrollReturn {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = useCallback(() => {
    let ticking = false;
    let scrollTimeout: NodeJS.Timeout;

    const updateScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine scroll direction
      if (currentScrollY > scrollY) {
        setScrollDirection('down');
      } else if (currentScrollY < scrollY) {
        setScrollDirection('up');
      }
      
      setScrollY(currentScrollY);
      setIsScrolling(true);
      
      // Clear previous timeout and set new one
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
        setScrollDirection(null);
      }, 150);
      
      ticking = false;
    };

    if (!ticking) {
      requestAnimationFrame(updateScroll);
      ticking = true;
    }
  }, [scrollY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return { scrollY, scrollDirection, isScrolling };
} 