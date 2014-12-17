/* 
 * MapIt - Storage
 * @author:   Damien Roche
 * @created:  30/11/2014
 * 
 * Copyright (C) 2014 Damien Roche
 * All rights reserved.
 *
 */

 //store.set('username', 'damien');
 // Save
$(function(){ 
  
  var first_run = store.get('first_run');
  if (typeof(first_run) == 'undefined'){
    tblFav.row.add([location_NCIRL[0], location_NCIRL[1], favOptions]).draw();
  }

  $(document).on("click", "#btnSave", function (e){   
    var fav = [];
    var c = 0;
    tblFav.rows().data().each(function(r,i){
      fav[i] = {lat: r[0],lng: r[1]};
      c +=1;
    });
    store.set("mapit",{"locations":fav});
    alert("Saved " + c + " locations.");
  });

  // Load Any Stored Favourites
  store.getAll().mapit.locations.forEach(function(data,index){
    var x = tblFav.row.add([data.lat, data.lng, favOptions]).draw();
    markers[x[0]] = L.marker([data.lat, data.lng]).addTo(map);
  });

  store.set("first_run", false);

});