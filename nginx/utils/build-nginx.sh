#!/bin/bash

export DEBIAN_FRONTEND=noninteractive;

# Add sources for apt-get access
echo "deb https://nginx.org/packages/ubuntu/ xenial nginx" >> /etc/apt/sources.list
echo "deb-src https://nginx.org/packages/ubuntu/ xenial nginx" >> /etc/apt/sources.list

# Authenticate package
apt-key adv --keyserver keyserver.ubuntu.com --recv-keys ABF5BD827BD9BF62;

apt-get update;

# get version number: 1.18.0 from: 1.18.0-1~xenial
NGINX_VERSION_NUMBER=$(echo $NGINX_VERSION | cut -d'-' -f 1);

# Download nginx source
apt-get source nginx=$NGINX_VERSION;

# Get nginx depenencies for .deb package build
apt-get build-dep nginx=$NGINX_VERSION -yq;

# Build .deb
ls
cd nginx-$NGINX_VERSION_NUMBER;
dpkg-buildpackage -b;