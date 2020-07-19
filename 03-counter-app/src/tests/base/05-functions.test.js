import "@testing-library/jest-dom";
import { getUser, getUsuarioActivo } from "../../base/05-functions";

describe("Pruebas en 05-functions", () => {
  test("getUser debe retornar un objeto", () => {
    const userTest = {
      uid: "ABC123",
      username: "wokl31",
    };
    const user = getUser();
    expect(user).toEqual(userTest);
  });
  test("getUsuarioActivo debe retornar un objeto", () => {
    const nombre = "Juan";
    const user = getUsuarioActivo(nombre);

    expect(user).toEqual({
      uid: "ABC546",
      username: nombre,
    });
  });
});
