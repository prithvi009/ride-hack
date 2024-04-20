#!/bin/bash

cd backend

docker build -t prithvirajawatade/backend:latest .

docker push prithvirajawatade/backend:latest