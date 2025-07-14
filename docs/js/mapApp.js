const map = L.map('map').setView([16.53, -92.45], 7);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//Marcadores
const markerChiapaCorzo = L.marker([16.708171,-93.016658]).addTo(map);
const markerVillaFlores = L.marker([16.235208,-93.267259]).addTo(map);
const markerVillaCorzo = L.marker([16.185083,-93.268279]).addTo(map);
const markerLaConcordia = L.marker([16.116043,-92.688880]).addTo(map);
const markerSocoltenango = L.marker([16.242937,-92.350305]).addTo(map);
const markerSuchiapa = L.marker([16.623211,-93.102707]).addTo(map);
const markerComitan = L.marker([16.252302,-92.135596]).addTo(map);

//Circulo
// let circle = L.circle([16.754118,-93.137785],{
//     color:'purple',
//     fillColor:'lightblue',
//     fillOpacity:0.4,
//     radius:8000
// }).addTo(map)

//Eventos de click
markerChiapaCorzo.bindPopup("<b>Chiapa de Corzo</b><br>Aquí hay fósiles.");
markerVillaFlores.bindPopup("<b>VillaFlores</b><br>Aquí hay fósiles.");
markerVillaCorzo.bindPopup("<b>Villa Corzo</b><br>Aquí hay fósiles.");
markerLaConcordia.bindPopup("<b>La concordia</b><br>Aquí hay fósiles.");
markerSocoltenango.bindPopup("<b>Socoltenango</b><br>Aquí hay fósiles.");
markerSuchiapa.bindPopup("<b>Suchiapa</b><br>Aquí hay fósiles.");
markerComitan.bindPopup("<b>Comitán</b><br>Aquí hay fósiles.");
