FB.controller('Source', function($scope, $http, sourceInputs, targetInputs) {

  sourceInputs.async();

  $scope.inputs = sourceInputs.inputs();

  $scope.addInput = function(input) {
    var timestamp = new Date().getTime();
    var newInput = angular.copy(input);
    newInput['timestamp'] = timestamp;
    targetInputs.inputs().push(newInput);
  };

  $scope.message = { say: "This is from Source CTRL" };

});