storefront.factory('marker', [function() {
  content = {
    icon: new google.maps.MarkerImage("http://maps.google.com/mapfiles/ms/icons/blue.png"),
    render: function(mapCanvas,locations) {
      for (var i in locations.geo) {
        new google.maps.Marker({
          position: locations.geo[i],
          map: mapCanvas,
          icon: this.icon,
          title:"Hello World!"
        });
      }
    }
  }
  return content
}])