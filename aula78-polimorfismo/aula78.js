// Superclass
function Conta (agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
  if(this.saldo < valor) {
    console.log(`Saldo insuficiente: ${this.saldo}`)
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
};
Conta.prototype.depositar = function(valor){
  this.saldo += valor;
  this.verSaldo();
};
Conta.prototype.verSaldo = function() {
  console.log(`Ag/c: ${this.agencia}/${this.conta} | Saldo: R$${this.saldo.toFixed(2)}`);
};

const conta1 = new Conta(11, 22, 10);

function CC(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}

CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;

CC.prototype.sacar = function(valor) {
  if(valor > (this.saldo + this.limite)) {
    console.log(`Saldo insuficiente: ${this.saldo}`);
    return;
  }

  this.saldo -= valor;
  this.verSaldo()
}

const cc = new CC(11, 22, 0, 100);
cc.depositar(10);
cc.sacar(120);

function CP(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo);
}

CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP

const cp = new CP(12, 33, 0);
cp.depositar(10);
cp.sacar(110);
cp.sacar(1);







