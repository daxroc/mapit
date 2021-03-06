/* 
 * MapIt
 * @author:   Damien Roche
 * @created:  30/11/2014
 * 
 * Copyright (C) 2014 Damien Roche
 * All rights reserved.
 */

  var chordDecimalPlaces = 5;
  var location_NCIRL = [53.34873888, -6.24263226]
  var map = L.map('map').setView(location_NCIRL, 13);
  
  // Store Location
  var geoLocation = null;

  // Use browser geoLocation to get current location
  function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
  }

  function showPosition(position) {
    console.log("Latitude: " + position.coords.latitude + " Longitude: " + position.coords.longitude);
    geoLocation = [ position.coords.latitude.toFixed(chordDecimalPlaces), position.coords.longitude.toFixed(chordDecimalPlaces) ]
    var currentLocationMarker = L.marker(geoLocation).addTo(map);
    map.panTo(geoLocation);
  }


 $(function(){

    // Capture LatLng onClick event
    map.on('click', function(e) {
      var lat = e.latlng.lat.toFixed(chordDecimalPlaces);
      var lng = e.latlng.lng.toFixed(chordDecimalPlaces);
      $("#lat").val(lat);
      $("#lng").val(lng);
    });

    // Load tile layer
    L.tileLayer(
      'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
      maxZoom: 18
    }).addTo(map);



});
