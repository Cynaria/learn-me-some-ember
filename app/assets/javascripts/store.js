App.Store = DS.Store.extend({
  adapter: DS.RESTAdapter.create()
});

App.ApplicationAdapter = DS.ActiveModelAdapter.extend({

});
