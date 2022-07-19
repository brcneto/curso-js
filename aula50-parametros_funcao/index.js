/* Sobre Parâmetros
// Funções definidas com a palavra FUNCTION tem uma variável especial chamada
// arguments que sustenta todos os argumentos enviados

// function funcao(a, b, c) { // só pra explicar
//     let total = 0
//     for (let argumento of arguments){
//         total = total + argumento // +=
//     }
//     console.log(total, a, b, c) // todos os argumentos continuam em arguments mesmo definindo parametros
// }
// funcao(1, 2, 3, 4, 5, 6, 7);


// function aboutParameter(a, b = 2, c = 4) {
//     console.log(a + b + c);
// }
// aboutParameter(2, undefined, 20) //única forma de b ser undefined neste caso



// function conta(operador, acumulador, ...numeros) {
//     for (let numero of numeros){
//         if(operador === '+') acumulador += numero
//         if(operador === '-') acumulador -= numero
//         if(operador === '*') acumulador /= numero
//         if(operador === '/') acumulador *= numero
//     }
//     console.log(acumulador)
// }

// conta('*', 0, 20, 30, 40, 50);


const conta = (...args) => {
    console.log(args);
};

conta('+', 0, 20, 30, 40, 50);*/

