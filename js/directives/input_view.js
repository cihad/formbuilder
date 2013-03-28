FB.directive('inputView', function($timeout, $templateCache, $compile) {
  var linker = function(scope, element, attrs) {
    var input = scope.input;
    var viewHtml = $templateCache.get(input.type + '_input');
    var template = angular.element(viewHtml);
    $compile(template)(scope);
    element.html(template);

    $timeout(function(){
      $('#'+input.type).effect("transfer", { to: '#'+input.timestamp+'_input' }, 400);
    });

  };

  return {
    replace: true,
    link: linker,
    scope: { input: '=' },
    controller: function($scope) {
      $scope.warningClass = function(form) {
        var warningClass;

        if (form.$invalid){
          warningClass = 'warning'
        }

        return 'warningClass';
      }
    },
  }
});