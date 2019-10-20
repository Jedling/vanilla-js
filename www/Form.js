class Form extends App {
  constructor() {
    super();
    this.addForm();
    this.listen("click", ".add-phone", e => {
      this.addPhone(e.target);
    });
    this.listen("click", ".add-email", e => {
      this.addEmail(e.target);
    });
    this.listen("click", "#save-contact", e => {
      this.saveContact(e.target);
    });
    this.listen("click", ".view-contact", e => {
      this.viewContact(e.target.getAttribute("data-contactid"));
    });
    this.listen("click", ".remove-contact", e => {
      this.deleteButton(e.target.getAttribute("data-contactid"));
    });
    this.listen("click", ".back", e => {
      this.goBackButton(e.target);
    });
    this.listen("click", "#update-contact", e => {
      this.updateButton(e.target, e.target.getAttribute("data-contactid"));
    });
    this.listen("click", ".edit", e => {
      this.editButton(e.target.getAttribute("data-contactid"));
    });
    this.listen("click", ".reset", e => {
      this.resetContact(
        e.target.getAttribute("data-id"),
        e.target.getAttribute("data-index")
      );
    });
  }
  addForm() {
    let div = document.createElement("div");
    div.setAttribute("class", "form");
    let body = document.querySelector("body");

    // Header
    // let headerDiv = document.createElement("div");
    // headerDiv.setAttribute("class", "header");
    // headerDiv.innerHTML = "Kontakter";
    // div.append(headerDiv);
    body.append(div);
    let h2 = document.createElement("h2");
    h2.setAttribute("class", "contact-header");
    h2.innerText = "Kontaktlista";
    div.append(h2);

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
    // body.append(inputName);
    nameDiv.append(inputName);
    div.append(nameDiv);

    // Phone
    const phoneDiv = document.createElement("div");
    phoneDiv.setAttribute("class", "phone-div input-div");
    phoneDiv.setAttribute("type", "text");
    let inputPhone = document.createElement("input");
    inputPhone.setAttribute("class", "phone-input");
    inputPhone.setAttribute("type", "text");
    inputPhone.setAttribute("value", "");
    inputPhone.setAttribute("id", "phone");
    inputPhone.setAttribute("placeholder", "telefon");
    // body.append(inputPhone);
    phoneDiv.append(inputPhone);
    div.append(phoneDiv);

    // Add Phone number
    let addPhone = document.createElement("button");
    addPhone.setAttribute("class", "add-phone");
    addPhone.setAttribute("value", "");
    addPhone.innerHTML = "+";
    phoneDiv.append(addPhone);
    let br = document.createElement("br");
    phoneDiv.append(br);
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
    let br2 = document.createElement("br");
    emailDiv.append(br2);
    div.append(emailDiv);

    // Submit
    let submit = document.createElement("button");
    submit.setAttribute("class", "submit-btn");
    submit.setAttribute("id", "save-contact");
    submit.innerHTML = "Lägg till kontakt";
    div.append(submit);

    // let addedContacts = document.createElement("h2");
    // addedContacts.setAttribute("class", "added-contacts");
    // addedContacts.innerHTML = "Osorterad kontaktlista!";
    // div.append(addedContacts);

    // let ul = document.createElement("ul");
    // ul.setAttribute("class", "contact-ul");
    // div.append(ul);
  }
  addPhone() {
    const phoneDiv = document.querySelector("div.phone-div");
    const input = document.createElement("input");
    input.setAttribute("placeholder", "Telefon");
    input.setAttribute("class", "phone-input");

    // let inputVal = document.querySelectorAll('input[type="text"]');

    phoneDiv.append(input);
    let br = document.createElement("br");
    phoneDiv.append(br);
  }
  addEmail() {
    const emailDiv = document.querySelector("div.email-div");
    const input = document.createElement("input");
    input.setAttribute("class", "email-input");
    input.setAttribute("placeholder", "e-post");
    // let inputVal = document.querySelectorAll('input[type="text"]');

    emailDiv.append(input);
    let br = document.createElement("br");
    emailDiv.append(br);
  }
  viewContact(id) {
    document.querySelector("div.form").innerHTML = "";
    document.querySelector("div.added-contacts").innerHTML = "";

    this.contact = new Contact(Number(id));
  }
  editButton(id) {
    this.updateContact = new UpdateContact(Number(id));
  }
  deleteButton(id) {
    contacts.splice(contacts.findIndex(contact => contact.id === +id), 1);
    contacts.save();
    document.querySelector("div.added-contacts").outerHTML = "";
    this.contacts = new Contacts();
  }
  goBackButton() {
    window.location = "http://localhost:3000";
  }
  resetContact(id, index) {
    let contact = contacts.find(contact => {
      return contact.id === Number(id);
    });
    let resetPoint = contact.history.splice(index, 1)[0];
    console.log(resetPoint);
    contact.history.push(resetPoint);
    contacts.save();
    this.contact = new Contact(contact.id);
    console.log("undo or redo thats it the schnitzel");
  }
  updateButton(btn, id) {
    let contact = contacts.find(contact => {
      return contact.id === Number(id);
    });
    let inputName = document.querySelector("input#name").value;
    let inputPhone = document.querySelector("div.phone-div").children;
    let inputEmail = document.querySelector("div.email-div").children;
    let adjusted = new Date().toLocaleString();

    let filteredPhone = [].filter
      .call(inputPhone, element => {
        return element.tagName === "INPUT";
      })
      .map(input => {
        return input.value;
      });

    let filteredEmail = [].filter
      .call(inputEmail, element => {
        return element.tagName === "INPUT";
      })
      .map(input => {
        return input.value;
      });

    // Remove all elements after the pointer
    contact.history.length = contact.pointer + 1;
    // Push new state to history
    contact.history.push({
      name: inputName,
      phone: filteredPhone,
      email: filteredEmail,
      time: adjusted
    });
    // Update the pointer
    contact.pointer++;
    // save to local storage
    contacts.save();
    // update screen
    new Contact(contact.id);
    // remove editing form
    btn.closest(".form").remove();
  }
  saveContact() {
    let inputName = document.querySelector("input#name").value;
    let inputPhone = document.querySelector("div.phone-div").children;
    let inputEmail = document.querySelector("div.email-div").children;
    let added = new Date().toLocaleString();
    let filteredPhone = [].filter
      .call(inputPhone, element => {
        return element.tagName === "INPUT";
      })
      .map(input => {
        return input.value;
      });

    let filteredEmail = [].filter
      .call(inputEmail, element => {
        return element.tagName === "INPUT";
      })
      .map(input => {
        return input.value;
      });

    const contact = {
      id: Date.now(),
      pointer: 0,
      history: [
        {
          name: inputName,
          phone: filteredPhone,
          email: filteredEmail,
          time: added
        }
      ]
    };
    contacts.push(contact);
    contacts.save();

    document.querySelector("div.form").outerHTML = "";
    this.form = new Form();
    document.querySelector("div.added-contacts").outerHTML = "";
    this.contacts = new Contacts();
  }
}
