//Desestructuracion
// Asignacion desestructurante

const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "Ironman",
};

// const { nombre, edad, clave } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const useContext = ({ clave, nombre, edad }) => {
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.1231,
      lgn: -12.3232,
    },
  };
};

const {
  nombreClave,
  anios,
  latlng: { lat, lgn },
} = useContext(persona);

console.log(nombreClave, anios, lat, lgn);
