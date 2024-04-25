const miArrayComplejo = [
  { nombre: "Juan", edad: 34 },
  { nombre: "Pedro", edad: 28 },
  { nombre: "María", edad: 32 },
  { nombre: "Laura", edad: 29 },
  { nombre: "Ana", edad: 35 },
];

const result = miArrayComplejo
  .map((persona) => {
    //--------- ⬇️ Modifica el código de abajo ⬇️ ------------//
    return persona.edad;
  })
  .filter((persona) => persona.edad > 30)
  .reduce((acc, persona) => acc + persona.edad, 0);

//--------- ⬆️ Modifica el código de arriba ⬆️ -----------//

it("result debe ser ", () => {
  expect(result).toBe(0);
});
