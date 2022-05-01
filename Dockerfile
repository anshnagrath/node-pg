FROM node:16-alpine
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
RUN  npm install tsc@latest pm2 -g
COPY  . .
RUN npm run build
EXPOSE 3100 80
CMD ["npm" , "start"]