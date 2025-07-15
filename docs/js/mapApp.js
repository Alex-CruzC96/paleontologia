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

//Marcadores generales
const generalMarkers = [
    {'location':[16.708171,-93.016658],'town_name':'Chiapa de Corzo'},
    {'location':[16.235208,-93.267259],'town_name':'Villa Flores'},
    {'location':[16.185083,-93.268279],'town_name':'Villa Corzo'},
    {'location':[16.116043,-92.688880],'town_name':'La Concordia'},
    {'location':[16.242937,-92.350305],'town_name':'Socoltenango'},
    {'location':[16.623211,-93.102707],'town_name':'Suchiapa'},
    {'location':[16.252302,-92.135596],'town_name':'Comitán'},
    {'location':[16.803190,-92.904648],'town_name':'Ixtapa'}
]

//Marcadores de artiodáctilos
const markersVenados = [
    {'location': [16.759483,-93.105880],'town_name':'Tuxtla Gutierrez'}
]

const markersPecari = [
    {'location':[16.733590,-92.636900],'town_name':'San Cristóbal de las Casas'}
]

const markersBisonte = [
    {'location':[16.235115,-93.267251],'town_name':'Villa Flores'}
]

const markersCamello = [
    {'location':[16.185110,-93.268307],'town_name':'Villa Corzo'}
]

//Mapeo de los marcadores
const markerMap = {
    generalMarkers,
    markersVenados,
    markersPecari,
    markersBisonte,
    markersCamello
}

//Botones de especies evento de click

buttons.forEach(button => {
    button.addEventListener('click',()=>{
        let markerName = button.dataset.markers;
        let markers = markerMap[markerName];
        addMarkersToMap(markers);
    })
});

//Funciones
function addMarkersToMap(markers){
    clearMarks(); // Limpia antes de agregar nuevos
    markers.forEach(marker => {
        L.marker(marker.location).addTo(markersLayer).bindPopup(`<b>${marker.town_name}</b>`);
    })
}

function clearMarks(){
    markersLayer.clearLayers();
}