App.RecipesController = Ember.ArrayController.extend({
	actions:{
		addRecipe: function(name, description){
			this.store.createRecord('recipe',{name: name, description: description}).save();
		},
		deleteRecipe: function (recipe){
			this.store.find('recipe', recipe.id).then(function(r){
                r.deleteRecord();
                r.save();
			});
		}
	}
});
