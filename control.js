const apiKey = "509f31d5e0a489061db61a4a676547d6";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherICON = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    if (data.weather[0].main == "Clouds") {
      weatherICON.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherICON.src = "images/clear.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherICON.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherICON.src = "images/mist.png";
    } else if (data.weather[0].main == "Snow") {
      weatherICON.src = "images/snow.png";
    } else if (data.weather[0].main == "Rain") {
      weatherICON.src = "images/rain.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
