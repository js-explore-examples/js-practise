let obj1 = {then : 2}
let obj2 = { then : function(){
return 2;
}}

function output(x){
 console.log(JSON.stringify(x))
}

const p1 = Promise.resolve(obj1);
p1.then(output);
const p2 = Promise.resolve(Promise.resolve(obj2));
p2.then(output);

const p3 = Promise.resolve(obj2.then());
p3.then(output);

console.log('EOF')
