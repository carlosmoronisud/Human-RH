// src/pages/ColaboradoresPage.tsx

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { loadArrayData } from '../services/dataLoader';
import { dataUrls } from '../config/dataUrls';

import CardColaboradores from '../components/CardColaboradores';
import { LoadingSpinner } from '../components/LoadingSpinner';
import type { IColaborador } from '../types/IColaboradores';

// Variantes para o container da grade (o efeito cascata)
const gridContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Atraso entre a animação de cada card
    },
  },
};

const ColaboradoresPage: React.FC = () => {
  const [colaboradores, setColaboradores] = useState<IColaborador[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchColaboradores = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await loadArrayData<IColaborador>(dataUrls.colaboradores);
        if (data) {
          setColaboradores(data);
        } else {
          setError('Não foi possível carregar os dados dos colaboradores.');
        }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError('Ocorreu um erro ao carregar os dados.');
      } finally {
        setLoading(false);
      }
    };

    fetchColaboradores();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center flex-grow">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <div className="text-center py-8 text-red-600 flex-grow">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-rh-primary mb-4">Nossos Colaboradores</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Conheça os talentos que formam a nossa empresa.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        variants={gridContainerVariants}
        initial="hidden"
        animate="show"
      >
        {colaboradores.map((colaborador) => (
          // O CardColaboradores já tem suas próprias `variants` que serão ativadas pelo `staggerChildren` do pai
          <CardColaboradores key={colaborador.id} colaborador={colaborador} />
        ))}
      </motion.div>
    </div>
  );
};

export default ColaboradoresPage;