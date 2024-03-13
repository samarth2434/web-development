console.log('chalu karte hain');

let lastName = 'Babbar';
//in here we use dot ex like lastName. so js is treated as a object stirng 

let firstName = new String('Love');

let message = 
`Hello ${lastName},
This is
my first
Message`;
 console.log(message);

// let words = message.split(' ');

// console.log(words);

let date = new Date();
let date2 = new Date('june 20 1998 07:15');
let date3 = new Date(1998, 6, 20, 7);
console.log(date);
console.log(date2);
// console.log(date3);
date3.setFullYear(1947);
console.log(date3);