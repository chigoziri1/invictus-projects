// const methods = require('./method')
// const addResult = methods.add(7,9)
// console.log(addResult);

const { add, sub, mul, div } = require("./arrow");


// const addResult = [add(5,9), sub(5,3), mul(2,3), div(6,2)];
const addResult1 = add(3,5)
console.log(addResult1);

const addResult2 = sub(3,5)
console.log(addResult2);