FROM node
WORKDIR /app
COPY package.json .
RUN yarn
COPY . .
ENV SERVER_PORT=8081
EXPOSE 8081
CMD [ "yarn", "start" ]