// Funções que chamam se mesm
function recursiva(max) {
    console.log(max)
    
    if(max == 10) return;
    max++;
    recursiva(max)
}

recursiva(0);


