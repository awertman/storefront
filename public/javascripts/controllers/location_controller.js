ApplicationController.controller('locationController', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.locationId = $routeParams.locationId;

  }
]);