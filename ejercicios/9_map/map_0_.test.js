const getResto = (divisor, ...numeros) => {
  //--------- ⬇️ Modifica el código de abajo ⬇️ ------------//
  //--------- ⬆️ Modifica el código de arriba ⬆️ -----------//
};

describe("Map", () => {
  it("devuelve los módulos de los números proporcionados", () => {
    const modulos = getResto(2, 12, 46, 56, 76, 88, 105);
    expect(modulos).toEqual([0, 0, 0, 0, 0, 1]);
  });
});
