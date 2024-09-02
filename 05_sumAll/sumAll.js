const sumAll = function(Num2, Num1) {
	let res = 0;
	if (Num1 < 0 || Num2 < 0 || typeof res != typeof Num1
		|| typeof res != typeof Num2 ||
		!Number.isInteger(Num1) || !Number.isInteger(Num2)) return "ERROR";
	if (Num2 > Num1)
	{
		let buff = Num2;
		Num2 = Num1;
		Num1 = buff;
	}
	while(Num2 <= Num1)
	{
		res += Num2++;
	}
	return res;
};

// Do not edit below this line
module.exports = sumAll;
