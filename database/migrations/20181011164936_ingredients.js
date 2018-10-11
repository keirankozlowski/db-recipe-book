
exports.up = function (knex, Promise) {
    return knex.schema.createTable('ingredients', function (ingredients) {
        ingredients.increments();
        ingredients.text('name_ingredient', 'mediumText').notNullable();
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('ingredients');
};