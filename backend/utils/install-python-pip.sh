#!/bin/bash
apt-get install python3-pip -y

# Setup symlinks
ln -s /usr/bin/pip3 /usr/bin/pip
ln -s /usr/bin/python3 /usr/bin/python

# Install requirements.txt
pip install -r requirements.txt

# Enter PYTHONPATH into .bashrc for working in container
echo "export PYTHONPATH='/backend'" >> ~/.bashrc