const regionSelect = document.getElementById("region");
const weatherContainer = document.getElementById("weather-container");

const API_KEY = "YOUR_OPENWEATHER_API_KEY"; 

for (const region in regionCities) {
  const option = document.createElement("option");
  option.value = region;
  option.textContent = region;
  regionSelect.appendChild(option);
}

regionSelect.addEventListener("change", async () => {
  const region = regionSelect.value;
  if (!region) return;

  weatherContainer.innerHTML = "";

  for (const city of regionCities[region]) {
    const weatherData = await fetchWeather(city);
    if (!weatherData) {
      const card = document.createElement("div");
      card.className = "weather-card";
      card.innerHTML = `
        <h2>${city}</h2>
        <p style="color:red;">Weather data not available.</p>
      `;
      weatherContainer.appendChild(card);
      continue;
    }
    const previousTemp = simulatePreviousWeather(city, weatherData.main.temp);

    const card = document.createElement("div");
    card.className = "weather-card";
    card.innerHTML = `
      <h2>${city}</h2>
      <p><strong>Now:</strong> ${weatherData.main.temp}°C</p>
      <p><strong>Yesterday:</strong> ${previousTemp}°C</p>
      <p><strong>Condition:</strong> ${weatherData.weather[0].description}</p>
      <img src="https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png" alt="weather icon"/>
    `;
    weatherContainer.appendChild(card);
  }
});

async function fetchWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},PH&appid=${API_KEY}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`City not found: ${city}`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error fetching weather:", err);
    return null;
  }
}

function simulatePreviousWeather(city, currentTemp) {
  const key = `weather_${city}`;
  const previous = localStorage.getItem(key);
  localStorage.setItem(key, currentTemp);
  return previous || (currentTemp - 1).toFixed(1);
}