/*
Entre 0 - 11 - Bom dia
Entre 12 - 17 - Boa tarde
Entre 18 - 23 - Boa noite

// If pode ser executado sozinho 
// Sempre que utilizo a palavra else, preciso de um if antes
// Eu posso ter vários else ifs na checagem
// Só posso ter um else na checagem
// Podemos usar condições sem else if, utilizando apenas if e else (ou apenas if...)

//if = se
//else if = senão
//else = caso a(s) condição(ões) seja avaliada como falsa o else será executado


const hora = 23;

if (hora >= 0 && hora < 12){ //
    console.log('Bom dia');
} else if (hora >= 12 && hora < 18) {
    console.log('Boa tarde');
}else if (hora >= 18 && hora < 24){
    console.log('Boa noite');
}else {
    console.log('Olá')
}

*/

// Se tivermos apenas 2 condições 
const tenhoDinheiro = true;

if(tenhoDinheiro) {
    console.log('vou sair de casa');
} else {
    console.log('não vou sair de casa')
}