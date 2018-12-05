#!/bin/sh

echo "Configuring nginx:"
echo "DEBUG": $DEBUG
echo "APP_DIR": $APP_DIR
echo "CLIENT_BODY_TIMEOUT": $CLIENT_BODY_TIMEOUT
echo "CLIENT_HEADER_TIMEOUT": $CLIENT_HEADER_TIMEOUT
echo "CLIENT_MAX_BODY_SIZE": $CLIENT_MAX_BODY_SIZE
echo ""

# Replace ENV for nginx conf
envsubst '$DEBUG $APP_DIR $CLIENT_BODY_TIMEOUT $CLIENT_HEADER_TIMEOUT $CLIENT_MAX_BODY_SIZE' < /etc/nginx/conf.d/app.conf.template > /etc/nginx/conf.d/default.conf

# Find ENVs for injection
export INJECT_ENVS=$(echo $(env | cut -d= -f1 | grep "^INJECT_ENV_" | sed -e 's/^/\$/'))

echo "Injecting ENVs:"
echo $INJECT_ENVS

envsubst "$INJECT_ENVS" < /etc/nginx/conf.d/window.config.js.tmpl > /usr/share/nginx/html/window.config.js

# start nginx
nginx -g 'daemon off;'
exec "$@"
