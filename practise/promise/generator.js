function* get() {
    let x, y;
    try {
        x = (yield foo(10));
        console.log('x', x);
        y = (yield foo(20));
        console.log('y', y);
    } catch (err) {
        console.log(err);
    }
    return x + y;
}

function coroutine(g) {
    var it = g();
    return function () {
        return it.next.apply(it, arguments);
    }
}

function foo(data) {
    // console.log('d', data)
    setTimeout(function () {
        it(data);
    }, 1000);
    // const time = Math.random() % 100;
    // if (typeof cb === 'function') {
    //     setTimeout(cb.call(data), time)
    // } else {
    //     setTimeout(function () {
    //         return data;
    //     }, time)
    // }
}

var it = coroutine(get);
it();

//console.log(x, x.value);