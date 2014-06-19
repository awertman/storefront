storefront.factory('business', ['map', function (map) {
  content = {
    geo: [],
    details: [],
    queryParams: {},
    initializeGoogleMapsQuery: function(inputs) {
      this.queryParams = inputs ||  this.queryParams
      var request = {
        bounds: map.canvas.getBounds(),
        keyword: this.queryParams.businessType
      }
      map.service.radarSearch(request, this.googleMapsCallBack.bind(this));
    },
    googleMapsCallBack: function(data, status) {
      if (status != google.maps.places.PlacesServiceStatus.OK) {
        alert(status);
        return;
      }
      this.buildGeoLocations(data)
      map.layer.heatMap.render(map.canvas, this)
    },
    buildGeoLocations: function(data) {
      if (data) {
        this.geo = []
        for (var i in data) {
          this.geo.push(data[i].geometry.location)
        }
      }
    }
  }
  return content
}])
