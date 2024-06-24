/**
 * [1,2,3,4,5]
 * ["foo","bar","baz","qux","echo"]
 * 
 * 1) incluir los 2 array en 1 solo array
 * 2) los items del number array 1,3,5 se reescriben one,three,five
 * del string array todos sus items mutan de acuerdo a lo siguiente:
 * foo => f00
 * bar => Bar
 * baz => b@z   
 * qux => quX
 * echo => 3ch0
 * 3) anexar al inicio, al final y entre la unión de los array el string "h@ck"
 * 
 * 
 * output => ["h@ck","one",2,"three",4,"five","h@ck","f00","Bar","b@z","quX","3ch0","h@ck"]   
 */
let numberArray = [1,2,3,4,5];
let stringArray = ["foo","bar","baz","qux","echo"]
let result = [];
result = numberArray.concat(stringArray);
for (let i = 0; i < result.length; i++) {
    
    if(numberArray[i] % 2 !== 0) {
        switch (numberArray[i]) {
            case 1:
                result[i] = "one";
                break;
            case 3:
                result[i] = "three";
                break;
            case 5:
                result[i] = "five";
                break;
        }
    }
}
for (let i = 0; i < stringArray.length; i++) {
  switch (stringArray[i]) {
    case "foo":
      result[i + numberArray.length] = "f00";
      break;
    case "bar":
      result[i + numberArray.length] = "Bar";
      break;
    case "baz":
      result[i + numberArray.length] = "b@z";
      break;
    case "qux":
      result[i + numberArray.length] = "quX";
      break;
    case "echo":
      result[i + numberArray.length] = "3ch0";
      break;
  }
}
for (let i = 0; i < result.length; i++){
    if(i === 0){
        result.unshift("h@ck")
    }else if (i === 5){
        result.splice(i + 1, 0, "h@ck");
    }
}
result.push("h@ck")

//export result
module.exports = result;