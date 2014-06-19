ApplicationController.controller('mapOptionsController', ['$scope', '$http', 'map',
  function ($scope, $http, map) {

    $scope.map = map

    $scope.currentMapType = map.options.mapTypes[0]
    $scope.currentViewType = map.options.viewTypes[0]
    $scope.currentRadius = map.layer.heatMap.options.radius[1]

  }
]);