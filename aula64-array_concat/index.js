const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
//Spread              
const arr3 = [...arr1, 'Gilvan',  ...arr2, ...[7, 8, 9]]

const arr4 = arr1.concat(arr2, [7, 8, 9], 'Gilvan');
console.log(arr3);