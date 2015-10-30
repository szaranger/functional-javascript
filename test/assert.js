'use strict';

var assertDeepEqual = function(test, a, b, inBrowser) {
  var result = a === b;

  if(inBrowser) {
    document.write(test);
  }
  
  return result;
};
