## base image
FROM node:alpine

## set working directory
WORKDIR /frontend
COPY package.json .
RUN npm install
COPY . .

EXPOSE 3000
CMD ["npm", "start"]