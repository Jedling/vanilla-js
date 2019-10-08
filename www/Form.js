class Form extends App {
  constructor() {
    super()
    this.addForm()
  }
  addForm() {
    let div = document.createElement("div");
    let body = document.querySelector('body');
    // let emailDiv = document.createElement('div');
    // emailDiv.setAttribute('class', 'testinput');
    // body.append(emailDiv);
    body.append(div);
    // Name
    let inputName = document.createElement("input");
    inputName.setAttribute("class", "name-input");
    inputName.setAttribute('type', 'text')
    inputName.setAttribute("value", "");
    inputName.setAttribute("id", "name");
    inputName.setAttribute("autofocus", "");
    inputName.setAttribute("placeholder", "namn");
    body.append(inputName);
    div.append(inputName);
    // Phone
    let inputPhone = document.createElement("input");
    inputPhone.setAttribute("class", "phone-input");
    inputPhone.setAttribute('type', 'text')
    inputPhone.setAttribute("value", "");
    inputPhone.setAttribute("id", "phone");
    inputPhone.setAttribute("placeholder", "telefon");
    body.append(inputPhone);
    div.append(inputPhone);

    // Add Phone number
    let addPhone = document.createElement("button");
    addPhone.setAttribute("class", "add-phone");
    addPhone.setAttribute("value", "");
    addPhone.innerHTML = "+";
    div.append(addPhone);

    // Email
    let inputEmail = document.createElement("input");
    inputEmail.setAttribute("class", "email-input");
    inputEmail.setAttribute('type', 'text')
    inputEmail.setAttribute("value", "");
    inputEmail.setAttribute("id", "email");
    inputEmail.setAttribute("placeholder", "e-post");
    body.append(inputEmail);
    div.append(inputEmail);

    // //Add Email
    // let addEmailInput = document.createElement("input");
    // addEmailInput.setAttribute("class", "email-input");
    // addEmailInput.setAttribute('type', 'text')
    // addEmailInput.setAttribute("value", "");
    // addEmailInput.setAttribute("id", "add-email");
    // addEmailInput.setAttribute("placeholder", "e-post");
    // body.append(addEmailInput);
    // div.append(addEmailInput);

    // Add contact input
    let addEmail = document.createElement("button");
    addEmail.setAttribute("id", "add-email");
    addEmail.setAttribute('type', 'text');
    addEmail.innerHTML = "+";
    div.append(addEmail);

    // Submit
    let submit = document.createElement("button");
    submit.setAttribute("class", "submit-btn");
    submit.setAttribute('id', 'save-contact');
    submit.innerHTML = "Lägg till kontakt";
    div.append(submit);

    let addedContacts = document.createElement("h2");
    addedContacts.setAttribute("class", "added-contacts");
    addedContacts.innerHTML = "Osorterad kontaktlista!";
    div.append(addedContacts);

    let ul = document.createElement("ul");
    ul.setAttribute("class", "contact-ul");
    div.append(ul);

  //   // Body element for the whole site
  //   let body = document.querySelector('body')

  //   // Site Header
  //   let header = document.createElement('header')
  //   header.setAttribute('class', 'my-header')
  //   header.innerHTML = 'Phoney - phonebook'
  //   body.append(header)

  //   // Div to hold input fields
  //   let inputDiv = document.createElement('div')
  //   inputDiv.setAttribute('class', 'input-holder')
  //   body.append(inputDiv)

  //   // Input for name
  //   let nameInput = document.createElement('input')
  //   nameInput.setAttribute('type', 'text')
  //   nameInput.setAttribute('class', 'add-name')
  //   nameInput.setAttribute('autofocus', '')
  //   nameInput.setAttribute('value', '')
  //   nameInput.setAttribute('placeholder', 'Ange namn:')
  //   nameInput.setAttribute('id', 'name')
  //   inputDiv.append(nameInput)

  //   // Input for mail
  //   let mailInput = document.createElement('input')
  //   mailInput.setAttribute('type', 'text')
  //   mailInput.setAttribute('class', 'add-mail')
  //   mailInput.setAttribute('value', '')
  //   mailInput.setAttribute('placeholder', 'Ange mail:')
  //   mailInput.setAttribute('id', 'email')
  //   inputDiv.append(mailInput)

  //   // button to add more emails
  //   let addEmail = document.createElement('button')
  //   addEmail.setAttribute('class', 'add-more')
  //   addEmail.setAttribute('id', 'add-more-email')
  //   addEmail.innerHTML = '+'
  //   inputDiv.append(addEmail)

  //   // input for telephone number
  //   let telephoneInput = document.createElement('input')
  //   telephoneInput.setAttribute('type', 'text')
  //   telephoneInput.setAttribute('class', 'add-number')
  //   telephoneInput.setAttribute('value', '')
  //   telephoneInput.setAttribute('placeholder', 'Ange telefon nr:')
  //   telephoneInput.setAttribute('id', 'telephone')
  //   inputDiv.append(telephoneInput)

  //   // button to add more telephone number
  //   let addTelephoneNumber = document.createElement('button')
  //   addTelephoneNumber.setAttribute('class', 'add-more')
  //   addTelephoneNumber.setAttribute('id', 'add-telephone-number')
  //   addTelephoneNumber.innerHTML = '+'
  //   inputDiv.append(addTelephoneNumber)

  //   // Div for delete / add buttons
  //   let buttonDiv = document.createElement('div')
  //   buttonDiv.setAttribute('class', 'button-holder')
  //   body.append(buttonDiv)

  //   // Button to save the contacts insertet valuse
  //   let submit = document.createElement('button')
  //   submit.setAttribute('class', 'saved-user')
  //   submit.setAttribute('id', 'save-contact')
  //   submit.innerHTML = 'Lägg till mig!'
  //   buttonDiv.append(submit)

  //   // Button to remove contact from phonebook
  //   let deleteButton = document.createElement('button')
  //   deleteButton.setAttribute('class', 'remove-user')
  //   deleteButton.innerHTML = 'Radera mig!'
  //   buttonDiv.append(deleteButton)
  // }
}

// class Form extends App {
//   constructor() {
//     super();
//     this.addForm();
//   }
//   addForm() {
//     
//   }
}
