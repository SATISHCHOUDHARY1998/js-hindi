let myDate = new Date()

// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());

let myCreateDate = new Date("06-30-24")
// let myTimeStamp = Date.now()

// console.log(myCreateDate);
// console.log(typeof myDate); // Object


let myCreationDate = new Date(2024, 0, 23)
// console.log(myCreationDate.toDateString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreationDate.getTime());

console.log(Date.now()/1000); // will get today's right now time
console.log(Math.floor(Date.now()/1000)); //to remove negative values