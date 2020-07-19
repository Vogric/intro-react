const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
};

const saludar3 = (nombre) => `Hola, ${nombre}`;

console.log(saludar2("Braian"));
console.log(saludar3("Leonel"));

const getUser = () => ({
  uid: "ABC123",
  username: "wokl31",
});

const user = getUser();
console.log(user);

const getUsarioActivo = (nombre) => ({
  uid: "ABC546",
  username: nombre,
});

const usuarioActivo = getUsarioActivo("Fernando");
console.log(usuarioActivo);
