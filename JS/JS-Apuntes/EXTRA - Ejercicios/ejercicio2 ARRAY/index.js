const a1 = [1, 2, 3]
const a2 = [4, 5, 6, 7, 8]
const a3 = a1.concat(a2)

console.log('a1 concatenado con a2', a3)
a3.length = 0
console.log('eliminando el contenido de a3', a3)

function fibonacciUntil (n) {
  let resultado = []
  let actual
  
  for (let i = 0; i < n; i++) {
    if (i < 2) {
      resultado.push(i)
    }
    else {
      actual = resultado[i - 2] + resultado [i - 1]
      resultado.push(actual)
    }
  }
  
  return resultado
}

console.log('14 primeros valores de la serie de fibonacci', fibonacciUntil(14))

function removeDuplicate (a) {
  let resultado = []
  let actual
  
  for (let i = 0; i < a.length; i++) {
		actual = a[i]
    if (!resultado.includes(actual)) {
      resultado.push(actual)
    }
  }
  
  return resultado
}

const a4 = [1, 2, 1, 3, 4, 2, 5, 6, 2]
const a5 = removeDuplicate(a4)

console.log('a4', a4)
console.log('a4 despuÃ©s de eliminar los repetidos', a5)