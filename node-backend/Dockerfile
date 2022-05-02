FROM node:17
WORKDIR /usr/src/app
COPY package*.json ./
COPY Dockerfile ./
RUN npm install
COPY . .
RUN echo $(ls)
RUN echo $(pwd)

EXPOSE 8180
CMD [ "npm", "start" ]