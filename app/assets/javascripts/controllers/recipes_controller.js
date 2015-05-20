App.RecipesController = Ember.ArrayController.extend({
	actions:{
		addRecipe: function(name){
			var store = this.store;
			store.createRecord('recipe',{name: name}).save();
			// console.log(store);
			return this.set('recipe', "");
		}
	}
});