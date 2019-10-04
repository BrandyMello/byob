
exports.up = function (knex) {
  return knex.schema.table('dependencies_or_territories', (table) => {
    table.dropColumn('population');
    table.integer('territory_population');
  })
};

exports.down = function (knex) {
  return knex.schema.table('dependencies_or_territories', (table) => {
    table.string('population');
  })
};
