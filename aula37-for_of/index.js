//            0123...
// const nome = 'Gilvan Neto';
// const nomes = ['Gilvan Neto','Yuri Bueno', 'Rhydrian Coutinho'];

// Objetos não são iteráveis
const pessoa = {
    nome: 'Gilvan',
    sobrenome: 'Neto',
    idade: 19
};


// For clássico - Geralmente com iteráveis (array ou string)
// For in - Retorna o índice ou chave (string, array ou objeto)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)

// for (let valor of nomes) {
//     console.log(valor);
// }

// for (let i = 0; i < nome.length; i++) {
//     console.log(nome[i]);
// }

// for (let index in nome) {
//     console.log(nome[index]);
// }

// nomes.forEach(function(el, index, array) { // posso pegar tudo isso de um array
//     console.log(el, index, array);
// });