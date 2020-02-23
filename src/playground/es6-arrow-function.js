/* // ES5 function

function square (x) {
    return x * x;
};

console.log(square(3))

// Arrow function (arrow functions are anonymous)
/* const squareArrow = (x) => {
    return x * x;
}; */

// Arrow function expression syntax

/* const squareArrow = (x) => x * x;

console.log(squareArrow(4)); */ 

// Challenge - Use arrow functions
// getFirstName ('Mike Smith') -> "Mike"
// Create regular arrow function
// Create arrow function using shorthand syntax
// What do you want to extract? Where do you want to extract from? What do you want to do to extract?
// console.log(what do you want to get('input'))


/* const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
} */

// Challenge Part 2
// What do you want to get? Where do you want to get if from?
// How do you want to get it?

const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Stephen Williams'));