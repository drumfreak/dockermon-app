#! /bin/sh

if [ $DOCKERMON_ENABLE_GIT_UPDATE ]
then
    cd /app
    if [ ! -d "/app/dockermon-app/.git" ]
    then
        git clone https://github.com/drumfreak/dockermon-app.git
    fi

    cd dockermon-app

    if [ $DOCKERMON_ENABLE_GIT_BRANCH ]
    then
        git checkout $DOCKERMON_ENABLE_GIT_BRANCH
    fi
    git pull
fi

cd /app
/app/dockermon-app/app-start.sh