App.ApplicationController = Ember.Controller.extend({
	companies: [],
	actions:{
		addCompany: function(){
			this.companies.pushObject({company: this.get('company')});
			return this.set('company', "");
		}
	}
});