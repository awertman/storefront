ApplicationController.controller('searchController', ['$scope', '$http', 'locations',
  function ($scope, $http, locations) {
    $scope.query = {}
    $scope.submitForm = function() {
      $http.post('/locations', { data:
          {
            location: $scope.query.location,
            businessType: $scope.query.businessType,
            price: $scope.query.price
          }
        })
      .success(function(data) {
        data = {businessParams: $scope.query, realEstateLocations: data.locations.realEstate}
        locations.initializeDataBuild(data)
      });
    };

  }
]);


