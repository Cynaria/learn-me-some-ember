App.RecipesController = Ember.ArrayController.extend({
	actions:{
		addRecipe: function(name, description){
			this.store.createRecord('recipe',{name: name, description: description}).save();
		}
	}
});
