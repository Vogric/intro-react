const { getHeroeById, getHeroeByOwner } = require("../../base/08-imp-exp");
const { default: heroes } = require("../../data/heroes");

describe("pruebas en funciones de Heroes", () => {
  test("debe retornar un heroe por id", () => {
    const id = 1;
    const heroe = getHeroeById(id);
    const heroeData = heroes.find((h) => h.id === id);
    expect(heroe).toEqual(heroeData);
  });
  test("debe retornar un undefined si Heroe no existe", () => {
    const id = 10;
    const heroe = getHeroeById(id);
    expect(heroe).toBe(undefined);
  });
  test("debe retornar un arreglo con los heroes de DC", () => {
    const owner = "DC";
    const heroe = getHeroeByOwner(owner);
    const heroeData = heroes.filter((h) => h.owner === owner);
    expect(heroe).toEqual(heroeData);
  });
  test("debe retornar un arreglo con los heroes de Marvel", () => {
    const owner = "Marvel";
    const heroe = getHeroeByOwner(owner);
    const heroeData = heroes.filter((h) => h.owner === owner);
    expect(heroe.length).toBe(2);
  });
});
