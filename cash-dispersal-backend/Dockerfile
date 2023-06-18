FROM node:16.17.1

RUN npm install -g nodemon

WORKDIR /cash-dispersal-backend

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=5002

EXPOSE 5002

# Use script specified in package.json
CMD ["npm", "run", "dev"]