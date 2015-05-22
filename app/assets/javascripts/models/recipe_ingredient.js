
App.RecipeIngredient = DS.Model.extend({
  recipe: DS.belongsTo( 'recipe'),
  ingredient: DS.belongsTo ('ingredient')
})