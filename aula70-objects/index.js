/* Factory functions / Constructor functions / Classes */

//Padrão de projeto -> Constructor function

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  // 3- Eu posso travar todos objetos feitos nessa função
  //Object.freeze(this);

  // return this; // {nome: 'Gilvan', sobrenome: 'Batista' } Mas n preciso utilizar return pois já retorna automaticamente.
}

const p1 = new Pessoa('Gilvan', 'Batista');// Palavra new criar um objeto vazio e a palavra new vai pegar a palavra this
// 2- Eu posso travar meu objeto e impedir mudanças
//Object.freeze(p1);
// 1- Eu posso trocar o valor do valor da const mas não o seu valor.
p1.nome = 'outra coisa'
p1.sobrenome = 'QLQ'
p1.fala = function() {console.log('oi')};
p1.fala();
const p2 = new Pessoa('Yuri', 'Bueno')

console.log(p1); 
console.log(p2); 



//Padrão de projeto -> Factory function

// function criaPessoa(nome, sobrenome) {
//   return {
//     nome,
//     sobrenome,
//     get nomeCompleto() {// como se fosse um atributo normal de um objeto msm sendo um método.
//       return `${this.nome} ${this.sobrenome}`;
//     }
//   };
// }

// const p1 = criaPessoa('Gilvan', 'Batista');// Transformando minha const em uma função basicamente
// console.log(p1.nomeCompleto); // se eu tiro o get do método aqui eu teria q executar "()"









// const pessoa1 = new Object();
// pessoa1.nome = 'Luiz';
// pessoa1.sobrenome = 'Otávio';
// pessoa1.idade = 20;
// pessoa1.falarNome = function() {//Método
//   console.log(`${this.nome} está falando seu nome.`)
// };
// pessoa1.getDataDeNascimento = function() {//Método
//   const dataAtual = new Date();
//   return dataAtual.getFullYear() - this.idade;
// };

// for (let chave in pessoa1) {
//   console.log(pessoa1[chave])
// }













// const pessoa2 = {
//   nome: 'Luiz',
//   sobrenome: 'Otávio'
// };


// notação de [] e notação de '.'
// const chave = 'nome'
// console.log(pessoa1.nome);
// console.log(pessoa1['sobrenome']);

