FROM node:17
WORKDIR /usr/src/app
COPY . ./Sonar/
RUN echo $(ls -lta)

#COPY package*.json ./

RUN cd /usr/src/app/Sonar/node-backend/
WORKDIR /usr/src/app/Sonar/node-backend/

RUN echo $(ls -lta)
RUN echo $(pwd)

RUN npm install
COPY . .
RUN echo $(ls)
RUN echo $(pwd)

EXPOSE 8180
CMD [ "npm", "start" ]