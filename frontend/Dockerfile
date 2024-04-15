FROM node:18-alpine

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

EXPOSE 3000

RUN npm install

COPY . ./

RUN npm run build

CMD ["npm", "run", "preview"]
