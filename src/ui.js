// Create search UI.
function createSearchUI() {
    const body = document.querySelector('body');
    const searchDiv = document.createElement('div');
    const searchBar = document.createElement('input');
    const searchBtn = document.createElement('button');

    searchBtn.innerText = 'search';

    searchDiv.appendChild(searchBar);
    searchDiv.appendChild(searchBtn);
    body.appendChild(searchDiv);
}

export default createSearchUI;