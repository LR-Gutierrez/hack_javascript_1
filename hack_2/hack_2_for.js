/**
 * mediante el loop for agregar los números 1,2,3,4,5
 * dentro del array result 
 * 
 * 
 * output => [1,2,3,4,5]
 */
let result = [];
for (i = 0; i < 6; i++) {
    if (i > 0){
        result.push(i);
    }
}

//export result
module.exports = result;