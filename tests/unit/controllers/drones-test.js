import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('controller:drones', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

// Replace this with your real tests.
test('current pitch is correct', function(assert) {
  var controller = this.subject();
  var testObject1 = {message: "hello world"};
  var testObject2 = {message: "eat the banana"};
  var testObject3 = {message: "suck it trebek"};
  var testObject4 = {message: "eat at Long Johnson Silver's"};
	controller.set('model', [testObject1, testObject2]);
  assert.equal(controller.get('currentPitch'), testObject1);
  controller.set('arrayPos', 1);
  assert.equal(controller.get('currentPitch'), testObject2);
	controller.set('model', [testObject3, testObject4]);
  assert.equal(controller.get('currentPitch'), testObject4);
});
