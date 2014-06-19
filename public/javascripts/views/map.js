storefront.factory('map', ['$rootScope', 'heatMap', 'marker',  function ($rootScope, heatMap,marker) {
  content = {
    options: {
      viewTypes: [{name: "Hybrid"}, {name: "Roadmap"}, {name: "Satellite"}, {name: "Terrain"}],
      mapTypes: [{name: "heatmap"},{name: "clickable map"},{name: "tiles"}]
    },
    selection: {
      zoom: 13,
      center: {},
      mapTypeId: google.maps.MapTypeId.HYBRID
    },
    layer: {
      heatMap: heatMap,
      marker: marker
    },
    canvas: "layout",
    service: "service",
    initializeLayout: function(inputs) {
      this.selection.zoom = inputs.zoom || this.selection.zoom
      this.selection.center = new google.maps.LatLng(inputs.latitude, inputs.longitude)
      this.selection.mapTypeId = this.setMapType(inputs.viewType) || this.selection.mapTypeId

      this.canvas = new google.maps.Map(document.getElementById('map-canvas'), this.selection)
      this.service = new google.maps.places.PlacesService(this.canvas)
    },
    setMapType: function(type) {
      if (type == "Hybrid") {
        return google.maps.MapTypeId.HYBRID
      }
      if (type == "Roadmap") {
        return google.maps.MapTypeId.ROADMAP
      }
    },
    renderLayers: function(locations) {
      this.layer.heatMap.render(this.canvas, locations.business)
      this.layer.marker.render(this.canvas, locations.realEstate)
    },
    refreshLayout: function(inputs) {
      var options = {
        viewType: inputs.viewType.name,
        latitude: this.canvas.getCenter().k,
        longitude: this.canvas.getCenter().A
      }
      this.initializeLayout(options)
      $rootScope.$broadcast("mapTypeChanged")
    }
  }
  return content
}])