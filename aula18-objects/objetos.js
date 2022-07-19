/* Métodos - Funções dentro de objetos
const pessoa1 = {
    nome: 'Gilvan',
    sobrenome: 'Neto',
    idade: 19,

    fala (){
        console.log(`A minha idade atual é ${this.idade}.`)
    },

    incrementaIdade(){
        this.idade++
    }
};

pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();

*/

/* Fábrica de criar pessoas  -  Objetos com função
function criaPessoa (nome, sobrenome, idade){
    return {nome, sobrenome, idade}; // são a mesma coisa return {nome: nome, sobrenome: sobrenome, idade: idade};
}
const pessoa = criaPessoa('gilvan', 'neto', 19);
console.log(pessoa);
*/

/* Criando pessoas com objeto
const pessoa1 = {
    nome: 'Gilvan',,
    sobrenome: 'Neto',
    idade: 19
};
const pessoa2 = {
    nome: 'Yuri',
    sobrenome: 'Bueno',
    idade: 20
};

console.log(pessoa.nome)
console.log(pessoa2.sobrenome)
console.log(pessoa.idade)
*/

/* Criando pessoas com variável
const nome01 = 'Gilvan';
const sobrenome01 = 'Neto';
const idade01 = 19;

const nome02 = 'Yuri';
const sobrenome02 = 'Bueno';
const idade02 = 20
*/