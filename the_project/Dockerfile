FROM node:20

WORKDIR /usr/src/app

COPY *.json ./

RUN npm install

COPY ["index.html", "index.js", "package.json", "package-lock.json", "./"]

CMD ["npm","start"]
