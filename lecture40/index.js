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

// let numbers = [1,4,5,7];
// console.log(numbers); 
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
// ------
// let courses = [
//     {no:1, naam:'Love'},
//     {no:2, naam:'Rahul'}
// ];

// console.log(courses);       
//console.log(courses.indexOf({no:1, naam:'Love'})); //iska ans -1 aa rha kyuki ye ek refernce typr hai isme address same raheta but value/reference diff

//line no 61 62 63 is same as 65
// let course = courses.find(function(course){ //function call back
//     return course.naam == 'Rahul';    
// });

// let course = courses.find(course => course.naam === 'Love');
// console.log(course);

// -----Removing element
// let numbers = [1,2,3,4,5,6];
// //end
// numbers.pop();
// //begin
// numbers.shift();
// //middle  
// numbers.splice(2,1);
// console.log(numbers);

//---- emptying an array
// let numbers = [1,2,3,4,5];
// let numbers2 = numbers;

// numbers.length = 0;

// console.log(numbers);
// console.log(numbers2);

// combining and slicing 
// let first = [1,2,3];
// let second = [4,5,6];

// // let combined = first.concat(second);
// // console.log(combined);

// // let sliced = combined.slice(2,4);
// // console.log(sliced);
// let marks = [10,20,30,40,50,60,70,80];
// let sliced = marks.slice(2,6);
// console.log(sliced);

//spread operator
// let first = [1,2,3];
// let second = [4,5,6];

// let combined = [...first,...second];
// console.log(combined);
// // to create a copy 
// let another = [...combined];
// console.log(another);

//iterating an array
// let arr =[10,20,30,40,50];

// for(let value of arr){
//     console.log(value);
// };

//joining arrays

// let numbers = [10,20,30,40,50];
// const joined = numbers.join(',');

// console.log(joined);

//split method -- array me convert kar deta hain

let message = 'This is my first message'
let parts = message.split(' ');
console.log(parts);

