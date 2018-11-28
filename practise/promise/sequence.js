console.log('started');

const p = Promise.resolve(2);
function multiply(x){
    console.log(`new value ${2*x}`);
    return 2*x;
}


p
.then(multiply)
.then(multiply)

multiply(1)
multiply(1)
multiply(1)

console.log('end of file')
