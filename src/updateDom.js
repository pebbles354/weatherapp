const cityName = document.getElementById('city-name');
const currentTemp = document.getElementById('current-temperature');
const dayTemp = document.getElementById('day-temp');
const nightTemp = document.getElementById('night-temp');
const weatherDescription = document.getElementById('weather-description-text');



const removeVisibleTag = function() {
    const allIcons = document.getElementsByClassName('circle');
    for (let i=0; i < allIcons.length; i++) {
        allIcons[i].classList.remove('visible');
        console.log(allIcons[i])
    }
}


const updateDom = function(city, weatherObj) {
    
    // change all text
    cityName.innerText = city;
    currentTemp.innerText = weatherObj.currentTemp;
    dayTemp.innerText = weatherObj.dayTemp;
    nightTemp.innerText = weatherObj.nightTemp;
    weatherDescription.innerText = weatherObj.weatherDescriptionText;
    
    //change the icon/background
    const icon = document.getElementById(weatherObj.condition);
    removeVisibleTag();

    document.body.classList = weatherObj.condition;
    icon.classList.add('visible');
}

export default updateDom;