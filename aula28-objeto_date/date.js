/* Date como posso usar
new Date();
new Date(valor);
new Date(dataString);
new Date(ano, mês, dia, hora, minuto, segundo, milissegundo);
*/

// const tresHoras = 60 * 60 * 3 * 1000 // para ajustar o fuso horário
// const umDia = 60 * 60 * 24 * 1000 // um dia
//const data = new Date(0); // 01/01/1970 Timestamp unix ou época unix
const dataMs = new Date (1651485014206)
const data = new Date('2022-05-02 06:42:59:100'); //0 == janeiro 3 == abril eu posso omitir 
console.log('Dia', data.getDate())
console.log('Mes', data.getMonth() + 1)
console.log('Ano', data.getFullYear())
console.log('Hora', data.getHours())
console.log('Min', data.getMinutes())
console.log('Seg', data.getSeconds())
console.log('Ms', data.getMilliseconds())
console.log('Dia semana', data.getDay()) // 0 é domingo 6 é sábado
console.log(data.toString());//
console.log(dataMs.toString())
console.log(Date.now())