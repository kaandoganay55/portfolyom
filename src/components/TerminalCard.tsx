'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TerminalCardProps {
  commands?: string[];
  className?: string;
}

const TerminalCard = ({ 
  commands = ['create-react-app@latest', 'npm run dev', 'git commit -m "portfolio"'],
  className = ''
}: TerminalCardProps) => {
  const [copied, setCopied] = useState(false);
  const [currentCommand, setCurrentCommand] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCommand((prev) => (prev + 1) % commands.length);
    }, 4000); // Her 4 saniyede bir komut değişir

    return () => clearInterval(interval);
  }, [commands.length]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`npx ${commands[currentCommand]}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Kopyalama başarısız:', err);
    }
  };

  return (
    <motion.div 
      className={`terminal-card-modern ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="terminal-wrap-modern">
        <div className="terminal-modern">
          <div className="terminal-head-modern">
            <p className="terminal-title-modern">
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 15L10 12L7 9M13 15H17M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"></path>
              </svg>
              Terminal
            </p>

            <motion.button 
              className="terminal-copy-btn-modern"
              onClick={handleCopy}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {copied ? (
                  <path d="M9 5H7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2V7a2 2 0 0 0 -2 -2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2m-6 9l2 2l4 -4" />
                ) : (
                  <>
                    <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                    <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
                  </>
                )}
              </svg>
            </motion.button>
          </div>

          <div className="terminal-body-modern">
            <div className="terminal-pre-modern">
              <code className="terminal-prompt-modern">-&nbsp;</code>
              <code className="terminal-command-modern">npx&nbsp;</code>
              <code 
                className="terminal-cmd-modern"
                data-cmd={commands[currentCommand]}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TerminalCard; 