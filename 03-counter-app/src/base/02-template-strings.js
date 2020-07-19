const nombre = "Fernando";
const apellido = "Herrera";

const NombreCompleto = `${nombre} ${apellido}`;

export function getSaludo(nombre = "Carlos") {
  return "Hola" + nombre + "!";
}
