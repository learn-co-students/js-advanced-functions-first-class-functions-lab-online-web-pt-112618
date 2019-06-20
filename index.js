let returnFirstTwoDrivers = function(driversArray) {
	return driversArray.slice(0,2)
}

let returnLastTwoDrivers = function(driversArray) { 
	return driversArray.slice((driversArray.length - 2), driversArray.length)
}