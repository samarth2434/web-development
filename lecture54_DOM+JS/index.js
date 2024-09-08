// //addung 100 para
// for(let i=1; i<=100; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para' + i;

//     document.body.appendChild(newElement);
// }

// //optimising a bit
// let myDiv = document.createElement('div'); 

// for(let i=1; i<=100; i++){
//     let element = document.createElement('p');
//     element.textContent = 'This is para' + i;

//     myDiv.appendChild(element);

// }

// document.body.appendChild(myDiv);





//single threading 

function addpara(){
    let para = document.createElement('p');
    para.textContent = 'js is single';
    document.body.appendChild(para);

}

function appendNewMessage(){
    let para = document.createElement('p');
    para.textContent = 'Kya haal chaal';
    document.body.appendChild(para);
}

addpara();
appendNewMessage();