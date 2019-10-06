
exports.up = function (knex) {
  return Promise.all([

    knex.schema.table('dependencies_or_territories', (table) => {
      table.dropColumn('population');
    })
  ])
};

exports.down = function (knex) {
  return Promise.all([
    knex.schema.table('dependencies_or_territories', (table) => {
      table.column('population');
    })
  ]);
};
