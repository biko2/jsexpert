const calculadora = {
  multiplico: function (a, b, callback) {
    //--------- ⬇️ Modifica el código de abajo ⬇️ ------------//
    //--------- ⬆️ Modifica el código de arriba ⬆️ -----------//
  },

  pinto: function (numero, callback) {
    //--------- ⬇️ Modifica el código de abajo ⬇️ ------------//
    //--------- ⬆️ Modifica el código de arriba ⬆️ -----------//
  },
};

const multiplicoYPintoPorConsola = (a, b) => {
  calculadora.multiplico(
    a
    //--------- ⬇️ Modifica el código de abajo ⬇️ ------------//

    //--------- ⬆️ Modifica el código de arriba ⬆️ -----------//
  );
};

describe("Callbacks", () => {
  it("deberíamos multiplicar y pintar por consola el resultado", () => {
    vi.spyOn(console, "log");
    vi.spyOn(calculadora, "multiplico");
    vi.spyOn(calculadora, "pinto");
    multiplicoYPintoPorConsola(2, 3);
    expect(calculadora.multiplico).toHaveBeenCalled();
    expect(calculadora.pinto).toHaveBeenCalled(6);
    expect(console.log).toHaveBeenCalledWith("El resultado es 6");
  });
});
