// src/pages/HomePage.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Variantes de animação para o container e os itens filhos
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Atraso para cada item animar em sequência
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.7 } },
};

const HomePage: React.FC = () => {
  return (
    <div className="flex-grow flex items-center justify-center text-center -mt-16">
      <motion.div
        className="container mx-auto px-4 py-8"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.h1 
          className="text-6xl font-extrabold text-rh-primary mb-4"
          variants={itemVariants}
        >
          A gestão de pessoas, <br /> simplificada e inteligente.
        </motion.h1>

        <motion.p 
          className="text-xl text-gray-600 max-w-2xl mx-auto mb-8"
          variants={itemVariants}
        >
          Nossa plataforma ajuda pequenas e médias empresas a otimizar o recrutamento, a gestão e o desenvolvimento de seus talentos.
        </motion.p>
        
        <motion.div variants={itemVariants}>
          <Link 
            to="/vagas"
            className="bg-rh-accent text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-colors duration-300 transform hover:scale-105"
          >
            Ver Vagas Abertas
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HomePage;