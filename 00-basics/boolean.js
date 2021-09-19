// !== - no equal operator
// === - equality operator
// >   - greater than operator
// <   - less than operator
// >=  - greater than or equal operator
// <=  - less than or equal operator

const temp = 32;
let isFreezing;

isFreezing = temp === 32; //true
isFreezing = temp !== 32; //false
isFreezing = temp > 32;   //false
isFreezing = temp < 32;   //false
isFreezing = temp >= 32;  //true
isFreezing = temp <= 32;  //true

// Challenge area

// create age set to your age
const age = 4;
// calculate is child -- if they are 7 or under
const isChild = age <= 7;
// calculate is senior -- if they are 65 or older
const isSenior = age >= 65;
// print is child & is senior values
console.log(isChild, isSenior);

// Challenge area

if     (age <= 7)  console.log('eligible for Child  discount' );
else if(age >= 65) console.log('eligible for Senior discount' );