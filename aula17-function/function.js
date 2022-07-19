
/* Arrow function "=>"
const raiz = n => n ** 0.5; //Faz a mesma coisa q a função abaixo.
const raiz = function (n) {
    return n ** 0.5; 
}

console.log(raiz(9))
console.log(raiz(16))
*/

/* Função anônima
const raiz = function (n){ //  Quando usamos o sinal de atribuição "=" ou seja estamos atribuindo nossa função
    return n ** 0.5;       //a uma variável, precisamos fechar o corpo da nossa função "{}" com ";"
};


console.log(raiz(25))
console.log(raiz(36))
*/

/* Parâmetros e Retorno
function soma(x = 1, y = 1){ // caso nenhum valor seja atribuido aos parametros "x" e "y"
    const resultado = x + y;
    return resultado;
    console.log("Olá mundo!");//não irá ser retornado pois está abaixo de return
}


// const resultado = soma('gilvas', 'gap');
const resultado = soma(2, 2);
console.log(resultado); =4
*/

/* Explicando função e retorno
function saudacao(nome){
    return(`Bom dia ${nome}!`);
}

saudacao ('gilvan')
saudacao ('rhydrian')
const variavel = saudacao ('balieiro') // e agora ela irá retornar o bom dia com o nome da pessoa e não 123456


function saudacao(nome){
    console.log(`Bom dia ${nome}!`);
    return (123456)
}

saudacao ('gilvan')
saudacao ('rhydrian')
const variavel = saudacao ('balieiro') 
console.log(variavel) // o que esta variável irá retornar é o valor 123456 pois a função por padrão retorna um valor undefined
*/

/* Função
function saudacao(){
    console.log('Hello World!');
}

saudacao()*/