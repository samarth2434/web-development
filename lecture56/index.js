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

let waadda1 = new Promise(function(resolve, reject) {
    setTimeout(()=> {
        console.log('setimeout1 started');
     },2000);
     resolve(true);
})

let output = waadaa1.then(() =>{
    let waadaa2 = new Promise(function(resolve, reject){
        resolve("waada 2 resolved");
    })
    return waadaa2;
})

output.then((value) => console.log(value));
 