FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV MONGO_DB_URL mongodb://mongo:27017/myappdb
ENV MONGO_INITDB_ROOT_USERNAME root
ENV MONGO_INITDB_ROOT_PASSWORD password

EXPOSE 3000

CMD ["npm", "start"]
