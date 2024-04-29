function portalTravel(orangePortal, bluePortal) {
  const 
  //--------- ⬇️ Modifica el código de abajo ⬇️ ------------//
 
  //--------- ⬆️ Modifica el código de arriba ⬆️ -----------//
  =  [bluePortal, orangePortal];
  return [newOrangePortal, newBluePortal];
}

describe("Desestructuring", () => {
it("ATLAS debería poder atravesar el portal naranja", () => {
  const [orangePortal, bluePortal] = portalTravel("ATLAS", "");
  expect(orangePortal).toBe("");
  expect(bluePortal).toBe("ATLAS");
});
});