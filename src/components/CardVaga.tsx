// src/components/CardVaga.tsx

import React from 'react';
import { motion } from 'framer-motion';
import type { IVaga } from '../types/IVaga'; // Importando nosso novo tipo

// Variantes de animação para o efeito de cascata (stagger)
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

interface CardVagaProps {
  vaga: IVaga;
}

const CardVaga: React.FC<CardVagaProps> = ({ vaga }) => {
  return (
    // Usamos motion.a para que o card inteiro seja um link animado
    <motion.a
      href={vaga.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-rh-secondary rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 border border-gray-200"
      variants={cardVariants} // Aplicando as variantes de animação
    >
      <img src={vaga.imagemUrl} alt={`Imagem para a vaga ${vaga.titulo}`} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-rh-primary mb-2">{vaga.titulo}</h3>
        <p className="text-gray-700 leading-relaxed">{vaga.descricao}</p>      

      </div>
    </motion.a>
  );
};

export default CardVaga