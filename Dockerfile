FROM ubuntu:18.04
RUN apt-get update -y
RUN apt-get install curl -y
RUN apt-get install vim -y