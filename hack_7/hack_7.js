/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * modificar a mayúscula el primer caracter de cada item string del array
 *  
 * 
 * output => ["Foo","Bar","Baz","Qux","Echo"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];
for (let i = 0; i < arr.length; i++) {
    let firstChar = arr[i][0].toUpperCase();
    let restOfString = arr[i].slice(1);
    let modifiedString = firstChar + restOfString;
    result.push(modifiedString);
}

//export result
module.exports = result;