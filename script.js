const apiKey = "830d32c36a382e3a8a18f66f2ec104d9";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const WeatherIcon=document.querySelector(".weather-icon")

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    

    if(data.weather[0].main=="Clouds"){
        WeatherIcon.src="images/clouds.png";
    }else if(data.weather[0].main=="Clear"){
        WeatherIcon.src="images/clear.png";
    }else if(data.weather[0].main=="Rain"){
        WeatherIcon.src="images/rain.png";
    }else if(data.weather[0].main=="Drizzle"){
        WeatherIcon.src="images/drizzle.png";
    }else if(data.weather[0].main == "Mist"){
        WeatherIcon.src="images/mist.png";
    }
}
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

searchBox.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        checkWeather(searchBox.value);
    }
});