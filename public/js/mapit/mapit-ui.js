/* 
 * MapIt - UI
 * @author:   Damien Roche
 * @created:  30/11/2014
 * 
 * Copyright (C) 2014 Damien Roche
 * All rights reserved.
 */

 

var tblFav;
var favOptions;
var markers = [];
$(function(){

  // Favourites Table
  tblOptions = { 
    "searching": false,
    "scrollY":        "200px",
    "scrollCollapse": true,
    "paging":         false,
    "columnDefs": [
      { "width": "20%", "targets": 0 }
    ]
  }
  
  tblFav = $('#tblFavourites').DataTable(tblOptions);

  $(document).on("click", ".btnShowApp", function() { $(this).fadeOut("slow"); } );


    favOptions = "<div class='btn-toolbar' role='toolbar' aria-label='options'>"
      favOptions += "<div class='btn-group glyphicon glyphicon-minus btnRemoveFavourite' href='#''></div>"
      favOptions += "<div class='btn-group glyphicon glyphicon-map-marker btnAddMarker' href='#''></div>"
      favOptions += "<div class='btn-group glyphicon glyphicon-eye-close btnHideMarker' href='#''></div>"
      favOptions += "</div>"
  
  // Add Fav
  $(document).on("click", "#btnAddFavourite", function(e){
    var lat = $("#lat").val();
    var lng = $("#lng").val();
    tblFav.row.add([lat, lng, favOptions]).draw();
  });


  // Remove Fav
  $(document).on("click", ".btnRemoveFavourite", function(e){
    row_index = tblFav.row( $(this).closest('tr') ).index();
    if ( markers[row_index] != 'undefined'){
      markers[row_index].setLatLng([-400,-400]);
    }
    tblFav.row( $(this).closest('tr') )
        .remove()
        .draw();
  });

  // Add marker for Fav
  $(document).on("click", ".btnAddMarker", function (e) {

    // Get the index in the table *unique id
    row_index = tblFav.row( $(this).closest('tr') ).index();

    d = tblFav.row(row_index).data();
    p = [d[0],d[1]];
    
    if ( typeof(markers[row_index]) == 'undefined') {
      markers[row_index] = L.marker(p).addTo(map);
    } else {
      markers[row_index].setLatLng(p);
    }
    map.panTo(p);

  });

  $(document).on("click", ".btnHideMarker", function (e){
    // Get the index in the table *unique id
    row_index = tblFav.row( $(this).closest('tr') ).index();
    if (markers[row_index] != 'undefined'){
      markers[row_index].setLatLng([-400,-400]);
    }
  });


  $(document).on("click", ".btnShareLocation", function(e){
    geoLocation = getLocation();
  });
  
  $(document).on("click", ".btnCenterLocation", function(e){
    map.panTo(geoLocation);
  });


  $(document).on("click", "#btnAbout", function (e){
    alert("MapIT created by Damien Roche Copyright (C) 2014 All rights reserved.");
  });


});

