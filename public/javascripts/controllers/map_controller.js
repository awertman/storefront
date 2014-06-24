ApplicationController.controller('mapController', ['$scope', '$http', 'map', 'locations',
  function ($scope, $http, map, locations) {
    // will be based on geolocation
    var options = {
      viewType: "Hybrid",
      latitude: 37.774546,
      longitude: -122.433523
    }

    map.initializeLayout(options)

    $scope.$on("businessLocationsCompleted", function(){
      map.layer.heatMap.render(map.canvas, locations.business)
    })

    $scope.$on("realEstateLocationsCompleted", function(){
      map.layer.marker.render(map.canvas, locations.realEstate)
    })

    $scope.$on("mapTypeChanged", function() {
      map.refreshLayers(locations)
    })

  }
]);




