//Filter -> Sempre vai retornar um array, com a mesma quantidade de elementos
//ou menos.

//Retorne os números maiores que 10
const numeros  = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

/* Função grande
function callbackFilter(valor, indice, array) {
    if (valor > 10) {
        return true;
    } else {
        return false;
    }
}
const numerosFiltrados = numeros.filter(callbackFilter);
*/
/* Modo profissional
//const filNums = numeros.filter(valor => valor > 10);*/





//Retorne as pessoas com nomes com 5 letras ou mais
//Retorne pessoas com idade > 50
//Retorne pessoas com nome terminado em "a" 
const pessoas = [
  {nome: 'Luiz', idade: 62},
  {nome: 'Maria', idade: 23},
  {nome: 'Eduardo', idade: 55},
  {nome: 'Letícia', idade: 19},
  {nome: 'Rosana', idade: 32},
  {nome: 'Wallace', idade: 47},
];

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
const pessoasComMaisDe50 = pessoas.filter(obj => obj.idade > 50);
const nomeTerminaComA = pessoas.filter(obj => {
  return obj.nome.toLowerCase().endsWith('a');
});
console.log(nomeTerminaComA)









// Minha lógica
// let arr = []
// for (let valor of numeros) {
//     if (valor > 10 ) {
//         arr.push(valor)
//     }
// }
// console.log(arr)
