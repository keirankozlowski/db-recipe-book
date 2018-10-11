
exports.up = function (knex, Promise) {
    return knex.schema.createTable('recipes', function (recipes) {
        recipes
            .increments();
        recipes
            .string('name_recipe')
            .notNullable();
        recipes
            .integer('dish_id')
            .unsigned()
            .references('id')
            .inTable('dishes')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('recipes');
};