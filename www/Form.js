class Form extends App {
  constructor() {
    super();
    this.addForm();
  }
  addForm() {
    let div = document.createElement("div");
    div.setAttribute('class', 'form');
    let body = document.querySelector("body");
  
    body.append(div);
    let h2 = document.createElement('h2');
    h2.setAttribute('class', 'contact-header')
    h2.innerText = 'Kontaktlista'
    div.append(h2)

    // Name input
    const nameDiv = document.createElement("div");
    nameDiv.setAttribute("class", "name-div input-div");
    let inputName = document.createElement("input");
    inputName.setAttribute("class", "name-input");
    inputName.setAttribute("type", "text");
    inputName.setAttribute("value", "");
    inputName.setAttribute("id", "name");
    inputName.setAttribute("autofocus", "");
    inputName.setAttribute("placeholder", "namn");
    nameDiv.append(inputName);
    div.append(nameDiv);
    

    // Phone
    const phoneDiv = document.createElement("div");
    phoneDiv.setAttribute("class", "phone-div input-div");
    phoneDiv.setAttribute("type", 'text');
    let inputPhone = document.createElement("input");
    inputPhone.setAttribute("class", "phone-input");
    inputPhone.setAttribute("type", "text");
    inputPhone.setAttribute("value", "");
    inputPhone.setAttribute("id", "phone");
    inputPhone.setAttribute("placeholder", "telefon");
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
    inputEmail.setAttribute("value", "");
    inputEmail.setAttribute("id", "e-post");
    inputEmail.setAttribute("placeholder", "e-post");
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
    submit.innerHTML = "Lägg till kontakt";
    div.append(submit);

    let korv = document.createElement("button");
    submit.setAttribute("class", "submit-btn");
    submit.setAttribute("id", "save-contact");
    submit.innerHTML = "Lägg till kontakt";
    div.append(korv);
  }
}
