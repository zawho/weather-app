// Change current temp unit display.
function changeCurrentUnits(fBtn) {
    const currentC = document.querySelector('#current-c');
    const currentF = document.querySelector('#current-f');

    if (fBtn.className === 'selected') {
        currentF.className = 'visible';
        currentF.style.display = 'flex';

        currentC.className = 'invisible';
        currentC.style.display = 'none';
    } else {
        currentC.className = 'visible';
        currentC.style.display = 'flex';

        currentF.className = 'invisible';
        currentF.style.display = 'none';
    }
}

// Change high and low temp unit display.
function changeHighLowUnits(fBtn) {
    const highAndLowC = document.querySelector('#high-low-c');
    const highAndLowF = document.querySelector('#high-low-f');

    if (fBtn.className === 'selected') {
        highAndLowF.className = 'visible';
        highAndLowF.style.display = 'flex';
      
        highAndLowC.className = 'invisible';
        highAndLowC.style.display = 'none';
    } else {
        highAndLowC.className = 'visible';
        highAndLowC.style.display = 'flex';

        highAndLowF.className = 'invisible';
        highAndLowF.style.display = 'none';
    }
}

// Change feels like temp unit display.
function changeFeelsLikeUnits(fBtn) {
    const feelsLikeC = document.querySelector('#feels-like-c');
    const feelsLikeF = document.querySelector('#feels-like-f');
    if (fBtn.className === 'selected') {
        feelsLikeF.className = 'visible';
        feelsLikeF.style.display = 'grid';

        feelsLikeC.className = 'invisible';
        feelsLikeC.style.display = 'none';
    } else {
        feelsLikeC.className = 'visible';
        feelsLikeC.style.display = 'grid';

        feelsLikeF.className = 'invisible';
        feelsLikeF.style.display = 'none';
    }
}

// Run all temp unit funcs.
function changeAllUnits() {
    const fBtn = document.querySelector('#f-btn');
    changeCurrentUnits(fBtn);
    changeHighLowUnits(fBtn);
    changeFeelsLikeUnits(fBtn);
}

// Switch button classes on press.
function changeBtnClass() {
    const unitBtns = document.querySelector('.unit-btns');
    const unitBtnArr = Array.from(unitBtns.childNodes);
    if (this.className === 'unselected') {
        for (let i = 0; i < unitBtnArr.length; i++) {
            if (unitBtnArr[i].className === 'selected') {
                unitBtnArr[i].className = 'unselected';
            }
        }
        this.className = 'selected';
    }
    changeAllUnits();
}

function addBtnListeners() {
    const cBtn = document.querySelector('#c-btn');
    const fBtn = document.querySelector('#f-btn');

    cBtn.addEventListener('click', changeBtnClass);
    fBtn.addEventListener('click', changeBtnClass);
}

export default addBtnListeners;