storefront.factory('map', ['heatMap', 'marker',  function (heatMap,marker) {
  content = {
    options: {
      viewTypes: [{name: "Hybrid"}, {name: "Roadmap"}, {name: "Satellite"}, {name: "Terrain"}],
      mapTypes: [{name: "heatmap"},{name: "clickable map"},{name: "tiles"}]
    },
    selection: {
      zoom: 13,
      center: "",
      mapTypeId: google.maps.MapTypeId.HYBRID //roadmap, satellite, terrain
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
    refreshLayout: function(inputs) {
      var options = {
        viewType: inputs.viewType.name,
        latitude: 37.774546,
        longitude: -122.433523
      }
      this.initializeLayout(options)
      // this.layer.heatMap.buildGeoLocations()

    }
  }
  return content
}])