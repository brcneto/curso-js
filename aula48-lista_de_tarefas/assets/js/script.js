const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.lista-tarefas');

function criaLi () {
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

function limpaInput () {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar(li) {
    li.innerHTML += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('tittle', 'Apagar esta tarefa');
    li.appendChild(botaoApagar);
}

function criaTarefa (textoInput) {
    const li = criaLi();
    li.innerHTML = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefa();
}

btnTarefa.addEventListener('click', function(){
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function(e){
    const el = e.target

    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefa()//n entendi pq o fato de colocar essa função aqui faz com que apague mas tdbem
    }
});

function salvarTarefa() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText; //pegando o innerText  da tarefa
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim() //substituindo / replace o apagar para nada ('') e removendo o espaço no fim de cada elemento do array
        listaDeTarefas.push(tarefaTexto)
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);//converte para string para poder armazenar
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas')
    const listaDeTarefas = JSON.parse(tarefas); //converte de volta para um obj js

    for(let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}
adicionaTarefasSalvas()
















// A merda q eu pensei q dava pra dar certo mas o cara é liso
// document.addEventListener('click', function(event) {
//     const el = event.target;

//     if(el.classList.contains('btn-tarefa')) {
//         lista.innerHTML += `<li>${inputTarefa.value}</li>`
//     }
// });