// src/pages/EquipePage.tsx

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { loadArrayData } from '../services/dataLoader';
import { dataUrls } from '../config/dataUrls';
import type { IEquipe } from '../types/IEquipe';
import CardEquipe from '../components/CardEquipe';
import { LoadingSpinner } from '../components/LoadingSpinner';

// Reutilizando as mesmas variantes para o container
const gridContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const EquipePage: React.FC = () => {
  const [equipe, setEquipe] = useState<IEquipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEquipe = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await loadArrayData<IEquipe>(dataUrls.equipe);
        if (data) {
          setEquipe(data);
        } else {
          setError('Não foi possível carregar os dados da equipe.');
        }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError('Ocorreu um erro ao carregar os dados.');
      } finally {
        setLoading(false);
      }
    };

    fetchEquipe();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center flex-grow"><LoadingSpinner /></div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-600 flex-grow">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-rh-primary mb-4">Equipe de Desenvolvimento</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          As mentes por trás desta plataforma.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 aling-items-stretch"
        variants={gridContainerVariants}
        initial="hidden"
        animate="show"
      >
        {equipe.map((membro) => (
          <CardEquipe key={membro.id} membro={membro} />
        ))}
      </motion.div>
    </div>
  );
};

export default EquipePage;