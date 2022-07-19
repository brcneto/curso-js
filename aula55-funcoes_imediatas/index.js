// IIFE -> Immediately invoked function expression
// function qualquerCoisa() {
//     console.log(11123455);
// }
// qualquerCoisa();


(function(idade, peso, altura){

    const sobrenome = 'Neto';
    function criaNome(nome) {
        return nome + ' ' + sobrenome; 
    }

    function falaNome() {
        console.log(criaNome('Gilvan'));
    }

    falaNome();
    console.log(idade, peso, altura)

})(30, 72, 1.70)
