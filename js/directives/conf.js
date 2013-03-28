FB.directive('conf', function(Helpers) {
  return {
    restrict: 'E',
    replace: true,
    link: function(scope, element, attrs) {
      Helpers.compileTemplate(scope, element, '_conf');
    },
    scope: {
      input: '='
    }
  }
});