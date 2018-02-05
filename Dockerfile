FROM node:9.5.0-alpine

WORKDIR /usr/app

COPY package.json .
RUN npm install -g nodemon
RUN npm install --quiet

COPY . .