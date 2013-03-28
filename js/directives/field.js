FB.directive('field', function($timeout, Helpers) {
  var linker = function(scope, element, attrs) {
    var input = scope.input;

    Helpers.compileInput(scope, element);

    $timeout(function(){
      $('#'+input.type).effect("transfer", { to: '#'+input.timestamp+'_input' }, 400, callBack);
    });

    function callBack () {
      element.removeClass('noneVisible');
    }

    element.bind('mouseenter', function() {
      $(element).find('.show-conf').show();
    }).bind('mouseleave', function() {
      var show_conf_link = $(element).find('.show-conf');
      var popover = $(element).find('.popover');
      if (popover.css('display') != 'block') {
        show_conf_link.hide();
      }
    });

    $('.show-conf').click(function(e) {
      e.preventDefault();
      $(this).parent().find('.popover').toggle();
    });

  };

  return {
    restrict: 'E',
    replace: true,
    link: linker,
    scope: {
      input: '='
    }
  }
});