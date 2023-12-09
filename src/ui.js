// Create search UI.
function createSearchUI() {
    const body = document.querySelector('body');
    const searchDiv = document.createElement('div');
    const searchBar = document.createElement('input');
    const searchBtn = document.createElement('button');

    searchDiv.className = 'search-div';
    searchBar.className = 'search-bar';
    searchBtn.className = 'search-btn';
    searchBtn.innerText = 'search';
    searchBar.value = 'taipei';

    searchDiv.appendChild(searchBar);
    searchDiv.appendChild(searchBtn);
    body.appendChild(searchDiv);
}

export default createSearchUI;