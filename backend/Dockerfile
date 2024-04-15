FROM node:18-alpine

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

EXPOSE 3001

RUN npm install

COPY . .


CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
