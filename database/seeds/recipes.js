
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name_recipe: 'restaurant', dish_id: 1},
        {name_recipe: 'fast food', dish_id: 2},
        {name_recipe: 'homemade', dish_id: 3}
      ]);
    });
};