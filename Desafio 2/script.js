const secList = document.querySelector(".section__list");
console.log("oi");

const users = [
  {
    name: "João Paulo",
    email: "joaopaulo@mail.com",
    telephone: "(13) 99918-1431",
    vehicle_license_plate: "LQM0237",
  },
  {
    name: "Paulo José",
    email: "paulojose@mail.com",
    telephone: "(1) 99918-2521",
    vehicle_license_plate: "KCP4523",
  },
  {
    name: "Lucas Oliveira",
    email: "lucasoliveira@mail.com",
    telephone: "(19) 99918-5555",
    vehicle_license_plate: "AHD6098",
  },
  {
    name: "Caio Moura",
    email: "caiomoura@mail.com",
    telephone: "(13) 77918-1431",
    vehicle_license_plate: "MYT7655",
  },
  {
    name: "Roque Junior",
    email: "roquejr@mail.com",
    telephone: "(99) 81918-1431",
    vehicle_license_plate: "LQW9895",
  },
];

const createUser = (user) => {
  const card = document.createElement("li");
  const container = document.createElement("div");
  const title = document.createElement("p");
  const card_container = document.createElement("div");
  const button_trash = document.createElement("button");
  const button_edit = document.createElement("button");
  const email = document.createElement("p");
  const Telephone = document.createElement("p");
  const vehicle_license_plate = document.createElement("p");

  card.className = "section__card";
  container.className = "section__card__container";
  title.className = "card__title";
  card_container.className = "section__card__container__button";
  button_trash.classList.add("button", "trash");
  button_edit.classList.add("button", "edit");
  email.classList.add("section__card__title", "disabled");
  Telephone.classList.add("section__card__title", "disabled");
  vehicle_license_plate.classList.add("section__card__title", "disabled");
  card.id = "disabled";

  title.innerText = `Nome: ${user.name}`;
  button_trash.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
   <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
   <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg>
  `;
  button_edit.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
</svg>
  `;
  email.innerText = `Email: ${user.email}`;
  Telephone.innerText = `Telefone: ${user.telephone}`;
  vehicle_license_plate.innerText = `Placa do veículo: ${user.vehicle_license_plate}`;

  card.addEventListener("click", async (event) => {
    if (card.id === "disabled") {
      email.classList.add("activated");
      Telephone.classList.add("activated");
      vehicle_license_plate.classList.add("activated");
      email.classList.remove("disabled");
      Telephone.classList.remove("disabled");
      vehicle_license_plate.classList.remove("disabled");
      card.id = "activated";
    } else {
      email.classList.add("disabled");
      Telephone.classList.add("disabled");
      vehicle_license_plate.classList.add("disabled");
      email.classList.remove("activated");
      Telephone.classList.remove("activated");
      vehicle_license_plate.classList.remove("activated");
      card.id = "disabled";
    }
  });

  card_container.append(button_trash, button_edit);
  container.append(title, card_container);
  card.append(container, email, Telephone, vehicle_license_plate);
  secList.append(card);
};

users.forEach((user) => {
  createUser(user);
});
