/*
Object.value
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(object, 'property')
... (spread)

// Já vimos
Object.keys (retorna array com as chaves) Ex.: ['nome' 'sobrenome']
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades) Ex.: configurable, writable, value, enumerable
Object.defineProperty (define uma propriedade) propriedade é elemento do objeto

*/

// Coisas estudadas 

// const outraCoisa = produto;
// ambos apontam para o mesmo lugar na memória
// spread operator

// Object.freeze(produto);
// const caneca = {...produto,};
// const caneca = Object.assign({}, produto, { material: 'porcelana' }); // Preferível spread 
// caneca.nome = 'Outro nome';
// caneca.preco = 2.5;


const produto = { nome: 'Produto', preco: 1.8, material: 'porcelana'};
for (let [chave, valor] of Object.entries(produto)) {
  console.log(chave, valor);
}

console.log(Object.entries(produto));

