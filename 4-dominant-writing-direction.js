const SCRIPTS = require('./includes/scripts.js');

require('./includes/scripts.js') // include the scripts used by the chapter

// console.log(characterScript());
function dominantDirection(text) {
  let textArray = [];
  for (i = 0; i < text.length; i++) {
    textArray.push(text.codePointAt(i));
  }
  let directionArray = [];
  for (i of textArray) {
    for (let script of SCRIPTS) {
      if (script.ranges.some(([from, to]) => {
        return i >= from && i < to;
      })) {
        directionArray.push(script.direction);
      }
    }
  }
  return directionArray


  // for(script of SCRIPTS){

  // }

}



console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl