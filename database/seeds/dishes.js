
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        {name_dish: 'spaghetti and meatballs'},
        {name_dish: 'chicken burrito'},
        {name_dish: 'pork udon noodles'}
      ]);
    });
};