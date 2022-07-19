/* Primitivos e Referência
Primitivos (imutáveis) - string, number, boolean, undefined,
null (bigint, symbol) - Valores copiados.

Referência (mutáveis) - array, object, function - Valores passasdos por referência.
*/

// let a = [ 1, 2, 3 ];
// let b = [...a]; // caso o objetivo seja copiar "a" e não apontar para "a" sendo "a" um array: b = [...a]
// console.log(a, b);

const a = {
    nome: 'gilvan',
    sobrenome: 'neto'
};
const b = {...a}; // da mesma forma que fiz com o array porém com "{}"
b.nome = 'yuri'
console.log(a)
console.log(b)