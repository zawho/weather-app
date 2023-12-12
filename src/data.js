// Display all relevant current weather data.
function displayCurrentData(currentWeatherObj) {
    const locationDiv = document.querySelector('.location-name');
    const currentCDiv = document.querySelector('#current-c');
    const currentFDiv = document.querySelector('#current-f');
    const highC = document.querySelector('#high-c');
    const lowC = document.querySelector('#low-c');
    const highF = document.querySelector('#high-f');
    const lowF = document.querySelector('#low-f');
    locationDiv.innerText = currentWeatherObj.locationName;
    currentCDiv.innerText = `${currentWeatherObj.tempC} °C`;
    currentFDiv.innerText = `${currentWeatherObj.tempF} °F`;
    highC.innerText = `High: ${currentWeatherObj.maxTempC} °C`;
    lowC.innerText = `Low: ${currentWeatherObj.minTempC} °C`;
    highF.innerText = `High: ${currentWeatherObj.maxTempF} °F`;
    lowF.innerText = `Low: ${currentWeatherObj.minTempF} °F`;
}

// Create a new object with only necessary current weather data.
function processCurrentData(weatherData) {
    const currentWeatherObj = {
        locationName: weatherData.location.name,
        tempC: weatherData.current.temp_c,
        tempF: weatherData.current.temp_f,
        feelsLikeC: weatherData.current.feelslike_c,
        feelsLikeF: weatherData.current.feelslike_f,
        humiditiy: weatherData.current.humidity,
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
    displayCurrentData(currentWeatherObj);
    // console.log(currentWeatherObj);
}

// Display current weather condition.
function displayCurrentCondition(conditionObj) {
    const conditionDiv = document.querySelector('.current-condition');
    conditionDiv.innerText = conditionObj.conditionText;
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

// Create hourly forecast objects.
function processHourlyData(weatherData) {
    const localTime = weatherData.location.localtime;
    const currentDate = new Date(localTime);
    const currentHour = currentDate.getHours();
    const hourlyArr = weatherData.forecast.forecastday[0].hour;
    const newhourlyArr = [];
    for (let i = currentHour + 1; i < hourlyArr.length; i++) {
        const hourObj = {};
        hourObj.time = hourlyArr[i].time;
        hourObj.tempC = hourlyArr[i].temp_c;
        hourObj.tempF = hourlyArr[i].temp_f;
        newhourlyArr.push(hourObj);
    }
    console.log(newhourlyArr);
}

// Create tomorrow forecast object.
function processForecastData(weatherData) {
    const tomorrowForecaseObj = {
        maxTempC: weatherData.forecast.forecastday[1].day.maxtemp_c,
        minTempC: weatherData.forecast.forecastday[1].day.mintemp_c,
        maxTempF: weatherData.forecast.forecastday[1].day.maxtemp_f,
        minTempF: weatherData.forecast.forecastday[1].day.maxtemp_f,
        rainChance: weatherData.forecast.forecastday[1].day.daily_chance_of_rain,
        conditionIcon: weatherData.forecast.forecastday[1].day.condition.icon,
    }
    console.log(tomorrowForecaseObj);
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
    const currentWeatherDiv = document.querySelector('.current-main');
    const currentArr = Array.from(currentWeatherDiv.childNodes);
    const userSearch = searchBar.value;
    const fetchURL = `https://api.weatherapi.com/v1/forecast.json?key=e02fa4d0109640d0bc2163918231711&q=${userSearch}&days=3`;
    for (let i = 0; i < currentArr.length; i++) {
        if (currentArr[i].className === 'load-err-txt') {
            currentArr[i].innerText = 'loading...';
            currentArr[i].style.display = 'flex';
        } else {
            currentArr[i].style.display = 'none';
        }
    }
    const response = await fetch(fetchURL, {mode: 'cors'});
    const forecastData = await response.json();
    try {
        // console.clear();
        for (let i = 0; i < currentArr.length; i++) {
            if (currentArr[i].className === 'load-err-txt' || 
            currentArr[i].className === 'invisible') {
                currentArr[i].style.display = 'none';
            } else {
                currentArr[i].style.display = 'flex';
            }
        }
        processAllData(forecastData);
    } catch(err) {
        for (let i = 0; i < currentArr.length; i++) {
            if (currentArr[i].className === 'load-err-txt') {
                currentArr[i].innerText = 'oops! invalid location...';
                currentArr[i].style.display = 'flex';
            } else {
                currentArr[i].style.display = 'none';
            }
        }
    }
}

// Set location search event listener.
function submitSearch() {
    const searchBtn = document.querySelector('.search-btn');
    getWeatherData();
    searchBtn.addEventListener('click', getWeatherData);
}

export default submitSearch;