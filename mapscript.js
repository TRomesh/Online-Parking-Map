var map;
function initMap() {

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 6.9271, lng: 79.8612},
    zoom: 15
  });

  var marker = new google.maps.Marker({
         position: myLatLng,
         map: map,
         title: 'Hello World!'
       });

}
