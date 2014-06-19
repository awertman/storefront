storefront.factory('marker', [function() {
  content = {
    icon: new google.maps.MarkerImage("http://maps.google.com/mapfiles/ms/icons/blue.png"),
    render: function(mapCanvas,locations) {
      for (var i in locations) {
        new google.maps.Marker({
          position: locations[i],
          map: mapCanvas,
          icon: this.icon,
          title:"Hello World!"
        });
      }
    }
  }
  return content
}])