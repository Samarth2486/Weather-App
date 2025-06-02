// Dummy weather data for testing
const sampleWeatherData = {
  Delhi: {
    temp: 32,
    humidity: 55,
    min_temp: 27,
    max_temp: 36,
    wind_speed: 10,
    wind_degrees: 80,
    sunrise: 1651668300, // Unix timestamps (for example)
    sunset: 1651711500,
  },
  Kasol: {
    temp: 18,
    humidity: 78,
    min_temp: 15,
    max_temp: 21,
    wind_speed: 5,
    wind_degrees: 190,
    sunrise: 1651670100,
    sunset: 1651713300,
  },
  Srinagar: {
    temp: 25,
    humidity: 60,
    min_temp: 20,
    max_temp: 30,
    wind_speed: 8,
    wind_degrees: 120,
    sunrise: 1651669200,
    sunset: 1651712400,
  },
  Amsterdam: {
    temp: 20,
    humidity: 65,
    min_temp: 16,
    max_temp: 22,
    wind_speed: 12,
    wind_degrees: 110,
    sunrise: 1651669200,
    sunset: 1651713000,
  },
  "New York": {
    temp: 28,
    humidity: 70,
    min_temp: 24,
    max_temp: 30,
    wind_speed: 14,
    wind_degrees: 100,
    sunrise: 1651672800,
    sunset: 1651716000,
  },
  Melbourne: {
    temp: 15,
    humidity: 55,
    min_temp: 12,
    max_temp: 18,
    wind_speed: 20,
    wind_degrees: 220,
    sunrise: 1651676400,
    sunset: 1651720200,
  },
  Mumbai: {
    temp: 33,
    humidity: 80,
    min_temp: 29,
    max_temp: 35,
    wind_speed: 9,
    wind_degrees: 85,
    sunrise: 1651666800,
    sunset: 1651709400,
  },
  Tokyo: {
    temp: 27,
    humidity: 60,
    min_temp: 23,
    max_temp: 29,
    wind_speed: 11,
    wind_degrees: 130,
    sunrise: 1651671000,
    sunset: 1651714200,
  },
  Shanghai: {
    temp: 26,
    humidity: 62,
    min_temp: 22,
    max_temp: 28,
    wind_speed: 13,
    wind_degrees: 140,
    sunrise: 1651669800,
    sunset: 1651713000,
  },
};

const formatTime = (unixSeconds) => {
  const date = new Date(unixSeconds * 1000);
  return `${date.getHours().toString().padStart(2, "0")}:${date
    .getMinutes()
    .toString()
    .padStart(2, "0")}`;
};

const getWeather = (city = "Delhi") => {
  const cityname = document.querySelector(".cityname");
  const temp = document.querySelector(".temp");
  const humidity = document.querySelector(".humidity");
  const min_temp = document.querySelector(".min_temp");
  const max_temp = document.querySelector(".max_temp");
  const wind_speed = document.querySelector(".wind_speed");
  const wind_degrees = document.querySelector(".wind_degrees");
  const sunrise = document.querySelector(".sunrise_time");
  const sunset = document.querySelector(".sunset_time");
  const daytime = document.querySelector(".day");

  cityname.innerHTML = city;

  if (!sampleWeatherData[city]) {
    alert("City data not available!");
    return;
  }

  const data = sampleWeatherData[city];

  temp.innerHTML = data.temp;
  humidity.innerHTML = data.humidity;
  min_temp.innerHTML = data.min_temp;
  max_temp.innerHTML = data.max_temp;
  wind_speed.innerHTML = data.wind_speed;
  wind_degrees.innerHTML = data.wind_degrees;

  sunrise.innerHTML = formatTime(data.sunrise);
  sunset.innerHTML = formatTime(data.sunset);

  const durationInMillis = data.sunset * 1000 - data.sunrise * 1000;
  const durationHours = Math.floor(durationInMillis / (1000 * 60 * 60));
  const durationMinutes = Math.floor(
    (durationInMillis % (1000 * 60 * 60)) / (1000 * 60)
  );
  daytime.innerHTML = `${durationHours
    .toString()
    .padStart(2, "0")}:${durationMinutes.toString().padStart(2, "0")}`;
};

document.getElementById("delhi").addEventListener("click", () => {
  getWeather("Delhi");
});

document.getElementById("kasol").addEventListener("click", () => {
  getWeather("Kasol");
});

document.getElementById("srinagar").addEventListener("click", () => {
  getWeather("Srinagar");
});

document.getElementById("submit").addEventListener("click", (e) => {
  e.preventDefault();
  const cityInput = document.getElementById("city");
  if (cityInput.value.trim() !== "") {
    getWeather(cityInput.value.trim());
  }
});

const fWeather = (city) => {
  const table = document.getElementById(city);
  if (!sampleWeatherData[city]) {
    table.innerHTML = `<th scope="row">${city}</th><td colspan="5">No data</td>`;
    return;
  }
  const data = sampleWeatherData[city];
  const htmlString = `
      <th scope="row">${city}</th>
      <td>${data.temp}</td>
      <td>${data.humidity}</td>
      <td>${data.min_temp}</td>
      <td>${data.max_temp}</td>
      <td>${data.wind_speed}</td>
    `;
  table.innerHTML = htmlString;
};

getWeather(); // Default on load
fWeather("Amsterdam");
fWeather("New York");
fWeather("Melbourne");
fWeather("Mumbai");
fWeather("Tokyo");
fWeather("Shanghai");
