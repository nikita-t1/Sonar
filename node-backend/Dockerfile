FROM node:17
WORKDIR /usr/src/app/node-backend
COPY package*.json .
COPY package*.json ./
COPY package*.json /usr/src/app/node-backend/

RUN npm install
COPY . .
RUN echo $(ls)
RUN echo $(pwd)

EXPOSE 8180
CMD [ "npm", "start" ]