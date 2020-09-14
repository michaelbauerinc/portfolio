FROM portfolio_base_image
RUN apt-get install software-properties-common -y
RUN add-apt-repository ppa:deadsnakes/ppa
RUN apt-get install python3.8 -y
RUN apt-get install python3-pip -y
WORKDIR /backend
COPY . .
RUN sh setup-python-symlinks.sh
RUN pip install -r requirements.txt
EXPOSE 5000
CMD ["sh", "start.sh"]