/*
Menos do que 18,5 abaixo do peso
Entre 18,5 e 24,9 Peso normal
Entre 25 e 29,9 sobrepeso
Entre 30 e 34,9 obesidade primeiro grau
Entre 35 e 39,9 obesidade segundo grau
Maior que 40 obesidade terceiro grau
*/
const form = document.querySelector('form');
const resultado = document.querySelector('#resultado');

form.addEventListener('submit', (e)=>{
e.preventDefault();
const pesoInput = form.querySelector('#peso');
const alturaInput = form.querySelector('#altura');
const peso=pesoInput.value;
const altura=alturaInput.value;
const imc = peso/altura**2
resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} (${checarValor(peso, altura)})`;
})



function checarValor(peso, altura){
    if(!isNaN(peso) && !isNaN(altura)){
        return calculoIMC(peso, altura);
    } else {
        return 'Valor invalido'
    }
}

function calculoIMC(peso, altura){
   const imc = peso/altura**2;
   if(imc < 18.5){
    return 'Abaixo do peso';
   } else if (imc >= 18.5 && imc < 25){
       return'Peso normal';
   } else if (imc > 25 && imc < 30){
       return 'Sobrepeso';
   } else if (imc >= 30 && imc < 35){
       return 'Obesidade primeiro grau';
   } else if (imc >= 35 && imc < 40){
       return 'Obesidade segundo grau';
   } else if (imc >= 40){
       return 'Obesidade terceiro grau';
   }
}

