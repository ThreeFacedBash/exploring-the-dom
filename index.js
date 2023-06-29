const myMessage = document.querySelector('.myMessage');
console.log(myMessage);
myMessage.addEventListener('click', function () {
    myMessage.classList.toggle('darkmode')
})

setTimeout(function () {
    myMessage.innerText = 'This is a message in the DOM that appears 3 seconds after refreshing this page!'
}, 3000)




const theMessageButton = document.querySelector('.theMessageButton');
theMessageButton.addEventListener('click', function () {
    myMessage.innerText = 'Button has been pressed'
    setTimeout(function () {
        theMessageButton.innerText = 'Show message'
    }, 3000)
});


const clearsMessage = document.querySelector('.clearsMessage');
clearsMessage.addEventListener('click', function () {
    myMessage.innerText = ' '

})

const inputBox = document.querySelector('.theInputValue');
theMessageButton.addEventListener('click', function () {
    if (inputBox.value.trim().length > 0) {
        myMessage.innerText = inputBox.value;
    }
});


//Fruits Section

const fruits = ['Apples', 'Pears', 'Oranges', 'Grapes', 'Bananas'];
const fruitList = document.querySelector(".fruits");

for (let i = 0; i < fruits.length; i++) {
    // get fruits from the list
    const fruit = fruits[i];

    // create a new li element
    const li = document.createElement('li');
    li.innerText = fruit;
    fruitList.appendChild(li);
}

const addFruits = document.querySelector(".addFruit");
const addedFruits = document.querySelector(".addedFruit");
addedFruits.addEventListener('click', function () {
    addFruits.value += fruit
});

