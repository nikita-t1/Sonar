FROM node:17
WORKDIR /usr/src/app
RUN echo $(ls -1lta)
COPY . ./Sonar/
RUN echo $(ls -1lta)

#COPY package*.json ./

RUN cd /usr/src/app/Sonar/
WORKDIR /usr/src/app/Sonar/
RUN echo $(ls -1lta)

RUN echo $(ls -lta)
RUN echo $(pwd)

RUN cd /usr/src/app/Sonar/node-backend
WORKDIR /usr/src/app/Sonar/node-backend
RUN echo $(ls -1lta)

RUN npm install
COPY . .
RUN echo $(ls -lta)
RUN echo $(pwd)

EXPOSE 8180
CMD [ "npm", "start" ]