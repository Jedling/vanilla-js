// Two ways to find the body element
// (a shortcut: let body = document.body;)
let body = document.querySelector('body');
 

// let div = document.createElement('div');
// div.innerHTML = 'Hej! Jag är en div.';
// body.append(div);

let input = document.createElement('input');
body.append(input);

input.setAttribute('class', 'name-input');



// // Create another element - a p-tag
// let p = document.createElement('p');
// p.innerHTML = 'Hi! I am a p-tag!';
// div.append(p);
 
// You can also remove an element from the dom
p.remove();
 
// And put it back
div.before(p);
 
// another div tag
// let div2 = document.createElement('div');
// div2.innerHTML = 'I am another div!';
// body.append(div2);
 
// let's set some attribute
// div2.setAttribute('class', 'fine-div');
// you can also read an attribute
// console.log(div2.getAttribute('class'));
