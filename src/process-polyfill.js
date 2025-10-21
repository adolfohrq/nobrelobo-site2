// Polyfill para a variável process que o Next.js espera
window.process = window.process || {
  browser: true,
  env: {},
  version: '',
  nextTick: function(cb) {
    setTimeout(cb, 0);
  }
}; 