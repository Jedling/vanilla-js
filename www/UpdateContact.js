class UpdateContact extends App {
  constructor(id) {
    super();
    this.id = id;
    this.updateForm();
  }
  updateForm() {
    let contact = contacts.find(contact => {
      return contact.id === this.id;
    })

    let div = document.createElement("div");
    div.setAttribute('class', 'form');
    let body = document.querySelector("body");
    body.append(div);

    // Name input
    const nameDiv = document.createElement("div");
    nameDiv.setAttribute("class", "name-div input-div");
    let inputName = document.createElement("input");
    inputName.setAttribute("class", "name-input");
    inputName.setAttribute("type", "text");
    inputName.setAttribute("value", contact.history[contact.pointer].name);
    inputName.setAttribute("id", "name");
    inputName.setAttribute("autofocus", "");
    nameDiv.append(inputName);
    div.append(nameDiv);

    // Phone
    const phoneDiv = document.createElement("div");
    phoneDiv.setAttribute("class", "phone-div input-div");
    phoneDiv.setAttribute("type", 'text');
    let inputPhone = document.createElement("input");
    inputPhone.setAttribute("class", "phone-input");
    inputPhone.setAttribute("type", "text");
    inputPhone.setAttribute("value", contact.history[contact.pointer].phone);
    inputPhone.setAttribute("id", "phone");
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
    inputEmail.setAttribute("value", contact.history[contact.pointer].email);
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

    // Update
    let update = document.createElement("button");
    update.setAttribute("class", "submit-btn");
    update.setAttribute("id", "update-contact");
    update.setAttribute('data-contactid', contact.id)
    update.innerHTML = "Uppdatera";
    div.append(update);

  }

}
