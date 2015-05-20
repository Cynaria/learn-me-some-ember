// For more information see: http://emberjs.com/guides/routing/

App.Router.map(function() {
  this.route('recipes', {path:'/'});
});

App.RecipesRoute = Ember.Route.extend({
	controllerName: 'recipes',
	model: function () {
		return this.store.find('recipe');
	}
});
