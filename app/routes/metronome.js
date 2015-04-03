import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		play: function() {
			alert("Play pressed!");
		},
		stop: function() {
			alert("Stop pressed!");
		},
		changeTempo: function(amount) {
			alert("Tempo changing by "+ amount +"!");
		}
	}
});
