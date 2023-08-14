FROM node:12-alpine

WORKDIR /usr/src/app

CMD [ -d "node_modules" ] && npm run start || npm ci && npm run start
