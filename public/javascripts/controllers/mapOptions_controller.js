ApplicationController.controller('mapOptionsController', ['$scope', '$http', 'mapOptions',
  function ($scope, $http, mapOptions) {
    console.log("inside map options controller")
    $scope.viewTypes = mapOptions.viewTypes
    $scope.viewType = $scope.viewTypes[0]

    $scope.mapTypes = mapOptions.mapTypes
    $scope.mapType = $scope.mapTypes[0]

    $scope.heatMapRadiusOptions = mapOptions.heatMapRadiusOptions
    $scope.heatMapRadius = mapOptions.heatMapRadiusOptions[0]

    $scope.mapOptions = mapOptions
  }
]);