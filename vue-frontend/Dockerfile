FROM node:17
WORKDIR /usr/src/app/vue-frontend
RUN echo $(ls)
RUN echo $(pwd)
COPY package*.json ./
RUN npm install && npm run build
COPY . .

EXPOSE 8080
CMD [ "npm", "run", "serve" ]