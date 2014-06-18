var map, pointarray, heatmap;

  function initializeHeatMap(mapsLatLngPoints) {
    var mapOptions = {
      zoom: 13,
      center: new google.maps.LatLng(37.774546, -122.433523),
      mapTypeId: google.maps.MapTypeId.HYBRID //roadmap, satellite, terrain
    }

    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions)

    var pointArray = new google.maps.MVCArray(mapsLatLngPoints) // mapsLatLngPoints comes from locations controller scope

    heatmap = new google.maps.visualization.HeatmapLayer({
      data: pointArray
    })

    heatmap.setMap(map);

    var myLatlng = new google.maps.LatLng(37.774546, -122.433523)
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title:"Hello World!"
    });
  }



function toggleHeatmap() {
  heatmap.setMap(heatmap.getMap() ? null : map);
}

function changeGradient() {
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
  heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
}

function changeRadius() {
  heatmap.set('radius', heatmap.get('radius') ? null : 20);
}


