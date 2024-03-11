console.log('chaliye shuru karte hain');

//object create

let rectangle = {
    length : 1,
    breadth : 2,

    draw: function() {
        console.log('drawing rectangle');
    }
};

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
function Rectangle(){
    this.length = 1;
    this.breadth = 2;
    this.draw = function(){
        console.log('drawing');
    }
}
//object creation using constructor to return the data
let rectangleObject = new Rectangle();  