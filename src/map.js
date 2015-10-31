function map(array, fn) {
  var result = [],
    i,
    len = array.length;

  for(i = 0; i < len; i++) {
    result.push(fn(array[i]));
  }

  return result;
}
