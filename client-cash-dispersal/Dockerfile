FROM node:16.17.1

WORKDIR /client-cash-dispersal

COPY package*.json ./

RUN npm install

COPY . .

ARG REACT_APP_BACKEND_SERVER_PORT_IP

ENV REACT_APP_BACKEND_SERVER_PORT=$REACT_APP_BACKEND_SERVER_PORT_IP

ENV REACT_APP_PORT=3000
#ENV NODE_ENV='development'

EXPOSE 3000

CMD ["npm" , "start"]