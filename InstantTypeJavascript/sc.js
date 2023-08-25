(() => {
  const jsTextShow = document.getElementById('showVal'), jsTextInput = document.getElementById('inputText');
  if (jsTextInput.value.length === 0) {
    jsTextShow.innerHTML = 'Empty!';
  }
  jsTextInput.addEventListener('input', () =>{
    jsTextShow.setAttribute('data-text', jsTextInput.value);
    jsTextShow.innerHTML = jsTextShow.getAttribute('data-text');

    if (jsTextInput.value.length === 0) {
      jsTextShow.innerHTML = 'Empty.';
    }
  });

})();
