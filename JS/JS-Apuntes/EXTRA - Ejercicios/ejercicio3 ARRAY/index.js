//Crea un objeto con las palabras que aparecen en un string y el número de veces que aparecen
function countWords (s) {
    const normalized = normalize(s)
    const words = normalized.split(/\s+/)
    let word
    let resultado = {}
    
    for (let i = 0; i < words.length; i++) {
      word = words[i]
      if(resultado.hasOwnProperty(word)) {
        resultado[word]++
      }
      else {
        resultado[word] = 1
      }
    }
    
    return resultado
  }
  
  function normalize (s) {
    const lowercaseString = s.toLowerCase()
    let char
    let resultado = ''
    
    for (let i = 0; i < lowercaseString.length; i++) {
      char = lowercaseString[i]
      if(isLetter(char)) {
        resultado += char
      }
      else {
        resultado += ' '
      }
    }
    
    return resultado
  }
  
  function isLetter (c) {
    return c !== c.toUpperCase()
  }
  
  const s1 = '«En un lugar de La Mancha (dónde), de cuyo nombre no quiero acordarme, no ha mucho tiempo (cuándo) que vivía (qué) un hidalgo (quién) de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor (con qué). Una olla de algo más vaca que carnero, salpicón las más noches, duelos y quebrantos los sábados, lentejas los viernes, algún palomino de añadidura los domingos consumían las tres partes de su hacienda (cómo vivía)... »Es, pues, de saber que este sobredicho hidalgo (quién) los ratos que estaba ocioso, que eran los más del año (cuándo) se daba a leer libros de caballerías (qué hacía) con tanta afición y gusto (por qué lo hacía) que olvidó casi de todo punto el ejercicio de la caza, y aun la administración de su hacienda».'
  console.log('Palabras s1', countWords(s1))