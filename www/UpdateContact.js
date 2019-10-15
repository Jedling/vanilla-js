class UpdateContact extends App {
  constructor(id) {
    super();
    // this.updateForm();
    this.id = id;
  }
  updateForm() {
    let allContacts = JSON.parse(localStorage.getItem("contacts"));
    let contact = allContacts.find(contact => {
      return contact.id === this.id;
    });
    console.log(contact)
    let div = document.createElement("div");
    div.setAttribute('class', 'form');
    let body = document.querySelector("body");
    
    // Header
    // let headerDiv = document.createElement("div");
    // headerDiv.setAttribute("class", "header");
    // headerDiv.innerHTML = "Kontakter";
    // div.append(headerDiv);
    body.append(div);

    // Name input
    const nameDiv = document.createElement("div");
    nameDiv.setAttribute("class", "name-div input-div");
    let inputName = document.createElement("input");
    inputName.setAttribute("class", "name-input");
    inputName.setAttribute("type", "text");
    inputName.setAttribute("value", contact.name);
    inputName.setAttribute("id", "name");
    inputName.setAttribute("autofocus", "");
    // inputName.setAttribute("placeholder", "namn");
    // body.append(inputName);
    nameDiv.append(inputName);
    div.append(nameDiv);

    // Phone
    const phoneDiv = document.createElement("div");
    phoneDiv.setAttribute("class", "phone-div input-div");
    phoneDiv.setAttribute("type", 'text');
    let inputPhone = document.createElement("input");
    inputPhone.setAttribute("class", "phone-input");
    inputPhone.setAttribute("type", "text");
    inputPhone.setAttribute("value", contact.phone);
    inputPhone.setAttribute("id", "phone");
    // inputPhone.setAttribute("placeholder", "telefon");
    // body.append(inputPhone);
    phoneDiv.append(inputPhone);
    div.append(phoneDiv);

    // Add Phone number
    let addPhone = document.createElement("button");
    addPhone.setAttribute("class", "add-phone");
    addPhone.setAttribute("value", "");
    addPhone.innerHTML = "+";
    phoneDiv.append(addPhone);
    let br = document.createElement('br')
    phoneDiv.append(br)
    div.append(phoneDiv);

    // Email
    const emailDiv = document.createElement("div");
    emailDiv.setAttribute("class", "email-div input-div");
    let inputEmail = document.createElement("input");
    inputEmail.setAttribute("class", "email-input");
    inputEmail.setAttribute("type", "text");
    inputEmail.setAttribute("value", contact.email);
    inputEmail.setAttribute("id", "e-post");
    // inputEmail.setAttribute("placeholder", "e-post");
    // body.append(inputEmail);
    emailDiv.append(inputEmail);
    div.append(emailDiv);

    // Add email
    let addEmail = document.createElement("button");
    addEmail.setAttribute("class", "add-email");
    addEmail.setAttribute("type", "text");
    addEmail.innerHTML = "+";
    emailDiv.append(addEmail);
    let br2 = document.createElement('br');
    emailDiv.append(br2)
    div.append(emailDiv);

    // Submit
    let submit = document.createElement("button");
    submit.setAttribute("class", "submit-btn");
    submit.setAttribute("id", "save-contact");
    submit.innerHTML = "Uppdatera";
    div.append(submit);

    // let addedContacts = document.createElement("h2");
    // addedContacts.setAttribute("class", "added-contacts");
    // addedContacts.innerHTML = "Osorterad kontaktlista!";
    // div.append(addedContacts);

    // let ul = document.createElement("ul");
    // ul.setAttribute("class", "contact-ul");
    // div.append(ul);
  }
}
