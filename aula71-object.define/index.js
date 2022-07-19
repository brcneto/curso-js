// defineProperty - defineProperties
function Produto (nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, 'estoque', {
    enumerable: true,    // mostrar a chave
    value: estoque,      // valor
    writable: false,     // poder alterar
    configurable: false  // configurável
  });
/* 
  Object.defineProperties(this, {
    nome: {
      enumerable: true,   // mostrar a chave
      value: nome,        // valor
      writable: true,     // poder alterar
      configurable: true  // configurável
    },
    preco: {
      enumerable: true,   // mostrar a chave
      value: preco,       // valor
      writable: true,     // poder alterar
      configurable: true  // configurável
    }
  });
*/
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(Object.keys(p1));

for (let chave in p1) {
  console.log(chave)
}
