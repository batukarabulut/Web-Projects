const currentWeather = document.getElementById("current-weather");

const kelvinToCelsius = (kelvin) => Math.round(kelvin - 273.15);

export const displayWeatherInfo = (data) => {
    console.log(data);

    const template = document.getElementById("weather-template");
    const clone = template.content.cloneNode(true);

    clone.querySelector(".city").textContent = data.name;
    clone.querySelector(".temp").textContent = `${kelvinToCelsius(data.main.temp)}°C`;
    clone.querySelector(".temp-max").textContent = `Max: ${kelvinToCelsius(data.main.temp_max)}°C`;
    clone.querySelector(".temp-min").textContent = `Min: ${kelvinToCelsius(data.main.temp_min)}°C`;
    clone.querySelector(".description").textContent = data.weather[0].description;
    currentWeather.innerHTML = "";
    currentWeather.appendChild(clone);
}