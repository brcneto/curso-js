//Minha forma através da documentação
// const today = document.querySelector('h1');

// const data = new Date(Date.UTC(2022, 04, 02, 13, 18));

// today.innerHTML = `${(data.toLocaleDateString)('pt-BR', {weekday: 'long', year: 'numeric',
// month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'})}`;

const h1 = document.querySelector('h1');
const data = new Date();
const opcoes = {
    dateStyle: 'full', 
    timeStyle: 'medium'//timeStyle 'long' ou 'short' 
};

h1.innerHTML = `${data.toLocaleString('pt-BR', opcoes)}`