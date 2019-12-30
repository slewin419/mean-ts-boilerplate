FROM node:10

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

ADD nodemon.json .

RUN npm install

COPY . /app

EXPOSE 3000
EXPOSE 27017

CMD [ "npm", "run", "start:dev"]