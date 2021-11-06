#!/bin/bash

source .env

docker run --rm -it --name ${PROJECTNAME} -u root -v ${ENVIRONMENT}:${HOME} -w="${HOME}" -p ${NODE_PORT}:8080 ${DEVTOOL}:${NODE_VERSION} sh
