// Fetch data from weatherAPI.
async function getData() {
    const userSearch = 'taipei';
    const fetchURL = `https://api.weatherapi.com/v1/current.json?key=e02fa4d0109640d0bc2163918231711&q=${userSearch}`;
    const response = await fetch(fetchURL, {mode: 'cors'});
    const weatherData = await response.json();
    try {
        console.log(weatherData);
    } catch(err) {
        console.log(err);
    }
}

export default getData;