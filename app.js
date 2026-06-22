function updateTime(){
const d=new Date();
document.getElementById('time').innerText =
d.toLocaleTimeString('de-DE',{hour:'2-digit',minute:'2-digit'});

document.getElementById('date').innerText =
d.toLocaleDateString('de-DE',{weekday:'long',day:'numeric',month:'long'});
}
setInterval(updateTime,1000);
updateTime();

if(navigator.geolocation){
navigator.geolocation.watchPosition(p=>{
if(p.coords.speed!=null){
document.getElementById('speed').innerText =
Math.round(p.coords.speed*3.6);
}
});
}

if(navigator.getBattery){
navigator.getBattery().then(b=>{
function up(){
document.getElementById('battery').innerText =
Math.round(b.level*100)+'%';
}
up();
b.addEventListener('levelchange',up);
});
}

window.addEventListener('deviceorientation',e=>{
if(e.alpha){
document.getElementById('compass').innerText =
Math.round(e.alpha)+'°';
}
});
