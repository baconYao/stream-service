# stream-service

This is a practice from [Bootstrapping Microservices with Docker, Kubernetes, and Terraform](https://www.manning.com/books/bootstrapping-microservices-with-docker-kubernetes-and-terraform) Book

Using Node、Docker、K8s and Terraform to build a microservices service.

I highly recommend you to use `Docker Compose` to execute these microservices while running on local.

## Microservices in this repo

- `video-streaming microservice` (port: 4002)
  - It is responsible for streaming a video to a user.
- `video-storage microservice`  (port: 4001)
  - It is responsible for locating videos in storage and retrieving them.
- `db microservice`  (port: 4000)
  - It is MongoDB

## Run with docker compose
> For development use

#### Build image and up container:

`docker-compose up --build`

#### Stop running container and remove it:
`docker-compose down`

After starting microservices, you should add some data to mongodb like below instruction
```
1. create a database named "video-streaming"
2. create a collection named "videos" in "video-streaming" database
3. create a document like below
{
    "_id" : { "$oid": "5d9e690ad76fe06a3d7ae416" },
    "videoPath" : "SampleVideo_1280x720_1mb.mp4"
}
```
Now. you could query `localhost:4002/video?id=5d9e690ad76fe06a3d7ae416` in URL and you will get the video.

## Run with Docker

> This is outdate method now, I will update this section later...

### Build Image from Dockerfile

`docker build -t video-streaming --file Dockerfile .`

### Run container

`docker run -d -p 3000:3000 video-streaming`

or from private container registry

`docker run -d -p 3000:3000 baconyaostreamingmicroservice.azurecr.io/video-streaming:latest`

### View Logs

`docker logs <container-id>`

---

## Install depedencies

### Simulate a production deployment
`npm install --only=production`

`npm start`

### run it with live reload for fast development
`npm run start:dev`

## Container Registry (Private on Azure)

### Docker login

`docker login <registry-url> --username <username> --password <password>`

### Tag image

`docker tag <existing-image> <registry-url>/<image-name>:<version>`

For example

`docker tag video-streaming <registry-url>/video-streaming:latest`

### Push image

`docker push <registry-url>/<image-name>:<version>`

For example

`docker push <registry-url>/video-streaming:latest`