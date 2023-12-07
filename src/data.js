// Fetch weather data.
async function getWeatherData() {
    const userSearch = 'taipei';
    const fetchURL = `https://api.weatherapi.com/v1/forecast.json?key=e02fa4d0109640d0bc2163918231711&q=${userSearch}&days=3`;
    const response = await fetch(fetchURL, {mode: 'cors'});
    const forecastData = await response.json();
    try {
        return forecastData;
    } catch(err) {
        return err;
    } 
}

// Create a new object with only necessary current weather data.
async function processCurrentData() {
    const weatherData = await getWeatherData();
    const currentWeatherObj = {
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
    };
    console.log(currentWeatherObj);
}

// Create a new object for current weather condition.
async function processConditionData() {
    const weatherData = await getWeatherData();
    const conditionObj = {
        conditionCode: weatherData.current.condition.code,
        conditionText: weatherData.current.condition.text,
        conditionIcon: weatherData.current.condition.icon,
    }
    console.log(conditionObj)
}

// Create hourly forecast objects.
async function processHourlyData() {
    const weatherData = await getWeatherData();
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
async function processForecastData() {
    const weatherData = await getWeatherData();
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

export { processCurrentData, processConditionData, processHourlyData, processForecastData };