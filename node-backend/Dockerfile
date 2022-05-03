FROM node:17
WORKDIR /usr/src/app
RUN echo $(ls -1lta)
COPY . ./Sonar/
#COPY package*.json ./Sonar/
#COPY ./src/ ./Sonar/src/
RUN echo $(ls -1lta)

RUN cd /usr/src/app/Sonar/
WORKDIR /usr/src/app/Sonar/
RUN echo $(ls -1lta)

RUN echo $(ls -lta)
RUN echo $(pwd)

RUN cd /usr/src/app/Sonar/
WORKDIR /usr/src/app/Sonar/
RUN echo $(ls -1lta)

RUN npm install
COPY . .
RUN echo $(ls -lta)
RUN echo $(pwd)

EXPOSE 8180
CMD [ "npm", "start" ]