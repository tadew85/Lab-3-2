"use strict";

const awesomePeople = [];

function handleSubmit(event) {
  event.preventDefault();
  awesomePeople.push({
    name: event.target[0].value,
    email: event.target[1].value,
    phone: event.target[2].value,
    relation: event.target[3].value
  });

  display();
}

function display() {
  document.querySelector(".info_container").innerHTML = "";
  awesomePeople.forEach((person, index) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <p>Name: ${person.name}</p>
        <p>Email: ${person.email}</p>
        <p>Phone: ${person.phone}</p>
        <p>Relation: ${person.relation}</p>
        <button index = ${index} class = "delete_btn"><i class="fas fa-trash"></i></button>
        `;

    document.querySelector(".info_container").append(div);
  });
}

document.querySelector("form").addEventListener("submit", handleSubmit);

document
  .querySelector(".info_container")
  .addEventListener("click", handleDelete);

function handleDelete(event) {
  awesomePeople.splice(Number(event.target.attributes[0].value), 1);
  display();
}
