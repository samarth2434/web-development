console.log('chaliye shuru karte hain');

//object create

// let rectangle = {
//     length : 1,
//     breadth : 2,

//     draw: function() {
//         console.log('drawing rectangle');
//     }
// };

//factory function

//input parameter function createRectangle(length, breadth)
                //   length : length,
                //   breadth : breadth,
// function createRectangle(len, bre){  //ye function object banata hai aur usko return kae deta hain

//     let rectangle = {
//         length : len,
//         breadth : bre,
    
//         draw: function() {
//             console.log('drawing rectangle');
//         }
//     };
//     return rectangle;
// }

// let rectangleobj1 = createRectangle(5,4); //rectangleobj1 is a object and createRectangle is a function ke andar rectangleobj1 object hain uske property return karwa dega.
// let rectangle2 = createRectangle(2,3);
// let rectangle3 = createRectangle(7,9);

// camelcase --> numberofStudents
//constructor function --> pascal function --> first letter of every word is capital--> NumberOfStudent
function Rectangle(){    // this is the constructor code 
    this.length = 1;
    this.breadth = 2;
    this.draw = function(){
        console.log('drawing');
    }
}
//object creation using constructor to return the data
let rectangleObject = new Rectangle();  
//add property
rectangleObject.color = 'yellow';
console.log(rectangleObject);
//delete property
delete rectangleObject.color;
console.log(rectangleObject);

// let Rectangle1 = new Function(
//     'length', 'breadth',
//     'this.length = length
//     this.breadth = breadth;
//     this.draw = function(){
//         console.log('drawing');
//     });
// )

// let a = 10;
// let b = a;
// a++;
// console.log(a);
// console.log(b);

// let a ={value: 10};
// let b=a;

// a.value++;

// console.log(a.value);
// console.log(b.value);

// pass by value concept 
// let a = 10;

// function inc(a) {  //alag se a bana hua hai 
//     a++;
// }

// inc(a);

// console.log(a); // ye jo a print karwaya hai vo first line wala a hai

let rectangle = {
    length: 2,
    breadth: 4
};

//for-in loop
for(let key in rectangle){
    //keys are reflected through key variable
    //values are reflected through rectangle[key]
    console.log(key,rectangle[key]);
}


