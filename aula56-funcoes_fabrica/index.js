//Factory function
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome, 
        sobrenome,
        
        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala: function(assunto = 'falando sobre nada') {
            return `${this.nome} está falando ${assunto}`;
        },

        altura: altura,
        peso: peso,
        
        //Getter
        get imc() {
            const indice = this.peso / this.altura ** 2
            return indice.toFixed(2)
        }
    };
}
const p1 = criaPessoa('Gilvan', 'Neto', 1.70, 72);
const p2 = criaPessoa('Yuri', 'Bueno', 1.70, 100);
p1.nomeCompleto = 'Gilvan Batista Ribeiro';
console.log(p1.nomeCompleto);
console.log(p1.nome);
console.log(p1.sobrenome)

// console.log(p1.fala('sobre JS'))
// console.log(p2.fala('sobre porra de Blender'))