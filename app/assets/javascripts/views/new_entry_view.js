App.newEntryView = Ember.View.extend({
	templateName: 'new_recipe',
	tagName: 'form',

	submit: function(){
		this.get('controller').send('addRecipe', this.get('recipeName'), this.get('recipeDescription'));
		this.set('recipeName', "");
		this.set('recipeDescription', "");
		return false;
	}
});