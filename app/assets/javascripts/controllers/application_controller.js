App.ApplicationController = Ember.Controller.extend({
	recipes: [],
	actions:{
		addRecipe: function(){
			this.recipes.pushObject({recipe: this.get('recipe')});
			return this.set('recipe', "");
		}
	}
});