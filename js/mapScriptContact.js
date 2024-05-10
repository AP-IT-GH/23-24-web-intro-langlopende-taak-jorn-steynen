/* In dit script plaats je de code om de kaart in de id apMap te tekenen,
* Gebruik hiervoor de documentatie op https://leafletjs.com/ 
* Verander in de code online alle "var" in "let".
*/
let map = L.map('contactMap').setView([51.252227783203125, 4.452301979064941], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 30,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


marker = L.marker([51.252227783203125, 4.452301979064941]).addTo(map);
