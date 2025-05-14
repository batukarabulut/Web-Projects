const currentWeather = document.getElementById("current-weather");

const kelvinToCelsius = (kelvin) => Math.round(kelvin - 273.15);

export const displayWeatherInfo = (data) => {
    console.log(data);

    const template = document.getElementById("weather-template");
    const clone = template.content.cloneNode(true);

    clone.querySelector(".city").textContent = data.name;
    clone.querySelector(".temp").textContent = `${kelvinToCelsius(data.main.temp)}°C`;
    clone.querySelector(".max-value").textContent = `${kelvinToCelsius(data.main.temp_max)}°C`;
    clone.querySelector(".min-value").textContent = `${kelvinToCelsius(data.main.temp_min)}°C`;
   
    const tempDesc = data.weather[0].description;
    const descElement = clone.querySelector(".description");
    descElement.textContent = tempDesc.charAt(0).toUpperCase() + tempDesc.slice(1);
    
    clone.querySelector(".feels-like").textContent = `${kelvinToCelsius(data.main.feels_like)}°C`;
    clone.querySelector(".humidity").textContent = `${data.main.humidity}%`;
    
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    clone.querySelector(".weather-icon img").src = iconUrl;
    clone.querySelector(".weather-icon img").alt = tempDesc; 
    
    currentWeather.innerHTML = "";
    currentWeather.appendChild(clone);
}