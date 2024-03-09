const usersList = [
  { name: "João", age: 24, email: "joao@mail.com" },
  { name: "Pedro", age: 22, email: "pedro@mail.com" },
  { name: "Caio", age: 19, email: "caio@mail.com" },
  { name: "Lucas", age: 29, email: "lucas@mail.com" },
];

const search = (users, value) =>
  users.find(
    (user) => user.name === value || user.age === value || user.email === value
  );

const userSearch = (users, value) => {
  const res = new Promise((resolve, rejected) => {
    const user = search(users, value);
    user ? resolve(user) : rejected({ error: "User not found" });
  });
  return res;
};

userSearch(usersList, 19)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
