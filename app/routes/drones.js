import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		play: function() {
			alert("Play pressed!");
		},
		stop: function() {
			alert("Stop pressed!");
		},
		setDefault: function() {
			alert("Default pressed!");
		},
		resetToDefault: function() {
			alert("Reset pressed!");
		},
		changePitchUp: function() {
			alert("Pitch going up!")
		},
		changePitchDown: function() {
			alert("Pitch going down!");
		}
	}
});
