// Your code here.
function loop(value, test, update, body){
    let x =value;
    while(test(x)){
        body(x);
        x = update(x);
    }
}





loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1