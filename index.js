// Code your solution in this file!

function returnFirstTwoDrivers(drivers) {
  const newDriver = drivers.slice(0,2)
  return newDriver
}

function returnLastTwoDrivers(drivers) {
  const newDriver = drivers.slice(-2)
  return newDriver
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(number) {
  return function fareMultiplier(number) {return number * number}
}

function fareDoubler(number) {
  return number * 2
}

function fareTripler(number) {
  return number * 3
}

function selectDifferentDrivers(drivers, fn) {
  return fn(drivers)
}
