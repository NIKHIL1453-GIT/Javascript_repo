console.log("NIKHIL BHATIA");
let a = 10 
console.log(a);
const accountId = 144553
let accountEmail = "nik@nik.com"
var accountPassword = "12345"
accountCity = "Jaipur"

let accountState;

// accountId = 10 //not allowed bcoz it is const.
accountEmail = "nb@nb.com"
accountPassword = "5555"
accountCity = "Bengaluru"

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

/*
Prefer not to use var ...bcoz of issue of functional scope and block scope.
*/