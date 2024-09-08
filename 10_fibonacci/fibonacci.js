const fibonacci = function(index) {
	let fibo = [1, 1];
	if (index == 0)
		return 0;
	if (index < 0)
		return "OOPS";
	for(let i = 2; i < index; i++){
		fibo.push(fibo[i - 2] + fibo[i - 1]);
	}
	console.log(fibo[index]);
	return fibo[index - 1];
};

// Do not edit below this line
module.exports = fibonacci;
