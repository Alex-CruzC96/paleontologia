const map = L.map('map').setView([16.53, -92.45], 8);
//Botones que activan los marcadores por especie
const buttons = document.querySelectorAll('.specie_button');

//Capa de OpenStreetMap
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//Capa de marcadores dinámicos
const markersLayer = L.layerGroup().addTo(map);

//Marcadores
// const markerChiapaCorzo = L.marker([16.708171,-93.016658]).addTo(markersLayer);
// const markerVillaFlores = L.marker([16.235208,-93.267259]).addTo(markersLayer);
// const markerVillaCorzo = L.marker([16.185083,-93.268279]).addTo(markersLayer);
// const markerLaConcordia = L.marker([16.116043,-92.688880]).addTo(markersLayer);
// const markerSocoltenango = L.marker([16.242937,-92.350305]).addTo(markersLayer);
// const markerSuchiapa = L.marker([16.623211,-93.102707]).addTo(markersLayer);
// const markerComitan = L.marker([16.252302,-92.135596]).addTo(markersLayer);
// const markerIxtapa = L.marker([16.803190,-92.904648]).addTo(markersLayer);

//Marcadores de Venado cola blanca
const markersVenados = [
    {'location': [16.759483,-93.105880],'town_name':'Tuxtla Gutierrez'}
]

//Mapeo de los marcadores
const markerMap = {
    markersVenados
}

//Eventos de click
// markerChiapaCorzo.bindPopup("<b>Chiapa de Corzo</b><br>Aquí hay fósiles.");
// markerVillaFlores.bindPopup("<b>VillaFlores</b><br>Aquí hay fósiles.");
// markerVillaCorzo.bindPopup("<b>Villa Corzo</b><br>Aquí hay fósiles.");
// markerLaConcordia.bindPopup("<b>La concordia</b><br>Aquí hay fósiles.");
// markerSocoltenango.bindPopup("<b>Socoltenango</b><br>Aquí hay fósiles.");
// markerSuchiapa.bindPopup("<b>Suchiapa</b><br>Aquí hay fósiles.");
// markerComitan.bindPopup("<b>Comitán</b><br>Aquí hay fósiles.");
// markerIxtapa.bindPopup("<b>Ixtapa</b><br>Aquí hay fósiles.");

//Botones de especies
buttons.forEach(button => {
    button.addEventListener('click',(b)=>{
        let markerName = b.target.dataset.markers;
        let markers = markerMap[markerName];
        addMarkersToMap(markers);
    })
});

//Funciones
function addMarkersToMap(markers){
    clearMarks(); // Limpia antes de agregar nuevos
    markers.forEach(marker => {
        L.marker(marker.location).addTo(map).bindPopup(`<b>${marker.town_name}</b>`);
    })
}

function clearMarks(){
    markersLayer.clearLayers();
}