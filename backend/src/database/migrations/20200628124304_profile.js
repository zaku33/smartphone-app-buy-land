
exports.up = function(knex) {
    return knex.schema.createTable('profile', function (table) {
        table.increments('id').unsigned().primary();
        table.string('avatar');
        table.string('phone');
        table.string('nickname',20).unique();
        table.string('email').notNullable();
        table.string('username').unique().notNullable();
        table.string('password').notNullable();
        table.timestamps(true, true);
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('news_post'); 
};
