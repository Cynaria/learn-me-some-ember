App.RecipeController = Ember.ObjectController.extend({
	isEditing: false,
	actions:{
		addIngredient: function () {
			var recipe = this.content
			var fields = this
			var amount 			= fields.get('ingredientAmount');
			var measurement = fields.get('ingredientMeasurement');
			var name 				= fields.get('ingredientName');
			fields.store.createRecord('ingredient', {amount: 			amount,
																						 measurement: measurement,
																						 name: 				name,
																						 recipe: 			recipe
																						}).save().then(function (model){
																							recipe.get('ingredients').pushObject(model);
																							fields.set('ingredientAmount', "");
																							fields.set('ingredientMeasurement', "");
																							fields.set('ingredientName', "");
  																					});
		},
		deleteRecipe: function (recipe){
			this.store.find('recipe', recipe.id).then(function(r){
                r.deleteRecord();
                r.save();
			});
		},
		editRecipe: function () {
			console.log(this.get('model'));
			this.set('isEditing', true);
		},
		cancleEdit: function () {
			this.set('isEditing', false);
		},
		saveRecipe: function (recipe) {
			var name = this.get('editRecipeName');
			var description = this.get('editRecipeDescription');
			this.store.find('recipe', recipe.id).then(function (r) {
				if(name){ r.set('name', name); }
				if(description){ r.set('description', description); }

				r.save();
			});
			this.set('isEditing', false);
			return false;
		}
	}
});