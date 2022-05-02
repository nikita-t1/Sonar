FROM node:17
WORKDIR /usr/src/app
COPY node-backend/ ./node-backend/
RUN cd node-backend && npm install && npm run build
RUN ls

EXPOSE 8180
CMD [ "npm", "start" ]