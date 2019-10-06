const express = require('express');
const app = express();
const csv = require('csv-parser');
const fs = require('fs');
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.set('port', process.env.PORT || 3000);
app.use(express.json());
app.locals.title = 'BYOB';

app.get('/', (request, response) => {
  response.send('Build Your Own Backend');
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});

app.get('/api/v1/countries', (request, response) => {
  database('countries').select()
    .then((countries) => {
      response.status(200).json(countries);
    })
    .catch((error) => {
      response.status(500).json({ error });
    });
});

app.get('/api/v1/countries/:id', (request, response) => {
  console.log(request.params.id)
  database('countries').where('id', parseInt(request.params.id)).select()
    .then((countries) => {
      if (countries.length) {
        response.status(200).json(countries);
      } else {
        response.status(404).json({
          error: `Country with id ${request.params.id} not found`
        });
      }
    })
    .catch((error) => {
      response.status(500).json({ error });
    });
});

app.get('/api/v1/territories', (request, response) => {
  database('dependencies_or_territories').select()
    .then((territories) => {
      response.status(200).json(territories);
    })
    .catch((error) => {
      response.status(500).json({ error });
    });
});

app.get('/api/v1/territories/:id', (request, response) => {
  console.log(request.params.id)
  database('dependencies_or_territories').where('id', request.params.id).select()
    .then((territory) => {
      if (territory.length) {
        response.status(200).json(territory);
      } else {
        response.status(404).json({
          error: `The territory with id ${request.params.id} not found`
        });
      }
    })
    .catch((error) => {
      response.status(500).json({ error });
    });
});

app.post('/api/v1/countries', (request, response) => {
  const country = request.body;
  
  for (let requiredParameter of ['name', 'country_population','country_land_area']) {
    if (!country[requiredParameter]) {
      return response
        .status(422)
        .send({ error: `Expected format: {
        name: <String>,
        country_population: <Integer>,
        country_land_area: <Integer>
      }. You are missing a "{requiredParameter}" property.`})
    }    
  }

  database('countries').insert(country, 'id')
    .then(country => {
    response.status(201).json({ id: country[0]})
    .catch(error => {
      response.status(500).json({ error });
    })
  });
})

app.post('/api/v1/territories', async (request, response) => {
  const territory = request.body;
  const country = await database('countries').where('name', territory.territoryOf).first();
  const countryTerritory = {...territory, countryId: country.id};

  for (let requiredParameter of ['name', 'territory_population', 'territoryOf','population']) {
    if (!territory[requiredParameter]) {
      return response
        .status(422)
        .send({
          error: `Expected format: {
        name: <String>,
        territory_population: <Integer>,
        territoryOf: <String>
      }. You are missing a "{requiredParameter}" property.`})
    }
  }

  database('dependencies_or_territories').insert(countryTerritory, 'id')
    .then(territory => {
      response.status(201).json({ id: territory[0] })
    .catch(error => {
      response.status(500).json({ error });
    })
  });
})

app.delete('/api/v1/countries/:id', (request, response) => {
  database('countries').where('id', request.params.id).del()
    .then(country => {
      if(country) {
        response.status(201).send(`Country with the ID ${request.params.id} has been deleted.`)
      } else {
        response.status(404).send(`Country with the ID ${request.param.id} not found.`)
      }
    })
    .catch(error => response.status(500).json({error}))
});

app.delete('/api/v1/territories/:name', (request, response) => {
  database('dependencies_or_territories').where('name', request.params.name).del()
    .then(territory => {
      if(territory) {
        response.status(201).send(`Territory ${request.params.name} has been deleted.`)
      } else {
        response.status(404).send(`Territory ${request.params.name} not found.`)
      }
    })
    .catch(error => response.status(500).json({ error }))
});
