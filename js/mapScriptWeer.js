/* In dit script plaats je de code om de kaart in de id apMap te tekenen,
* Gebruik hiervoor de documentatie op https://leafletjs.com/ 
* Verander in de code online alle "var" in "let".
*/
let map = L.map('weerMap').setView([51.1700864, 4.3942577], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 30,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


var circle = L.circle([51.1700864, 4.3942577], {
    color: 'red',
    fillColor: '#dd611e',
    fillOpacity: 0.3,
    radius: 1500
}).addTo(map);
