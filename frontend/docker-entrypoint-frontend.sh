#! /bin/sh
if [ ! -d "/app/dockermon-app/frontend/node_modules/.bin" ] 
then
    echo "Directory /app/dockermon-app/frontend/node_modules/ does not exist, installing node_modules. THIS WILL TAKE A FEW MINUTES ONLY THIS TIME"
    cd /app/dockermon-app/frontend
    npm install --cache /app/tmp/npm/frontend_cache
    rm -rf /app/tmp/npm/frontend_cache &
    npm run start
else
    echo "Directory /app/dockermon-app/frontend/node_modules installed. Launching"
    cd /app/dockermon-app/frontend
    npm run start
fi
