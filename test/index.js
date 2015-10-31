(function() {
  'use strict';

  var _compose = compose(add, multiply);
  var _sequence = sequence(add, multiply);
  var _sum = function(numbers) {
    return reduce(sum, 0, numbers);
  };
  var _forEach = 0;
  forEach([1, 2, 3], function(element) {
    _forEach = _forEach + element;
  });
  var _map = map([1, 2, 3], function(element) {
    return element + 1;
  });

  console.log(
    assertDeepEqual('Multiply and then add a number', _compose(22), 45, true),
    assertDeepEqual('Add and then multiply a number', _sequence(22), 46, true),
    assertDeepEqual('Reduce an array into a single value', _sum([1, 2, 3]), 6, true),
    assertDeepEqual('Apply a function to every element of an array', _forEach, 6, true),
    assertDeepEqual('Map an array into a new array', _map, [2,3,4], true)
  )

})();
