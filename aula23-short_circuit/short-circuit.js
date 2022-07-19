/*
&& -> false && true -> false "o valor mesmo"
|| ->

FALSY
*false - o valor mesmo 
0
'' "" ``  strings vazias
null / undefined
NaN 


function falarOi (){
    return 'Oi'
}

const vaiExecutar = 0
console.log(vaiExecutar && falarOi())

console.log(0 || false  || null || 'Gilvan' || true) // vai retornar o primeiro valor 
//                                                      verdadeiro ou o ultimo falso
*/

const a = 0;
const b = null; 
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b ||'Jefferson'|| c || d || e); // vai retornar o 'false' porém string
