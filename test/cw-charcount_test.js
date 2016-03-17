(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */
  var lifecycle = {
    setup: function() {
      this.target = 'test1';
      $('#' + this.target).CWCharCount();
    },
    teardown: function() {

    }
  };

  module('setup', lifecycle);

  test('counter found', function() {
    expect(1);

    equal($('#cw_count_' + this.target).length, 1, 'Found counter');
  });

  test('counter output correct number', function() {
    expect(1);

    equal($('#cw_count_' + this.target).text(), 10, 'Counter displays 10 remaining');
  });

}(jQuery));
