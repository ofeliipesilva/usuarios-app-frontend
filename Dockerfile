# Estágio de build
   FROM node:18-alpine as build

   # Define o diretório de trabalho
   WORKDIR /app

   # Copia os arquivos de configuração
   COPY package.json yarn.lock ./

   # Instala as dependências
   RUN yarn install

   # Copia o restante dos arquivos do projeto
   COPY . .

   # Constrói a aplicação
   RUN yarn build

   # Estágio de produção
   FROM nginx:alpine

   # Copia os arquivos de build para o diretório do Nginx
   COPY --from=build /app/dist /usr/share/nginx/html

   # Copia a configuração personalizada do Nginx (opcional)
   # COPY nginx.conf /etc/nginx/conf.d/default.conf

   # Expõe a porta 80
   EXPOSE 80

   # Comando para iniciar o Nginx
   CMD ["nginx", "-g", "daemon off;"]