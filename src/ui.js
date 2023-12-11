// Create search UI.
function createSearchUI() {
    const body = document.querySelector('body');
    const searchDiv = document.createElement('div');
    const searchBar = document.createElement('input');
    const searchBtn = document.createElement('button');

    searchDiv.className = 'search-div';
    searchBar.className = 'search-bar';
    searchBtn.className = 'search-btn';
    searchBar.value = 'new york';
    searchBtn.innerText = 'search';

    searchDiv.appendChild(searchBar);
    searchDiv.appendChild(searchBtn);
    body.appendChild(searchDiv);
}

// Create current weather UI.

function createCurrentUI() {
    const body = document.querySelector('body');
    const currentWeatherDiv = document.createElement('div');
    const locationTempDiv = document.createElement('div');

    currentWeatherDiv.className = 'current-main';
    locationTempDiv.className = 'location-temp';

    body.appendChild(currentWeatherDiv);
    currentWeatherDiv.appendChild(locationTempDiv);
}

export { createSearchUI, createCurrentUI };