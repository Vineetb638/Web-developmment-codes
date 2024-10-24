let score = "33abc";
console.log(typeof(score));
console.log(typeof score);
let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);
/* The above result gives NAN
 so Never rely on the Conversion of Number
 */
/*
"33" => 33
"33abc" => NaN
true  =1; false = 0
*/
let isLoggedIn = 1
let booleanisLoggedIn = Boolean(isLoggedIn);
console.log(booleanisLoggedIn);
// 1 => true;
// 0 =>false ;
// "" => false;
// "hitesh" => true;
let someNumbber = 33
let stringNumber = String(someNumbber);
console.log(stringNumber);
console.log(typeof stringNumber)

// ************************Operations************************
let value = 3;
let negValue = -value;
console.log(negValue);
console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2/ 2);
console.log(2 ** 3);
console.log(2 % 3);
let str1 = "hello ";
let str2 = "vineet"
let str3 = str1 + str2;
console.log(str3);
console.log(1 + "2")
console.log("1" + 2 +2);
console.log(2 + 2 +"1");
console.log(true);
console.log(+true);  // Not a good way use this
console.log(+"");//Not a good way for coding
/* 
if we print the empty string then we get 0 as false 
*/
let num1 , num2 , num3;
num1 = num2 = num3 = 2 + 2;
// bad way 
let gameCounter =  100;
gameCounter++;
console.log(gameCounter);


