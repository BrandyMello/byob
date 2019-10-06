## BYOB - Build Your Own Backend
Overview: This project was built in order to practice building a restful API, viewing it in Postgres, and accessing data on a local server and from the API deployed to Heroku.

### Schema
<img width="650" alt="Screen Shot 2019-10-01 at 9 19 51 PM" src="https://user-images.githubusercontent.com/46384968/66015818-4e815380-e491-11e9-8396-ce89aad533ab.png">

### Setup
#### Requirements: PostgreSQL, Node.js, and Express
<ul> 
  <li>
   Clone/Fork and Clone
   https://github.com/BrandyMello/byob.git </li>
  </ul>
 
 #### Run
  `cd byob`<br>
 `mkdir byob && cd byob`<br>
  `npm init --yes`<br>
  `npm install`<br>
  `npm i -g knex`<br>
 `$ psql`<br>
  `CREATE DATABASE byob;`<br>
    `\c byob`
 
 
 #### Migration and Seeding Tables
`knex migrate:latest` <br>
  `knex seed:run`<br>
 `knex migrate:latest`
 
 #### Run Server
 ```node server.js```
 and open ```http://localhost:3000/```
