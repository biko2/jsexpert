
// La función cumpleAños, añade un año más a la edad
//--------- ⬇️ Modifica el código de abajo ⬇️ ------------//
const edad = 34;

console.log(`Edad actual: ${edad}`);

//--------- ⬆️ Modifica el código de arriba ⬆️ -----------//

try{

	edad = edad + 1;
	console.log(`Edad después de cumpleaños: ${edad}`);

} catch {
	throw new Error("Algo ha ido mal :(");
}
