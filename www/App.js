class App {
  constructor() {
    // kolla upp diff mellan arrayer ?!
  }
  createDOM() {
    this.listen();

    this.form = new Form();
    this.contacts = new Contacts();
    this.contact = new Contact();
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
        this.updateButton(e.target.getAttribute("data-contactid"));
    });
  }
  addPhone() {
    const phoneDiv = document.querySelector("div.phone-div");
    const input = document.createElement("input");
    input.setAttribute("placeholder", "Telefon");

    let inputVal = document.querySelectorAll('input[type="text"]');
    console.log(inputVal);

    phoneDiv.append(input);
    let br = document.createElement("br");
    phoneDiv.append(br);
  }
  addEmail() {
    const emailDiv = document.querySelector("div.email-div");
    const input = document.createElement("input");
    input.setAttribute("placeholder", "e-post");
    let inputVal = document.querySelectorAll('input[type="text"]');
    console.log(inputVal);

    emailDiv.append(input);
    let br = document.createElement("br");
    emailDiv.append(br);
  }
  getContact(id) {
    // let id = e.target.offsetParent.parentNode.getAttribute("data-contact");
    document.querySelector("div.form").innerHTML = "";
    document.querySelector("div.added-contacts").innerHTML = "";
   
    this.contact = new Contact(Number(id));
  }
  deleteButton(id) {
    let contact = contacts.find(contact => {
      return contact.id === Number(id);
    });
    contacts.splice(contacts.findIndex(contact => contact.id === +id), 1);
    contacts.save();
    document.querySelector("div.added-contacts").outerHTML = "";
    this.contacts = new Contacts();

  }
  editButton(id) {
    this.updateContact = new UpdateContact(Number(id));
  }
  updateButton(id) {
    let contact = contacts.find(contact => {
      return contact.id === Number(id);
    });
    let inputName = document.querySelector("input#name").value;
    let inputPhone = document.querySelector("div.phone-div").children;
    let inputEmail = document.querySelector("div.email-div").children;

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

    contact.history.push({
      name: inputName,
      phone: filteredPhone,
      email: filteredEmail,
    });
    contacts.save();
    this.contact = new Contact()
 
  }
  saveContact() {
    let inputName = document.querySelector("input#name").value;
    let inputPhone = document.querySelector("div.phone-div").children;
    let inputEmail = document.querySelector("div.email-div").children;

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
      version: 0,
      history: [
        {
          name: inputName,
          phone: filteredPhone,
          email: filteredEmail
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
