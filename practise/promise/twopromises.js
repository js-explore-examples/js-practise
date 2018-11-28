console.log('started');

const p1 = Promise.resolve(2);
const p2 = Promise.resolve(3);

function setMultiplication(factor){
    let n = factor;
    return (x) => 
    { 
        console.log(`new value ${n*x}`);
         return n*x;
    }
}



p1
.then(setMultiplication(2))
.then(setMultiplication(2))
.catch(console.error)

p2
.then(setMultiplication(3))
.then(setMultiplication(3))
.catch(console.error)


multiply = setMultiplication(2);

multiply(1)
multiply(1)
multiply(1)

console.log('end of file')
