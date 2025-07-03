// src/types/IColaborador.ts

export interface IColaborador {
  id: string;
  nome: string;
  funcao: string;
  fotoUrl: string;
  linkContato1?: string; // Opcional, caso a célula esteja vazia
  linkContato2?: string; // Opcional, caso a célula esteja vazia
  tipo?: string; // Opcional, pode ser 'novo' ou 'antigo'
}