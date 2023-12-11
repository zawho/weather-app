import './style.css';
import { createSearchUI, createUnitBtns, createCurrentUI } from './ui';
import addBtnListeners from './controls';
import submitSearch from './data';

createSearchUI();
createUnitBtns();
createCurrentUI();
addBtnListeners();
submitSearch();