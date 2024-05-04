/**
 * Esta ciudad medieval tiene una serie de recursos, población y producción diaria de recursos.
 * Deberás implementar las funciones necesarias para calcular los siguientes datos:
 * - 🍖 Consumo diario de alimentos. Deberás calcular el consumo total de alimentos por día en base a la población.
 * - 💰 Producción diaria de recursos. Deberás calcular la producción diaria de cada uno de los recursos en base a la población.
 * - 📆 Días de supervivencia. Deberás calcular los días de supervivencia de la ciudad en base a los alimentos disponibles y el consumo diario.
 * - 🥶 Simulación del invierno. Deberás calcular los recursos restantes tras los días pasados teniendo en cuenta que en invierno se genera la mitad de recursos.
 */

export const medievalCity = {
  recursos: {
    madera: 1000,
    hierro: 800,
    oro: 500,
    alimentos: 6000,
  },
  poblacion: [
    { tipo: 'agricultores', cantidad: 50, consumo: 2 },
    { tipo: 'soldados', cantidad: 40, consumo: 4 },
    { tipo: 'artesanos', cantidad: 30, consumo: 2 },
  ],
  produccion: {
    madera: { agricultores: 5, soldados: 0, artesanos: 1 },
    hierro: { agricultores: 1, soldados: 0, artesanos: 3 },
    oro: { agricultores: 2, soldados: 0, artesanos: 3 },
    alimentos: { agricultores: 10, soldados: 0, artesanos: 2 },
  },
}

export function calcularConsumoDiarioDeAlimentos(city) {
  const totalFoodConsumption = city.poblacion.reduce((total, person) => {
    return total + person.cantidad * person.consumo
  }, 0)
  return { consumoTotalAlimentos: totalFoodConsumption }
}

export function calcularProduccionDiaria(city) {
  const dailyProduction = {
    madera: 0,
    hierro: 0,
    oro: 0,
    alimentos: 0,
  }

  for (const resourceType in dailyProduction) {
    city.poblacion.forEach((person) => {
      dailyProduction[resourceType] +=
        city.produccion[resourceType][person.tipo] * person.cantidad
    })
  }

  return dailyProduction
}

export function simularInvierno(city, days) {
  const dailyProduction = calcularProduccionDiaria(city)
  const dailyConsumption =
    calcularConsumoDiarioDeAlimentos(city).consumoTotalAlimentos
  const initialResources = { ...city.recursos }
  const resourcesAfterWinter = { ...initialResources }

  for (const resource in dailyProduction) {
    resourcesAfterWinter[resource] += (dailyProduction[resource] * days) / 2
  }
  resourcesAfterWinter.alimentos -= dailyConsumption * days

  const survivalDays = calcularDiasDeSupervivencia({
    recursos: resourcesAfterWinter,
    poblacion: city.poblacion,
    produccion: city.produccion,
  })

  return {
    diasSupervivencia: survivalDays,
    recursosRestantes: resourcesAfterWinter,
  }
}

export function calcularDiasDeSupervivencia(city) {
  const dailyConsumption =
    calcularConsumoDiarioDeAlimentos(city).consumoTotalAlimentos
  const availableFood = city.recursos.alimentos
  return Math.floor(availableFood / dailyConsumption)
}
