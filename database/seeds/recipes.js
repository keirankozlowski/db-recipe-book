
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name_recipe: 'restaurant'},
        {name_recipe: 'fast food'},
        {name_recipe: 'homemade'}
      ]);
    });
};