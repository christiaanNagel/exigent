FROM node:16

#Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

#installing dependencies
COPY package*.json .
RUN npm install

#Copying source files
COPY . .

#Building app
RUN npm run build
EXPOSE 3000

#Running the app
CMD ["npm","start"]