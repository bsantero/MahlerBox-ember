import Ember from 'ember';

export default Ember.Controller.extend({
	audioContext: function() {
		var Context = window.AudioContext || window.webkitAudioContext;
 		return new Context();
	}.property(),
	currentPitch: function() {
		var array = this.get('model');
		return array[this.get('arrayPos')];
	}.property('arrayPos', 'model'),
	controlDrone: function() {
		var status = this.get('isPlaying');
		if (status) {
			let context = this.get('audioContext');
			let drone = context.createOscillator();
			let gainNode = context.createGain();
			drone.connect(gainNode);
			gainNode.connect(context.destination);
			gainNode.gain.value = this.get('volume')/24;
			this.set('drone', drone);
			this.set('gainNode', gainNode); // Set controller property to local var
			drone.start();
		} else {
			let drone = this.get('drone');
			if (drone) {
				drone.stop();
				this.set('drone', null);
				this.set('gainNode', null);
			}
		}
	}.observes('isPlaying'),
});
