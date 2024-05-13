  // API-key voor OpenWeatherMap
  const apiKey = 'e95f6238e67e138d818ca077aedb35d6';

  // URL voor het weer in jouw stad (hier Rwanda als voorbeeld)
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Rwanda&appid=${apiKey}&units=metric`;

  // Haal weerinformatie op van de OpenWeatherMap API
  fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
      const weatherInfo = document.getElementById('temperatuur');
      const weatherData = `
          <br>
          <p> ${data.main.temp} °C</p>
      `;
      weatherInfo.innerHTML = weatherData;
  })
  .catch(error => console.error('Er is een fout opgetreden bij het ophalen van weerinformatie:', error));