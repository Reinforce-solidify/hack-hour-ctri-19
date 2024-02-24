/* 

Given a string that represents a Binary Number, write a function that converts this string into a decimal number. DO NOT use the native parseInt() method. 

For example: 

binToDec('0')   -> 0
binToDec('11')  -> 3
binToDec('100') -> 4
binToDec('101') -> 5
binToDec('0101') -> 5

For more information on how to read binary, check out this article: 
https://m.wikihow.com/Read-Binary

*/

function binToDec(binString){
    let output = 0;
    let count = 0;
    
    for (let i = binString.length - 1; i >= 0; i--) {
        output = output + (Number(binString[i]) * Math.pow(2, count++));
    }

    return output;
}

console.log(binToDec('0101'));

module.exports = {binToDec};