
FROM node:24-alpine AS build

# Actualizar los paquetes del sistema para aplicar parches de seguridad
RUN apk update && apk upgrade --no-cache

WORKDIR /app

# copiamos el archivo de package
COPY package*.json ./

# instalamos las dependencias del proyecto
RUN npm install

# Copiamos el código fuente
COPY . .
#pasamos la variable de la url del backend
ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=$REACT_APP_API_URL

# creamos la aplicacion
RUN npm run build


#para la etapa del servidor web copiamos nginx
FROM nginx:alpine

# copiamos los archivos que tenemos en la carpeta public
COPY --from=build /app/build /usr/share/nginx/html

# abrimos el puerto del servidor web
EXPOSE 80

# iniciamos el servidor web
CMD ["nginx", "-g", "daemon off;"]
