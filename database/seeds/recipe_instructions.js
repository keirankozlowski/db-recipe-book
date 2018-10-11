
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe_instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_instructions').insert([
        {step: 1, instructions: "Recipe step 1", recipe_id: 1},
        {step: 2, instructions: "Recipe step 2", recipe_id: 1},
        {step: 3, instructions: "Recipe step 3", recipe_id: 1}
      ]);
    });
};
