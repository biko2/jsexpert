
if(typeof valor === "undefined") {
  //--------- ⬇️ Modifica el código de abajo ⬇️ ------------//
  var valor = 1;
  console.log(valor);
  //--------- ⬆️ Modifica el código de arriba ⬆️ -----------//

  if(typeof valor === "undefined") {
    throw new Error("valor no está definido 🤟😔");
  }
}

const valorExiste = typeof valor !== "undefined";

if(!valorExiste) {
  var valor = 2;
}

it('mensaje debe ser 2', () => {
  expect(valor).toBe(2);
});






