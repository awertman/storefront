storefront.factory('map', ['locations', function (locations) {
  map = {
    options: {
      zoom: 13,
      center: "",
      mapTypeId: google.maps.MapTypeId.HYBRID, //roadmap, satellite, terrain
      displayType: "heatmap"
    },
    layout: "google maps layout",
    initializeLayout: function(inputs) {
      this.options.zoom = inputs.zoom || this.options.zoom
      this.options.center = new google.maps.LatLng(inputs.latitude, inputs.longitude)
      this.options.mapTypeId = this.setMapType(inputs.mapTypeId) || this.options.mapTypeId

      this.layout = new google.maps.Map(document.getElementById('map-canvas'), this.options)
    },
    setMapType: function(type) {
      if (type == "HYBRID") {
        return google.maps.MapTypeId.HYBRID
      }
      if (type == "ROADMAP") {
        return google.maps.MapTypeId.ROADMAP
      }
    },
    renderVisualizations: function(displayType) {
      this.renderHeatMapLayer(locations.business)
      this.renderMarkers(locations.realEstate)
    },
    renderHeatMapLayer: function(locations) {
      var pointArray = new google.maps.MVCArray(locations)
      var heatmap = new google.maps.visualization.HeatmapLayer({ data: pointArray })
      heatmap.setMap(this.layout);
    },
    renderMarkers: function(locations) {
      var icon = new google.maps.MarkerImage("http://maps.google.com/mapfiles/ms/icons/blue.png")
      for (var i in locations) {
        new google.maps.Marker({
          position: locations[i],
          map: this.layout,
          icon: icon,
          title:"Hello World!"
        });
      }
    }
  }
  return map
}])


