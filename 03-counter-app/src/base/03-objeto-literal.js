const persona = {
  nombre: "Tony",
  apellido: "Stark",
  edad: 45,
  direccion: {
    ciudad: "New York",
    zipCode: 551231234,
    lat: 14.31232,
    lng: 43.123123,
  },
};

const persona2 = { ...persona };
persona2.nombre = "Richard";
persona2.apellido = "Kasrts";
persona2.edad = 13;
persona2.direccion.ciudad = "Washington";
persona2.direccion.zipCode = 21.6456;
persona2.direccion.lat = 123.213123;
persona2.direccion.lng = 57.234234;

console.table(persona, persona2);
