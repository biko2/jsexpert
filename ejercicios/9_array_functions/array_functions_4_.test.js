const peliculas = [
  'El Padrino', //0
  'El Padrino II', //1
  'El Padrino III', //2
  'El caballero oscuro', //3
  '12 hombres sin piedad', //4
  'La lista de Schindler', //5
  'Pulp Fiction', //6
  'El señor de los anillos: El retorno del rey', //7
  'La vida es bella', //8
  'El club de la lucha', //9
]

const encontrarPelicula = (titulo) => {
  //--------- ⬇️ Modifica el código de abajo ⬇️ ------------//
  //--------- ⬆️ Modifica el código de arriba ⬆️ -----------//
  return pelicula
}

describe('Array functions', () => {
  it('debería encontrar la película "El señor de los anillos: El retorno del rey"', () => {
    const pelicula = encontrarPelicula('retorno')
    expect(pelicula).toBe('El señor de los anillos: El retorno del rey')
  })
  it('debería encontrar la película "El Padrino III"', () => {
    const pelicula = encontrarPelicula('I')
    expect(pelicula).toBe('El Padrino II')
  })
  it('debería encontrar la película "El Padrino II"', () => {
    const pelicula = encontrarPelicula('II')
    expect(pelicula).toBe('El Padrino III')
  })
  it('debería encontrar la película "La lista de Schindler"', () => {
    const pelicula = encontrarPelicula('lista')
    expect(pelicula).toBe('La lista de Schindler')
  })
  it('debería encontrar la película "El padrino"', () => {
    const pelicula = encontrarPelicula('')
    expect(pelicula).toBe('El Padrino')
  })
  it('debería encontrar la película "El caballero oscuro"', () => {
    const pelicula = encontrarPelicula()
    expect(pelicula).toBe(undefined)
  })
})
