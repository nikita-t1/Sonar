FROM node:17
WORKDIR /usr/src/app
COPY vue-frontend/ ./vue-frontend/
RUN cd vue-frontend && npm install && npm run build
RUN ls

EXPOSE 8080
CMD [ "npm", "run", "serve" ]