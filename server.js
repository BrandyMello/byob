const express = require('express');
//requiring express
const app = express();
//assigning the app to the invocation of express
const environment = process.env.NODE_ENV || 'development';
//assigning the environment to the development environment
const configuration = require('./knexfile')[environment];
//sourcing the environment in set up in the knexfile to this file, requiring it
const database = require('knex')(configuration);
//linking the sourced setup in the knexfile that was assigned to configuration and requiring knex in conjuction with that configuration

app.set('port', process.env.PORT || 3000);
//setting the local port to 3000
app.use(express.json());
//establishing that this app will use json when using express
app.locals.title = 'BYOB';
//assigning the title of the local app

app.get('/', (request, response) => {
  //setting the root path
  response.send('Build Your Own Backend');
  //send will actually log in the browser
});

app.listen(app.get('port'), () => {
  //listening for local port
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
  //logging the title and where it is running when you run node server.js in the command line
});

app.get('/api/v1/countries', (request, response) => {
  //creating an endpoint for GETing all the countries
  database('countries').select()
  //selects the countries table created in the createTable migration and the information seeded in that migration
    .then((countries) => {
      response.status(200).json(countries);
    })
    //the promise is returned and parsed; and if there is a good response, we set the status code to 200 and return the countries parsed
    .catch((error) => {
      //if the response is not good on the server side
      response.status(500).json({ error });
      //we set the status code error to 500 for a server error
    });
});

app.get('/api/v1/countries/:id', (request, response) => {
  //we are creating an endpoint to a particular country based on the id provided; :id is dynamic
  database('countries').where('id', parseInt(request.params.id)).select()
  //we are taking the countries database(from the createTable migration for the countries that has been seeded) and where the id passed through(the request.params.id) matches the id in the table, we are selecting that entry 
    .then((countries) => {
      //we are taking the response
      if (countries.length) {
        //if there is an object in the array returned
        response.status(200).json(countries);
        //it was a good request and response; so we return a 200 status code and parse the information
      } else {
        response.status(404).json({
          //if we do not have an object in the array, we did not make a good request
          error: `Country with id ${request.params.id} not found`
          //we throw an error that a country with that id could not be found
        });
      }
    })
    .catch((error) => {
      //if the server response is no good
      response.status(500).json({ error });
      //we must throw an error with a 500 level status code and spit out an error
    });
});

app.get('/api/v1/territories', (request, response) => {
  //setting another endpoint to all the territories
  database('dependencies_or_territories').select()
  //unfortunately, I named the database a ridiculously complicated name, but we are selecting it none the less
    .then((territories) => {
      //when we get a goo response
      response.status(200).json(territories);
      //we provide a 200 level status code and parse the territory information to be returned
    })
    .catch((error) => {
      //if the server is not responding
      response.status(500).json({ error });
      //we must throw a 500 level response code with an error
    });
});

app.get('/api/v1/territories/:id', (request, response) => {
  //This is another endpoint creation to GET an individual territory by id; :id is dynamic
  database('dependencies_or_territories').where('id', request.params.id).select()
  //here we access the dependencies_or_territories table created in a migration and seeded with knex; we "select" tht one where the id pased through matches the id of that particular territory; where iterates through each territory
    .then((territory) => {
      //with a good response
      if (territory.length) {
        //and an actual territory selected
        response.status(200).json(territory);
        //we provide a status code of 200 and parse the information, spitting back a territory object
      } else {
        //if the id provided is no good; or a mistake in the general path
        response.status(404).json({
          //we return and error code of 404 which means "not found"
          error: `The territory with id ${request.params.id} not found`
          //we also throw an error so the front end knows where to look for the mistake
        });
      }
    })
    .catch((error) => {
      //if the server's response is no good
      response.status(500).json({ error });
      //we throw a 500 status code and an error
    });
});

app.post('/api/v1/countries', (request, response) => {
  //here we are creating an endpoint to POST to for the countries table
  const country = request.body;
  //we are assigning the request body to country to use in the post
  
  for (let requiredParameter of ['name', 'country_population','country_land_area']) {
    //here we are requiring certain parameters in the request body
    if (!country[requiredParameter]) {
      //if a required parameter is missing
      return response
        .status(422)
        .send({ error: `Expected format: {
        name: <String>,
        country_population: <Integer>,
        country_land_area: <Integer>
      }. You are missing a "{requiredParameter}" property.`})
    }//we return a status code saying Unprocessable Entity, 422, with an error so there is a reminder of the parmeters needed to process the POST
  }

  database('countries').insert(country, 'id')
  //here we are accessing the counties table using database() and inserting the country (the assigned request body object above) and adding an id
    .then(country => {
    response.status(201).json({ id: country[0]})
    //when the response is good we send a 201 status code because it was good and the database was altered; I don't understand what we are doing in the json; assigning the id to the entire country doesn't seem correct so I am a little confused by this piece of this line
    .catch(error => {
      //we need to catch and throw a 500 status code error
      response.status(500).json({ error });
      //if the server does not give a good response
    })
  });
})

app.post('/api/v1/territories', async (request, response) => {
  const territory = request.body;
  const country = await database('countries').where('name', territory.territoryOf).first();
  const countryTerritory = {...territory, countryId: country.id};

  for (let requiredParameter of ['name', 'territory_population', 'territoryOf']) {
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
