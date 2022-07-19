/* Diferença while e do while

function random(min, max) {
    const r = Math.floor(Math.random() * (max - min + 1)) + min;
    return r;
}

const min = 1;
const max = 50;
let rand = 10;

while (rand !== 10) { // enquanto essa condição for verdadeira ele vai rodar o laço
    console.log(rand);
}

console.log('#####');

// O while vai executar o laço antes de checar a condição
do {
    console.log(rand);
} while (rand !== 10)
*/

/* Introdução While
// const nome = 'Gilvan'
// let i = 0;

// while (i < nome.length) {
//     console.log(nome[i]);
//     i++;
// }
*/