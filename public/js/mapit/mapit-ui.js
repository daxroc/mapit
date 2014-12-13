/* 
 * MapIt - UI
 * @author:   Damien Roche
 * @created:  30/11/2014
 * 
 * Copyright (C) 2014 Damien Roche
 * All rights reserved.
 */



var tblFav;
$(function(){

  // Favourites Table
  tblOptions = { 
    searching: false,
    pagingType: "scrolling"
  }
  tblFav = $('#tblFavourites').DataTable(tblOptions);

  $(document).on("click", ".btnShowApp", function() { $(this).fadeOut("slow"); } );


  var favOptions = "<div class='btn-toolbar' role='toolbar' aria-label='options'>"
      favOptions += "<div class='btn-group glyphicon glyphicon-minus btnRemoveFavourite' href='#''></div>"
      favOptions += "<div class='btn-group glyphicon glyphicon-map-marker btnToggleFavourite' href='#''></div>"
      favOptions += "</div>"
  
  // Toggle Console visibility
  $(document).on("click", "#btnAddFavourite", function(e){
    var lat = $("#lat").val();
    var lng = $("#lng").val();
    //$("#tblFavourites tbody").append("<tr><td>"+lat+"</td><td>"+lng+"</td><td>"+favOptions+"</td></tr>");
    tblFav.row.add([lat, lng, favOptions]).draw();
  });

  $(document).on("click", ".btnRemoveFavourite", function(e){
    //$(this).closest ('tr').remove();
    tblFav.row( $(this).parents('tr') )
        .remove()
        .draw();
  });


  $(document).on("click", ".btnShareLocation", function(e){
    getLocation();
  });



});

