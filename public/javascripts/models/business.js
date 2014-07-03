storefront.factory('business', ['$rootScope', 'map', function ($rootScope,map) {
  content = {
    geo: [],
    details: [],
    queryParams: {},
    initializeGoogleMapsQuery: function(inputs) {
      this.queryParams = inputs ||  this.queryParams
      var request = {
        // bounds: map.canvas.getBounds(),
        location: map.canvas.getCenter(),
        keyword: this.queryParams.businessType,
        radius: 1000,
      }
      map.service.radarSearch(request, this.googleMapsCallBack.bind(this))
    },
    googleMapsCallBack: function(data, status) {
      if (status != google.maps.places.PlacesServiceStatus.OK) {
        alert(status);
        return;
      }
      this.buildGeoLocations(data)
    },
    buildGeoLocations: function(data) {
      console.log(data.length)
      this.details = data
      if (data) {
        this.geo = []
        for (var i in data) {
          this.geo.push(data[i].geometry.location)
        }
      }
      $rootScope.$broadcast("businessLocationsCompleted")
    }
  }
  return content
}])
