import Ember from 'ember';

export default Ember.Route.extend({
	setupController: function(controller, model){
		this._super(controller, model);
		this.controllerFor('application').set('dronesActive', false);
		this.controllerFor('application').set('infoMenuOpen', false);
		this.controllerFor('application').set('settingsMenuOpen', false);
	}
});
