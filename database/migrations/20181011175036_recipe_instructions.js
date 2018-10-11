
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipe_instructions', function (recipe_instructions) {
        recipe_instructions
            .integer()
            .unsigned()
            .references('id')
            .inTable('recipes');
        recipe_instructions
            .integer('ingredient_id')
            .unsigned()
            .references('id')
            .inTable('ingredients');
        recipe_instructions
            .string('amount')
            .notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipe_instructions');
};
