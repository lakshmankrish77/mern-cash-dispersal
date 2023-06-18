FROM node:16.17.1

WORKDIR /client-cash-dispersal

COPY package*.json ./

RUN npm install

COPY . .

ARG BACKEND_SERVER_PORT

ENV BACKEND_SERVER_PORT $BACKEND_SERVER_PORT

#ENV PORT=3000
#ENV NODE_ENV='development'

EXPOSE 3000

CMD ["npm" , "start"]