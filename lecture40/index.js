console.log('chalu karte hain');

let lastName = 'Babbar';
//in here we use dot ex like lastName. so js is treated as a object stirng 

// let firstName = new String('Love');

// let message = 
// `Hello ${lastName},
// This is
// my first
// Message`;
//  console.log(message);

// let words = message.split(' ');

// console.log(words);

// let date = new Date();
// let date2 = new Date('june 20 1998 07:15');
// let date3 = new Date(1998, 6, 20, 7);
// console.log(date);
// console.log(date2);
// // console.log(date3);
// date3.setFullYear(1947);
// console.log(date3);

//Insertion

let numbers = [1,4,5,7];
console.log(numbers); 
// //end -- we use push
// numbers.push(9);
// console.log(numbers);
// //begin -- we use unshift
// numbers.unshift(8);
// console.log(numbers);
// //middle -- we use splice
// numbers.splice(2,0,'c','a','b');
// console.log(numbers);

//searching
// console.log(numbers);
// console.log(numbers.indexOf(5)); //ye eke primitive type hai iske value same rahete hai object ke value se (value to value compare)  

//we want to check if a number exist in an array
// console.log(numbers.includes(7)); 

// console.log(numbers.indexOf(4,2));

//we create an array of an object 
let courses = [
    {no:1, naam:'Love'},
    {no:2, naam:'Rahul'}
];

console.log(courses);       
//console.log(courses.indexOf({no:1, naam:'Love'})); //iska ans -1 aa rha kyuki ye ek refernce typr hai isme address same raheta but value/reference diff

//line no 61 62 63 is same as 65
// let course = courses.find(function(course){ //function call back
//     return course.naam == 'Rahul';    
// });

let course = courses.find(course => course.naam === 'Love');
console.log(course);