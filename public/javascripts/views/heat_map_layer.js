storefront.factory('heatMap', [function() {
  content = {
    layer: new google.maps.visualization.HeatmapLayer({ data: [] }),
    options: {
      radius: [5,10,15,20,25]
    },
    render: function(mapCanvas,locations) {
      this.layer.setMap(null)

      var pointArray = new google.maps.MVCArray(locations.geo)
      this.layer = new google.maps.visualization.HeatmapLayer({ data: pointArray })
      this.layer.setMap(mapCanvas);

      google.maps.event.addListenerOnce(mapCanvas, 'bounds_changed', locations.initializeGoogleMapsQuery.bind(locations) )
    },
    toggle: function(mapCanvas) {
      this.layer.setMap(this.layer.getMap() ? null : mapCanvas)
    },
    changeRadius: function(radius) {
      this.layer.set('radius', radius);
    },
    changeGradient: function() {
      var gradient = [
        'rgba(0, 255, 255, 0)',
        'rgba(0, 255, 255, 1)',
        'rgba(0, 191, 255, 1)',
        'rgba(0, 127, 255, 1)',
        'rgba(0, 63, 255, 1)',
        'rgba(0, 0, 255, 1)',
        'rgba(0, 0, 223, 1)',
        'rgba(0, 0, 191, 1)',
        'rgba(0, 0, 159, 1)',
        'rgba(0, 0, 127, 1)',
        'rgba(63, 0, 91, 1)',
        'rgba(127, 0, 63, 1)',
        'rgba(191, 0, 31, 1)',
        'rgba(255, 0, 0, 1)'
      ]

      this.layer.set('gradient', this.layer.get('gradient') ? null : gradient);
    }
  }
  return content
}])







