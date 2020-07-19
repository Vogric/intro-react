import "@testing-library/jest-dom";
import { getSaludo } from "../../base/02-template-strings";

describe("Pruebas en 02-template-string.js", () => {
  test("getSaludo debe retornar Hola Fernando", () => {
    const nombre = "Fernando";
    const saludo = getSaludo(nombre);
    expect(saludo).toBe("Hola" + nombre + "!");
  });
  test("getSaludo debe retornar Hola Carlos", () => {
    const saludo = getSaludo();
    expect(saludo).toBe("HolaCarlos!");
  });
});
