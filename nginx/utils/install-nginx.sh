#!/bin/bash
apt-get update; apt-get upgrade -yq;

export DEBIAN_FRONTEND=noninteractive;

apt-get install iputils-ping libssl-dev;

# Save version numbers just in case
# =3:20121221-5ubuntu2
# =1.0.2g-1ubuntu4.16 -yq;

# To update nginx with new version update the version here
export NGINX_VERSION=1.18.0-1~xenial

# build nginx .deb package
sh ./build-nginx.sh;

if [ $? -ne 0 ]; then
    echo "some error occurred while building nginx";
    exit 1;
fi

apt install ./nginx_${NGINX_VERSION}_amd64.deb -yq;
apt-get -f install -yq;

# new nginx versions don't have sites-enabled/sites-available directories for configs
mkdir /etc/nginx/sites-available
mkdir /etc/nginx/sites-enabled

sed -i '15s#$#  include /etc/nginx/sites-enabled/*;#' /etc/nginx/nginx.conf



mkdir -p /var/www/localhost;
