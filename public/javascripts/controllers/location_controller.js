ApplicationController.controller('locationController', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.locationId = $routeParams.locationId;
    console.log("inside controller for params:" + $routeParams.locationId)
  }
]);