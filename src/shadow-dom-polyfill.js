(function() {
  if (window.WebKitShadowRoot)
    return;

  var scripts = document.querySelectorAll('script[src]');
  var path = scripts[scripts.length - 1].src.replace(/\/[^/]*$/, '') +
      '/../../toolkitchen/polyfills/ShadowDOM/';
  [
    'map.js',
    'sidetable.js',
    'domreflectionutils.js',
    'domoverrides.js',
    'paralleltrees.js',
    'ShadowRoot.js'
  ].forEach(function(fileName) {
    document.write('<script src="' + path + fileName + '"></script>');
  });

  // document.write('<script>window.WebKitShadowRoot = window.JsShadowRoot;</script>');

  Object.defineProperty(window, 'WebKitShadowRoot', {
    get: function() {
      return JsShadowRoot;
    }
  });
  window.WebKitMutationObserver = window.MutationObserver;

})();