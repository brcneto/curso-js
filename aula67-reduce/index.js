// Reduce
// Utilizar se precisar reduzir o seu ARRAY a um elemento

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function(acumulador, valor) {
  if (valor % 2 === 0){
    acumulador += valor
  }

  return acumulador;
}, 0); // Preciso determinar qual o valor inicial do acumulador para que não retorne
// pois se não ele vai começar pelo primeiro elemento do array, e no lugar do resultar 162 terei 167.
//console.log(total);




// Retorne a pessoa mais velha.
const pessoas = [
  {nome: 'Luiz', idade: 62}, //////
  {nome: 'Maria', idade: 23},
  {nome: 'Eduardo', idade: 55},
  {nome: 'Letícia', idade: 19},
  {nome: 'Rosana', idade: 64},
  {nome: 'Wallace', idade: 63},
];
//Não ficou mt claro mas decorar a lógica pode ajudar.
const maisVelha = pessoas.reduce(function (acumulador,valor) {
  console.log(acumulador,valor)
  if(acumulador.idade > valor.idade) return acumulador;
  return valor;

});

console.log(maisVelha)

