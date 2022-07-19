//A função lembra onde foi declarada e quando n acha algo em seu escopo procura em seu parent

const nome = 'Gilvan';

function falaNome() {
    console.log(nome);
}

function usaFalaNome() {
    const nome = 'Neto'
    falaNome();
}
usaFalaNome();