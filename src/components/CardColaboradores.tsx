// src/components/CardColaboradores.tsx

import React from 'react';
import { motion } from 'framer-motion';
import type { IColaborador } from '../types/IColaboradores';
import { cardVariants } from '../config/animations';

// Função auxiliar para identificar o tipo de link social
const getLinkText = (url: string): string => {
  if (!url) return '';
  url = url.toLowerCase();
  if (url.includes('linkedin.com')) return 'LinkedIn';
  if (url.includes('github.com')) return 'GitHub';
  if (url.includes('lattes.cnpq.br')) return 'Lattes';
  return 'Website';
};

interface CardColaboradoresProps {
  colaborador: IColaborador;
}


const CardColaboradores: React.FC<CardColaboradoresProps> = ({ colaborador }) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transform transition-shadow duration-300 hover:shadow-2xl"
      variants={cardVariants}
    >
      <img
        src={colaborador.fotoUrl}
        alt={`Foto de ${colaborador.nome}`}
        className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-rh-accent"
      />
      <h3 className="text-xl font-bold text-rh-primary mb-1">{colaborador.nome}</h3>
      <p className="text-rh-primary/70">{colaborador.funcao}</p>
      
      {(colaborador.linkContato1 || colaborador.linkContato2) && (
        <div className="flex justify-center space-x-5 mt-5 border-t border-gray-100 pt-4">
          {colaborador.linkContato1 && (
            <a href={colaborador.linkContato1} target="_blank" rel="noopener noreferrer" className="text-rh-accent font-semibold hover:underline">
              {getLinkText(colaborador.linkContato1)}
            </a>
          )}
          {colaborador.linkContato2 && (
            <a href={colaborador.linkContato2} target="_blank" rel="noopener noreferrer" className="text-rh-accent font-semibold hover:underline">
              {getLinkText(colaborador.linkContato2)}
            </a>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default CardColaboradores;