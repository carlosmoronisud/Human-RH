// src/components/Navbar.tsx

import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  // Estilo para o link da página ativa
  const activeLinkStyle = {
    color: '#00A9E0', // Sua cor 'rh-accent'
    fontWeight: 'bold',
  };

  return (
    <nav className="container mx-auto px-4 flex justify-between items-center py-4">
      {/* Logo */}
      <NavLink to="/">
        <img 
          src="https://ik.imagekit.io/8h7kfljfc/logos/3.png?updatedAt=1751538392986" 
          alt="Logo da Plataforma RH" 
          className="h-10"
        />
      </NavLink>

      {/* Links de Navegação Atualizados */}
      <ul className="flex items-center space-x-8 text-lg text-rh-primary">
        <li>
          <NavLink to="/" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}>
            Início
          </NavLink>
        </li>
        <li>
          <NavLink to="/vagas" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}>
            Vagas
          </NavLink>
        </li>
        <li>
          <NavLink to="/colaboradores" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}>
            Colaboradores
          </NavLink>
        </li>
        <li>
          <NavLink to="/equipe" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}>
            Equipe
          </NavLink>
        </li>
        <li>
          <NavLink to="/info-projeto" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}>
            O Projeto
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
