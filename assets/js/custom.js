opensdg.dataRounding = function(value) {
  if (value == null) {
    return value
  }
  else {
    return value.toFixed(1) // returns a character
    // Sentences below return a number:
    // return Number(value.toFixed(1))
    // return Number(value.toPrecision(3))
  }
};
