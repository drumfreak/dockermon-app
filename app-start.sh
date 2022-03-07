#! /bin/sh
npm cache clean --force
if [ ! -f "/var/log/dockermon.log" ] 
then
    ln -s /dev/stdin /var/log/dockermon.log
fi

if [ -d "/root/.npm" ] 
then
    rm -rf /root/.npm
fi

/etc/init.d/redis-server start &

/usr/local/bin/docker-entrypoint.sh --initialize-insecure=false --default-authentication-plugin=mysql_native_password > /var/log/dockermon.log &
echo "USE mysql;" > /docker-entrypoint-initdb.d/timezones.sql &&  mysql_tzinfo_to_sql /usr/share/zoneinfo >> /docker-entrypoint-initdb.d/timezones.sql

if [ ! -f "/app/initialrun.txt" ]
then
    sleep 30
fi

if [ -f "/app/initialrun.txt" ]
then
    sleep 5
fi

if [ $DOCKERMON_ENABLE_SOCAT ]
then
    if [ -f "/usr/bin/socat" ]
    then
        echo "Launching socat - aka TACOS"
        /usr/bin/socat TCP-LISTEN:2375,reuseaddr,fork unix-connect:/var/run/docker.sock &
    fi
fi

echo "Starting Frontend"
cd /app/dockermon-app/frontend
./docker-entrypoint-frontend.sh &

echo "Starting backend"
cd /app/dockermon-app/backend 
./docker-entrypoint-backend.sh &

touch /app/initialrun.txt
tail -f /dev/stdin
