#!/bin/bash

echo "Frontend: installing node modules"
npm install -g gulp
cd /usr/src/app && npm install

echo "Frontend: compiling from typescript to JS"
cd /usr/src/app && npm run build

echo "Frontend: start the server"
cd /usr/src/app && npm run start
