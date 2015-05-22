
App.Ingredient = DS.Model.extend({
  name: DS.attr ('string'),
  amount: DS.attr ('number'),
  measurement: DS.attr ('string')
});