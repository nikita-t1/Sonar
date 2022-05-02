FROM node:17
WORKDIR /usr/src/app/vue-frontend
COPY package*.json ./
RUN npm install && npm run build
COPY . .

RUN echo $(ls)
RUN echo $(pwd)

EXPOSE 8080
CMD [ "npm", "run", "serve" ]