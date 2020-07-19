const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
};

const saludar3 = (nombre) => `Hola, ${nombre}`;

export const getUser = () => ({
  uid: "ABC123",
  username: "wokl31",
});

export const getUsuarioActivo = (nombre) => ({
  uid: "ABC546",
  username: nombre,
});
