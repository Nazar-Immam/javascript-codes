const score = 400 // automatically takes as number
console.log(score);

// to initialize as a number 

const balance = new Number(300)
console.log(balance); 

console.log(balance.toString()); // converts number to string

console.log(balance.toFixed(2)); // gives the precise value till 2 decimal points

const value = 123.8971
console.log(value.toPrecision(3)); // Rounds of the value till the given digits.

const hundereds = 1000000
console.log(hundereds.toLocaleString('en-IN')); // Converts it to indian number system

//  ********************* MATH ********************  //

console.log(Math);
console.log(Math.abs(-9)); // gives only the positive value the absoulute val
console.log(Math.round(7.6)); // Round offs to the integer
console.log(Math.ceil(4.2)); // Rounds of to the top/greatest integer
console.log(Math.floor(4.9)); //Rounds of to the lowest integer around

/* Important */
console.log(Math.random()) ; // It always gives a random value b/w 0 and 1  
console.log((Math.random()*10) + 1) ;
console.log(Math.floor((Math.random()*10) + 1)); // To get random values b/w 1 and 10 and in single digit


// ****Formula to get random value b/w any two numbers *** //

let min = 10 
let max =20 

console.log(Math.floor(Math.random()*(max-min + 1) + min ));




