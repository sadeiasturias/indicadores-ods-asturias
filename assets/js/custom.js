opensdg.dataRounding = function(value) {
  if (value == null) {
    return value
  }
  else {
    return value.toLocaleString('es-ES', {maximumFractionDigits: 1, minimumFractionDigits: 1})
    // Returns a character (e.g. "13.0").
    // For mose reason, "0.0" is still shown as "0" in tables on the web.
  }
};

// Charting library jqPlot seems not to accept comma as a decimal separator,
// we therefore cannot use the following:
	// value.toFixed(1).replace('.', ',')
	// Number(value.toFixed(1)).toLocaleString('es-ES')

// Sentences below return a number (in which decimal zeroes disappear):
    // Number(value.toFixed(1))
    // Number(value.toPrecision(3))