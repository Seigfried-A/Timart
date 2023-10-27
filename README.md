# Timart
Node.js Api using Graphql, sequelize and MYSQL database

in your CLI; 
Run npm install: 
to download node_modules

if you do not have MYSQL running n your machine, there is a docker file to spin up a container
if docker is installed, 
Run docker compose up:
to create a MYSQL db container.

Run npm run dev: 
this starts the server and initializes the database

Run npm run migrate:up to generate neccesary migration files
Run npm run seed:
this generates data and populates tables in the database

import postman collection
to test endpoints the SQL queries are located in ./config/dbqueries
