
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
      table.string()
    })

  ])  
};

exports.down = function(knex) {
  
};
