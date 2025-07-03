// src/config/animations.ts

// src/config/animations.ts
import type { Variants } from 'framer-motion';

/**
 * Animação para o CONTAINER de uma grade de cards.
 * Causa um efeito cascata nos filhos.
 */
export const gridContainerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

/**
 * Animação PADRÃO para cada CARD individual.
 * Ele será ativado pelo `gridContainerVariants` do componente pai.
 * Esta é a versão CORRIGIDA, sem a propriedade 'ease'.
 */
export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

// No futuro, podemos adicionar mais animações aqui (ex: para modais, menus, etc.)