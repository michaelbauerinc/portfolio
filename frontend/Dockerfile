FROM portfolio_base_image

WORKDIR /frontend
COPY . .
RUN sh ./utils/install-nodejs-npm.sh
RUN npm install
#TODO: fix hacky production startup
RUN npm -g install serve
RUN npm install -g env-cmd
EXPOSE 3000
CMD ["sh", "start.sh"]