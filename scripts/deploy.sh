#!/bin/bash

set -e  
set -o pipefail  

handle_error() {
    echo "Error occurred in script at line: $1"
    exit 1
}

trap 'handle_error $LINENO' ERR

echo "directory: $(pwd)"

cd ./backend || { echo "Error: Unable to change directory to ./backend"; exit 1; }

docker build -t prithvirajawatade/backend:latest . || { echo "Error: Docker build failed"; exit 1; }

docker push prithvirajawatade/backend:latest || { echo "Error: Docker push failed"; exit 1; }
