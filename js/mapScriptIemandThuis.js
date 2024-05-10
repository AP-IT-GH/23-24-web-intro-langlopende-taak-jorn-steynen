/* In dit script plaats je de code om de kaart in de id apMap te tekenen,
* Gebruik hiervoor de documentatie op https://leafletjs.com/ 
* Verander in de code online alle "var" in "let".
*/
let map = L.map('iemandThuisMap').setView([51.17561340332031, 4.393454074859619], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 30,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


marker = L.marker([51.17561340332031, 4.393454074859619]).addTo(map);

// benaming marker

marker.bindPopup("Thuis: Heistraat 237, 2610 Wilrijk").openPopup();