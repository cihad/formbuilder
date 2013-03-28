FB.factory('targetInputs', function($http) {

	var service = {};
  var inputs = [];

  service.url = 'target_inputs.json';

  service.async = function() {
    $http.get(service.url).success(function (data) {
      for(var i = 0; i < data.length; i++){
        inputs.push(data[i]);
      }
    });
  };

  service.inputs = function() {
    return inputs;
  }

  return service;
});