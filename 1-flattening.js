let arrays = [[1, 2, 3], [4, 5], [6]];

// function flat(array){
//     array.reduce();
//     return array;
// }
const array = [];
const sumOfArrays = arrays.reduce(
    (a, b) => a.concat(b),
    array,
  );
  



console.log(sumOfArrays)
// → [1, 2, 3, 4, 5, 6]