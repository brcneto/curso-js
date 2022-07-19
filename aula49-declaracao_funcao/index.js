// Declaração de função (Funtion hoisting)
// A engine do JavaScript passa let var e funções normais

falaOi()
function falaOi() { // apenas quando declaramos desta forma ocorre o function hoisting
    console.log('Oi');
}

// First-class objects (objetos de primeira classe)
// Function expression
const souUmDado = function(){
    console.log('Sou um dado.');
}

function existeFuncao (funcao){
    funcao();
}

existeFuncao(souUmDado);

// Arrow function 
const funcaoArrow = (e) => {
    console.log('Sou uma arrow function');
}
funcaoArrow();

//Dentro de um objeto
const obj = {
    falar: function () { //       falar() {  Isso também funciona
        console.log('Estou falando...');
    }
};
obj.falar();