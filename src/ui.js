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

// Create basic current weather UI.
function createCurrentUI() {
    const body = document.querySelector('body');
    const currentWeatherDiv = document.createElement('div');
    const loadErrDiv = document.createElement('div');
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
    loadErrDiv.className = 'load-err-txt';
    locationDiv.className = 'location-name';
    currentCDiv.className = 'visible';
    currentFDiv.className = 'invisible';
    conditionDiv.className = 'current-condition';
    highAndLowC.className = 'visible';
    highAndLowF.className = 'invisible';
    currentCDiv.id = 'current-c';
    currentFDiv.id = 'current-f';
    highAndLowC.id = 'high-low-c';
    highAndLowF.id = 'high-low-f';
    highC.id = 'high-c';
    lowC.id = 'low-c';
    highF.id = 'high-f';
    lowF.id = 'low-f';
    loadErrDiv.innerText = 'loading...'

    body.appendChild(currentWeatherDiv);
    currentWeatherDiv.appendChild(loadErrDiv);
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

    loadErrDiv.style.display = 'none';
    currentFDiv.style.display = 'none';
    highAndLowF.style.display = 'none';
}

// Create detailed current weather UI.
function createDetailDisplay() {
    const body = document.querySelector('body');
    const currentDetailsDiv = document.createElement('div');
    const feelsLikeCDiv = document.createElement('div');
    const feelsLikeFDiv = document.createElement('div');

    currentDetailsDiv.className = 'current-details';
    feelsLikeCDiv.className = 'feels-like-c';
    feelsLikeFDiv.className = 'feels-like-f';

    body.appendChild(currentDetailsDiv);
    currentDetailsDiv.appendChild(feelsLikeCDiv);
    currentDetailsDiv.appendChild(feelsLikeFDiv);
}

export { createSearchUI, createUnitBtns, createCurrentUI, createDetailDisplay };