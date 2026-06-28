# syntax=docker/dockerfile:1
#usamos una imagen ligera de node, en este caso node alpine
FROM node:24-alpine
# Actualizar los paquetes del sistema para aplicar parches de seguridad
RUN apk update && apk upgrade --no-cache

#indicamos el directorio donde va a trabajar dentro del contenedor
WORKDIR /app
#copiamos el archivo package
COPY package*.json ./

#excluimos las dependencias de desarrollo
RUN npm install --omit=dev

COPY . .

#indicamos el puerto que usamos
EXPOSE 3001

#arrancamos la aplicacion 
CMD ["npm", "start"]
