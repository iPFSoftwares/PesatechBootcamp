const division = (a, b) => {
	if (typeof a != "number" || typeof b != "number" ) {
		throw `invalid data type`;
	} 
	try{
		return a / b;
	} catch (e){
		console.log(e);
	}
	
};

module.exports = division;
