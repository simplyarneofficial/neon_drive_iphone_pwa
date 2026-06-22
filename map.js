
let map, marker, routeLine;

map = L.map('map').setView([52.52, 13.405], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19
}).addTo(map);

marker = L.marker([52.52, 13.405]).addTo(map);

navigator.geolocation.watchPosition(pos => {
  const lat = pos.coords.latitude;
  const lon = pos.coords.longitude;
  const speed = Math.round((pos.coords.speed||0)*3.6);

  document.getElementById("speed").innerText = speed;

  marker.setLatLng([lat, lon]);
  map.setView([lat, lon]);
});

async function route() {
  const query = document.getElementById("search").value;

  const geo = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${query}`)
    .then(r => r.json());

  if (!geo[0]) return;

  const dest = geo[0];

  const start = marker.getLatLng();

  const url = `https://router.project-osrm.org/route/v1/driving/${start.lng},${start.lat};${dest.lon},${dest.lat}?overview=full&geometries=geojson`;

  const data = await fetch(url).then(r => r.json());

  const coords = data.routes[0].geometry.coordinates.map(c => [c[1], c[0]]);

  if (routeLine) map.removeLayer(routeLine);

  routeLine = L.polyline(coords, {color:'#0ff'}).addTo(map);

  map.fitBounds(routeLine.getBounds());
}
