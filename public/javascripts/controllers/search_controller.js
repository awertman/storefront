ApplicationController.controller('searchController', ['$scope', '$http', 'locations', 'map',
  function ($scope, $http, locations, map) {
    $scope.query = {}

    $scope.submitForm = function() {
      $http.post('/locations', {data:
        { location: $scope.query.location,
          businessType: $scope.query.businessType,
          price: $scope.query.price}
        })
      .success(function(data) {
        locations.buildGoogleMapObjects(data.locations);
        map.renderVisualizations()
      });
    };

    console.log("inside search controller")
  }
]);


