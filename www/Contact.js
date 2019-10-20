class Contact {
  constructor(id) {
    
    this.id = id;
    this.showContact();
    this.showHistory();
  }
  showContact() {
    let contact = contacts.find(contact => {
      return contact.id === this.id;
    });
    
    let version = contact.history[contact.pointer];

    let lastOne = document.querySelector(".added-contact");
    lastOne && lastOne.remove();

    let div = document.createElement("div");
    div.setAttribute("class", "added-contact");

    let body = document.querySelector("body");
    body.append(div);

    let h2 = document.createElement("h2");
    h2.setAttribute("class", "history-header");
    h2.innerText = "Nuvarande kontaktuppgifter";
    div.append(h2);

    let goBackButton = document.createElement("button");
    goBackButton.setAttribute("class", "back");
    goBackButton.setAttribute("data-contactid", contact.id);
    goBackButton.setAttribute("type", "button");
    goBackButton.innerText = "Gå Tillbaka";
    div.append(goBackButton);

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
    th4.setAttribute("class", "edit-th");
    th4.innerText = "Redigera";

    tr.append(th);
    tr.append(th2);
    tr.append(th3);
    tr.append(th4);
    thead.append(tr);
    table.append(thead);

    let tbody = document.createElement("tbody");

    tr = document.createElement("tr");
    let td = document.createElement("td");
    td.innerText = version.name;

    let td2 = document.createElement("td");
    td2.innerText = version.email.join("\n");

    let td3 = document.createElement("td");
    td3.innerText = version.phone.join("\n");

    let td4 = document.createElement("td");
    let edit = document.createElement("button");
    edit.setAttribute("class", "edit");
    edit.setAttribute("data-contactid", contact.id);
    edit.setAttribute("value", "");
    edit.innerHTML = "Redigera";

    td4.append(edit);
    tr.append(td);
    tr.append(td2);
    tr.append(td3);
    tr.append(td4);
    tbody.append(tr);

    table.append(tbody);
    div.append(table);
  }
  showHistory() {
    let contact = contacts.find(contact => {
      return contact.id === this.id;
    }).history;
    let lastOne = document.querySelector(".history");
    lastOne && lastOne.remove();

    let div = document.createElement("div");
    div.setAttribute("class", "history");

    let body = document.querySelector("body");
    body.append(div);

    // History header
    let h2 = document.createElement("h2");
    h2.setAttribute("class", "history-header");
    h2.innerText = "Historik";
    div.append(h2);

    // Table
    let table = document.createElement("table");

    let thead = document.createElement("thead");
    thead.setAttribute("class", "thead");
    let tr = document.createElement("tr");

    let th = document.createElement("th");
    th.setAttribute("class", "history-th");
    th.innerText = "Namn";

    let th2 = document.createElement("th");
    th2.innerText = "Epost";

    let th3 = document.createElement("th");
    th3.innerText = "Telefon";

    let th4 = document.createElement("th");
    th4.innerText = "Redigerad";

    let th5 = document.createElement("th");
    th5.innerText = "Återställ";

    tr.append(th);
    tr.append(th2);
    tr.append(th3);
    tr.append(th4);
    tr.append(th5);
    thead.append(tr);
    table.append(thead);

    let tbody = document.createElement("tbody");

    // contact loop
    contact.forEach((contact, i) => {
      let tr = document.createElement("tr");
      tr.setAttribute("class", "undo-redo");
      let td = document.createElement("td");
      td.innerText = contact.name;

      let td2 = document.createElement("td");
      td2.innerText = contact.email.join("\n");

      let td3 = document.createElement("td");
      td3.innerText = contact.phone.join("\n");

      let td4 = document.createElement("td");
      td4.setAttribute('class', 'time')
      td4.innerText = contact.time;

      let td5 = document.createElement("td");
      let reset = document.createElement("button");
      reset.setAttribute("class", "reset");
      // reset.setAttribute('data-index', i);
      // reset.setAttribute("data-contactid", contact.id);
      reset.setAttribute('data-index', i)
      reset.setAttribute('data-id', this.id)
      reset.setAttribute("value", "");
      reset.innerHTML = "Återställare";
      td5.append(reset);

      tr.append(td);
      tr.append(td2);
      tr.append(td3);
      tr.append(td4);
      tr.append(td5)
      tbody.append(tr);
    });
    table.append(tbody);
    div.append(table);
  }
}
