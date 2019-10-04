let body = document.querySelector("body");
let div = document.createElement("div");
body.append(div);
// Name
let inputName = document.createElement("input");
inputName.setAttribute("class", "input-field");
inputName.setAttribute("value", "");
inputName.setAttribute("id", "name");
inputName.setAttribute("autofocus", "");
inputName.setAttribute("placeholder", "namn");
body.append(inputName);
div.append(inputName);
// Phone
let inputPhone = document.createElement("input");
inputPhone.setAttribute("class", "input-field");
inputPhone.setAttribute("value", "");
inputPhone.setAttribute("id", "phone");
inputPhone.setAttribute("placeholder", "telefon");
body.append(inputPhone);
div.append(inputPhone);

// Add Phone number
let addPhone = document.createElement('button');
addPhone.setAttribute('class', 'add-btn');
addPhone.innerHTML = '+';
div.append(addPhone);

// Email
let inputEmail = document.createElement("input");
inputEmail.setAttribute("class", "input-field");
inputEmail.setAttribute("value", "");
inputEmail.setAttribute("id", "email");
inputEmail.setAttribute("placeholder", "e-post");
body.append(inputEmail);
div.append(inputEmail);

// Add contact input
let addEmail = document.createElement('button');
addEmail.setAttribute('class', 'add-btn');
addEmail.innerHTML = '+';
div.append(addEmail);

// Submit
let submit = document.createElement("button");
submit.setAttribute("class", "submit-contact");
submit.innerHTML = "Lägg till kontakt";
div.append(submit);

let addedContacts = document.createElement("h2");
addedContacts.setAttribute("class", "added-contacts");
addedContacts.innerHTML = "Osorterad kontaktlista!";
div.append(addedContacts);

let ul = document.createElement("ul");
ul.setAttribute("class", "contact-ul");
div.append(ul);

// Eventhanterare

//////////////////////Object.create!////////////////////////////////////
const userPrototype = {
  getInput() {
    let persons = [];
    window.addEventListener("click", e => {
      if (e.target.closest(".submit-contact")) {
        let inputValues = document.querySelectorAll('input[value =""]');
        const data = [].reduce.call(
          inputValues,
          (acc, cur) => {
            acc[cur.id] = cur.value;
            return acc;
          },
          {}
        );
        console.log(data);
        persons.push(data)
        console.log(persons);
        localStorage.store = JSON.stringify(persons);
        // for (let [key, val] of Object.entries(data)) {
        //   let listObj = document.createElement("li");
        //   listObj.setAttribute("class", "contact-list");
        //   listObj.append(val);
        //   ul.append(listObj);
        // }
      }
    });
  }
};
function User(name, email, phone) {

  let newInstance = Object.create(userPrototype);
  newInstance.name = name;
  newInstance.email = email;
  newInstance.phone = phone;
  return newInstance;
};

let user = new User();
user.getInput();
