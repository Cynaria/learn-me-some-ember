// For more information see: http://emberjs.com/guides/routing/

App.Router.map(function() {
  this.route('recipes', {path:'/'});
});

App.RecipeRoute = Ember.Route.extend({
	model: function(){App.Recipe.find();}
});