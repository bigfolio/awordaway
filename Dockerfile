FROM node:12.14.1

RUN rm -rf node_modules package-lock.json

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

RUN npm start
COPY . .

CMD ["node", "index.js"]
