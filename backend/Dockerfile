FROM portfolio_base_image
RUN apt-get update
WORKDIR /backend
COPY . .
RUN sh ./utils/install-python-pip.sh
EXPOSE 5000
CMD ["sh", "start.sh"]