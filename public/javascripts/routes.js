var storefront = angular.module('storefront', [
  'ngRoute',
  'ApplicationController'
]);

storefront.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/index.html',
        controller: 'indexController'
      }).
      when('/locations', {
        templateUrl: 'partials/locations.html',
        controller: 'locationsController'
      }).
      when('/locations/:locationId', {
        templateUrl: 'partials/location-detail.html',
        controller: 'locationController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);