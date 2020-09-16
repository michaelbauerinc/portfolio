FROM portfolio_base_image
WORKDIR /backend
COPY . .
RUN sh ./utils/install-python-pip.sh
EXPOSE 5000
CMD ["sh", "start.sh"]