FB.directive('confPopup', function($document, $compile, $templateCache) {

  var linker = function(scope, element, attrs) {

    var confHtml = $templateCache.get(scope.input.type + '_conf');

    var template = 
      '<div class="popover conf-popover left" ng-form="form' + scope.input.timestamp + '">' +
        '<div class="arrow"></div>' +
        '<div class="popover-inner">' +
          '<h3 class="popover-title" ng-bind="input.name"></h3>' +
          '<div class="popover-content" ng-include src="\'/template/inputs/' + scope.input.type + '/conf.html\'">' +
            confHtml +
          '</div>' +
        '</div>' +
      '</div>';

    var tooltip = $compile( template )( scope );

    element.after(tooltip);

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

    element.bind('click', function(event) {
      event.preventDefault();
      scope.isOpen ? hide() : show();
    });

  };

  return {
    restrict: 'EA',
    scope: { input: '=' },
    link: linker
  }

});