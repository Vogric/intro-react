//Promises
import { getHeroeById } from "./bases/08-imp-exp";

// const heroe = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const heroe = getHeroeById(2);
//     resolve(heroe);
//     // reject("No se pudo encontrar el heroe");
//   }, 1000);
// });

// heroe
//   .then((heroe) => {
//     console.log("Heroe:", heroe);
//   })

//   .catch((err) => console.warn(err));

const getHeroeByIdAync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(id);
      if (heroe) {
        resolve(heroe);
      } else {
        reject("No se pudo encontrar el heroe");
      }
      // reject("No se pudo encontrar el heroe");
    }, 1000);
  });
};

getHeroeByIdAync(4).then(console.log).catch(console.warn);
//exercise----------------------------------------------

const firstPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 2000);
});

firstPromise.then(() => {
  console.log("1");
});

const secondPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 3000);
});

secondPromise.then(() => {
  console.log("2");
});

const thirdPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 4000);
});

thirdPromise.then(() => {
  console.log("3");
});
