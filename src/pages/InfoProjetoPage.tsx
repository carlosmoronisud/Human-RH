// src/pages/InfoProjetoPage.tsx

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { loadArrayData } from '../services/dataLoader';
import { dataUrls } from '../config/dataUrls';
import type { IInfoProjeto } from '../types/IInfoProjeto';
import { LoadingSpinner } from '../components/LoadingSpinner';

// Variantes para animar o container e os itens de texto em sequência
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { x: -20, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 0.5 } },
};

const InfoProjetoPage: React.FC = () => {
  const [info, setInfo] = useState<IInfoProjeto | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInfo = async () => {
      setLoading(true);
      setError(null);
      try {
        // O loader retorna um array, mas a aba 'sobre' só deve ter 1 linha de dados.
        const data = await loadArrayData<IInfoProjeto>(dataUrls.infoProjeto);
        if (data && data.length > 0) {
          setInfo(data[0]); // Pegamos o primeiro e único item do array.
        } else {
          setError('Não foi possível carregar as informações do projeto.');
        }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError('Ocorreu um erro ao carregar os dados.');
      } finally {
        setLoading(false);
      }
    };

    fetchInfo();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center flex-grow">
        <LoadingSpinner />
      </div>
    );
  }

  if (error || !info) {
    return <div className="text-center py-8 text-red-600 flex-grow">{error || 'Informações não encontradas.'}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12 flex justify-center items-start flex-grow">
      <motion.div 
        className="max-w-3xl bg-white p-10 lg:p-12 rounded-xl shadow-2xl w-full"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.h1 variants={itemVariants} className="text-4xl font-bold text-rh-primary mb-6 border-b pb-4">
          {info.titulo}
        </motion.h1>
        
        {/* A classe 'whitespace-pre-line' respeita as quebras de linha da sua planilha */}
        <motion.p variants={itemVariants} className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
          {info.conteudo}
        </motion.p>
        
        <motion.div variants={itemVariants} className="mt-8 border-t pt-6">
          <a href={info.localizacaoUrl} target="_blank" rel="noopener noreferrer" className="text-rh-accent font-semibold hover:underline inline-flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
            </svg>
            {info.localizacaoTexto}
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default InfoProjetoPage;
