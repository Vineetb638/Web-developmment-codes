const accountID = 144202
let accountEmail = "vineet@baghel.in"
var accountPassword = "12345"
accountCity = "Agra"
let accountWork;
/*
1. we can not change the value of caonst variable 
2. we should not use var because of the functional scope 
*/
accountEmail = "vivek@.in"
accountPassword = "jhkssd"
accountCity = "Mathura"
console.log(accountEmail);
console.table([accountID , accountEmail , accountPassword , accountCity,accountWork])
/* console.log is used for just print the data 
and console.table is used for printing the multiple data in one table
*/