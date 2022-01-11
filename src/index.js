module.exports = function reverse(n) {
	let positive = Math.abs(n);
	let result = String(positive).split('').reverse().join('');

	return result;
}
