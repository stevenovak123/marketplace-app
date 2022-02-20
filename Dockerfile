FROM node:16-alpine
WORKDIR /app
COPY package.json .
RUN npm install yarn
RUN yarn install
COPY . .
EXPOSE 3000
CMD ["yarn","start"]
