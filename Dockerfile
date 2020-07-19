FROM node:10.15.2-alpine

WORKDIR /usr/src/app
COPY package.json ./
RUN npm install --only=production
COPY ./src ./src
COPY ./videos ./videos
ENV VIDEOS_PATH=./videos
EXPOSE 3000
CMD npm start