// src/services/api.ts
   import axios from 'axios';

   // Obtém a URL base da API das variáveis de ambiente
   const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3333/api';

   // Cria uma instância do axios com a URL base da API
   const api = axios.create({
     baseURL: apiUrl,
   });

   // Adiciona um interceptor para tratar erros
   api.interceptors.response.use(
     response => response,
     error => {
       console.error('Erro na requisição:', error);
       return Promise.reject(error);
     }
   );

   export default api;