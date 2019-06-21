let returnFirstTwoDrivers = function(driversArray) {
	return driversArray.slice(0,2)
}

let returnLastTwoDrivers = function(driversArray) { 
	return driversArray.slice((driversArray.length - 2), driversArray.length)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


let createFareMultiplier = function (multiplyValue) {
  return function (value) {
    return multiplyValue * value;
  };
};

let fareDoubler = createFareMultiplier(2)

let fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function (drivers, whichDrivers) {
  return whichDrivers(drivers);
};