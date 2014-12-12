/* 
 * MapIt - UI
 * @author:   Damien Roche
 * @created:  30/11/2014
 * 
 * Copyright (C) 2014 Damien Roche
 * All rights reserved.
 */




$(function(){


  $(document).on("click", ".btnShowApp", function() { $(this).fadeOut("slow"); } );


  var favOptions = "<a class='btn btn-primary btn-large btnRemoveFavourite' href='#''>Remove</a>"

  // Toggle Console visibility
  $(document).on("click", "#btnAddFavourite", function(e){
    var lat = $("#lat").val();
    var lng = $("#lng").val();
    $("#tblFavourites tbody").append("<tr><td>"+lat+"</td><td>"+lng+"</td><td>"+favOptions+"</td></tr>");
  });

  $(document).on("click", ".btnRemoveFavourite", function(e){
    $(this).closest ('tr').remove();
  });


  $(document).on("click", ".btnShareLocation", function(e){
    getLocation();
  });



});

