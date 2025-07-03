// src/components/LoadingSpinner.tsx

import React from 'react';
import { motion } from 'framer-motion';

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <motion.div
        className="w-16 h-16 border-8 border-t-8 rounded-full border-gray-200 border-t-rh-accent"
        // Animação de rotação infinita
        animate={{ rotate: 360 }}
        transition={{ 
          duration: 1, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      />
      <p className="text-rh-primary font-semibold">Carregando...</p>
    </div>
  );
};