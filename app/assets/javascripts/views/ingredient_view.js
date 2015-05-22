App.IngredientView = Ember.View.extend({
  templateName: 'ingredient'
})

App.NumberField = Ember.TextField.reopen({
  attributeBindings: ['size', 'maxlength', 'minlength', 'min', 'max', 'step']
})