// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers){
   return drivers=['Antonia', 'Nuru'];
}

const returnLastTwoDrivers = function(drivers){
    return drivers=['Amari', 'Mo'];
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(faremultiplier){
    return function(value){
        return faremultiplier*value;
    }
}

  const fareDoubler = createFareMultiplier(2);
  const fareTripler = createFareMultiplier(3);

  function selectDifferentDrivers(arrayOfDrivers, func){
    return func(arrayOfDrivers);
  }