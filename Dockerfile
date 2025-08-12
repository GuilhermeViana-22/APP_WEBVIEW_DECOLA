# Dockerfile para web app Flutter
FROM nginx:alpine

# Remove a configuração padrão do nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia os arquivos do build do Flutter para o diretório do nginx
COPY . /usr/share/nginx/html/

# Configura nginx para rodar na porta 5000
RUN sed -i 's/listen       80;/listen       5000;/' /etc/nginx/conf.d/default.conf

# Expõe a porta 5000
EXPOSE 5000

# Inicia o nginx
CMD ["nginx", "-g", "daemon off;"]
