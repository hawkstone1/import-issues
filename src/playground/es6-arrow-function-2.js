// arguments object - no longer bound with arrow functions

const add =  (a, b) => {
    //console.log(arguments);
    return a + b;
};
console.log(add(55, 1, 1001));

// this keyword - no longer bound with arrow functions
// We will be using map extensively, as it allows us take an array, it allows us to provide a function that transforms each item and we get back a new array with the transformed items.
// Map methode does not affect this array at all!
const user = {
    name: 'Heath',
    cities: ['New Jersey', 'Seoul', 'New York'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
        
    }
};
console.log(user.printPlacesLived());

// Challenge area

const multiplier = {
    //numbers - array of numbers
    // multiplyBy - single number
    // multiply - return a new array where the number have been multiplied.
    /* numbers: [1, 2, 12],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    } */

    numbers: [12, 24, 48],
    multiplyBy: 5,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy)
    }
};
        

console.log(multiplier.multiply());