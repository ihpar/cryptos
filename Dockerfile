FROM node:16.15-alpine
WORKDIR /home/cryptocurr
COPY . .
RUN npm install
CMD npm start
EXPOSE 3000
