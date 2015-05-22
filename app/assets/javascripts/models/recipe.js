// # for more details see: http://emberjs.com/guides/models/defining-models/

App.Recipe = DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
});

App.RecipeSerializer = DS.ActiveModelSerializer.extend({
	serialize: function (recipe, options) {
		var json = {
			id: recipe.get('id'),
      name: recipe.get('name'),
      description: recipe.get('description')
    };
    return json;
	}
});
