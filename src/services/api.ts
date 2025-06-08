// src/services/api.ts
   import axios from 'axios';

   // Cria uma instância do axios com a URL base da API
   const api = axios.create({
     baseURL: 'http://localhost:3333/api',
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