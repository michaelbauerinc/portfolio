FROM ubuntu:latest
RUN apt-get update -y
RUN apt-get install -y python-pip python-dev build-essential
WORKDIR /backend
COPY . .
RUN pip install -r requirements.txt
CMD ["python", "run.py"]

EXPOSE 5000