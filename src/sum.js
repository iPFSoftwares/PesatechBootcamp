const sum = (a, b) => {
	if (typeof a != "number" || typeof b != "number") {
		throw `invalid data type`;
	}
	return a + b;
};

module.exports = sum;
