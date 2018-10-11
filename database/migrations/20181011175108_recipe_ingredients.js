
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipe_ingredients', function (recipe_ingredients) {
        recipe_ingredients
            .integer('recipe_id')
            .unsigned()
            .references('id')
            .inTable('recipes');
        recipe_ingredients
            .integer('ingredient_id')
            .unsigned()
            .references('id')
            .inTable('ingredients');

        recipe_ingredients
            .string('amount')
            .notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipe_ingredients');
};
