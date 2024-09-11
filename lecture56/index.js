// function sync(){              // sync code
//     console.log('first');
// }
// sync();

// console.log('second');

//---------- ASync code
// setTimeout(function() {
//     console.log('third');
// },3000) 
// function sync(){
//     console.log('first');
// }
// sync();

// console.log('second');

//create promise
// let meraPromise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//     console.log('I am inside promise');
// }, 5000);
// resolve(2233);

// });
// console.log('pehela');

//-------- using then for resolve  for the value 
//-------- using catch for reject  for the error

// let waadda1 = new Promise(function(resolve, reject) {
//     setTimeout(()=> {
//         console.log('setimeout1 started');
//      },2000);
//      resolve(true);
// })

// let output = waadaa1.then(() =>{
//     let waadaa2 = new Promise(function(resolve, reject){
//         resolve("waada 2 resolved");
//     })
//     return waadaa2;
// })

// output.then((value) => console.log(value));

// async function abcd() {
//     return 7;
// }

//------ call API to see maharashtra weather 
// async function utility() {

// let delhiMausam = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve("Delhi me bohot garmi hai");
//     },5000);

// }); 

// let burhanpurMausam = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve("Burhanpur is cool");
//     },6000);

// }); 

// let dM = delhiMausam;
// let bM = burhanpurMausam;

// return [dM, bM];
// }

//--------------to fetch the data
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))



//---- using async fun
async function helper(){
    // creating 
let options = {
    method: 'POST', 
    body: JSON.stringify({    // json ke content ko convert into string
      title: 'samarth',   //send
      body: 'i am software engineering',    //send
      userId: 1,     // send
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
};

//post call done it is used to send the request 

let content =await fetch('https://jsonplaceholder.typicode.com/posts', options); 
let response = content.json();
return response;

}


async function utility(){
    let ans =await helper();
    console.log(ans);
}

utility();