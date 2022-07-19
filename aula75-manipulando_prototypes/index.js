function Produto (nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
  this.preco = this.preco - (this.preco * (percentual / 100));
}

Produto.prototype.aumento = function (percentual) {
  this.preco = this.preco + (this.preco * (percentual / 100));
}

const p1 = new Produto('camiseta', 50)
p1.desconto(100)

const p2 = {
  nome: 'Caneca',
  preco: 15
}
Object.setPrototypeOf(p2, Produto.prototype)
p2.aumento(10)


// criando o objeto e já setando seu __proto__
const p3 = Object.create(Produto.prototype, {
  preco: {
    writable: true,
    configurable: false,
    enumerable: true,
    value: 99
  },
  tamanho2: {
    writable: true,
    configurable: false,
    enumerable: true,
    value: 43
  }
})

p3.aumento(10);
console.log(p3)





