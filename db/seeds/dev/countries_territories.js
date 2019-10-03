const countryData = require('../../../countries');
const territoryData = require('../../../territories');

exports.seed = function(knex) {
  return knex('countries').del()
    .then(() => {
      return knex('countries').insert(countryData)
      .then(() => {
        let promises = [];
        territoryData.forEach((territory) => {
          let 
        })
      })
      ;
    });
};
