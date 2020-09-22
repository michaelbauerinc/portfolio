#!/usr/bin/env sh
set -eu
envsubst '${BE_DOMAIN} ${FE_DOMAIN}' < /nginx/utils/nginx.conf.template > /etc/nginx/nginx.conf
exec "$@"