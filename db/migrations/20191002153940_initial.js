
exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable('countries', (table) => {
      table.increments('id').primary();
      table.string('name');
      table.string('population');
      table.string('land_area');
      table.timestamps(true, true);
    }),

    knex.schema.createTable('dependencies_or_territories', (table) =>{
      table.increments('id').primary();
      table.string('name');
      table.string('population');
      table.integer('countryId').unsigned();
      table.foreign('countryId').references('countries.id');
      table.timestamps(true, true);
    })
  ])  
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.dropTable('countries'),
    knex.schema.dropTable('dependencies_or_territories')
  ]);
};
