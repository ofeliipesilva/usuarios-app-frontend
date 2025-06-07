// src/types/index.ts

   // Interface para representar um usuário básico
   export interface Usuario {
     id: number;
     nome: string;
     email: string;
     avatar?: string;
   }

   // Interface para representar detalhes adicionais de um usuário
   export interface UsuarioDetalhes extends Usuario {
     telefone: string;
     endereco: string;
     dataCadastro: string;
     departamento: string;
     cargo: string;
   }