
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
let SearchCollection=[]
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

          const img = document.getElementById('weatherIcon');

          if (parseFloat( temp.innerHTML) > 25) {
              img.src = "images/sun.png";
          } else {
              img.src = "images/cloudy.png";
          }
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


// const getSearch= (city) => {
//     fetch(`https://api.weatherapi.com/v1/search.json?key=717dabdcd13140cb9b162910232606&q=${city}`)
//         .then(response => response.json())
//         .then((response) => {
//              SearchCollection=[]
//              SearchCollection=response
//             console.log(response)})

//         .catch(err => console.error(err));
//   }

//   getSearch('Nep')


//   &*************************************************

const dropdown = document.getElementById("dropdown");

const getSearch = (city) => {
    fetch(`https://api.weatherapi.com/v1/search.json?key=717dabdcd13140cb9b162910232606&q=${city}`)
        .then(response => response.json())
        .then((response) => {
            const cities = response.map(city => city.name);
            updateDropdown(cities);
        })
        .catch(err => console.error(err));
}


const updateDropdown = (cities) => {
    dropdown.innerHTML = "";
    cities.forEach(city => {
        const link = document.createElement("a");
        link.textContent = city;
        link.href = "#";
        link.addEventListener("click", (e) => {
            e.preventDefault();
            document.getElementById("city").value = city;
            dropdown.classList.remove("show");
            getWeather(city);
        });
        dropdown.appendChild(link);
    });
    dropdown.classList.add("show");
}

document.getElementById("city").addEventListener("keyup", (e) => {
    const city = e.target.value.trim();
    if (city !== "") {
        getSearch(city);
    } else {
        dropdown.classList.remove("show");
    }
});

////////////////////////////////



