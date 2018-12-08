var displayCoords = document.getElementById("msg");
var lat, long;

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    displayCoords.innerHTML = "Geolocation API not supported by your browser.";
  }
}

function showPosition(position) {
  lat = position.coords.latitude;
  long = position.coords.longitude;
  displayCoords.innerHTML = "Latitude: " + lat + "<br />Longitude: " + long;
}
