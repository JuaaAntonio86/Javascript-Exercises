const convertToCelsius = function(fahren) {
	let celcius = (fahren - 32) * 5/9;
	if (Number.isInteger(celcius)){
		return celcius;
	}
	else{
		return celcius.toFixed(1) - 0;
	}
};

const convertToFahrenheit = function(celcius) {
	let fahren = (celcius * 9/5) + 32;
	console.log(fahren);
	if (Number.isInteger(fahren)){
		return fahren;
	}
	else{
		return fahren.toFixed(1) - 0;
	}
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
