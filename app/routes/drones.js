import Ember from 'ember';

export default Ember.Route.extend({
	setupController: function(controller, model){
		this._super(controller, model);
		this.controllerFor('application').set('dronesActive', true);
		this.controllerFor('application').set('infoMenuOpen', false);
		this.controllerFor('application').set('settingsMenuOpen', false);
	},
	model: function() {
		return [
			{ name: 'A', octave: 1, frequency: 55.0 },
			{ name: 'A#', octave: 1, frequency: 58.27 },
			{ name: 'B', octave: 1, frequency: 61.74 },
			{ name: 'C', octave: 2, frequency: 65.41 },
			{ name: 'C#', octave: 2, frequency: 69.30 },
			{ name: 'D', octave: 2, frequency: 73.42 },
			{ name: 'D#', octave: 2, frequency: 77.78 },
			{ name: 'E', octave: 2, frequency: 82.41 },
			{ name: 'F', octave: 2, frequency: 87.31 },
			{ name: 'F#', octave: 2, frequency: 92.50 },
			{ name: 'G', octave: 2, frequency: 98.00 },
			{ name: 'G#', octave: 2, frequency: 103.83 },
			{ name: 'A', octave: 2, frequency: 110.0 },
			{ name: 'A#', octave: 2, frequency: 116.54 },
			{ name: 'B', octave: 2, frequency: 123.47 },
			{ name: 'C', octave: 3, frequency: 130.81 },
			{ name: 'C#', octave: 3, frequency: 138.59 },
			{ name: 'D', octave: 3, frequency: 146.43 },
			{ name: 'D#', octave: 3, frequency: 155.56 },
			{ name: 'E', octave: 3, frequency: 164.81 },
			{ name: 'F', octave: 3, frequency: 174.61 },
			{ name: 'F#', octave: 3, frequency: 185.00 },
			{ name: 'G', octave: 3, frequency: 196.00 },
			{ name: 'G#', octave: 3, frequency: 207.65 },
			{ name: 'A', octave: 3, frequency: 220.00 },
			{ name: 'A#', octave: 3, frequency: 233.08 },
			{ name: 'B', octave: 3, frequency: 246.94 },
			{ name: 'C', octave: 4, frequency: 261.63 },
			{ name: 'C#', octave: 4, frequency: 277.18 },
			{ name: 'D', octave: 4, frequency: 293.66 },
			{ name: 'D#', octave: 4, frequency: 311.13 },
			{ name: 'E', octave: 4, frequency: 329.63 },
			{ name: 'F', octave: 4, frequency: 349.23 },
			{ name: 'F#', octave: 4, frequency: 369.99 },
			{ name: 'G', octave: 4, frequency: 392.00 },
			{ name: 'G#', octave: 4, frequency: 415.30 },
			{ name: 'A', octave: 4, frequency: 440.00 },
			{ name: 'A#', octave: 4, frequency: 466.16 },
			{ name: 'B', octave: 4, frequency: 493.88 },
			{ name: 'C', octave: 5, frequency: 523.25 },
			{ name: 'C#', octave: 5, frequency: 554.37 },
			{ name: 'D', octave: 5, frequency: 587.33 },
			{ name: 'D#', octave: 5, frequency: 622.25 },
			{ name: 'E', octave: 5, frequency: 659.25 },
			{ name: 'F', octave: 5, frequency: 698.46 },
			{ name: 'F#', octave: 5, frequency: 739.99 },
			{ name: 'G', octave: 5, frequency: 783.99 },
			{ name: 'G#', octave: 5, frequency: 830.61 },
			{ name: 'A', octave: 5, frequency: 880.00 },
			{ name: 'A#', octave: 5, frequency: 932.33 },
			{ name: 'B', octave: 5, frequency: 987.77 },
			{ name: 'C', octave: 6, frequency: 1046.50 },
			{ name: 'C#', octave: 6, frequency: 1108.73 },
			{ name: 'D', octave: 6, frequency: 1174.66 },
			{ name: 'D#', octave: 6, frequency: 1244.51 },
			{ name: 'E', octave: 6, frequency: 1318.51 },
			{ name: 'F', octave: 6, frequency: 1396.91 },
			{ name: 'F#', octave: 6, frequency: 1479.98 },
			{ name: 'G', octave: 6, frequency: 1567.98 },
			{ name: 'G#', octave: 6, frequency: 1661.22 },
			{ name: 'A', octave: 6, frequency: 1760.00 }
		];
	},
	actions: {
	changeVolumeUp: function() {
		let volume = this.controller.get('volume');
		if (volume < 25) {
			this.controller.set('volume', volume + 1);
		}
	},
	changeVolumeDown: function() {
		let volume = this.controller.get('volume');
		if (volume > 0) {
			this.controller.set('volume', volume - 1);
		}
	},
	changeCalibrationUp: function() {
		let calibration = this.controller.get('currentCalibration') + 1;
		this.controller.set('currentCalibration', calibration);
		console.log(calibration);
	},
	changeCalibrationDown: function() {
		let calibration = this.controller.get('currentCalibration') - 1;
		this.controller.set('currentCalibration', calibration);
		console.log(calibration);
	}
		// changeCalibrationUp: function() {
		// 	let model = this.controller.get('model');
		// 	console.log(model[0]['frequency']);
		// 	let currentBase = model[0]['frequency'];
		// 	currentBase += 0.125;
		// 	for (let i = 0; i < model.length; i+=1 ) {
		// 		let element = model.objectAt(i);
		// 		let calculatedFrequency = (currentBase*(Math.pow(1.059463094359, i))).toFixed(3);
		// 		Ember.set(element, 'frequency', calculatedFrequency);
		// 	}
		// 	console.log(model[0]['frequency']);
		// },
		// changeCalibrationDown: function() {
		// 	let model = this.controller.get('model');
		// 	let currentBase = model[0]['frequency'];
		// 	currentBase -= 0.125;
		// 	for (let i = 0; i < model.length; i+=1 ) {
		// 		let element = model.objectAt(i);
		// 		let calculatedFrequency = (currentBase*(Math.pow(1.059463094359, i))).toFixed(3);
		// 		Ember.set(element, 'frequency', calculatedFrequency);
		// 	}
		// }
	}
});
