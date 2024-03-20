const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'dfdd1b3568msh50dd4a62917764fp1dd2c5jsn8c4b2b3cbb29',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getweather = (city) =>{
cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then((response) => {
         console.log(response)
         cloud_pct.innerHTML = response.cloud_pct
         wind_speed.innerHTML = response.wind_speed
        temp.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity 
        min_temp.innerHTML = response.min_temp 
        max_temp.innerHTML = response.max_temp
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
      
        

    })
	.catch(err => console.error(err));
}
   submit.addEventListener("click", (e)=>{
      e.preventDefault()

    getweather (city.value)

   })
    getweather("Jaipur")