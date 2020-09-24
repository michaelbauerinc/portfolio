FROM portfolio_base_image
RUN apt-get update
RUN apt-get install gnupg2 -y
RUN apt-get install unzip -y
RUN apt-get install dpkg-dev -y
RUN apt-get install systemd -y
RUN apt-get install apt-utils -y 
WORKDIR /nginx
COPY . .
WORKDIR /nginx/utils
RUN sh install-nginx.sh
WORKDIR /nginx
EXPOSE 80
EXPOSE 443
CMD ["sh", "start.sh"]