// Switch displayed temp unit.
function changeTempDisplay() {
    const fBtn = document.querySelector('#f-btn');
    const currentC = document.querySelector('.current-c');
    const currentF = document.querySelector('.current-f');
    const highAndLowC = document.querySelector('.high-low-c');
    const highAndLowF = document.querySelector('.high-low-f');

    if (fBtn.className === 'selected') {
        currentF.style.display = 'flex';
        highAndLowF.style.display = 'flex';
        currentC.style.display = 'none';
        highAndLowC.style.display = 'none';
    } else {
        currentC.style.display = 'flex';
        highAndLowC.style.display = 'flex';
        currentF.style.display = 'none';
        highAndLowF.style.display = 'none';
    }
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
    changeTempDisplay();
}

function addBtnListeners() {
    const cBtn = document.querySelector('#c-btn');
    const fBtn = document.querySelector('#f-btn');

    cBtn.addEventListener('click', changeBtnClass);
    fBtn.addEventListener('click', changeBtnClass);
}

export default addBtnListeners;