let video_container = document.getElementsByClassName("video")[0];
let video = video_container.getElementsByTagName("video")[0];
video.scr = "./videos/kp.m4v"



//javascript.js
//set map options
var myLatLng = { lat: 21.163666448281027, lng: 79.08063685142059 };
var mapOptions = {
  center: myLatLng,
  zoom: 19,
  mapTypeId: google.maps.MapTypeId.ROADMAP,
};

//create map
var map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);

//create a DirectionsService object to use the route method and get a result for our request
var directionsService = new google.maps.DirectionsService();

//create a DirectionsRenderer object which we will use to display the route
var directionsDisplay = new google.maps.DirectionsRenderer();

//bind the DirectionsRenderer to the map
directionsDisplay.setMap(map);

//define calcRoute function
function getInfo() {
  document.getElementsByClassName("form")[0].classList.add("anim");
  document.getElementById("disabled_drop_point").selectedIndex =
    document.getElementById("drop_point").selectedIndex;

  show_loader();

  //create request
  console.log({
    lat: parseFloat(document.getElementById("drop_point").value.split(",")[0]),
    lng: parseFloat(document.getElementById("drop_point").value.split(",")[1]),
  });
  var request = {
    origin: document.getElementById("starting_point").value,
    destination: {
      lat: parseFloat(
        document.getElementById("drop_point").value.split(",")[0]
      ),
      lng: parseFloat(
        document.getElementById("drop_point").value.split(",")[1]
      ),
    },
    travelMode: google.maps.TravelMode.DRIVING, //WALKING, BYCYCLING, TRANSIT
    unitSystem: google.maps.UnitSystem.IMPERIAL,
  };

  //pass the request to the route method
  directionsService.route(request, function (result, status) {
    hide_loader();

    if (status == google.maps.DirectionsStatus.OK) {
      //display route
      document.getElementsByClassName("form")[0].classList.add("anim");
      document.getElementById("time").value =
        result.routes[0].legs[0].duration.text;
      document.getElementById("distance").value =
        result.routes[0].legs[0].distance.text;
      directionsDisplay.setDirections(result);

      showVideo()

    } else {
      //delete route from map
      alert("Error");
      directionsDisplay.setDirections({ routes: [] });
      //center map in London
      map.setCenter(myLatLng);
    }
  });
}

function show_loader() {
  let loader = document.getElementsByClassName("loader")[0];
  loader.style.display = "flex";
}

function hide_loader() {
  let loader = document.getElementsByClassName("loader")[0];
  loader.style.display = "none";
}

function disableButtons() {
  let select_fields = document
    .getElementsByClassName("front")[0]
    .getElementsByTagName("select");
  let buttons = document
    .getElementsByClassName("front")[0]
    .getElementsByTagName("input");

  for (let index = 0; index < select_fields.length; index++) {
    select_fields[index].disabled = true;
  }

  for (let index = 0; index < buttons.length; index++) {
    buttons[index].disabled = true;
    buttons[index].style.cursor = "context-menu";
  }
}

function resetInfo() {
  document.getElementsByClassName("form")[0].classList.remove("anim");
  directionsDisplay.setDirections({ routes: [] });
}

function closeVideo(){
  video.pause();
  video_container.style.display = "none";
}

function showVideo(){
  video_container.style.display = "flex";

  if(document.getElementById("drop_point").value.split(",")[0] == "21.156210291693693" && document.getElementById("drop_point").value.split(",")[1] == 79.04582430489319){
    video.setAttribute("src","./videos/futala.mp4");
  }else if(document.getElementById("drop_point").value.split(",")[0] == "21.253301847860016" && document.getElementById("drop_point").value.split(",")[1] == 79.09597051755448){
    video.setAttribute("src","./videos/koradi.mp4");
  }else if(document.getElementById("drop_point").value.split(",")[0] == "21.152589967314746" && document.getElementById("drop_point").value.split(",")[1] == 79.08815838460711){
    video.setAttribute("src","./videos/railway.mp4");
  }else if(document.getElementById("drop_point").value.split(",")[0] == "21.17096542977004" && document.getElementById("drop_point").value.split(",")[1] == 79.0794172031066){
    video.setAttribute("src","./videos/pc.mp4");
  }else if(document.getElementById("drop_point").value.split(",")[0] == "21.15859729163341" && document.getElementById("drop_point").value.split(",")[1] == 79.0797263956006){
    video.setAttribute("src","./videos/buty.mp4");
  }else if(document.getElementById("drop_point").value.split(",")[0] == "21.185820669719774" && document.getElementById("drop_point").value.split(",")[1] == 79.11976519560137){
    video.setAttribute("src","./videos/automotive_square.mp4");
  }else if(document.getElementById("drop_point").value.split(",")[0] == "21.16093971883783" && document.getElementById("drop_point").value.split(",")[1] == 79.04097632721314){
    video.setAttribute("src","./videos/Kendrya.mp4");
  }else if(document.getElementById("drop_point").value.split(",")[0] == "21.15400326264866" && document.getElementById("drop_point").value.split(",")[1] == 79.08256503978062){
    video.setAttribute("src","./videos/kp.mp4");
  }else if(document.getElementById("drop_point").value.split(",")[0] == "21.162338781296505" && document.getElementById("drop_point").value.split(",")[1] == 79.06583795512496){
    video.setAttribute("src","./videos/jp.mp4");
  }else if(document.getElementById("drop_point").value.split(",")[0] == "21.09450142882753" && document.getElementById("drop_point").value.split(",")[1] == 79.06545663792882){
    video.setAttribute("src","./videos/airport.mp4");
  }
  
}


function redirectToMaps(){
    window.open("https://www.google.com/maps/dir/?api=1&destination="+ document.getElementById("drop_point").value.split(",")[0] +"," + document.getElementById("drop_point").value.split(",")[1])
}