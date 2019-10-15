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
    // let person = localStorage.getItem('contacts');
    // console.log(person);
    this.contact = new Contact(parseInt(id)).showContact();
    console.log(id);
  }
  deleteButton(id) {
    let contact = contacts.find(contact => {
      return contact.id === Number(id);
    });
    contacts.splice(contacts.findIndex(contact => contact.id === +id), 1);
    contacts.save();
    document.querySelector("div.added-contacts").outerHTML = "";
    this.contacts = new Contacts();
    console.log(contact);
    console.log("ta bort mig");
  }
  editButton(id){
    // let header = document.createElement('h2');
    // header.setAttribute('class', 'edit-header')
    this.updateContact = new UpdateContact(Number(id)).updateForm();
    console.log('uppdatera')
  }
  saveContact() {
    // let inputValues = document.querySelectorAll('input[type="text"]');
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

    const data = {
      name: inputName,
      phone: filteredPhone,
      email: filteredEmail,
      id: Date.now(),
      history: []
    };

    contacts.push(data);
    console.log(contacts);
    contacts.save();

    document.querySelector("div.form").outerHTML = "";
    this.form = new Form();
    document.querySelector("div.added-contacts").outerHTML = "";
    this.contacts = new Contacts();
  }
}
