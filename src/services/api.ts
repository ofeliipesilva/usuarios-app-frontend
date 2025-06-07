// src/services/api.ts
   import axios from 'axios';

   // Cria uma instância do axios com a URL base da API
   const api = axios.create({
     baseURL: 'http://localhost:3333/api',
   });

   export default api;