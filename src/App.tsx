// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importando o Layout que contém o Header e o Footer
import Layout from './components/Layout';

// Importando TODAS as nossas páginas
import HomePage from './pages/HomePage';
import VagasPage from './pages/VagasPage';
import ColaboradoresPage from './pages/ColaboradoresPage';
import EquipePage from './pages/EquipePage';
import InfoProjetoPage from './pages/InfoProjetoPage'; // Página que ainda vamos criar

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* A rota principal usa o Layout. Todas as rotas filhas 
            serão renderizadas dentro dele, ganhando o Header e o Footer. */}
        <Route path="/" element={<Layout />}>
          {/* A página inicial */}
          <Route index element={<HomePage />} />

          {/* As outras páginas da nossa plataforma */}
          <Route path="vagas" element={<VagasPage />} />
          <Route path="colaboradores" element={<ColaboradoresPage />} />
          <Route path="equipe" element={<EquipePage />} />
          <Route path="info-projeto" element={<InfoProjetoPage />} />
          
          {/* Rotas antigas como /visualizacoes e /publicacoes foram removidas */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;