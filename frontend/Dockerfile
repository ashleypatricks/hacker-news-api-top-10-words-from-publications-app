FROM node:alpine

ENV CI=true

WORKDIR /app

COPY package.json ./

RUN yarn install

COPY ./ ./

EXPOSE 3000

CMD ["yarn", "start"]