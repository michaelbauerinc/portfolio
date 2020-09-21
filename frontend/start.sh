#!/bin/bash

echo "Starting frontend with environment type $ENVIRONMENT_TYPE"

if [ $ENVIRONMENT_TYPE = "production" ]; then
    if [ ! -e "./build" ]; then
        echo "Creating production build of frontend."
        npm run build
    else
        echo "Found production build of frontend, no need to create."
    fi
    echo "Starting production server"
    npm run start-prod
else 
    echo "Starting frontend development server"
    npm start
fi
