import { displayLoading, removeLoadingDisplay, displayError } from "./ui";

// Display basic current weather data.
function displayBasicCurrentData(currentWeatherObj) {
    const locationDiv = document.querySelector('.location-name');
    const currentCDiv = document.querySelector('#current-c');
    const currentFDiv = document.querySelector('#current-f');
    const highC = document.querySelector('#high-c');
    const lowC = document.querySelector('#low-c');
    const highF = document.querySelector('#high-f');
    const lowF = document.querySelector('#low-f');

    locationDiv.innerText = currentWeatherObj.locationName.toLowerCase();
    currentCDiv.innerText = `${currentWeatherObj.tempC} °c`;
    currentFDiv.innerText = `${currentWeatherObj.tempF} °f`;
    highC.innerText = `high: ${currentWeatherObj.maxTempC} °c`;
    lowC.innerText = `low: ${currentWeatherObj.minTempC} °c`;
    highF.innerText = `high: ${currentWeatherObj.maxTempF} °f`;
    lowF.innerText = `low: ${currentWeatherObj.minTempF} °f`;
}

// Display detailed current weather data
function displayCurrentDetails(currentWeatherObj) {
    const feelsLikeCDiv = document.querySelector('#feels-like-c');
    const feelsLikeFDiv = document.querySelector('#feels-like-f');
    const humidDiv = document.querySelector('.humidity');
    const rainChanceDiv = document.querySelector('.rain-chance');
    const windDirDiv = document.querySelector('.wind-dir');
    const windKphDiv = document.querySelector('.wind-kph');
    const sunriseDiv = document.querySelector('.sunrise-time');
    const sunsetDiv = document.querySelector('.sunset-time');

    feelsLikeCDiv.innerText = `feels like: ${currentWeatherObj.feelsLikeC} °c`;
    feelsLikeFDiv.innerText = `feels like: ${currentWeatherObj.feelsLikeF} °f`;
    humidDiv.innerText = `humidity: ${currentWeatherObj.humidity}%`;
    rainChanceDiv.innerText = `chance of rain: ${currentWeatherObj.rainChance}%`;
    windDirDiv.innerText = `wind direction: ${currentWeatherObj.windDir.toLowerCase()}`;
    windKphDiv.innerText = `wind speed: ${currentWeatherObj.windKPH} kph`;
    sunriseDiv.innerText = `sunrise: ${currentWeatherObj.sunrise.toLowerCase()}`;
    sunsetDiv.innerText = `sunset: ${currentWeatherObj.sunset.toLowerCase()}`;
}

// Display current weather condition.
function displayCurrentCondition(conditionObj) {
    const conditionDiv = document.querySelector('.current-condition');
    conditionDiv.innerText = conditionObj.conditionText.toLowerCase();
}

// Create a new object with only necessary current weather data.
function processCurrentData(weatherData) {
    const currentWeatherObj = {
        locationName: weatherData.location.name,
        tempC: weatherData.current.temp_c,
        tempF: weatherData.current.temp_f,
        feelsLikeC: weatherData.current.feelslike_c,
        feelsLikeF: weatherData.current.feelslike_f,
        humidity: weatherData.current.humidity,
        windKPH: weatherData.current.wind_kph,
        windDir: weatherData.current.wind_dir,
        rainChance: weatherData.forecast.forecastday[0].day.daily_chance_of_rain,
        sunrise: weatherData.forecast.forecastday[0].astro.sunrise,
        sunset: weatherData.forecast.forecastday[0].astro.sunset,
        maxTempC: weatherData.forecast.forecastday[0].day.maxtemp_c,
        minTempC: weatherData.forecast.forecastday[0].day.mintemp_c,
        maxTempF: weatherData.forecast.forecastday[0].day.maxtemp_f,
        minTempF: weatherData.forecast.forecastday[0].day.mintemp_f,
    };
    displayBasicCurrentData(currentWeatherObj);
    displayCurrentDetails(currentWeatherObj);
    // console.log(currentWeatherObj);
}

// Create a new object for current weather condition.
function processConditionData(weatherData) {
    const conditionObj = {
        conditionCode: weatherData.current.condition.code,
        conditionText: weatherData.current.condition.text,
        conditionIcon: weatherData.current.condition.icon,
    }
    displayCurrentCondition(conditionObj);
    // console.log(conditionObj);
}

// Create hourly forecast objects. Not currently displayed.
function processHourlyData(weatherData) { // eslint-disable-line no-unused-vars
    const localTime = weatherData.location.localtime;
    const currentDate = new Date(localTime);
    const currentHour = currentDate.getHours();
    const todayHourlyArr = weatherData.forecast.forecastday[0].hour;
    const tmrwHourlyArr = weatherData.forecast.forecastday[1].hour;
    const newhourlyArr = [];
    let todayHourVar;
    for (let i = currentHour + 1; i < todayHourlyArr.length; i++) {
        const hourObj = {};
        hourObj.time = todayHourlyArr[i].time;
        hourObj.tempC = todayHourlyArr[i].temp_c;
        hourObj.tempF = todayHourlyArr[i].temp_f;
        newhourlyArr.push(hourObj);
        todayHourVar = newhourlyArr.length;
    }
    for (let i = 0; i < tmrwHourlyArr.length - todayHourVar; i++) {
        const hourObj = {};
        hourObj.time = tmrwHourlyArr[i].time;
        hourObj.tempC = tmrwHourlyArr[i].temp_c;
        hourObj.tempF = tmrwHourlyArr[i].temp_f;
        newhourlyArr.push(hourObj);
    }
    console.log(newhourlyArr); // eslint-disable-line no-console
}

// Create tomorrow forecast object. Not currently displayed.
function processForecastData(weatherData) { // eslint-disable-line no-unused-vars
    const tomorrowForecaseObj = {
        maxTempC: weatherData.forecast.forecastday[1].day.maxtemp_c,
        minTempC: weatherData.forecast.forecastday[1].day.mintemp_c,
        maxTempF: weatherData.forecast.forecastday[1].day.maxtemp_f,
        minTempF: weatherData.forecast.forecastday[1].day.maxtemp_f,
        rainChance: weatherData.forecast.forecastday[1].day.daily_chance_of_rain,
        conditionIcon: weatherData.forecast.forecastday[1].day.condition.icon,
    }
    console.log(tomorrowForecaseObj); // eslint-disable-line no-console
}

// Run all data processing functions.
function processAllData(weatherData) {
    processCurrentData(weatherData);
    processConditionData(weatherData);
    // processHourlyData(weatherData);
    // processForecastData(weatherData);
}

// Fetch weather data.
async function getWeatherData() {
    const searchBar = document.querySelector('.search-bar');
    const userSearch = searchBar.value;
    const fetchURL = `https://api.weatherapi.com/v1/forecast.json?key=e02fa4d0109640d0bc2163918231711&q=${userSearch}&days=3`;
    displayLoading();
    const response = await fetch(fetchURL, {mode: 'cors'});
    const forecastData = await response.json();
    try {
        removeLoadingDisplay();
        processAllData(forecastData);
    } catch(err) {
        console.log(err); // eslint-disable-line no-console
        displayError();
    }
}

// Set location search event listener.
function submitSearch() {
    const searchBtn = document.querySelector('.search-btn');
    getWeatherData();
    searchBtn.addEventListener('click', getWeatherData);
}

export default submitSearch;