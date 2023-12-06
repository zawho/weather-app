// Fetch data from weatherAPI.
async function getCurrentData() {
    const userSearch = 'taipei';
    const fetchURL = `https://api.weatherapi.com/v1/current.json?key=e02fa4d0109640d0bc2163918231711&q=${userSearch}`;
    const response = await fetch(fetchURL, {mode: 'cors'});
    const weatherData = await response.json();
    try {
        return weatherData;
    } catch(err) {
        return err;
    } 
}

// Create a new object with only necessary current weather data.
async function processCurrentData() {
    const weatherData = await getCurrentData();
    const currentWeatherObj = {
        tempC: weatherData.current.temp_c,
        tempF: weatherData.current.temp_f,
        feelsLikeC: weatherData.current.feelslike_c,
        feelsLikeF: weatherData.current.feelslike_f,
        humiditiy: weatherData.current.humidity,
        windKPH: weatherData.current.wind_kph,
        windDir: weatherData.current.wind_dir,
    };
    console.log(currentWeatherObj);
}

export default processCurrentData;