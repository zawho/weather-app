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

// Create unit switching UI.
function createUnitBtns() {
    const body = document.querySelector('body');
    const unitBtnDiv = document.createElement('div');
    const cBtn = document.createElement('button');
    const fBtn = document.createElement('button');

    unitBtnDiv.className = 'unit-btns';
    cBtn.className = 'selected';
    fBtn.className = 'unselected';
    cBtn.id = 'c-btn';
    fBtn.id = 'f-btn';
    cBtn.innerText = '°C';
    fBtn.innerText = '°F';

    body.appendChild(unitBtnDiv);
    unitBtnDiv.appendChild(cBtn);
    unitBtnDiv.appendChild(fBtn);
}

// Create current weather UI.
function createCurrentUI() {
    const body = document.querySelector('body');
    const currentWeatherDiv = document.createElement('div');
    const loadingDiv = document.createElement('div');
    const locationDiv = document.createElement('div');
    const currentCDiv = document.createElement('div');
    const currentFDiv = document.createElement('div');
    const conditionDiv = document.createElement('div');
    const highAndLowC = document.createElement('div');
    const highAndLowF = document.createElement('div');
    const highC = document.createElement('div');
    const lowC = document.createElement('div');
    const highF = document.createElement('div');
    const lowF = document.createElement('div');

    currentWeatherDiv.className = 'current-main';
    loadingDiv.className = 'loading-text';
    locationDiv.className = 'location-name';
    currentCDiv.className = 'current-c';
    currentFDiv.className = 'current-f';
    conditionDiv.className = 'current-condition';
    highAndLowC.className = 'high-low-c';
    highAndLowF.className = 'high-low-f';
    highC.className = 'high-c';
    lowC.className = 'low-c';
    highF.className = 'high-f';
    lowF.className = 'low-f';
    loadingDiv.innerText = 'loading...'

    body.appendChild(currentWeatherDiv);
    currentWeatherDiv.appendChild(loadingDiv);
    currentWeatherDiv.appendChild(locationDiv);
    currentWeatherDiv.appendChild(currentCDiv);
    currentWeatherDiv.appendChild(currentFDiv);
    currentWeatherDiv.appendChild(conditionDiv);
    currentWeatherDiv.appendChild(highAndLowC);
    currentWeatherDiv.appendChild(highAndLowF);
    highAndLowC.appendChild(highC);
    highAndLowC.appendChild(lowC);
    highAndLowF.appendChild(highF);
    highAndLowF.appendChild(lowF);

    loadingDiv.style.display = 'none';
    currentFDiv.style.display = 'none';
    highAndLowF.style.display = 'none';
}

export { createSearchUI, createUnitBtns, createCurrentUI };