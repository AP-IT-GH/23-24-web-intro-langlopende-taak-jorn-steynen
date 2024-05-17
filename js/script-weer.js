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
        <table class="table table-bordered">
        <thead class="thead-dark">
          <tr>
            <th scope="col">LOCATIE: Wilrijk</th>
            <th scope="col"><i class="bi bi-thermometer-half"></i></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Effectieve temperatuur</td>
            <td>${data.main.temp} °C</td>
          </tr>
          <tr>
            <td>Voelt aan als</td>
            <td>${data.main.feels_like} °C</td>
          </tr>
          <tr>
            <td>Minimale temperatuur</td>
            <td>${data.main.temp_min} °C</td>
          </tr>
          <tr>
            <td>Maximale temperatuur</td>
            <td>${data.main.temp_max} °C</td>
          </tr>
        </tbody>
      </table>
    `;
    weatherInfo.innerHTML = weatherData;
})
.catch(error => console.error('Er is een fout opgetreden bij het ophalen van weerinformatie:', error));