// Produto -> aumento, desconto
// Camiseta = Cor, Caneca = Material
function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}
Produto.prototype.aumento = function(percentual) {
  this.preco = this.preco + (this.preco * (percentual/100));
}
Produto.prototype.desconto = function(percentual) {
  this.preco = this.preco - (this.preco * (percentual/100));
}

function Camiseta (nome, preco, cor) {
  Produto.call(this, nome, preco);
  this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta



function Caneca (nome, preco, material, estoque) {
  Produto.call(this, nome, preco);
  this.material = material;

  Object.defineProperty(this, 'estoque',{
    enumerable:true,
    configurable: false,
    get: function() {
      return estoque;
    },
    set: function(valor){
      if(typeof valor !== 'number') return;
      estoque = valor;
    }
  });
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca


const produto = new Produto('Gen', 10);
const camiseta = new Camiseta('Regata', 7.5, 'Preta');
const caneca = new Caneca('Caneca', 13, 'Plástico', 5);
camiseta.aumento(10)


console.log(produto);
console.log(camiseta);
console.log(caneca);

