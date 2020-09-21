FROM portfolio_base_image

## set working directory
WORKDIR /frontend
COPY . .
RUN sh ./utils/install-nodejs-npm.sh
RUN npm install
RUN npm install -g serve
EXPOSE 3000
CMD ["sh", "start.sh"]