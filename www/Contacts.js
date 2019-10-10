class Contacts extends App {
  constructor() {
    super();
    this.addedContacts();
  }
  addedContacts() {
    let div = document.createElement('div');
    div.setAttribute('class', 'added-contacts')

    let body = document.querySelector('body');
    body.append(div);

    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tr = document.createElement('tr');

    let th = document.createElement('th');
    th.innerText = 'Namn';
    let th2 = document.createElement('th');
    th2.innerText = 'Email';
    let th3 = document.createElement('th');
    th3.innerText = 'Telefon';
    tr.append(th);
    tr.append(th2);
    tr.append(th3);
    thead.append(tr);
    table.append(thead);

    let tbody = document.createElement('tbody');

    contacts.forEach(contact => {
      let tr = document.createElement('tr');
      let td = document.createElement('td');
      td.innerText = contact.name;

      let td2 = document.createElement('td');
      td2.innerText = contact.email.join('\n');

      let td3 = document.createElement('td');
      td3.innerText = contact.phone.join('\n');

      tr.append(td);
      tr.append(td2);
      tr.append(td3);
      tbody.append(tr);
      
    });
    table.append(tbody);
    div.append(table);
  }
}

// let addedContacts = document.createElement("h2");
//     addedContacts.setAttribute("class", "added-contacts");
//     addedContacts.innerHTML = "Osorterad kontaktlista!";
//     div.append(addedContacts);