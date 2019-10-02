const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);
app.locals.title = 'BYOB';

app.get('/', (request, response) => {
  response.send('Build Your Own Backend');
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});

// 'https://date.nager.at/Api/v2/AvailableCountries'