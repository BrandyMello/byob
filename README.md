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
 
 ### API Endpoints
 ### GET Requests
 To GET all Countries:
 ```GET /api/v1/countries```<br>
 Return:
 ```[
{
id: 2146,
name: "China",
created_at: "2019-10-04T22:12:10.136Z",
updated_at: "2019-10-04T22:12:10.136Z",
country_population: 1,
country_land_area: 9
},
{
id: 2147,
name: "United States",
created_at: "2019-10-04T22:12:10.152Z",
updated_at: "2019-10-04T22:12:10.152Z",
country_population: 329,
country_land_area: 9
},
{
id: 2155,
name: "Nigeria",
created_at: "2019-10-04T22:12:10.154Z",
updated_at: "2019-10-04T22:12:10.154Z",
country_population: 200,
country_land_area: 910
},...
]
```
To GET all Territories:
```GET /api/v1/territories```<br>
Returns:
```[
{
id: 1,
name: "Taiwan",
countryId: 2146,
created_at: "2019-10-04T22:12:10.287Z",
updated_at: "2019-10-04T22:12:10.287Z",
territory_population: 23,
population: null
},
{
id: 2,
name: "Hong Kong",
countryId: 2146,
created_at: "2019-10-04T22:12:10.292Z",
updated_at: "2019-10-04T22:12:10.292Z",
territory_population: 7,
population: null
},
{
id: 3,
name: "Réunion",
countryId: 2167,
created_at: "2019-10-04T22:12:10.295Z",
updated_at: "2019-10-04T22:12:10.295Z",
territory_population: 888,
population: null
},...
]
```
To GET a country by id:
```GET /api/v1/countries/:id```<br>
example: ```api/v1/countries/2342```<br>
Returns:
```[
{
id: 2342,
name: "TestLand",
created_at: "2019-10-06T14:12:23.427Z",
updated_at: "2019-10-06T14:12:23.427Z",
country_population: 4000,
country_land_area: 500000
}
]
```
To GET a territory by id:
```GET /api/v1/territories/:id```<br>
example: ```/api/v1/territories/3```<br>
Returns: 
```[
{
id: 3,
name: "Réunion",
countryId: 2167,
created_at: "2019-10-04T22:12:10.295Z",
updated_at: "2019-10-04T22:12:10.295Z",
territory_population: 888,
population: null
}
]
```

