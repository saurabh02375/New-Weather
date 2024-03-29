const cityName = document.getElementById('cityName');
const cloud_pct = document.getElementById('cloud_pct');
const wind_speed = document.getElementById('wind_speed');
const temp = document.getElementById('temp');
const feels_like = document.getElementById('feels_like');
const humidity = document.getElementById('humidity');
const min_temp = document.getElementById('min_temp');
const max_temp = document.getElementById('max_temp');
const wind_degrees = document.getElementById('wind_degrees');
const sunrise = document.getElementById('sunrise');

const getWeather = (city) => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e29e35f3ed94880b43b860999db348d4`)
      .then(response => response.json())
      .then((response) => {
          console.log(response);
          cityName.innerHTML = city;
          cloud_pct.innerHTML = response.clouds.all;
          wind_speed.innerHTML = response.wind.speed;
          // Convert temperature from Kelvin to Celsius
          temp.innerHTML = (response.main.temp - 273.15).toFixed(2); // Adjusted here
          feels_like.innerHTML = (response.main.feels_like - 273.15).toFixed(2); // Adjusted here
          humidity.innerHTML = response.main.humidity;
          min_temp.innerHTML = (response.main.temp_min - 273.15).toFixed(2); // Adjusted here
          max_temp.innerHTML = (response.main.temp_max - 273.15).toFixed(2); // Adjusted here
          wind_degrees.innerHTML = response.wind.deg;
          sunrise.innerHTML = new Date(response.sys.sunrise * 1000).toLocaleTimeString();
      })
      .catch(err => console.error(err));
}


document.getElementById("searchForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const city = document.getElementById("city").value;
    getWeather(city);
});

// Initial call with default city
getWeather("Jaipur");
