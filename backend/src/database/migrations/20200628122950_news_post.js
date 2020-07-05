
exports.up = function(knex) {
    return knex.schema.createTable('news_post', function (table) {
        table.increments('id').unsigned().primary();
        table.string('author').references('id').inTable('profile');
        table.string('avatar');
        table.string('phone');
        table.string('title',20).notNullable();
        table.text('content').notNullable();
        table.decimal('price',30).notNullable();
        table.string('img').notNullable();
        table.string('location').notNullable();
        table.timestamps(true, true);
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('news_post'); 
};
