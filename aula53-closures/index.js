//Closures
//é a habilidade que a função tem em acessar seu escopo léxico

const nome = 'Neto'
function retornaFuncao() {
    //const nome = 'Gilvan'//closure
    return function () {
        return nome;
    };
}

const funcao = retornaFuncao();
console.log(funcao())