Lab-3-Angular-Next.js
Full Stack Lab 3 — Angular + Next.js (Dockerized)
This repository contains two separate frontend applications:

Angular App (served with NGINX in production)
Next.js App (running on Node.js production server)
Both applications include Dockerfiles and docker-compose.yml definitions to run each project in isolated containers.

🚀 Project Structure

Lab-3-Angular-Next.js/
│── angular-app/      # Angular 16+ project
│   ├── Dockerfile
│   ├── docker-compose.yml
│   └── src/
│
│── next-app/         # Next.js (App Router) project
│   ├── Dockerfile
│   ├── docker-compose.yml
│   └── src/
│
└── README.md

Angular Application (ngapp)
📌 Development Setup
cd angular-app
npm install
ng serve
App runs at:

👉 http://localhost:4200/

🐳 Angular Docker Setup
Dockerfile
FROM node:18-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build --prod

FROM nginx:alpine
COPY --from=build /app/dist/ngapp /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
docker-compose.yml
version: "3.9"

services:
  angular-app:
    build: .
    image: angular-app-lab3:latest
    container_name: angular-app-lab3
    ports:
      - "4200:80"
    restart: unless-stopped
▶️ Run Angular app in Docker
cd angular-app
docker compose up --build -d
Your Angular app will be available at:

👉 http://localhost:4200/

Next.js Application (nxapp)
📌 Development Setup
cd next-app
npm install
npm run dev
App runs at:

👉 http://localhost:3000/

🐳 Next.js Docker Setup
Dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
ENV NODE_ENV=production
EXPOSE 3000
CMD ["npm", "start"]
docker-compose.yml
version: "3.9"

services:
  next-app:
    build: .
    image: next-app-lab3:latest
    container_name: next-app-lab3
    ports:
      - "3000:3000"
    restart: unless-stopped
▶️ Run Next.js app in Docker
cd next-app
docker compose up --build -d
Your Next.js app will be available at:

👉 http://localhost:3000/

🧪 Testing the Containers
Check running services:

docker ps
View logs:

docker logs angular-app-lab3
docker logs next-app-lab3
Stop containers:

docker compose down
📝 Notes
Angular is served by NGINX for best performance.

Next.js runs using next start in production mode.

Ensure all ports are free before running Docker.

Build commands must exist:

Angular: npm run build --prod
Next.js: "start": "next start"
