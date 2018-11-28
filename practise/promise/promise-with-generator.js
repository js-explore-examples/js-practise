const request = require('./value-request');

const thunk = function () {

}

const run = function (gen) {
    var args = [].slice.call(arguments, 1),
        it,
        it = gen.apply(this, args);
    return Promise.resolve().then(
        function handleNext(value) {
            var next = it.next(value);
            return (function handleResult(next) {
                if (next.done) {
                    return next.value;
                } else {
                    return Promise.resolve(next.value).then(handleNext, function handleError(err) {
                        it.throw(err);
                    }).then(handleResult)
                }
            })(next);
        })
}

function* foo() {
    var v1 = yield request(2);
    var v2 = yield request(3);
    console.log(v1, v2);
}

const {
    log
} = console;
// const it = foo();
// const p1 = it.next();

run(foo);