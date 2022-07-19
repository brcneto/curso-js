// Escreva uma função que recebe 2 números e retorna o maior deles
/* 
function maiorNum (num1, num2) {
    return num1 > num2 ? num1 : num2;
}*/

const numMaior = (x, y) => x > y ? x : y; // como só possui uma
//linha não preciso utilizar return na arrow function

console.log(numMaior(5, 10));