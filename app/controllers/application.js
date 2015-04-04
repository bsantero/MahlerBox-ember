import Ember from 'ember';

export default Ember.Controller.extend({
  infoMenuOpen: false,
  settingsMenuOpen: false,
  dronesActive: true,
  actions: {
    toggleInfoMenu: function() {
      console.log("toggle Info Menu now: ", this.get('infoMenuOpen'));
      this.toggleProperty('infoMenuOpen');
      this.set('settingsMenuOpen', false);
    },
    toggleSettingsMenu: function() {
      console.log("toggle Settings Menu now: ", this.get('settingsMenuOpen'));
      this.toggleProperty('settingsMenuOpen');
      this.set('infoMenuOpen', false);
    }
  }
});
