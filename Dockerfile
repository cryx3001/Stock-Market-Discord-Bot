FROM node:latest

RUN mkdir -p /usr/src/bot
WORKDIR /usr/src/bot

ADD . /usr/src/bot
RUN npm install

EXPOSE 8080
CMD ["npm", "start"]