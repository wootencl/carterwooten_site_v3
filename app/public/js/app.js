(function(app) {
  document.addEventListener('DOMContentLoaded', function() {
    $(document).foundation();
    ng.platformBrowserDynamic.bootstrap(app.AppComponent);
  });
})(window.app || (window.app = {}));