FB.directive('viewInput', function($document, $timeout, $http, $compile, $templateCache) {

  var linker = function(scope, element, attrs) {

    var type = scope.input.type,
        timestamp = scope.input.timestamp;

    var template =
      '<div class="conf-btn">' +
        '<button conf-popup input="input" class="btn btn-mini">conf</button>' +
        '<div class="popover conf-popover left" ng-form="form'+ timestamp +'">' +
          '<div class="arrow"></div>' +
          '<div class="popover-inner">' +
            '<h3 class="popover-title" ng-bind="input.name"></h3>' +
            '<div class="popover-content" ng-include src="\'template/inputs/' + type + '/conf.html\'">' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div ng-class="warningClass(form' + timestamp + ')" id="' + timestamp + '_input" ng-include src="\'template/inputs/' + scope.input.type + '/input.html\'" >' +
      '</div>';

    var tooltip = $compile( template )( scope );

    element.after(tooltip);

    $timeout(function(){
      $('#'+type).effect("transfer", { to: '#'+timestamp+'_input' }, 400);
    });

    function show() {
      tooltip.show();
      element.addClass('active');
      scope.isOpen = true;
    };

    function hide() {
      $document.unbind('click', hide);
      tooltip.hide();
      element.removeClass('active');
      scope.isOpen = false;
    };

    element.find('button').bind('click', function(event) {
      event.preventDefault();
      scope.isOpen ? hide() : show();
    });

  };

  return {
    restrict: 'EA',
    scope: { input: '=' },
    link: linker,
    controller: function($scope) {
      $scope.warningClass = function (form) {
        if (form.$invalid) {
          return 'invalid';
        } else {
          return 'valid';
        }
      }
    }
  }

});