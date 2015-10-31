'use strict';

var reduce = function(combine, base, array) {
  var i,
    len = array.length;

  for(i = 0; i < len; i++) {
    base = combine(base, array[i]);
  }

  return base;
};
