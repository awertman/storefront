ApplicationController.controller('mapController', ['$scope', '$http', 'map',
  function ($scope, $http, map) {
    // will be based on geolocation
    var options = {
      // mapTypeId: "ROADMAP",
      latitude: 37.774546,
      longitude: -122.433523
    }
    map.initializeLayout(options)

    console.log("inside map controller")
  }
]);




