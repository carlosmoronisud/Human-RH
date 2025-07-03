import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-rh-primary text-white text-center p-4 mt-auto">
      <p>&copy; {new Date().getFullYear()} Plataforma de RH. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;