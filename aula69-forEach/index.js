const a1 = [10, 20, 30];
let total = 0;

a1.forEach(valor => {
  total += valor;
});

console.log(total);


/* forEach introduzindo
const a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

a1.forEach(function(valor, indice, array) {
  console.log(array[indice]);// Como no for in ou for clássico.
  console.log(valor) // Como no for of
}); 
*/

