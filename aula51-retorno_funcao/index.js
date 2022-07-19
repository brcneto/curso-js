// Return

function criaMultiplicador (multiplicador){
    //multiplicador
    return function (n){
        return n * multiplicador
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));

/*Função dentro de função 
function falaFrase (comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const fala = falaFrase('Olá')
const resto = fala('mundo!')

console.log(resto)




//Função com objetos

function criaPessoa (nome, sobrenome) {
    return {nome, sobrenome};
}

const p1 = criaPessoa('Gilvan', 'Neto');
const p2 = {
    nome: 'Gilvan',
    sobrenome:'Neto'
};

console.log(p1, p2)
*/