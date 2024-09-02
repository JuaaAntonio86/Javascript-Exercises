

const removeFromArray = function(array, ...args){
	const newArray = [];
	array.forEach((item) => {
		if (!args.includes(item)) {
			newArray.push(item);
		}
	});
	return newArray;
};


describe('removeFromArray', () => {
	test('removes a single value', () => {
	  expect(removeFromArray([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
	});
});
// Do not edit below this line
module.exports = removeFromArray;
