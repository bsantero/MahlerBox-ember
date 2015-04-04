import Ember from 'ember';

export default Ember.Controller.extend({
	audiocontext: function() {
		return window.AudioContext || window.webkitAudioContext;
	}.property(),
	currentPitch: function() {
		var array = this.get('model');
		return array[this.get('arrayPos')];
	}.property('arrayPos', 'model'),
	controlDrone: function() {
		var status = this.get('isPlaying');
		if (!status) { // fix vars
			var context = this.get('audioContext');
		  this.set('drone', context.createOscillator()); // Create bass guitar
		  this.set('gainNode', context.createGain()); // Create boost pedal
		  this.get('drone').connect(this.get('gainNode')); // Connect bass guitar to boost pedal
		  this.get('gainNode').connect(context.destination); // Connect boost pedal to amplifier
		  this.get('gainNode').gain.value = this.get('volume')/24; // Set boost pedal to 30 percent volume

		}
	}.observes('isPlaying', 'drone'),
});
