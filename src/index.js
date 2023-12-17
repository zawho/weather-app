import './style.css';
import { createSearchUI, createUnitBtns, createCurrentUI, createIconDisplay,
    createDetailDisplay } from './ui';
import addBtnListeners from './controls';
import submitSearch from './data';

createSearchUI();
createUnitBtns();
createIconDisplay();
createCurrentUI();
createDetailDisplay();
addBtnListeners();
submitSearch();