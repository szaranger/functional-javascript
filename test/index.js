(function() {
  'use strict';

  var _compose = compose(add, multiply);
  var _sequence = sequence(add, multiply);

  var sum = function(numbers) {
    return reduce(add, 0, numbers);
  }

  console.log(
    assertDeepEqual('Multiply and then add a number', _compose(22), 45, true),
    assertDeepEqual('Add and then multiply a number', _sequence(22), 46, true),
    assertDeepEqual('Add and then multiply a number', _reduce(22), 46, true)
  )

})();
