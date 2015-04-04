import Ember from 'ember';

export default Ember.Controller.extend({
	arrayPos: 0,

	currentPitch: function() {
		var array = this.get('model');
		return array[this.get('arrayPos')];
	}.property('arrayPos', 'model'),
	// controlDrone: function() {
	// 	if ((this.get('isPlaying'))!) { // fix vars
	// 	  var osc = audioContext.createOscillator(); // Create bass guitar
	// 	  gainNode = audioContext.createGain(); // Create boost pedal 
	// 	  drone.osc.connect(gainNode); // Connect bass guitar to boost pedal
	// 	  gainNode.connect(audioContext.destination); // Connect boost pedal to amplifier
	// 	  gainNode.gain.value = drone.osc.volume/24; // Set boost pedal to 30 percent volume
	// 	}
	// }.observes('isPlaying'),
});
