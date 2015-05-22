// # for more details see: http://emberjs.com/guides/models/defining-models/

App.Recipe = DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  ingredients: DS.hasMany('ingredient', {async: true})
});


