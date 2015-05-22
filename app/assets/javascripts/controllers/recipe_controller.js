App.RecipeController = Ember.ObjectController.extend({
	isEditing: false,
  actions:{
		deleteRecipe: function (recipe){
			console.log(recipe);
			this.store.find('recipe', recipe.id).then(function(r){
                r.deleteRecord();
                r.save();
			});
		},
		editRecipe: function () {
			this.set('isEditing', true);
		},
		cancleEdit: function () {
			this.set('isEditing', false);
		},
		saveRecipe: function (recipe) {
			var name = this.get('recipeName');
			var description = this.get('recipeDescription');
			this.store.find('recipe', recipe.id).then(function (r) {
				r.set('name', name);
				r.set('description', description);
				r.save();
			});
			this.set('isEditing', false);
			return false;
		}
	}
});