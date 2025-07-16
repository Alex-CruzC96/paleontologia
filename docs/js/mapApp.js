const map = L.map('map').setView([16.5562, -92.8107], 8);
//Botones que activan los marcadores por especie
const buttons = document.querySelectorAll('.specie_button');

//Capa de OpenStreetMap
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//Capa de marcadores dinámicos
const markersLayer = L.layerGroup().addTo(map);

//Recuadro de información sobre capas
const info = L.control({position:'topright'});

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

//Marcadores de roedores
const markersCapibara = [
    {'location':[16.118212,-92.694773],'town_name':'La Concordia'}
]

const markersReithrodontomys = [
    {'location':[16.541105,-92.896329],'town_name':'20 de Noviembre'}
]

const markersPeromyscus = [
    {'location':[16.555542,-92.802058],'town_name':'Acala'}
]

const markersSigmodon = [
    {'location':[16.683429,-93.729661],'town_name':'Cintalapa'}
]

const markersLyomis = [
    {'location':[16.762442,-93.375463],'town_name':'Ocozocoautla de Espinosa'}
]

//Marcadores de perisodáctilos
const markersEquusMexicanus = [
    {'location':[16.235060,-93.266967],'town_name':'Villa Flores'}
]

const markersEquusConversidens = [
    {'location':[16.185110,-93.268307],'town_name':'Villa Corzo'}
]

const markersHaringtonhippus = [
    {'location':[16.800313,-92.898876],'town_name':'Ixtapa'}
]

//Marcadores de proboscídeos
const markersMammuthus = [
    {'location':[16.703403,-93.003683],'town_name':'Chiapa de Corzo'}
]

const markersGonfoterio = [
    {'location':[16.116149,-92.688842],'town_name':'La concordia'}
]

//Marcadores de cingulados
const markersGliptodonte = [
    {'location':[15.764827,-92.264891],'town_name':'Chicomuselo'}
]

const markersArmadillo = [
    {'location':[16.148799,-94.092977],'town_name':'La gloria'}
]

//Mapeo de los marcadores
/**
 * ES NECESARIO MAPEAR LOS MARCADORES PARA QUE
 * SEA POSIBLE ACCEDER A ELLOS.
 */
const markerMap = {
    generalMarkers,
    markersVenados,
    markersPecari,
    markersBisonte,
    markersCamello,
    markersCapibara,
    markersReithrodontomys,
    markersPeromyscus,
    markersSigmodon,
    markersLyomis,
    markersEquusMexicanus,
    markersEquusConversidens,
    markersHaringtonhippus,
    markersMammuthus,
    markersGonfoterio,
    markersGliptodonte,
    markersArmadillo
}

//Botones de especies evento de click
buttons.forEach(button => {
    button.addEventListener('click',()=>{
        let markerName = button.dataset.markers;
        let markers = markerMap[markerName];
        addMarkersToMap(markers);
        resetMapView();
        updateInfo(button.dataset.specie);
    })
});

//Control de la información sobre capas
info.onAdd = function(map){
    this._div = L.DomUtil.create('div', 'info-map');
    this.update();
    return this._div;
}

info.update = function(specie){
    this._div.innerHTML = '<h4>Ubicación de fósiles</h4>' 
    + (specie ? (specie === 'generales' ? `<p>Ubicación de fósiles ${specie} encontrados</p>`:`<p>Ubicación de fósiles de ${specie} encontrados</p>`)
    :'Seleccione una especie');
}
info.addTo(map);

//Funciones
function addMarkersToMap(markers){
    clearMarks(); // Limpia antes de agregar nuevos

    //Agrega los marcadores a la capa de marcadores en el mapa
    markers.forEach(marker => {
        L.marker(marker.location).addTo(markersLayer).bindPopup(`<b>${marker.town_name}</b>`);
    })
    //Una vez agregados los marcadores  se les asigna un evento de click
    markersLayer.eachLayer((layer) => {
        layer.on('click',zoomToFeature);
    })
}

function clearMarks(){
    markersLayer.clearLayers();
}

function zoomToFeature(e){
    map.setView(e.target.getLatLng(),10);
}

function resetMapView(){
    map.setView([16.5562, -92.8107], 7);
}

function updateInfo(specie){
    info.update(specie)
}