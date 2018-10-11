
exports.up = function (knex, Promise) {
    return knex.schema.createTable('dishes', function (dishes) {
        dishes.increments();
        dishes.text('name_dish', 'mediumText').notNullable();
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('dishes');
};