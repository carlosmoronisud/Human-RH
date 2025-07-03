// src/config/dataUrls.ts

/**
 * Arquivo centralizado para gerenciar todas as URLs de API (Google Apps Scripts) 
 * da aplicação da Plataforma de RH.
 */

// --- URLs Base dos Nossos Scripts ---

// 1. URL do script que era de "Visualizações" e foi reaproveitado para as VAGAS.
const VAGAS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw0izhDadafEU5bZ-x_aMtS58QsGLbJmyZOj4hAZG19YOT6yaUBXNRqPgz6WlzNP7A6Xw/exec';

// 2. URL do script MESTRE, que busca dados de múltiplas abas (Colaboradores, Equipe, etc).
const PROJETO_RH_MULTISHEET_URL = 'https://script.google.com/macros/s/AKfycbyanWEyw6WfEDEuvZARLx32f4D-cpd4F86d8xbkEPbKmVdl9F5VbGnobBYsPBK-28S_/exec';


// --- Interface de Tipagem ---

// Define o formato do nosso objeto de URLs, contendo apenas o que o projeto de RH precisa.
interface DataUrls {
  vagas: string;
  colaboradores: string;
  equipe: string;
  infoProjeto: string;
}


// --- Objeto Exportado ---

// Exporta o objeto final com todas as URLs prontas para serem usadas na aplicação.
export const dataUrls: DataUrls = {
  // URL para a página de Vagas
  vagas: VAGAS_SCRIPT_URL,

  // As 3 URLs abaixo usam o mesmo script mestre, apenas mudando o parâmetro '?sheet='
  
  // URL para a página de Colaboradores (funcionários), buscando da aba 'membros'
  colaboradores: `${PROJETO_RH_MULTISHEET_URL}?sheet=membros`,

  // URL para a página da Equipe de desenvolvimento, buscando da aba 'financiadores'
  equipe: `${PROJETO_RH_MULTISHEET_URL}?sheet=financiadores`,

  // URL para a página de Informações do Projeto, buscando da aba 'sobre'
  infoProjeto: `${PROJETO_RH_MULTISHEET_URL}?sheet=sobre`,
};