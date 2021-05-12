// Code your solution in this file!
const returnFirstTwoDrivers = (array) => {
    return array.slice(0,2)
}

const returnLastTwoDrivers = (array) => {
    return array.slice(array.length - 2, array.length)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (int) => {
    
    return function faremultiplier(fare) {
        return fare * int
    }
    
}

const fareDoubler = (fare) => {
    return fare * 2
}

const fareTripler = (fare) => {
    return fare * 3
}

const selectDifferentDrivers = (array, v) => {
    if (v === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(array)
    } else {
        return returnLastTwoDrivers(array)
    }
}