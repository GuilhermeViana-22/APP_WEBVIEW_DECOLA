# Dockerfile para web app Flutter
FROM nginx:alpine

# Remove a configuração padrão do nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia os arquivos do build do Flutter para o diretório do nginx
COPY . /usr/share/nginx/html/

# Expõe a porta 80
EXPOSE 80

# Inicia o nginx
CMD ["nginx", "-g", "daemon off;"]
