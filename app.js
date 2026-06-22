let last = null;

function startNav() {
  navigator.geolocation.watchPosition(pos => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;

    const speed = pos.coords.speed ? Math.round(pos.coords.speed * 3.6) : 0;

    document.getElementById("speed").innerText = speed;

    updatePos(lat, lon);

    last = {lat, lon};
  }, err => {
    alert("GPS nicht erlaubt");
  }, {
    enableHighAccuracy:true
  });
}