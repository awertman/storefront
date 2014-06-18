storefront.factory('mapOptions', function() {
  options = {
    viewTypes: [{name: "hybrid"}, {name: "roadmap"}, {name: "satellite"}, {name: "terrain"}],
    mapTypes: [{name: "heatmap"},{name: "clickable map"},{name: "tiles"}],
    heatMapRadiusOptions: [5,10,15,20,25],
    changeMapType: function(selectedType) {
      console.log(selectedType)
    },
    toggleHeatMap: function() {

    }
  }
  return options
})
