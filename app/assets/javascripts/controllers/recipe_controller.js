App.RecipeController = Ember.ObjectController.extend({
	isEditing: false,
  actions:{
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