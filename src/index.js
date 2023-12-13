import './style.css';
import { createSearchUI, createUnitBtns, createCurrentUI, 
    createDetailDisplay } from './ui';
import addBtnListeners from './controls';
import submitSearch from './data';

createSearchUI();
createUnitBtns();
createCurrentUI();
createDetailDisplay();
addBtnListeners();
submitSearch();