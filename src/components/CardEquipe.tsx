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
  // Verifica se o membro atual é você para adicionar as informações extras
  const isCarlos = membro.nome.toLowerCase().includes('carlos');

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

      {/* --- ALTERAÇÃO AQUI --- */}
      {/* Adicionamos uma condição para mostrar suas informações extras */}
      {isCarlos && (
        <div className="mt-4 pt-4 border-t w-full">
          <p className="text-gray-600 mb-4">Desenvolvedor Fullstack Junior</p>
          <div className="flex justify-center items-center gap-3">
            {/* Botão LinkedIn (Azul) */}
            <a
              href={'https://www.linkedin.com/in/carlosmoronigarcia'}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.377 0-1.964.72-2.298 1.333h.016v-1.15H8.094v7.225h2.408z"/>
              </svg>
              LinkedIn
            </a>

            {/* Botão GitHub (Verde) */}
            <a
              href={'https://github.com/carlosmoronisud'}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full transition duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
              GitHub
            </a>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default CardEquipe;
