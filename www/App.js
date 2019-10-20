class App {
  constructor() {}
  createDOM() {
    this.listen();
    this.form = new Form();
    this.contacts = new Contacts();
  }
  listen() {
    window.addEventListener("click", e => {
      if (e.target.closest("#save-contact")) this.saveContact();

      if (e.target.closest(".add-phone")) this.addPhone();

      if (e.target.closest(".add-email")) this.addEmail();

      if (e.target.closest(".view-contact"))
        this.getContact(e.target.getAttribute("data-contactid"));

      if (e.target.closest(".remove-contact"))
        this.deleteButton(e.target.getAttribute("data-contactid"));

      if (e.target.closest(".edit"))
        this.editButton(e.target.getAttribute("data-contactid"));

      if (e.target.closest("#update-contact"))
        this.updateButton(e.target, e.target.getAttribute("data-contactid"));

      if (e.target.closest(".reset"))
        this.resetContact(
          e.target.getAttribute("data-id"),
          e.target.getAttribute("data-index")
        );
      if (e.target.closest(".back")) this.goBackButton();
    });
  }
  addPhone() {
    const phoneDiv = document.querySelector("div.phone-div");
    const input = document.createElement("input");
    input.setAttribute("placeholder", "Telefon");
    input.setAttribute('class', 'phone-input');
    phoneDiv.append(input);
    let br = document.createElement("br");
    phoneDiv.append(br);
  }
  addEmail() {
    const emailDiv = document.querySelector("div.email-div");
    const input = document.createElement("input");
    input.setAttribute('class', 'email-input');
    input.setAttribute("placeholder", "e-post");
    emailDiv.append(input);
    let br = document.createElement("br");
    emailDiv.append(br);
  }
  getContact(id) {
    document.querySelector("div.form").innerHTML = "";
    document.querySelector("div.added-contacts").innerHTML = "";
    this.contact = new Contact(Number(id));
  }
  deleteButton(id) {
    contacts.splice(contacts.findIndex(contact => contact.id === +id), 1);
    contacts.save();
    document.querySelector("div.added-contacts").outerHTML = "";
    this.contacts = new Contacts();
  }
  editButton(id) {
    this.updateContact = new UpdateContact(Number(id));
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
