FROM node:17
WORKDIR /usr/src/app/node-backend
RUN ls
#COPY ./ ./node-backend/
RUN ls
#RUN cd node-backend
RUN ls
RUN npm install && npm run build
RUN ls

EXPOSE 8180
CMD [ "npm", "start" ]