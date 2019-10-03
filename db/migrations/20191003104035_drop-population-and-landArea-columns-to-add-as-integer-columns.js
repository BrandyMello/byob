
exports.up = function(knex) {
  return Promise.all([
    knex.schema.table('countries', (table) => {
      table.dropColumns('population', 'land_area');
      table.integer('country_population');
      table.integer('country_land_area');
  }),

    knex.schema.table('dependencies_or_territories', (table) => {
      table.dropColumn('territory_population');
      table.integer('territory_population');
    })
  ])
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.table('countries', (table) => {
      table.string('population');
      table.string('land_area');
    }),

    knex.schema.table('dependencies_or_territories', (table) => {
      table.string('population');
    })
  ])
};
