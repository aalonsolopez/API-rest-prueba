ARG port=3000

FROM node:18

LABEL name="API-rest-prueba"

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE ${port}

ENTRYPOINT ["npm", "run", "start"]