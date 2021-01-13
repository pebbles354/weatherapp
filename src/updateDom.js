import {format, utcToZonedTime} from 'date-fns-tz'

const cityName = document.getElementById('city-name');
const currentTemp = document.getElementById('current-temperature');
const dayTemp = document.getElementById('day-temp');
const nightTemp = document.getElementById('night-temp');
const weatherDescription = document.getElementById('weather-description-text');
const todaysDate = document.getElementById('date')
const body = document.getElementsByTagName('body');

const updateDom = function() {
    const removeVisibleTag = function() {
        const allIcons = document.getElementsByClassName('circle');
        for (let i=0; i < allIcons.length; i++) {
            allIcons[i].classList.remove('visible');
        }
    }

    const updateWeather = function(city, weatherObj) {
        
        // city name to uppercase
        const name = city.split(',')[0];
        const cityNameCapital = name.charAt(0).toUpperCase() + name.slice(1)



        // change all text
        cityName.innerText = cityNameCapital;
        currentTemp.innerText = weatherObj.currentTemp;
        dayTemp.innerText = weatherObj.dayTemp;
        nightTemp.innerText = weatherObj.nightTemp;
        weatherDescription.innerText = weatherObj.weatherDescriptionText;
        todaysDate.innerText = format(utcToZonedTime(new Date(), 'America/Los_Angeles'), 'EEEE,  MMM d');
        
        //change the icon/background
        const icon = document.getElementById(weatherObj.condition);
        removeVisibleTag();

        // update body color and display body
        document.body.classList= weatherObj.condition;
        document.body.classList.add('visible');

        // make icons visible
        icon.classList.add('visible');
    }

    const clearOutfits = function() {
        const outfitItems = document.getElementsByClassName('clothing');
        for (let i=0; i< outfitItems.length; i++) {          
              outfitItems[i].innerHTML  = ""
              outfitItems[i].classList.add('hidden');
        }
    }

    const updateOutfit = function(outfitArray) {
        clearOutfits();
        
        for (let i=0; i<outfitArray.length; i++) {
            const newImage = document.createElement("img");
            const e = document.getElementById(outfitArray[i].category)
            newImage.setAttribute('src', outfitArray[i].source);
            newImage.setAttribute('alt', outfitArray[i].subcategory);

            e.classList.remove('hidden');
            e.appendChild(newImage);
        }
    }

    return {
        updateWeather,
        updateOutfit
    }
}();

export default updateDom;