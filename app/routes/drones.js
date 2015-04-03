import Ember from 'ember';

export default Ember.Route.extend({
	setupController: function(controller){
		controller.set('isPlaying', false);
		controller.set('notes', []);
		controller.set('currentPitchName', 'A');
		controller.set('currentPitchOctave', 4);
		controller.set('currentPitchFrequency', 440);
		controller.set('noteRangeMin', 'A1');
		controller.set('noteRangeMin', 'A6');
	},
	actions: {
		play: function() {
			alert(currentPitchName);
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
