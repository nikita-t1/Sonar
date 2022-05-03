FROM node:17
WORKDIR /usr/src/app
COPY . ./Sonar/

#COPY package*.json ./

RUN cd Sonar/node-backend/
WORKDIR /usr/src/app/Sonar/node-backend/

RUN echo $(ls -la)
RUN echo $(pwd)

RUN npm install
COPY . .
RUN echo $(ls)
RUN echo $(pwd)

EXPOSE 8180
CMD [ "npm", "start" ]