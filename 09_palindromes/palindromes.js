const palindromes = function (string) {

	let arr  = string.toLowerCase().split("");
	let cleanarr = arr.filter((cha) => {
			if (!(cha >= "a" && cha <= "z") &&
				!(cha >= "A" && cha <= "Z") && !(cha >= "0" && cha <= "9")){
					return false;
			}
			return true;
	});
	let revarrr = cleanarr.slice().reverse();
	for( let i = 0; i < cleanarr.length; i++)
	{
		if(cleanarr[i] !== revarrr[i])
			return false;
	}
	return true;
};

// Do not edit below this line
module.exports = palindromes;
