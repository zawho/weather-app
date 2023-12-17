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
    cBtn.innerText = '°c';
    fBtn.innerText = '°f';

    body.appendChild(unitBtnDiv);
    unitBtnDiv.appendChild(cBtn);
    unitBtnDiv.appendChild(fBtn);
}

// Create condition icon UI.
function createIconDisplay() {
    const body = document.querySelector('body');
    const iconDiv = document.createElement('img');

    iconDiv.className = 'condition-icon';

    body.appendChild(iconDiv);
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
    loadErrDiv.innerText = 'loading...';

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
    const loadErrDiv = document.createElement('div');
    const feelsLikeCDiv = document.createElement('div');
    const feelsLikeFDiv = document.createElement('div');
    const humidDiv = document.createElement('div');
    const rainChanceDiv = document.createElement('div');
    const windDirDiv = document.createElement('div');
    const windKphDiv = document.createElement('div');
    const sunriseDiv = document.createElement('div');
    const sunsetDiv = document.createElement('div');

    currentDetailsDiv.className = 'current-details';
    loadErrDiv.className = 'load-err-txt';
    feelsLikeCDiv.className = 'visible';
    feelsLikeFDiv.className = 'invisible';
    humidDiv.className = 'humidity';
    rainChanceDiv.className = 'rain-chance';
    windDirDiv.className = 'wind-dir';
    windKphDiv.className = 'wind-kph';
    sunriseDiv.className = 'sunrise-time';
    sunsetDiv.className = 'sunset-time';
    feelsLikeCDiv.id = 'feels-like-c';
    feelsLikeFDiv.id = 'feels-like-f';
    loadErrDiv.innerText = 'loading...';

    body.appendChild(currentDetailsDiv);
    currentDetailsDiv.appendChild(loadErrDiv);
    currentDetailsDiv.appendChild(feelsLikeCDiv);
    currentDetailsDiv.appendChild(feelsLikeFDiv);
    currentDetailsDiv.appendChild(humidDiv);
    currentDetailsDiv.appendChild(windDirDiv);
    currentDetailsDiv.appendChild(sunriseDiv);
    currentDetailsDiv.appendChild(windKphDiv);
    currentDetailsDiv.appendChild(sunsetDiv);
    currentDetailsDiv.appendChild(rainChanceDiv);

    loadErrDiv.style.display = 'none';
    feelsLikeFDiv.style.display = 'none';
}

// Show loading display.
function displayLoading() {
    const currentWeatherDiv = document.querySelector('.current-main');
    const currentDetailsDiv = document.querySelector('.current-details');
    const currentArr = Array.from(currentWeatherDiv.childNodes);
    const detailsArr = Array.from(currentDetailsDiv.childNodes);

    for (let i = 0; i < currentArr.length; i++) {
        if (currentArr[i].className === 'load-err-txt') {
            currentArr[i].innerText = 'loading...';
            currentArr[i].style.display = 'flex';
        } else {
            currentArr[i].style.display = 'none';
        }
    }

    for (let i = 0; i < detailsArr.length; i++) {
        if (detailsArr[i].className === 'load-err-txt') {
            detailsArr[i].innerText = 'loading...';
            detailsArr[i].style.display = 'flex';
        } else {
            detailsArr[i].style.display = 'none';
        }
    }
}

// Remove loading display.
function removeLoadingDisplay() {
    const currentWeatherDiv = document.querySelector('.current-main');
    const currentDetailsDiv = document.querySelector('.current-details');
    const currentArr = Array.from(currentWeatherDiv.childNodes);
    const detailsArr = Array.from(currentDetailsDiv.childNodes);

    for (let i = 0; i < currentArr.length; i++) {
        if (currentArr[i].className === 'load-err-txt' || 
        currentArr[i].className === 'invisible') {
            currentArr[i].style.display = 'none';
        } else {
            currentArr[i].style.display = 'flex';
        }
    }

    for (let i = 0; i < detailsArr.length; i++) {
        if (detailsArr[i].className === 'load-err-txt' ||
        detailsArr[i].className === 'invisible') {
            detailsArr[i].style.display = 'none';
        } else {
            detailsArr[i].style.display = 'flex';
        }
    }
}

// Show error display.
function displayError() {
    const currentWeatherDiv = document.querySelector('.current-main');
    const currentDetailsDiv = document.querySelector('.current-details');
    const currentArr = Array.from(currentWeatherDiv.childNodes);
    const detailsArr = Array.from(currentDetailsDiv.childNodes);

    for (let i = 0; i < currentArr.length; i++) {
        if (currentArr[i].className === 'load-err-txt') {
            currentArr[i].innerText = 'oops! invalid location...';
            currentArr[i].style.display = 'flex';
        } else {
            currentArr[i].style.display = 'none';
        }
    }

    for (let i = 0; i < detailsArr.length; i++) {
        if (detailsArr[i].className === 'load-err-txt') {
            detailsArr[i].innerText = 'oops!';
            detailsArr[i].style.display = 'flex';
        } else {
            detailsArr[i].style.display = 'none';
        }
    }
}

export { createSearchUI, createUnitBtns, createIconDisplay, createCurrentUI, createDetailDisplay, 
    displayLoading, removeLoadingDisplay, displayError };