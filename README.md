# stream-service

This is a practice from [Bootstrapping Microservices with Docker, Kubernetes, and Terraform](https://www.manning.com/books/bootstrapping-microservices-with-docker-kubernetes-and-terraform) Book

Using Node、Docker、K8s and Terraform to build a microservices service.

## Before execution

### Export environment

* VIDEOS_PATH
  * `export VIDEOS_PATH=./videos`

## Install depedencies

### Simulate a production deployment
`npm install --only=production`

`npm start`

### run it with live reload for fast development
`npm run start:dev`

## Run with Docker

### Build Image from Dockerfile

`docker build -t video-streaming --file Dockerfile .`

### Run container

`docker run -d -p 3000:3000 video-streaming`

### View Logs

`docker logs <container-id>`