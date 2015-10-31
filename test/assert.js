'use strict';

var assertDeepEqual = function(test, a, b, inBrowser) {
  var result = (a === b);

  if(Array.isArray(a)) {
    if(a.length === b.length) {
      result = a.every(function(element, index) {
          return element === b[index];
      });
    }
  }

  if(inBrowser) {
    if(result) {
      document.write('<p style="color:green">');
      document.write('&#10003;&nbsp;');
      document.write(test);
      document.write('</p>');
    } else {
      document.write('<p style="color:red">');
      document.write('&#x2717;&nbsp;');
      document.write(test);
      document.write('</p>');
    }
  }

  return result;
};
