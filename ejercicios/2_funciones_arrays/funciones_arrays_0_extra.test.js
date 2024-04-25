const miArrayComplejo = [
  { nombre: "Juan", edad: 34 },
  { nombre: "Pedro", edad: 28 },
  { nombre: "María", edad: 32 },
  { nombre: "Laura", edad: 29 },
  { nombre: "Ana", edad: 36 },
];

const result = miArrayComplejo
  .map((persona) => {
    //--------- ⬇️ Modifica el código de abajo ⬇️ ------------//
    return persona.edad;
  });

//--------- ⬆️ Modifica el código de arriba ⬆️ -----------//

it("result debe ser la media de edad de los mayores de 30", () => {
  expect(result).toBe(34);
});
