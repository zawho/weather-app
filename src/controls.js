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
}

function addBtnListeners() {
    const cBtn = document.querySelector('#c-btn');
    const fBtn = document.querySelector('#f-btn');

    cBtn.addEventListener('click', changeBtnClass);
    fBtn.addEventListener('click', changeBtnClass);
}

export default addBtnListeners;