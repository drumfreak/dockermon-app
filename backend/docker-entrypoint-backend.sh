#! /bin/sh
if [ ! -d "/app/dockermon-app/backend/node_modules/.bin" ] 
then
    echo "Directory /app/dockermon-app/backend/node_modules/ does not exist, installing node_modules. THIS WILL TAKE A FEW MINUTES ONLY THIS TIME"
    cd /app/dockermon-app/backend
    npm install --production --cache /app/tmp/npm/backend_cache
    rm -rf /app/tmp/npm/backend_cache &
    npm run worker:prod
else
    echo "Directory /app/dockermon-app/backend/node_modules installed. Launching"
    cd /app/dockermon-app/backend
    npm run worker:prod
fi
