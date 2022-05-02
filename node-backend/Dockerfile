FROM node:17
WORKDIR /usr/src/app/node-backend
RUN echo $(ls)
RUN echo $(pwd)
COPY package*.json ./
RUN npm install && npm run build
COPY . .

EXPOSE 8180
CMD [ "npm", "start" ]