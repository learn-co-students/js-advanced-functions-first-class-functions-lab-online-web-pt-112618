// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers){
    let retArray = [];
    retArray.push(drivers[0]);
    retArray.push(drivers[1]);
    return retArray;
}

const returnLastTwoDrivers = function (drivers){
    let retArray = [];
    retArray.push(drivers[drivers.length-2]);
    retArray.push(drivers[drivers.length-1]);
    return retArray;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(num){
    return function(fare){
        return fare * num;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(arrayOfDrivers, fn){
    return fn(arrayOfDrivers);
}