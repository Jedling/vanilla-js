class App {
  constructor() {
    
  }
  createDOM() {
    this.listen();
    this.form = new Form();
    this.contacts = new Contacts();
  }
  listen() {
    window.addEventListener("click", e => {
      if (e.target.closest("#save-contact")) this.saveContact();
      if (e.target.closest("#add-email")) this.addEmail();
    });
  }
  addEmail() {
      console.log('klick add email')
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
    contacts.push(data);
    console.log(data)
    contacts.save();
  }
}
