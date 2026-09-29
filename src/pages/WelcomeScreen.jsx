import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Globe, User } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WelcomeScreen = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });

    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        onLoadingComplete?.();
      }, 800);
    }, 2800);
    
    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-[#0A0D10] z-50 flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center space-y-6">
            <div className="flex justify-center gap-4">
              <div className="p-3 bg-[#12161D] border border-teal-500/20 rounded-full text-[#2dd4bf]">
                <Code2 className="w-8 h-8" />
              </div>
              <div className="p-3 bg-[#12161D] border border-teal-500/20 rounded-full text-[#2dd4bf]">
                <User className="w-8 h-8" />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="text-white">Welcome To My </span>
              <span className="text-[#2dd4bf] drop-shadow-[0_0_25px_rgba(45,212,191,0.4)]">
                Portfolio
              </span>
            </h1>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#12161D] border border-white/10 text-gray-300 text-sm">
              <Globe className="w-4 h-4 text-[#2dd4bf]" />
              <span>Akbar Bhekti</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;