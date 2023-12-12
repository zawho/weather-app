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
    const locationDiv = document.createElement('div');
    const currentCDiv = document.createElement('div');
    const currentFDiv = document.createElement('div');

    currentWeatherDiv.className = 'current-main';
    locationDiv.className = 'location-name';
    currentCDiv.className = 'current-c';
    currentFDiv.className = 'current-f';
    currentFDiv.style.display = 'none';

    body.appendChild(currentWeatherDiv);
    currentWeatherDiv.appendChild(locationDiv);
    currentWeatherDiv.appendChild(currentCDiv);
    currentWeatherDiv.appendChild(currentFDiv);
}

export { createSearchUI, createUnitBtns, createCurrentUI };