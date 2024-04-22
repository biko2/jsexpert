
if(true) {
  //--------- ⬇️ Modifica el código de abajo ⬇️ ------------//
  
  var valor = 1;
  
  //--------- ⬆️ Modifica el código de arriba ⬆️ -----------//
  valor = valor + 1;
  if (valor !== 2) {
    throw new Error("la variable valor debería existir dentro del if");
  }
}

it('la variable "valor" no debería existir fuera del if 🤔', () => {
  expect(typeof valor).toBe('undefined');
});
