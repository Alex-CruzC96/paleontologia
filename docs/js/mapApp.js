var map = L.map('map').setView([16.53, -92.45], 7);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//Marcadores
let marker = L.marker([16.754118,-93.137785]).addTo(map);

//Circulo
let circle = L.circle([16.754118,-93.137785],{
    color:'purple',
    fillColor:'lightblue',
    fillOpacity:0.4,
    radius:8000
}).addTo(map)

//Eventos de click
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");