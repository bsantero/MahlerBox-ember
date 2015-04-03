import Ember from 'ember';

export default Ember.Controller.extend({
	currentPitch: function() {
		var array = this.get('model');
		return array[this.get('arrayPos')];
	},
	controlDrone: function(controller) {
		console.log('Playing status is now ' + controller.isPlaying +".");
	}.observes('isPlaying')
});
