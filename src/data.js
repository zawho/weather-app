// Fetch data from weatherAPI.
async function getCurrentData() {
    const userSearch = 'taipei';
    const fetchURL = `https://api.weatherapi.com/v1/current.json?key=e02fa4d0109640d0bc2163918231711&q=${userSearch}`;
    const response = await fetch(fetchURL, {mode: 'cors'});
    const currentData = await response.json();
    try {
        return currentData;
    } catch(err) {
        return err;
    } 
}

// Create a new object with only necessary current weather data.
async function processCurrentData() {
    const currentData = await getCurrentData();
    const currentWeatherObj = {
        tempC: currentData.current.temp_c,
        tempF: currentData.current.temp_f,
        feelsLikeC: currentData.current.feelslike_c,
        feelsLikeF: currentData.current.feelslike_f,
        humiditiy: currentData.current.humidity,
        windKPH: currentData.current.wind_kph,
        windDir: currentData.current.wind_dir,
    };
    console.log(currentWeatherObj);
}

// Create a new object for current weather condition.
async function processConditionData() {
    const currentData = await getCurrentData();
    const conditionObj = {
        conditionCode: currentData.current.condition.code,
        conditionText: currentData.current.condition.text,
        conditionIcon: currentData.current.condition.icon,
    }
    console.log(conditionObj)
}

export { processCurrentData, processConditionData };