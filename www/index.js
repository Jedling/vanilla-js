
let body = document.querySelector('body');
let div = document.createElement('div');
body.append(div);

// Name
let inputName = document.createElement('input');
inputName.setAttribute('class', 'input');
inputName.setAttribute('placeholder', 'namn')
body.append(inputName);
div.append(inputName);

// Phone
let inputPhone = document.createElement('input');
inputPhone.setAttribute('class', 'input');
inputPhone.setAttribute('placeholder', 'telefon')
body.append(inputPhone);
div.append(inputPhone);

// Email
let inputEmail = document.createElement('input');
inputEmail.setAttribute('class', 'input');
inputEmail.setAttribute('placeholder', 'e-post')
body.append(inputEmail);
div.append(inputEmail);

// Submit
let submit = document.createElement('button');
submit.setAttribute('class', 'submit-contact');
submit.innerHTML = 'Lägg till kontakt'
submit.setAttribute('placeholder', 'Lägg Till');
body.append(submit);


 
// You can also remove an element from the dom
// p.remove();
 
// And put it back
// div.before(p);
 
// Eventhanterare

window.addEventListener('click', e => {

  if (e.target.closest('.name-input')) {
    console.log("klickat på namn input");
  }
 
  if (e.target.closest('button')) {
    console.log("You clicked a button tag");
  }
 
});
