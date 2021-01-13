
const searchByCity = function(executeWeather) {
    const btn = document.getElementById('map');
    const runFunction = function() {
        const searchBar = document.getElementById('city-search-bar');
        const searchValue = searchBar.value;

        if (searchValue === "") {
            return 
        } else {
            executeWeather(searchValue);
            localStorage.setItem('city', searchValue);
        }
    }

    btn.addEventListener("click", function() {runFunction()} );
}

export default searchByCity