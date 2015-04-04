import Ember from 'ember';

export default Ember.Controller.extend({
	needs: ['application'],
	isPlaying: false,
	arrayPos: 36,
	defaultArrayPos: 36,
	volume: 18,
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
			this.setFrequency(drone);
			this.setVolume(gainNode);
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
	changeFrequency: function() {
		let drone = this.get('drone');
		this.setFrequency(drone);
	}.observes('currentPitch.frequency'),
	changeVolume: function() {
		let gainNode = this.get('gainNode');
		this.setVolume(gainNode);
	}.observes('volume').on('init'),
	setFrequency: function(drone) {
		if (drone) {
			let frequency = this.get('currentPitch.frequency');
			drone.frequency.value = frequency;
		}
	},
	setVolume: function(gainNode) {
		var volume = this.get('volume')/24;
		if (gainNode) {
			gainNode.gain.value = volume;
		}
		this.get('controllers.application').set('volumeDisplay', Math.round(volume*100));
	},
	actions: {
		changeDefaultPos: function() {
			this.set('defaultArrayPos', this.get('arrayPos'));
		},
		resetToDefault: function() {
			this.set('arrayPos', this.get('defaultArrayPos'));
		},
	}
});
