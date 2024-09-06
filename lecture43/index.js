// document.addEventListener('click', function(){
//     console.log('I have clicked on document');

// });

// function eventFunction(){
//     console.log('I have cliked on the document');
// }

// document.addEventListener('click', eventFunction);
 //------------------
// const content = document.querySelector('#wrapper');

// content.addEventListener('click', function(event){
//     console.log(event);
// });

 //------------prevent default
// let links = document.querySelectorAll('a');
// let thirdLink = links[2];

// thirdLink.addEventListener('click', function(event){
//     event.preventDefault();
//     console.log('Maza aaya');
// }); 


//-----------Avoid too many event 
 //create new div

let myDiv = document.createElement('div');

for(let i = 1; i<=100; i++){
    let newElement = document.createElement('p');
    newElement.textContent = 'This is para' + i;

    newElement.addEventListener('click', function(event){
        console.log('I have clicked on para');
    });
    myDiv.appendChild(newElement);

}
document.body.appendChild(myDiv);