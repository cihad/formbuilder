FB.controller('Target', function($scope, $http, Helpers, targetInputs) {

  targetInputs.async();

  $scope.inputs = targetInputs.inputs();

  $scope.warningClass = function () {
    console.log('yes');
  }
  
});