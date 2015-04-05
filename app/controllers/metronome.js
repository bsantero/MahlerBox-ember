import Ember from 'ember';

export default Ember.Controller.extend({
  isPlaying: false,
  currentTempo: 120,
  actions: {
    play: function() {
      this.set('isPlaying', true);
    },
    stop: function() {
      this.set('isPlaying', false);
    },
		changeTempo: function(amount) {
      let tempo = this.get('currentTempo') + amount;
      if (tempo >= 40 && tempo <= 240) {
		    this.set('currentTempo', tempo);
      }
		}
  }
});
