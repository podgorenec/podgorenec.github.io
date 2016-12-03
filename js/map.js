var loc_post = {title: "Подгоренский Почтамт", loc: {lat: 50.402026, lng: 39.636019}};
var loc_red = {title: "Редакция газеты \"Подгоренец\"", loc: {lat: 50.401950, lng: 39.636963}};


var map;        
var myCenter=new google.maps.LatLng(loc_post.loc);
var marker=new google.maps.Marker({
    position:myCenter,
    title: loc_post.title,
    label: "P"
});


function getPost() {

}

function initialize() {
  var mapProp = {
      center:myCenter,
      zoom: 17,
      draggable: true,
      scrollwheel: true,
      mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  
  map=new google.maps.Map(document.getElementById("map-canvas"),mapProp);
  marker.setMap(map);
    
  google.maps.event.addListener(marker, 'click', function() {
      
    infowindow.setContent(contentString);
    infowindow.open(map, marker);
    
  }); 
};
google.maps.event.addDomListener(window, 'load', initialize);

google.maps.event.addDomListener(window, "resize", resizingMap());

$('#myMapModal').on('show.bs.modal', function() {
   //Must wait until the render of the modal appear, thats why we use the resizeMap and NOT resizingMap!! ;-)
   resizeMap();
})

function resizeMap() {
   if(typeof map =="undefined") return;
   setTimeout( function(){resizingMap();} , 400);
}

function resizingMap() {
   if(typeof map =="undefined") return;
   var center = map.getCenter();
   google.maps.event.trigger(map, "resize");
   map.setCenter(center); 
}

