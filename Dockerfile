FROM node:14

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY ./ ./

RUN yarn build 

EXPOSE 3000

CMD npx serve -p 3000 build