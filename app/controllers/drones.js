import Ember from 'ember';

export default Ember.Controller.extend({
	needs: ['application'],
	isPlaying: false,
	arrayPos: 36,
	defaultArrayPos: 36,
	volume: 20,
	currentCalibration: 0,
	audioContext: function() {
		var Context = window.AudioContext || window.webkitAudioContext;
 		return new Context();
	}.property(),
	currentPitch: function() {
		var array = this.get('model');
		return array[this.get('arrayPos')];
	}.property('arrayPos', 'model'),
	// frequencyDisplay: {	}.property('currentCalibration'),
	controlDrone: function() {
		var status = this.get('isPlaying');
		if (status) {
			let context = this.get('audioContext');
			let drone = context.createOscillator();
			let gainNode = context.createGain();
			drone.connect(gainNode);
			gainNode.connect(context.destination);
			this.setFrequencyOnNode(drone);
			this.setVolumeOnNode(gainNode);
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
		this.setFrequencyOnNode(drone);
	}.observes('currentPitch.frequency', 'currentCalibration'),
	changeVolume: function() {
		let gainNode = this.get('gainNode');
		this.setVolumeOnNode(gainNode);
	}.observes('volume').on('init'),
	setFrequencyOnNode: function(drone) {
		let calibration = this.get('currentCalibration');
		if (drone) {
			// let frequency = this.get('currentPitch.frequency');
			let distance = this.get('arrayPos') - 36;
			drone.frequency.value = (440+calibration)*(Math.pow(1.059463094359, distance)); // + calibration;
		}
		this.get('controllers.application').set('calibrationDisplay', 440+calibration+"Hz");
	},
	setVolumeOnNode: function(gainNode) {
		var volume = this.get('volume')/25;
		if (gainNode) {
			gainNode.gain.value = volume;
		}
		this.get('controllers.application').set('volumeDisplay', Math.round(volume*100));
	},
	actions: {
		play: function() {
			this.set('isPlaying', true);
		},
		stop: function() {
			this.set('isPlaying', false);
		},
		changeDefaultPos: function() {
			this.set('defaultArrayPos', this.get('arrayPos'));
		},
		resetToDefault: function() {
			this.set('arrayPos', this.get('defaultArrayPos'));
		},
		changePitchUp: function() {
			let newPos = this.get('arrayPos') + 1;
			this.set('arrayPos', newPos);
		},
		changePitchDown: function() {
			let newPos = this.get('arrayPos') - 1;
			this.set('arrayPos', newPos);
		}
	}
});
