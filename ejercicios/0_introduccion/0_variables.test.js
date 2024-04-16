
//--------- ⬇️ Modifica el código de abajo ⬇️ ------------//
const edad = 34;

console.log(`Edad actual: ${edad}`);

//--------- ⬆️ Modifica el código de arriba ⬆️ -----------//


it('incrementa la edad en 1', () => {
	try{

    // 👀
    edad = edad + 1;

  }catch (error){
    expect(error).not.toBeDefined();
  }
  expect(edad).toBe(35);
})