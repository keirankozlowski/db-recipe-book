
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {recipe_id: 1, ingredient_id: 1, amount: '1 oz'},
        {recipe_id: 1, ingredient_id: 2, amount: '1 lb'},
        {recipe_id: 1, ingredient_id: 3, amount: '1 cup'}
      ]);
    });
};
