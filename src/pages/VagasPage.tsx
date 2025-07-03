// src/pages/VagasPage.tsx

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { loadArrayData } from '../services/dataLoader';
import { dataUrls } from '../config/dataUrls';
import type { IVaga } from '../types/IVaga'; // Usando o novo tipo
import CardVaga from '../components/CardVaga'; // Usando o novo card
import { LoadingSpinner } from '../components/LoadingSpinner'; // Componente de loading

// Container para a animação em cascata
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, 
    },
  },
};

const VagasPage: React.FC = () => {
  const [vagas, setVagas] = useState<IVaga[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVagas = async () => {
      setLoading(true);
      setError(null);
      
      // IMPORTANTE: Use a nova URL para as vagas aqui!
      const data = await loadArrayData<IVaga>(dataUrls.vagas); 
      
      if (data) {
        setVagas(data);
      } else {
        setError('Não foi possível carregar as vagas. Verifique a URL ou o formato dos dados.');
      }
      setLoading(false);
    };

    fetchVagas();
  }, []);

  // O componente do spinner que sugerimos na etapa anterior
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <div className="text-center py-8 text-red-600">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12 bg-rh-background min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-rh-primary mb-4">Faça Parte do Nosso Time</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Estamos sempre em busca de novos talentos para construir o futuro. Veja nossas oportunidades em aberto.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {vagas.map((vaga) => (
          <CardVaga key={vaga.id} vaga={vaga} />
        ))}
      </motion.div>

      {vagas.length === 0 && !loading && !error && (
        <p className="col-span-full text-center text-gray-500 mt-8">Nenhuma vaga encontrada no momento. Volte em breve!</p>
      )}
    </div>
  );
};

export default VagasPage;