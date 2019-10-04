const express = require('express');
const app = express();
const csv = require('csv-parser');
const fs =require('fs');
const environment = process.env.NODE_ENV || 'development';
const results = [];

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
.on('data', (data) => results.push(data))
.on('end', () => {
  console.log(results)
});

fs.createReadStream('dependencies_or_territories_data.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log(results)
  });
