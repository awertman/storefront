storefront.factory('realEstate', ['$rootScope', function ($rootScope) {
  content = {
    geo: [],
    details: [],
    buildGeoLocations: function( geoData ) {
      if (geoData) {
        this.geo = []
        for ( var i in geoData ) {
          this.geo.push(new google.maps.LatLng( geoData[i].latitude, geoData[i].longitude) )
        }
      }
      $rootScope.$broadcast("realEstateLocationsCompleted")
    }
  }
  return content
}])
