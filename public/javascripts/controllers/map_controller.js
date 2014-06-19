ApplicationController.controller('mapController', ['$scope', '$http', 'map',
  function ($scope, $http, map) {
    // will be based on geolocation
    var options = {
      viewType: "Hybrid",
      latitude: 37.774546,
      longitude: -122.433523
    }
    map.initializeLayout(options)
  }
]);




