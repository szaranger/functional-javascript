(function() {
  'use strict';

  var run = compose(add, multiply);

  console.log(
    assertDeepEqual('Add and then multiply a number', run(22), 45, true)
  )

})();
