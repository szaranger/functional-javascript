'use strict';

var sequence = function(f, g) {
  return function() {
    return g.call(this, f.apply(this, arguments));
  };
};
