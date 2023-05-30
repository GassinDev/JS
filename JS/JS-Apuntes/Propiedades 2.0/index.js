
//CONVIERTE ARRAY

// let word = 'Hola mundo';

// console.log(Array.from(word));
// console.log(word.split(''));

//ORDENA ALFABÉTICAMENTE(VALOR UNICODE)

// const letters = ['b','c','z','a'];
// const numbers = [1,8,100,300,3];


// console.log(letters.sort());
// console.log(numbers.sort());

// console.log(numbers.sort((a,b)=>a-b));



// function menorMayor(a,b){
//     if(a-b < 0) return -1;
//     if(a-b > 0) return 1;
//     if(a==b) return 0;
// }

// function mayorMenor(a,b){
//     if(b-a < 0) return -1;
//     if(b-a > 0) return 1;
//     if(b==a) return 0;
// }

//FOR EACH EJECUTA LA FUNCION INDICADA UNA VEZ POR CADA ELEMENTO DEL ARRAY

// const numbers = [12, 25, 67, 84, 98]

// numbers.forEach((number)=>console.log(number));
// numbers.forEach((number, index)=>
//     console.log(`${number} está en la posición ${index}
//     `))

//COMPRUEBA SI UN ELEMENTO DEL ARRAY CUMPLE CON LA CONDICION

// const words = ['HTML','CSS','JavaScript','PHP'];

// console.log(words.some(words => words.length>10));
// console.log(words.some(words => words.length>2));

//EVERY ES PARA TODOS

// TRANSFORMA TODOS LOS ELEMENTOS DEL ARRAY Y DEVUELVE UN ARRAY

// const numbers = [12, 25, 67, 84, 98]

// const numbers2 = numbers.map(number => number * 2);
// console.log(numbers2)

//FILTRA TODOS LOS ELEMENTOS DEL ARRAY QUE CUMPLAN LA CONDICION Y DEVUELVE

// const numbers = [12, 25, 67, 84, 98]

// const numbers2 = numbers.filter(number=> number > 40);
// console.log(numbers);
// console.log(numbers2);

// console.log(numbers.reduce((a,b)=>a+b));

// const users = [
//     {
//         name: 'user 1',
//         online: true
//     },
//     {
//         name: 'user 2',
//         online: false
//     },
//     {
//         name: 'user 3',
//         online: true
//     },
//     {
//         name: 'user 4',
//         online: false
//     },
//     {
//         name: 'user 5',
//         online: true
//     },
//     {
//         name: 'user 6',
//         online: true
//     }
// ]

// const usersOnline = users.reduce((cont, user) =>{
//     if (user.online) cont++
//     return cont
// },0)

// console.log(`Hay ${usersOnline} usuarios conectados`);
    