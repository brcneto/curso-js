// Função contrutora -> objetos Pessoa (new)
// Função fabrica -> objetos criaPessoa
// Contrutora ->

function Pessoa(nome, sobrenome) {
    // Privadas
    const id = 123456;
    
    const metodoInterno = function() {
        
    };
    
    // Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function(){
        console.log(this.nome + ': sou um método');
    }
}
// não precisa de return

const p1 = new Pessoa('Gilvan', 'Neto');
const p2 = new Pessoa('Maria', 'Oliveira');
p1.metodo();