FROM node:17
WORKDIR /usr/src/app
COPY . ./node-backend/

COPY package*.json ./

RUN echo $(ls -la)
RUN echo $(pwd)

RUN npm install
COPY . .
RUN echo $(ls)
RUN echo $(pwd)

EXPOSE 8180
CMD [ "npm", "start" ]