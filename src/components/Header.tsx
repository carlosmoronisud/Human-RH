// src/components/Header.tsx

import React, { useState } from 'react';
import { 
  motion, 
  useScroll, 
  useMotionValueEvent 
} from 'framer-motion';
import Navbar from './Navbar';

const Header: React.FC = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    
    // Esconde o header se o scroll for para baixo e passar de 200px
    if (previous !== undefined && latest > previous && latest > 150) {
      setHidden(true);
    } 
    // Mostra o header se o scroll for para cima
    else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      // As variantes controlam a posição (visível ou escondido)
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      // O estado 'hidden' decide qual variante usar
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="w-full bg-white shadow-md sticky top-0 z-[1000]"
    >
      <Navbar />
    </motion.header>
  );
};

export default Header;
