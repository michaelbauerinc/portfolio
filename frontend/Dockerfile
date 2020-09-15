FROM portfolio_base_image

## set working directory
WORKDIR /frontend
COPY . .
RUN sh ./utils/install-nodejs-npm.sh
RUN npm install
EXPOSE 3000
CMD ["sh", "start.sh"]