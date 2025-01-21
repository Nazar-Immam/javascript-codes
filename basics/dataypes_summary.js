// PRIMITIVE DATA TYPES
// 7 Types : String , Number , Boolean , null , undefined , symbol , bigint

const score = 100 
const value = 100.3 
const loggedIn = false    
// In the above ex we cans see we haven't used the datatype name like string number etc,
// JS automatically determines the datatype at runtime, 
// This means JS is a dynamically written language.

const id = Symbol('123')  // by writing symbol we assign a unique value which will not be same again 
const anotherid = Symbol('123')
console.log(id===anotherid);  // this returns false . hence proved symbol assigns uniqueness

const number = 987984516874n // writing 'n' after a number makes it bigint

const temperature = null
console.log(typeof temperature);  // => ***  THE typeof FUCTION OF 'NULL' IS OBJECT */

// REFERENCE (NON- PRIMITIVE)

// Array , Objects(v,v,v. Important) , Functions
// The datatype of non-primitive datatypes is always 'object', of function it is, 'object function'.
const heros=["Immam", "Pragyan", "DVS"];  //array

let myObject= {
    name:"Immam",
    age: 22,
}

const myfunction = function(){
    console.log("Hello World ");
    
}


//********************** MEMORY *****************//
// Stack => All primitive datatypes are stored here // stack me declared variables ki copy milti hai for use
// Heap => All non-primitive datatypes are store here // heap me declared variables ki original value milti hai

let userOne={
    email:"immam@google.com",
    age: 22,
}

userTwo = userOne 

userTwo.email = "immam@openai.com"

console.log(userOne.email);
console.log(userTwo.email);  // they got changed as Object is non primitive and it got stored in heap and when used it 
                            // it came as a original value and got changed.



