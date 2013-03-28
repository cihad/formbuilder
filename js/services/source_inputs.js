FB.factory('sourceInputs', function($http) {

  var service = {};
  var inputs = [];

  service.url = 'source_inputs.json';

  service.async = function() {
    $http.get(service.url).success(function (data) {
      for(var i = 0; i < data.length; i++){
      	data[i]['show'] = false;
        inputs.push(data[i]);
      }
    });
  };

  service.inputs = function() {
    return inputs;
  }

  return service;

});