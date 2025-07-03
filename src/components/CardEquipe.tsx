// src/components/CardEquipe.tsx

import React from 'react';
import { motion } from 'framer-motion';
import type { IEquipe } from '../types/IEquipe';
import { cardVariants } from '../config/animations';

// Reutilizando as MESMAS variantes de animação para manter a aplicação coesa


interface CardEquipeProps {
  membro: IEquipe;
}

const CardEquipe: React.FC<CardEquipeProps> = ({ membro }) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transform transition-shadow duration-300 hover:shadow-2xl"
      variants={cardVariants}
    >
      <img
        src={membro.logoUrl}
        alt={`Logo/Foto de ${membro.nome}`}
        className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-gray-200"
      />
      <h3 className="text-xl font-bold text-rh-primary">{membro.nome}</h3>
    </motion.div>
  );
};

export default CardEquipe;