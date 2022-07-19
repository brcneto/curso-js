//  Estamos acoplando talvez n seja tão legal -> Segundo luiz otávio a herança pode
//  a herança pode ser meio frágil então trabalhar com os objetos literais

/*
function criaPessoa (nome, sobrenome) {
  const pessoaPrototype = {
    falar(){
      console.log(`${this.nome} está falando`);
    },
    comer(){
      console.log(`${this.nome} está comendo`);
    },
    beber(){
      console.log(`${this.nome} está bebendo`);
    }
  };

  return Object.create(pessoaPrototype, {
    nome: {value: nome},
    sobrenome: {value: sobrenome}
  })
}
*/


const falar = {
  falar() {
    console.log(`${this.pessoa} está falando`);
  }
};

const comer = {
  comer() {
    console.log(`${this.pessoa} está comendo`);
  }
};

const beber = {
  beber() {
    console.log(`${this.pessoa} está bebendo`);
  }
};

const pessoaPrototype = Object.assign({}, falar, comer, beber);

function criaPessoa (nome, sobrenome) {
  return Object.create(pessoaPrototype, {
    nome: {value: 'nome'},
    sobrenome: {value: 'sobrenome'}
  });
}

const p1 = criaPessoa('Gilvan', 'Neto');
const p2 = criaPessoa('Yuri', 'Boneco');
console.log(p1);

function Querer(sla) {
}






