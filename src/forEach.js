'use strict';

function forEach(array, fn) {
  var i,
    len = array.length;

  for(i = 0; i < len; i++) {
    fn(array[i]);
  }
}
