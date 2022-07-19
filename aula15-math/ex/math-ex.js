const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.querySelector('#numero-titulo');
const texto = document.querySelector('#texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = `Raiz quadrada: ${numero ** 0.5}<br /><br />`;
texto.innerHTML += `${numero} é inteiro: ${Number.isInteger(numero)}<br /><br />`;
texto.innerHTML += `É NaN: ${isNaN(numero)}<br /><br />`;
texto.innerHTML += `Arredondando para baixo: ${Math.floor(numero)}<br /><br />`
texto.innerHTML += `Arredondando para cima: ${Math.ceil(numero)}<br /><br />`
texto.innerHTML += `Com duas casas decimais: ${numero.toFixed(2)}<br /><br />`