storefront.factory('realEstate', ['map', function (map) {
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
      map.layer.marker.render(map.canvas, this.geo)
    }
  }
  return content
}])
