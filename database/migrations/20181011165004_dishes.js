
exports.up = function (knex, Promise) {
    return knex.schema.createTable('dishes', function (dishes) {
        dishes
            .increments();
        dishes
            .string('name_dish')
            .notNullable();
        dishes
            .unique('name_dish')
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('dishes');
};