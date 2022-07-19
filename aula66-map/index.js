// Map 
// Sempre vai ter o mesmo tamanho do ARRAY original.


// Dobre os números
//               0  1   2   3  4...       
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const numerosEmDobro = numeros.map(valor => valor * 2);
// console.log(numerosEmDobro);






// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto
const pessoas = [
  {nome: 'Luiz', idade: 62},
  {nome: 'Maria', idade: 23},
  {nome: 'Eduardo', idade: 55},
  {nome: 'Letícia', idade: 19},
  {nome: 'Rosana', idade: 32},
  {nome: 'Wallace', idade: 47},
];

const nomes = pessoas.map(obj => obj.nome);
const noKeyName = pessoas.map(obj => ({ idade: obj.idade })); // essa parentese é pq o vs code n iria entender ent preciso criar um expression
const comIds = pessoas.map(function(obj, indice) {
  obj.id = indice + 1;
  return obj;
} )
console.log(pessoas)
console.log(comIds);
//Estou alterando pessoas também
// REVER A AULA 85 para saber como só alterar o meu novo array









