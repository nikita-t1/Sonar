FROM node:17
WORKDIR /usr/src/app/node-backend
COPY package*.json ./
COPY package*.json /usr/src/app/node-backend/

COPY . .


RUN cd /usr/src/app/node-backend
RUN echo $(ls -la)
RUN echo $(pwd)

RUN npm install
RUN echo $(ls)
RUN echo $(pwd)

EXPOSE 8180
CMD [ "npm", "start" ]