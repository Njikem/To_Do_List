// Arrays

myArray = [10, 22, 33]

console.log(myArray);
console.log(myArray[0]);
myArray[1] = 100;

// Push add a value in the array
console.log(myArray.push(50));

//splice remove value from the array. It takes two number. The first number is index let say 0 which is 10 and the second value is the number of values you want to remove.

console.log(myArray.splice(0, 1));


// Array can also look like this

array = [1, 'hello', true, {name: 'socks'}, [1, 2]]

console.log(array[3]);
console.log(array[4]);




// Create an empty array
//create an object inorder to work with the date input

let todoList = [ 'make dinner', 'wash dishes']


rendertodoList();

//This will render whatever value you want to add to the list so  that when you add an item it will display on the page with the other items.

function rendertodoList(){

// You want to combined the html code together using the accumulator pattern and put on the web page

let todoListHTML = '';


for(let i = 0; i < todoList.length; i++){
    
    //You now change the todo variablename to todoobject since it is now an object.

    let todo = todoList[i];
    //This p tag will put the todo on the web page. By doing this you have to combine the html and the todo. To generate the Delete button inside the html.
    const html = `<p>
    ${todo} 
    
    <button onclick="

    todoList.splice(${i}, 1);
    rendertodoList();
    
    ">Delete</button> 
    
    </p>`;
    todoListHTML += html;

}

console.log(todoListHTML);

//To make the todoList to show up on the page
document.querySelector('.js-todo-list').innerHTML = todoListHTML;

}


function addTodo(){

    //Get the textbox
    let inputElement = document.querySelector('.js-name-input');
     let name = inputElement.value;
     todoList.push(name);
     console.log(todoList);


     // To Reset the textbox give it an empty string. That is whenever you type something in the textbox you reset it back to it original form. 

     inputElement.value = '';

     //This will render what ever value you want to add to the list. 
     rendertodoList();
}


/*
let randomNumber = 0; 

while(randomNumber < 0.5) {
    randomNumber = Math.random();

}

console.log(randomNumber);
*/


//Looping through an array. you have to go through each value of an array one by one and do something with it.

/*
let todoListone = [
    'make dinner',
    'wash dishes',
    'watch youtube',

];


for(let i = 0; i <= todoListone.length; i++){

    //To access the value in the todolist
    let value = todoListone[i];
    console.log(value);
}
*/

//Accumulator pattern is when you want to loop through a whole lot of numbers and calculate the total.

/*
let numb = [1, 2, 3, 5];

let total = 0;
for(let i =0; i <= numb.length; i++){
    let num = numb[i];
    total = total + num;
}

console.log(total);

//Create an array where each number is doubled.

let numdoubled = [];

for(let i = 0; i < numdoubled.length; i++){
    let num = num[i];
    numdoubled.push(num* 2);
}

console.log(numdoubled);

*/