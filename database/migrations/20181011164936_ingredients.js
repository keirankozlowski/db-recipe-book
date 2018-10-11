
exports.up = function (knex, Promise) {
    return knex.schema.createTable('ingredients', function (ingredients) {
        ingredients
            .increments();
        ingredients
            .string('name_ingredient')
            .notNullable();
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('ingredients');
};