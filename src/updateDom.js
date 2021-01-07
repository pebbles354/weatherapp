const cityName = document.getElementById('city-name');
const currentTemp = document.getElementById('current-temperature');
const dayTemp = document.getElementById('day-temp');
const nightTemp = document.getElementById('night-temp');
const weatherDescription = document.getElementById('weather-description-text');

const updateDom = function() {
    const removeVisibleTag = function() {
        const allIcons = document.getElementsByClassName('circle');
        for (let i=0; i < allIcons.length; i++) {
            allIcons[i].classList.remove('visible');
        }
    }

    const updateWeather = function(city, weatherObj) {
        
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

    const clearOutfits = function() {
        const outfitItems = document.getElementsByClassName('clothing');
        for (let i=0; i< outfitItems.length; i++) {          
              outfitItems[i].innerHTML  = ""
        }
    }

    const updateOutfit = function(outfitArray) {
        clearOutfits();
        
        for (let i=0; i<outfitArray.length; i++) {
            const newImage = document.createElement("img");
            const e = document.getElementById(outfitArray[i].category)
            newImage.setAttribute('src', outfitArray[i].source);
            newImage.setAttribute('alt', outfitArray[i].subcategory);

            e.appendChild(newImage);
        }
    }

    return {
        updateWeather,
        updateOutfit
    }
}();

export default updateDom;