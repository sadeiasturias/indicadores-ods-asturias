opensdg.dataRounding = function(value) {
  if (value == null) {
    return value
  }
  else {
    return Number(value.toFixed(1))
    // value.toPrecision(3)
  }
};
