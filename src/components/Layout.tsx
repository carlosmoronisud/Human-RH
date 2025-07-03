// src/components/Layout.tsx

import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer'; // Importando o novo rodapé

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-rh-background">
      <Header />
      <main className="flex-grow flex flex-col">
        {/* As páginas serão renderizadas aqui */}
        <Outlet />
      </main>
      <Footer /> {/* Adicionando o rodapé no final */}
    </div>
  );
};

export default Layout;