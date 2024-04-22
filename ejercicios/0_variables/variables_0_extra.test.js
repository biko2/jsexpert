
//--------- ⬇️ Modifica el código de abajo ⬇️ ------------//
const verdadesLogicas = {
  identidad: (a) => a == a,
  noContradiccion: (a) => !(a && !a),
  terceroExcluido: (a) => a || !a,
  implicacion: (a, b) => !a || b,
  bicondicional: (a, b) => (a && b) || (!a && !b)
};

//--------- ⬆️ Modifica el código de arriba ⬆️ -----------//

try {
  verdadesLogicas.identidad = (a) => a !== a;
} catch (error) {
  console.error("Error al modificar verdadesLogicas.identidad", error);
}

it('las verdades lógicas deberían ser inmutables', () => {
  expect(verdadesLogicas.noContradiccion(false)).toBe(true);
  expect(verdadesLogicas.terceroExcluido(false)).toBe(true);
  expect(verdadesLogicas.implicacion(false, true)).toBe(true);
  expect(verdadesLogicas.bicondicional(false, false)).toBe(true);
  expect(verdadesLogicas.identidad(true)).toBe(true);
})