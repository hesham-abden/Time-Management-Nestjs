# Use an official Node.js runtime as the base image
FROM node:18 as build
WORKDIR /app
COPY package*.json ./
RUN npm install -g @angular/cli
RUN npm install
COPY . .
RUN ng build --prod
FROM nginx:alpine
COPY --from=build /app/dist/TimeManagement /usr/share/nginx/html
EXPOSE 80
