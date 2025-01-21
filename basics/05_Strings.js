const name = "Immam"
const repo = 6

console.log(name + repo + " Value") // this is a bad way of adding strings
//better way is String Interpolation
// inside back tick ==> ` ` and use ${} => to add any variable in b/w a string

console.log(`My name is ${name} , and my repo count is ${repo}`) ;

// to declare a string 
const fullName = new String('Mohd Nazar Immam')
// by declaring a string we get the access to it's indexing and length
console.log(fullName[2]) ;
// we can also use some functions of string if we declare as a string
console.log(fullName.toUpperCase()) ;
console.log(fullName.charAt(3)) ;
console.log(fullName.indexOf('I')) ;

const newstring= fullName.substring(0,6); // gives the substr of fullname from idx 0 to 3 , excludes the end 
console.log(newstring) ;

const anotherString = fullName.slice(-4,3) //tis takes the negative value and prints substr from backward as neg.
console.log(anotherString) ;


const newStringone= "      Immam      " 
console.log(newStringone) ;
console.log(newStringone.trim()) ;  // this trims the extra space in the input


const url = "https://Nebulacodes.com/Nebula20%Codes"
console.log(url.replace('20%','-')) ;  // this replaces any element 

console.log(url.includes('Immam')) ;  // This checks the presence of any word or element 

const gameName = "My name is Mohd Nazar Immam " ;
console.log(gameName.split(' ')); // this converts the string into array , and separate the elements on the basis of anykeywor.






