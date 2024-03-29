/*
// Used in opensdg version 1.1:
opensdg.dataRounding = function(value) {
  if (value == null) {
    return value
  }
  else {
    return value.toFixed(1) // Returns a character (e.g. "13.0")
  }
};
*/

// Charting library jqPlot seems not to accept comma as a decimal separator,
// we therefore cannot use the following:
	// value.toFixed(1).replace('.', ',')
	// Number(value.toFixed(1)).toLocaleString('es-ES')
	// value.toLocaleString('es-ES', {maximumFractionDigits: 1, minimumFractionDigits: 1})

// Sentences below return a number (in which decimal zeroes disappear):
    // Number(value.toFixed(1))
    // Number(value.toPrecision(3))
	
//{%- include assets/js/indicatorModel.js -%}

