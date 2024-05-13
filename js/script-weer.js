// API-key voor OpenWeatherMap
const apiKey = 'e95f6238e67e138d818ca077aedb35d6';
    
// URL voor het weer in jouw stad (hier  als voorbeeld)
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Wilrijk&appid=${apiKey}&units=metric`;

// Haal weerinformatie op van de OpenWeatherMap API
fetch(apiUrl)
.then(response => response.json())
.then(data => {
    const weatherInfo = document.getElementById('weather-info');
    const weatherData = `
        <br>
        <p>Huidige temperatuur in Wilrijk: ${data.main.temp} °C</p>
        <p>Voelt aan als: ${data.main.feels_like} °C</p>
        <p>Minimale temperatuur: ${data.main.temp_min} °C</p>
        <p>Maximale temperatuur: ${data.main.temp_max} °C</p>
    `;
    weatherInfo.innerHTML = weatherData;
})
.catch(error => console.error('Er is een fout opgetreden bij het ophalen van weerinformatie:', error));