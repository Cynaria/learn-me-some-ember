App.RecipesController = Ember.ArrayController.extend({
	actions:{
		addRecipe: function(name){
			var store = this.store;
			store.createRecord('recipe',{name: name}).save();
			return this.set('recipe', "");
		}
	}
});
