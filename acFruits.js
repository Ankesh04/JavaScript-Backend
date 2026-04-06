// Now if we want to acuire the the fruits directory then we have to create a  index.js file in the fruits directory
const fruits = require("./Fruits");//first require the whole directory
console.log(fruits);
/*
[
    {name: 'apple', color: 'red'}
    {name: 'banana', color: 'yellow'}
    {name: 'orange', color: 'orange'}
]
*/

// when we reuire the directory it first search for index.js file in that directory
// that index.js actt as entry point to he directory
console.log(fruits[0]);
//{name: 'apple', color: 'red'}
console.log(fruits[0].name);
//apple