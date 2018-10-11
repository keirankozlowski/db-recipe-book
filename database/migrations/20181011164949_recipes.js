
exports.up = function (knex, Promise) {
    return knex.schema.createTable('recipes', function (recipes) {
        recipes.increments();
        recipes.text('name_recipe', 'mediumText').notNullable();
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('recipes');
};