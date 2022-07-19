function getTimeForSecond(segundo) {
    const data = new Date(segundo * 1000);
    return data.toLocaleTimeString('pt-BR',{
        hour12: false,
        timeZone: 'UTC'
    });
}


const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function iniciaRelogio () {
    timer = setInterval(function () {
        segundos++;
        relogio.innerHTML = getTimeForSecond(segundos);
    }, 1000);
}

document.addEventListener('click', function (e){
    const el = e.target;

    if (el.classList.contains('iniciar')) {
        relogio.classList.remove('pausado')
        clearInterval(timer);
        iniciaRelogio();
    }

    if (el.classList.contains('pausar')) {
        relogio.classList.add('pausado');
        clearInterval(timer);
    }

    if (el.classList.contains('zerar')) {
        relogio.classList.remove('pausado')
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0
    }
});

/* 
iniciar.addEventListener('click', function(event){
    relogio.classList.remove('pausado')
    clearInterval(timer);
    iniciaRelogio();
});

pausar.addEventListener('click', function(event){
    relogio.classList.add('pausado')
    clearInterval(timer);
});

zerar.addEventListener('click', function(event){
    relogio.classList.remove('pausado')
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0
});
*/