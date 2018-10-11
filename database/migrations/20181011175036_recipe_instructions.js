
exports.up = function (knex, Promise) {
    return knex.schema.createTable('recipe_instructions', function (recipe_instructions) {
        recipe_instructions
            .increments();
        // recipe_instructions
        //     .integer('step')
        //     .notNullable();
        // recipe_instructions
        //     .integer('recipe_id')
        //     .unsigned()
        //     .references('id')
        //     .inTable('recipes');
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('recipe_instructions');
};
