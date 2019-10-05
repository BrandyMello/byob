const express = require('express');
const app = express();
const csv = require('csv-parser');
const fs =require('fs');
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

const countryResults = [];
const depAndTerResults = [];

app.set('port', process.env.PORT || 3000);
app.locals.title = 'BYOB';

app.get('/', (request, response) => {
  response.send('Build Your Own Backend');
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});

fs.createReadStream('countries_data.csv')
.pipe(csv())
.on('data', (data) => countryResults.push(data))
.on('end', () => {
  // console.log(countryResults)
});

fs.createReadStream('dependencies_or_territories_data.csv')
  .pipe(csv())
  .on('data', (data) => depAndTerResults.push(data))
  .on('end', () => {
    // console.log(depAndTerResults)
  });