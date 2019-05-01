FROM node:latest

LABEL maintainer="Dan Blundell"

ENV NODE_ENV=development
ENV PORT=3000

COPY . /var/www
WORKDIR /var/www

RUN npm install -g nodemon@latest
RUN npm install

EXPOSE $PORT

ENTRYPOINT [ "nodemon","app.js" ]