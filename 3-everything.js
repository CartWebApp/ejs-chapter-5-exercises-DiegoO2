function every(array, test) {
  for (item of array) {
    if (test(item)) {

    }
    else {
      return false;
    }
  }
  return true;
}

function everySomeMethod(array, test) {
  return !(array.some((array) => !test(array)));
}


console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

console.log(everySomeMethod([1, 3, 5], n => n < 10));
// → true
console.log(everySomeMethod([2, 4, 16], n => n < 10));
// → false
console.log(everySomeMethod([], n => n < 10));
// → true