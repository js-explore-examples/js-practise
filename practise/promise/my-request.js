// const resolve = Promise.resolve;

// function myajax(url) {
//   const ajaxRequest = new XMLHttpRequest();
//   ajaxRequest.onreadystatechange = function() {
//     if (ajaxRequest.readyState === XMLHttpRequest.DONE) {
//       resolve(JSON.parse(this.response));
//     }
//   };
//   ajaxRequest.open("GET", url, true);
//   ajaxRequest.send();
// }

// module.exports = myajax;
const log = console.log;
const promise = fetch("https://jsonplaceholder.typicode.com/todos/1");

// promise.then(response => log((window.test = response.body.getReader())));

// Retrieve its body as ReadableStream
promise
  .then(response => response.body)
  .then(body => {
    const reader = body.getReader();

    return new ReadableStream({
      start(controller) {
        return pump();

        function pump() {
          return reader.read().then(({ done, value }) => {
            // When no more data needs to be consumed, close the stream
            if (done) {
              controller.close();
              return;
            }

            // Enqueue the next data chunk into our target stream
            controller.enqueue(value);
            return pump();
          });
        }
      }
    });
  })
  .then(stream => new Response(stream))
  .then(response => response.blob())
  .then(blob => URL.createObjectURL(blob))
  .then(log)
  .catch(log);
