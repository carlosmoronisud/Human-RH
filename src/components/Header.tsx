// src/components/Header.tsx

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';

const Header: React.FC = () => {
  return (
    <motion.header
      className="w-full bg-white shadow-md sticky top-0 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Navbar />
    </motion.header>
  );
};

export default Header;