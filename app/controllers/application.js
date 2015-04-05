import Ember from 'ember';

export default Ember.Controller.extend({
  infoMenuOpen: false,
  settingsMenuOpen: false,
  dronesActive: true,
  calibrationDisplay: "440Hz",
  actions: {
    toggleInfoMenu: function() {
      this.toggleProperty('infoMenuOpen');
      this.set('settingsMenuOpen', false);
    },
    toggleSettingsMenu: function() {
      this.toggleProperty('settingsMenuOpen');
      this.set('infoMenuOpen', false);
    }
  }
});
