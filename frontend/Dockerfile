FROM ubuntu:18.04

## set working directory
RUN apt-get update
RUN apt-get install curl -y
WORKDIR /frontend
COPY . .
RUN sh ./util/install-nodejs-npm.sh
RUN npm install
EXPOSE 3000
CMD ["sh", "start.sh"]