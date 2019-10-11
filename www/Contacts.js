class Contacts extends App {
  constructor() {
    super();
    this.addedContacts();
  }
  addedContacts() {
    let div = document.createElement("div");
    div.setAttribute("class", "added-contacts");

    let body = document.querySelector("body");
    body.append(div);

    let table = document.createElement("table");
    let thead = document.createElement("thead");
    let tr = document.createElement("tr");

    let th = document.createElement("th");
    th.innerText = "Namn";

    let th2 = document.createElement("th");
    th2.innerText = "Email";
    
    let th3 = document.createElement("th");
    th3.innerText = "Telefon";

    let th4 = document.createElement("th");
    th4.innerText = "Redigera";

    tr.append(th);
    tr.append(th2);
    tr.append(th3);
    tr.append(th4);
    thead.append(tr);
    table.append(thead);

    let tbody = document.createElement("tbody");

    contacts.forEach(contact => {
      let tr = document.createElement("tr");
      let td = document.createElement("td");
      tr.setAttribute('data-contactid', contact.id);  
      td.innerText = contact.name ;

      let td2 = document.createElement("td");
      td2.innerText = contact.email.join("\n");

      let td3 = document.createElement("td");
      td3.innerText = contact.phone.join("\n");

      let td4 = document.createElement("td");
      let edit = document.createElement("button");
      edit.setAttribute("class", "edit");
      edit.setAttribute("value", "");
      edit.innerHTML = "Redigera";

      td4.append(edit);
      tr.append(td);
      tr.append(td2);
      tr.append(td3);
      tr.append(td4);
      tbody.append(tr);
    });
    table.append(tbody);
    div.append(table);
  }
}
