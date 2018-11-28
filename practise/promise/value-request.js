function fakeAjax(val, cb) {
  setTimeout(function() {
    cb(val);
  }, 100);
}

const resolve = Promise.resolve;

function request(val) {
  return new Promise(function(resolve, reject) {
    fakeAjax(val, resolve);
  });
}

module.exports = request;
