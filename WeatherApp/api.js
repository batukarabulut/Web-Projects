import { displayWeatherInfo } from './ui.js';

const searchBtn = document.getElementById("search-button");
const inputCity = document.getElementById("search-input");
const apiKey = ""

async function citySearch(){
    const city = inputCity.value.trim();

    if(city){
        try{
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData); 
        }
        catch(error){
            console.error(error);
        }
    }
    else{
        displayError("Please enter a city!");
    }
}

inputCity.addEventListener("keydown", (event) => {
    if(event.key === "Enter"){
        citySearch();
    }
});

searchBtn.addEventListener("click", citySearch);


async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    try{
        const response = await fetch(apiUrl);
        if(!response.ok){
            throw new Error(`City not found (${response.status})`);
        }
        return await response.json();
    }
    catch(error){
        console.error("Cannot fetch data", error);
        throw error;
    }
}

