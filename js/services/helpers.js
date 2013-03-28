FB.factory('Helpers', function($compile, $templateCache) {

	var Helpers = {};

  Helpers.getTemplate = function(type, suffix) {
    return $templateCache.get(type + suffix);
  };

  Helpers.buildDom = function(html) {
    return angular.element(html);
  };

  Helpers.compile = function(dom, scope) {
    var linkFn = $compile(dom);
    linkFn(scope);
  };

  Helpers.compileInput = function(directiveScope, element) {
    var input = directiveScope.input;
    var input_html = this.getTemplate(input.type, '_input');
    var conf_html = this.getTemplate(input.type, '_conf');
    var html = '<div class="item">' +
      '<a href="#" class="show-conf">[conf]</a>' +
      input_html +
      '<div class="popover left">' +
        '<div class="arrow"></div>' +
        '<h3 class="popover-title">' + input.name + '</h3>' +
        '<div class="popover-content">' + 
        '<p>' + conf_html + '</p>' + 
        '</div>' +
      '</div>' +
    '</div>';
    var template = this.buildDom(html);

    this.compile(template, directiveScope);
    element.html(template);
  };

  Helpers.compileTemplate = function(directiveScope, element, templateSuffix) {
    var input = directiveScope.input;
    var html = this.getTemplate(input.type, templateSuffix);
    var template = this.buildDom(html);
    this.compile(template, directiveScope);
    element.html(template);
  };

  Helpers.equalHeights = function() {
    var targetHeight, sourceHeight;

    sourceHeight = $('#source .source-ins').outerHeight();
    targetHeight = $('#target .target-ins').outerHeight();

    if (sourceHeight < targetHeight) {
      $('#source .source-ins').outerHeight(targetHeight);
    } else {
      $('#target .target-ins').outerHeight(sourceHeight);
    }
  }
	
	return Helpers;
});