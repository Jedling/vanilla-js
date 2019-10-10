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
      if (e.target.closest(".add-phone")) this.addPhone().saveContact();
    });
  }
  addPhone() {
    //   let input = document.querySelector('#email');
    //   let added = document.querySelector('div');
    //   added.append(input)
    // inputEmail.append(emailValue);
    // console.log(emailValue);
    const phoneDiv = document.querySelector("div.phone-div");
    const input = document.createElement("input");
    phoneDiv.append(input);
    let br = document.createElement("br");
    phoneDiv.append(br);
  }

  saveContact() {
    let inputValues = document.querySelectorAll('input[type="text"]');

    const data = [].reduce.call(
      inputValues,
      (acc, cur) => {
        acc[cur.id] = cur.value;
        return acc;
      },
      {}
    );
  
    // let id = 0;
    contacts.push(data);
    contacts.forEach((item, i) => {
      item.id = i + 1;
    });
    // console.log(data);
    console.log(contacts)
    contacts.save();
    document.querySelector('div.added-contacts').outerHTML = ''
    this.contacts = new Contacts()
  }
}
