function myajax(url) {
  const ajaxRequest = new XMLHttpRequest();
  ajaxRequest.onreadystatechange = function() {
    if (ajaxRequest.readyState === XMLHttpRequest.DONE) {
      console.log(JSON.parse(this.response));
    }
  };
  ajaxRequest.open("GET", url, true);
  ajaxRequest.send();
}

module.exports = myajax;
