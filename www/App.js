class App {
  constructor() {
    // kolla upp diff mellan arrayer ?!
  }
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

  saveContact() {
    // let inputValues = document.querySelectorAll('input[type="text"]');
    let inputName = document.querySelector("input#name").value;
    let inputPhone = document.querySelector("div.phone-div").children;
    let inputEmail = document.querySelector("div.email-div").children;
console.log(inputPhone)
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
    console.log(inputName);
    console.log(filteredEmail);
    console.log(filteredPhone);

    // const data = [].reduce.call(
    //   inputName,
    //   (acc, cur) => {
    //     acc[cur.id] = cur.value;
    //     return acc;
    //   },
    //   {}
    // );

    const data = {
      name: inputName,
      phone: filteredPhone,
      email: filteredEmail
    }

    contacts.push(data);
    contacts.forEach((contact, i) => {
      contact.id = i + 1;
    });
    console.log(contacts);
    contacts.save();

    document.querySelector("div.form").outerHTML = "";
    this.form = new Form();
    document.querySelector("div.added-contacts").outerHTML = "";
    this.contacts = new Contacts();
  }
}
