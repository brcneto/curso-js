const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

//const nome = pessoa.nome;// atribuição normal
//const { nome } = pessoa //atribuição via desestruturação
//const { nome: novoNome, sobrenome, endereco } = pessoa; // podemos setar uma variável caso n seja
//const {endereco: {rua: r, numero}, endereco} = pessoa
const { nome, sobrenome, ...rest} = pessoa
console.log(nome, sobrenome, rest);



