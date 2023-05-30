let numbers = [1,2,3,4,5];

//DEVOLVER EL NÚMERO DE POSICIONES DEL ARRAY --------------------------------------------------------------------------

//console.log(numbers.length);

//DEVUELVE TRUE SI ES UN ARRAY -------------------------------------------------------------------------------

// let number = 4;
// console.log(Array.isArray(number));
// console.log(Array.isArray(numbers));

//ELIMINAR ELEMENTOS CON SHIFT PRIMER ELEMENTO Y CON POP EL ULTIMO//------------------------------------------------------------

// console.log(numbers);
// //number.shift();
// //console.log(numbers);
// numbers.pop();
// console.log(numbers);
// let deleteElement = numbers.shift();

//AÑADIR ELEMENTOS A UN ARRAY CON PUSH AL FINAL Y LO DEVUELVE Y CON UNSHIFT AL PRINCIPIO-----------------------------------------------------

// console.log(numbers);
// let newLength = numbers.push(6);
// console.log(numbers);
// // console.log(newLength);
// let newLength2 = numbers.unshift(0);
// console.log(numbers);

//DEVUELVE EL PRIMER INDICE QUE COINCIDA CON EL VALOR ESPECÍFICADO SINO PUES -1.-----------------------------------------------------------

// console.log(numbers);
// console.log(numbers.indexOf(2))

//DEVUELVE EL ULTIMO INDICE QUE COINCIDA.....----------------------------------------------------------------------------------

// console.log(numbers);
// console.log(numbers.lastIndexOf(1));

//INVIERTE EL ORDEN DEL ARRAY------------------------------------------------------------------------------------------------------------------

// console.log(numbers);
// numbers.reverse();
// console.log(numbers)

//DEVUELVE UN STRING CON EL SEPARADOR QUE INDIQUEMOS-----------------------------------------------------------------------------------------

// console.log(numbers);
// let arrayString = numbers.join(' ');
// console.log(arrayString);
// console.log(numbers.join('-'));

//CAMBIA EL CONTENIDO DE UN ARRAY ELIMINANDO ELEMENTOS EXISTENTES------------------------------------------------------------------------
// a indice de inicio y b numero de elementos

// console.log(numbers);
// numbers.splice(3); Desde la posicion 3 hasta el final
//numbers.splice(2,2); Primero Posicion y luego dos
//numbers.splice(2,2,10,14,15); Lo mismo que el de arriba pero añade los numeros a partir del 2
//numbers.splice(2,0,10,14);  Desde la posicion 2 añade los elementos de despues de la segunda coma y los demas no se eliminan
// console.log(numbers);

// EXTRAE ELEMENTOS DE UN ARRAY DESDE EL INDICE A HASTA EL B

// let newNumbers = numbers.slice();
// console.log(numbers);
// console.log(newNumbers);

// let newNumbers = numbers.slice(2);
// console.log(numbers);
// console.log(newNumbers);

// let newNumbers = numbers.slice(2,3);
// console.log(numbers);
// console.log(newNumbers);