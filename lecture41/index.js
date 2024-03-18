// console.log('kya scene');

//function declaration 
// function run(){
//     console.log('running');
// }

//function call and invoke
// run();

// function assignment 
// named function assignment 
// let stand = function walk(){
//     console.log('walking');
// };
//function call
// stand();

//Anonymous function Assignment 
// let stand2 = function(){
//     console.log('walking');
// };

// stand2();

// let x = 1;
// x = 'a';

// console.log(x);

//-----only for two parameter
// function sum(a,b){
//         return a+b;
// };
// console.log(sum(1,2));

//-------with use of argument aur isme sirf key and value he provide karega
// function sum(a,b){
//     console.log(arguments);
//     return a+b;
// }
// // console.log(sum(1,2));
// let ans = sum(1,2,3,4,5);  

//------with the use of for loop to sum of all the number and give the output as a sum of all those number
// function sum(a,b){
//     let total = 0;
//     for(let value of arguments)
//     total = total + value;
// return total;
// }

// let ans = sum(1,2,3,4,5,6);
// console.log(ans);

//---- rest operator
// function sum(num, value, ...args){} 
// function sum(...args){
//     console.log(args)
// };
// sum(1,2,3,4,5,);

//----default parameter
// function interest(p,r,y){ //here we use default parameter like r=10 y=5
//     return p*r/100*y;
// }
// console.log(interest(1000,10,5));

//----Getter Setter
//getter --> access properties
//setter--> change or mutate properties

// let person = {
//     fName : 'Love',
//     lName : 'Babbar',
//     get fullName(){
//         return `${person.fName} ${person.lName}`;
//     },
// // console.log(person);
// set fullName(Value){
//     let parts = Value.split(' ');
//     this.fName = parts[0];
//     this.lName = parts[1];
// }
// };
// console.log(person.fullName);  //output Love Babbar

// person.fullName = 'samarth gupta'
// console.log(person.fullName);

// try and catch property
// try {
//     person.fullName = 'samarth';
// }
// catch(e){
//     alert('you have sent a number in fullNmae');
// };

// console.log(person.fullName);

//----scope

// {
//     let a = 5;
//     console.log(a);
// }

// function walk(){
//     var a = 5;
// }
// console.log(a);

// for(var i = 0; i<10; i++){

// }
// console.log(i);


//------- add the numbers 
// function sum(a,b){
//     let total = 0;
//     for(let value of arguments )
//     total = total + value;
// return total;
// }
// let ans = sum(1,2,3,4);
// console.log(ans);

let arr = [1,2,3,4];
// let total = 0;

// for(let value of arr)
//     total= total + value;

// console.log(total);

let totalSum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log("PRINTING TOTAL SUM:")
console.log(totalSum);