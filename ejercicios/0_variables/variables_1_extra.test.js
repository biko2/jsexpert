let error = false;

const segundosAntesDeMirarLaCaja = 10;
const caja = [
  "🐈",
  "💥"
];

try {
  gatoDeSchrodinger = "🐈";

  if (gatoDeSchrodinger == "🐈") {
    for (let i = 0; i < segundosAntesDeMirarLaCaja; i++) {
      //--------- ⬇️ Modifica el código de abajo ⬇️ ------------//


      //--------- ⬆️ Modifica el código de arriba ⬆️ -----------//

      if (gatoDeSchrodinger === undefined || gatoDeSchrodinger !== undefined) {
        throw new Error("El gato de Schrödinger está en un estado de superposición cuántica!!, no deberías comprobar su estado todavía 🙀");
      }
    }
  }
} catch (e){
  error = e;
}

it('la variable "valor" debería existir fuera del if debido al uso de var 🤔', () => {
  expect(error).toBe(false);
  expect(caja).toContain(gatoDeSchrodinger);
});
