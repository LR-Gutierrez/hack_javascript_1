/**
 * mediante el loop map agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let numbers = [7,6,5,4,3,2,1];

let result = numbers.filter(num => num % 2 !== 0);


//export result
module.exports = result;