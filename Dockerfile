# stage 1
FROM node:18 AS build

WORKDIR /home/app
RUN npm install -g @angular/cli

COPY package*.json ./
RUN npm ci
ENV PATH="/home/app/node_modules/.bin:$PATH"

COPY . .
RUN ng build

# stage 2
FROM nginx:latest
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /home/app/dist/ /usr/share/nginx/html
