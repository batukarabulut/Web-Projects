const currentWeather = document.getElementById("current-weather");

export const displayWeatherInfo = (data) => {
    console.log(data);
    currentWeather.innerHTML = "";

    const weatherCard = document.createElement("div");
    weatherCard.classList.add("weather-card");

    const weatherInfo = document.createElement("div");
    weatherInfo.classList.add("weather-info");

    const cityH2 =document.createElement("h2");
    cityH2.classList.add("city");
    cityH2.textContent = data.name;


    weatherInfo.appendChild(cityH2);
    
    weatherCard.appendChild(weatherInfo);

}