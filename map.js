let map, marker;

function initMap() {
  map = L.map('map').setView([52.52, 13.405], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19
  }).addTo(map);

  marker = L.marker([52.52, 13.405]).addTo(map);
}

function updatePos(lat, lon) {
  marker.setLatLng([lat, lon]);
  map.setView([lat, lon]);
}

initMap();