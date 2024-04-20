const accountId =12345
let accountEmail="pawan@google.com"
var accountPassword ="1234567"
accountCity ="jaipur"
let accountState;

// accountId = 2 // not allowed
accountEmail="pa@ps.com"
accountPassword="23232"
accountCity="Kota"

console.log(accountId);

// prefer not to use var
// because of issue in block scope and function scope


console.table([accountId, accountEmail, accountPassword, accountPassword, accountCity, accountState]);