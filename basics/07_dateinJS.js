// Dates

let myDate = new Date()
console.log(myDate);  // very complex and not readable.
console.log(myDate.toString()) ; // improved readability
console.log(myDate.toDateString()); // more better 
// console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());

// ***** imp ***** //
console.log(typeof myDate); // => object 

// to declare date manually

let myCreatedDate = new Date(2025, 0 , 25)  // month in js starts from zero
let myCreatedDate2 = new Date(2025, 0 , 25, 5 , 3, 15,) // further it takes time 
console.log(myCreatedDate.toLocaleString());
console.log(myCreatedDate2.toLocaleString());
let myCreatedDate3 = new Date("2025-01-25")
console.log(myCreatedDate3.toLocaleString());

// timestamp

let mytimestamp = Date.now()  // this gives the ms from the JS start date till today.
console.log(mytimestamp);

console.log(myCreatedDate.getTime()); // with this current date we compare the timestamp

// this give time in miliseconds, to get time in seconds 

console.log(Math.floor((Date.now())/1000));

//
let newdate = new Date()
console.log(newdate.getDay());
console.log(newdate.getMonth());  // and so on


// ********** customized tolocalestring

newdate.toLocaleString('default',{
    weekday: 'long' ,
    timeZone:
})