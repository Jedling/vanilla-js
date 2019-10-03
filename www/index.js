// import { unlink } from "fs";

let body = document.querySelector('body');
let div = document.createElement('div');
body.append(div);

// Name
let inputName = document.createElement('input');
inputName.setAttribute('class', 'input');
inputName.setAttribute('value', '');
inputName.setAttribute('autofocus', '');
inputName.setAttribute('placeholder', 'namn')
body.append(inputName);
div.append(inputName);

// Phone
let inputPhone = document.createElement('input');
inputPhone.setAttribute('class', 'input');
inputPhone.setAttribute('value', '');
inputPhone.setAttribute('placeholder', 'telefon')
body.append(inputPhone);
div.append(inputPhone);

// Email
let inputEmail = document.createElement('input');
inputEmail.setAttribute('class', 'input');
inputEmail.setAttribute('value', '');
inputEmail.setAttribute('placeholder', 'e-post')
body.append(inputEmail);
div.append(inputEmail);

// Submit
let submit = document.createElement('button');
submit.setAttribute('class', 'submit-contact');
submit.innerHTML = 'Lägg till kontakt';
// submit.setAttribute('placeholder', 'Lägg Till');
div.append(submit);

let addedContacts = document.createElement("h2");
addedContacts.setAttribute('class', 'added-contacts');
addedContacts.innerHTML = 'Osorterad kontaktlista!';
div.append(addedContacts);

let ul = document.createElement('ul');
ul.setAttribute('class', 'contact-ul');
div.append(ul);

// Eventhanterare


//////////////////////Object.create!////////////////////////////////////

const userPrototype = {
  // put methods and fields that have a default value
  // in the prototype
    getInput(){
      window.addEventListener('click', e => {
  
        if (e.target.closest('.submit-contact')) {
          // console.log("klickat på submit");
          let inputValue = document.querySelectorAll('input[value =""]');
          inputValue.forEach(val => {
            let value = val.value;
            console.log(value);
            // let contactList = val.value;
            let list = document.createElement('li');
            list.setAttribute('class', 'contact-list');
            list.append(value);
            ul.append(list);
          });
        }
      });
    },
};

function User (name, email, phone ){
  // make a new instance/object with
  // animlPrototype as its prototype
  let newInstance = Object.create(userPrototype);
  // fields that are different for each instance
  // need only be assigned here
  newInstance.name = name;
  newInstance.email = email;
  newInstance.phone = phone;
  return newInstance;
}
let user = new User()
console.log(user);
userPrototype.getInput(new User(this.name));