const countries = require('../../../countries.js');
const territories = require('../../../territories.js');

const countryData = countries.countryData;
const territoryData = territories.territoryData;
//  console.log(territoryData)

const createCountry = (knex, country) => {
  // console.log(country.name)

  return knex('countries').insert({
    name: country.name,
    country_population: parseInt(country.countryPopulation.trim()),
    country_land_area: parseInt(country.countryLandArea.trim())
  });
};

const createTerritory = (knex, territory) => {
  return knex('countries').where('name', territory.territoryOf).first()
    .then((country) => {
      console.log(country.id)
      return knex('dependencies_or_territories').insert({
        name: territory.name,
        territory_population: parseInt(territory.territoryPopulation.trim()),
        countryId: country.id
      })
    })
}

exports.seed = function(knex) {
  return knex('dependencies_or_territories').del()
    .then(() => {
      return knex('countries').del()
    })
    .then(() => {
      let countryPromises = [];
      countryData.forEach(countryDatum => {
        countryPromises.push(createCountry(knex, countryDatum));
      });
      return Promise.all(countryPromises);
    })
    .then(() => {
      let territoryPromises = [];
      territoryData.forEach((territory) => {
        territoryPromises.push(createTerritory(knex, territory));
      });
      return Promise.all(territoryPromises);
    })
    .catch(err => console.log(`Error seeding ${err}`))
};
  
      